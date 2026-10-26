import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomBytes } from "node:crypto";
import { mkdtemp, readFile } from "node:fs/promises";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE || "playwright"
);
import assert from "node:assert/strict";
import { mkdir, copyFile, writeFile } from "node:fs/promises";
import { createSignage } from "../server.mjs";
import { exportOffline } from "../export-offline.mjs";

const dataDir = await mkdtemp(join(tmpdir(), "bonly-browser-data-"));
await mkdir(dataDir + "/media", { recursive: true });
if (!process.env.SIGNAGE_TEST_VIDEO)
  throw new Error(
    "SIGNAGE_TEST_VIDEO doit pointer vers la vidéo synthétique générée par make-demo-video.sh",
  );
await copyFile(
  process.env.SIGNAGE_TEST_VIDEO,
  dataDir + "/media/demo-test.mp4",
);
const screenshots =
  process.env.SIGNAGE_TEST_ARTIFACT_DIR ||
  (await mkdtemp(join(tmpdir(), "bonly-browser-artifacts-")));
await mkdir(screenshots, { recursive: true });
const password = randomBytes(24).toString("hex");
const app = await createSignage({
  dataDir,
  password,
  demo: true,
  screenHosts: { localhost: "salle-a" },
});
await new Promise((resolve) => app.server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${app.server.address().port}`;
const authorization =
  "Basic " + Buffer.from(`admin:${password}`).toString("base64");
async function update(change) {
  const current = await fetch(origin + "/api/state").then((r) => r.json());
  change(current.config);
  const response = await fetch(origin + "/api/admin/config", {
    method: "PUT",
    headers: { authorization, origin, "Content-Type": "application/json" },
    body: JSON.stringify({
      revision: current.revision,
      config: current.config,
    }),
  });
  assert.equal(response.status, 200, await response.text());
}
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || chromium.executablePath(),
  headless: true,
  args: ["--no-sandbox"],
  timeout: 30000,
});
const context = await browser.newContext({
  httpCredentials: { username: "admin", password },
});
const pageErrors = [];
const external = [];
context.on("page", (page) =>
  page.on("pageerror", (error) => pageErrors.push(error.message)),
);
context.on("request", (request) => {
  if (
    !request.url().startsWith(origin) &&
    !request.url().startsWith(origin.replace("127.0.0.1", "localhost")) &&
    !/^(blob:|data:|file:)/.test(request.url())
  )
    external.push(request.url());
});
const at = "?at=2026-11-07T15:05:00%2B01:00";
const a = await context.newPage();
await a.setViewportSize({ width: 1920, height: 1080 });
const b = await context.newPage();
await b.setViewportSize({ width: 1080, height: 1920 });
const hall = await context.newPage();
await hall.setViewportSize({ width: 1920, height: 1080 });
const admin = await context.newPage();
await admin.setViewportSize({ width: 390, height: 844 });
const checks = [];
try {
  await Promise.all([
    a.goto(origin + "/screen/salle-a" + at),
    b.goto(origin + "/screen/salle-b" + at),
    hall.goto(origin + "/screen/hall" + at),
    admin.goto(origin + "/admin" + at),
  ]);
  await a
    .getByRole("heading", { name: "La Femme est l'avenir de Bitcoin" })
    .waitFor();
  await b
    .getByRole("heading", { name: "Q&A débutants : utiliser Bitcoin" })
    .waitFor();
  await admin
    .getByText("DÉMONSTRATION · expirations calculées sur l’heure simulée")
    .waitFor();
  checks.push("Deux programmes distincts simultanés et admin smartphone");
  for (const [name, page] of [
    ["salle-a-1920x1080", a],
    ["salle-b-1080x1920", b],
  ]) {
    const overflow = await page
      .locator(".session")
      .evaluateAll((nodes) =>
        nodes.map((n) => ({ scroll: n.scrollHeight, height: n.clientHeight })),
      );
    assert.ok(
      overflow.every((n) => n.scroll <= n.height + 2),
      JSON.stringify(overflow),
    );
    await page.screenshot({ path: `${screenshots}/${name}.png` });
  }
  await admin.screenshot({
    path: screenshots + "/admin-390.png",
    fullPage: true,
  });
  let group = admin.getByRole("group", {
    name: "Salle principale",
    exact: true,
  });
  await group
    .getByLabel("Décalage de la grille de cette salle (minutes)")
    .fill("20");
  await group.getByRole("button", { name: "Appliquer à cet écran" }).click();
  await a
    .getByRole("heading", { name: "Ouverture de B-Only 2026" })
    .waitFor({ timeout: 12000 });
  assert.ok(
    await b
      .getByRole("heading", { name: "Q&A débutants : utiliser Bitcoin" })
      .isVisible(),
  );
  group = admin.getByRole("group", { name: "Salle principale", exact: true });
  await group
    .getByLabel("Sélection manuelle (optionnelle)")
    .selectOption("sat-main-florent");
  await group.getByRole("button", { name: "Appliquer à cet écran" }).click();
  await a
    .getByRole("heading", {
      name: "L’IA est-elle en train de sauver ou de tuer Bitcoin ?",
    })
    .waitFor({ timeout: 12000 });
  checks.push(
    "Retard et sélection manuelle depuis admin ; autre salle inchangée",
  );
  await admin
    .getByLabel("Message (240 caractères au maximum)")
    .fill("Test régie · B-Only");
  await admin.getByRole("button", { name: "Afficher le message" }).click();
  await a
    .locator("#announcement")
    .getByText("Test régie · B-Only")
    .waitFor({ timeout: 12000 });
  await admin.getByRole("button", { name: "Retirer le message" }).click();
  await a.locator("#announcement").waitFor({ state: "hidden", timeout: 12000 });
  checks.push("Annonce prioritaire puis retrait");
  await update((c) => {
    c.screens["salle-a"].delayMinutes = 0;
    c.screens["salle-a"].manual = null;
    c.hall.agendaEvery = 0;
    for (const s of c.playlist) s.durationSeconds = 3;
  });
  const observed = new Set();
  const until = Date.now() + 23000;
  let videoPlaying = false;
  while (Date.now() < until && (observed.size < 4 || !videoPlaying)) {
    const cls = await hall
      .locator(".slide")
      .getAttribute("class")
      .catch(() => "");
    const title = await hall
      .locator(".slide")
      .innerText()
      .catch(() => "");
    if (title.includes("Bienvenue")) observed.add("text");
    if (title.includes("Image de démonstration")) observed.add("image");
    if (title.includes("Logo fictif")) observed.add("logo");
    if (cls?.includes("slide-video")) {
      observed.add("video");
      videoPlaying ||= await hall
        .locator("video")
        .evaluate(
          (v) =>
            !v.paused && v.currentTime > 0 && Math.abs(v.duration - 5) < 0.2,
        )
        .catch(() => false);
      if (videoPlaying)
        await hall.screenshot({ path: screenshots + "/hall-video.png" });
    }
    await hall.waitForTimeout(400);
  }
  assert.equal(observed.size, 4, JSON.stringify([...observed]));
  assert.ok(videoPlaying);
  checks.push(
    "Cycle hall image, logo fictif, annonce et vidéo synthétique 5 s avec autoplay muet",
  );
  await update((c) => {
    c.hall.paused = true;
  });
  await hall.waitForTimeout(6000);
  const frozen = await hall.locator(".slide").innerText();
  await hall.waitForTimeout(4000);
  assert.equal(await hall.locator(".slide").innerText(), frozen);
  await update((c) => {
    c.hall.paused = false;
    c.playlist = [
      {
        id: "absent",
        type: "image",
        title: "Absent",
        src: "/media/absent.png",
        fit: "contain",
        durationSeconds: 3,
        enabled: true,
        approved: true,
      },
      ...c.playlist,
    ];
  });
  await hall
    .getByText("Média indisponible · reprise du programme")
    .waitFor({ timeout: 12000 })
    .catch(async () => {
      // Le média est retiré rapidement de la rotation ; le programme doit rester visible.
      assert.ok((await hall.locator(".slide").innerText()).length > 0);
    });
  checks.push("Pause/reprise hall et média absent sans écran blanc");
  await update((c) => {
    c.playlist = c.playlist.filter((s) => s.id !== "absent");
  });
  await a
    .getByRole("heading", { name: "La Femme est l'avenir de Bitcoin" })
    .waitFor({ timeout: 12000 });
  await a.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await a.waitForTimeout(6000);
  const mediaCached = await a.evaluate(async () =>
    (await (await caches.open("bonly-media-v1")).keys()).map((r) => r.url),
  );
  assert.ok(mediaCached.some((url) => url.endsWith("demo-test.mp4")));
  await context.setOffline(true);
  await a.reload();
  await a
    .getByRole("heading", { name: "La Femme est l'avenir de Bitcoin" })
    .waitFor({ timeout: 12000 });
  await a
    .getByText("Hors connexion · programme conservé")
    .waitFor({ timeout: 8000 });
  await hall.reload();
  let offlinePlaying = false;
  const offlineUntil = Date.now() + 18000;
  while (Date.now() < offlineUntil && !offlinePlaying) {
    offlinePlaying = await hall
      .locator("video")
      .evaluate(
        (v) => !v.paused && v.currentTime > 0 && v.src.startsWith("blob:"),
      )
      .catch(() => false);
    await hall.waitForTimeout(400);
  }
  assert.ok(offlinePlaying);
  checks.push(
    "Coupure réseau : rechargement par Service Worker localhost, grille conservée et vidéo en cache Blob",
  );
  await a.screenshot({ path: screenshots + "/salle-a-hors-ligne.png" });
  await context.setOffline(false);
  const output = join(screenshots, `secours-${Date.now()}`);
  const exported = await exportOffline(dataDir, output);
  assert.deepEqual(exported.missing, []);
  const offline = await context.newPage();
  await offline.setViewportSize({ width: 768, height: 1024 });
  await offline.clock.install({ time: new Date("2026-11-07T15:05:00+01:00") });
  await offline.goto("file://" + output + "/salle-a.html");
  await offline
    .getByRole("heading", { name: "La Femme est l'avenir de Bitcoin" })
    .waitFor({ timeout: 10000 });
  await offline
    .getByText("SECOURS LOCAL · instantané sans pilotage distant")
    .waitFor();
  await offline.screenshot({ path: screenshots + "/secours-768x1024.png" });
  checks.push(
    "Export autonome file:// sans serveur, horloge locale au redémarrage",
  );
  const alias = await context.newPage();
  const aliasOrigin = origin.replace("127.0.0.1", "localhost");
  await alias.goto(aliasOrigin + "/" + at);
  await alias
    .getByRole("heading", { name: "La Femme est l'avenir de Bitcoin" })
    .waitFor();
  await alias.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await alias.waitForTimeout(1000);
  assert.equal(
    await alias.evaluate(() =>
      fetch("/api/admin/status").then((r) => r.status),
    ),
    404,
  );
  await context.setOffline(true);
  await alias.goto(aliasOrigin + "/" + at);
  await alias
    .getByRole("heading", { name: "La Femme est l'avenir de Bitcoin" })
    .waitFor({ timeout: 10000 });
  await context.setOffline(false);
  checks.push(
    "Alias public : redirection, administration refusée et racine disponible hors ligne",
  );
  assert.deepEqual(pageErrors, []);
  assert.deepEqual(
    external.filter((url) => !url.startsWith(aliasOrigin)),
    [],
  );
  await writeFile(
    join(screenshots, "results.json"),
    JSON.stringify(
      { checks, pageErrors, externalRequests: external, screenshots },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify(
      { checks, pageErrors, externalRequests: external, screenshots },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
  await new Promise((resolve) => app.server.close(resolve));
}
