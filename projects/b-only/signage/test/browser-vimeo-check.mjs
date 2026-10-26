import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomBytes } from "node:crypto";
import { mkdtemp } from "node:fs/promises";
if (!process.argv.includes("--online"))
  throw new Error("Ajouter --online pour autoriser les essais Vimeo en ligne");
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE || "playwright"
);
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { createSignage } from "../server.mjs";
import { paymiumSources } from "../public/vimeo.mjs";
const password = randomBytes(24).toString("hex");
const artifacts =
  process.env.SIGNAGE_TEST_ARTIFACT_DIR ||
  (await mkdtemp(join(tmpdir(), "bonly-vimeo-artifacts-")));
const app = await createSignage({
  dataDir: await mkdtemp(join(tmpdir(), "bonly-vimeo-data-")),
  password,
  demo: true,
});
await new Promise((resolve) => app.server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${app.server.address().port}`;
const authorization =
  "Basic " + Buffer.from(`admin:${password}`).toString("base64");
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || chromium.executablePath(),
  headless: true,
  args: ["--no-sandbox"],
});
const context = await browser.newContext({
  httpCredentials: { username: "admin", password },
  viewport: { width: 1920, height: 1080 },
});
const errors = [];
context.on("page", (page) =>
  page.on("pageerror", (e) => errors.push(e.message)),
);
const results = [];
async function configure(source) {
  const state = await fetch(origin + "/api/state").then((r) => r.json());
  state.config.hall = { paused: false, agendaEvery: 0, onlineEnabled: true };
  state.config.playlist = [
    {
      ...source,
      type: "vimeo",
      durationSeconds: 120,
      muted: true,
      enabled: true,
      approved: true,
    },
    {
      id: "fallback-test",
      type: "text",
      title: "Repli programme",
      text: "La boucle continue",
      durationSeconds: 3,
      enabled: true,
      approved: true,
    },
  ];
  const saved = await fetch(origin + "/api/admin/config", {
    method: "PUT",
    headers: { authorization, origin, "Content-Type": "application/json" },
    body: JSON.stringify({ revision: state.revision, config: state.config }),
  });
  assert.equal(saved.status, 200);
}
try {
  for (const source of paymiumSources) {
    await configure(source);
    const page = await context.newPage();
    await page.addInitScript(() => {
      window.vimeoEvents = [];
      window.addEventListener("message", (e) => {
        if (e.origin !== "https://player.vimeo.com") return;
        let d;
        try {
          d = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        } catch {
          return;
        }
        window.vimeoEvents.push({
          event: d.event,
          method: d.method,
          seconds: d.data?.seconds,
          duration: d.value,
        });
      });
    });
    const requests = [];
    page.on("requestfailed", (r) => {
      if (r.url().includes("vimeo.com"))
        requests.push({
          host: new URL(r.url()).hostname,
          error: r.failure()?.errorText,
        });
    });
    await page.goto(origin + "/screen/hall");
    await page.waitForFunction(
      (hash) => {
        const src = document.querySelector("iframe")?.src;
        return src && new URL(src).searchParams.get("h") === hash;
      },
      source.id === "paymium-b2b" ? "a8cfeb9722" : "9246571fc3",
      { timeout: 10000 },
    );
    const embed = new URL(await page.locator("iframe").getAttribute("src"));
    assert.equal(
      embed.searchParams.get("h"),
      source.id === "paymium-b2b" ? "a8cfeb9722" : "9246571fc3",
    );
    let playing = false;
    const limit = Date.now() + 18000;
    while (Date.now() < limit && !playing) {
      playing = await page.evaluate(() =>
        window.vimeoEvents.some(
          (e) => e.event === "timeupdate" && e.seconds > 0,
        ),
      );
      await page.waitForTimeout(500);
    }
    let endConfirmed = false;
    let duration = null;
    if (playing) {
      duration = await page.evaluate(
        () =>
          window.vimeoEvents.find(
            (e) => e.method === "getDuration" && Number.isFinite(e.duration),
          )?.duration,
      );
      if (duration > 2) {
        await page
          .locator("iframe")
          .evaluate(
            (frame, seconds) =>
              frame.contentWindow.postMessage(
                { method: "setCurrentTime", value: seconds },
                "https://player.vimeo.com",
              ),
            duration - 2,
          );
        await page
          .getByRole("heading", { name: "Repli programme" })
          .waitFor({ timeout: 8000 });
        endConfirmed = await page.evaluate(() =>
          window.vimeoEvents.some((e) => e.event === "ended"),
        );
        assert.ok(
          endConfirmed,
          "Fin Vimeo et passage à la diapositive suivante",
        );
      }
    }
    const events = await page.evaluate(() => window.vimeoEvents);
    const hasFallback =
      (await page.locator("#display").innerText()).includes(
        "Repli programme",
      ) ||
      (await page.locator("#display").innerText()).includes("Le programme");
    await page.screenshot({ path: join(artifacts, `${source.id}-online.png`) });
    results.push({
      id: source.id,
      playbackConfirmed: playing,
      duration,
      endConfirmed,
      events: events.slice(0, 20),
      failedRequests: requests.slice(0, 4),
      fallbackVisible: hasFallback,
    });
    await page.close();
  }
  // Échec Internet contrôlé : aucun écran vide ou boucle bloquée.
  await configure(paymiumSources[0]);
  await context.route("https://player.vimeo.com/**", (route) =>
    route.abort("internetdisconnected"),
  );
  const failed = await context.newPage();
  await failed.goto(origin + "/screen/hall");
  await failed
    .getByRole("heading", { name: "Repli programme" })
    .waitFor({ timeout: 16000 });
  results.push({ simulatedVimeoFailure: "fallback-confirmed" });
  await context.setOffline(true);
  await failed.waitForTimeout(1000);
  assert.equal(await failed.locator("iframe").count(), 0);
  results.push({ offline: "vimeo-omitted" });
  const report = { results, pageErrors: errors };
  await writeFile(
    join(artifacts, "vimeo-results.json"),
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
  await new Promise((resolve) => app.server.close(resolve));
}
