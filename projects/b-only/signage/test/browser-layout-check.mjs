// Local visual regression check; uses synthetic API snapshots, never production.
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomBytes } from "node:crypto";
import { createSignage } from "../server.mjs";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const artifacts = process.env.SIGNAGE_TEST_ARTIFACT_DIR ||
  await mkdtemp(join(tmpdir(), "bonly-layout-artifacts-"));
await mkdir(artifacts, { recursive: true });
const app = await createSignage({
  dataDir: await mkdtemp(join(tmpdir(), "bonly-layout-data-")),
  password: randomBytes(24).toString("hex"),
  demo: true,
});
await new Promise(resolve => app.server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${app.server.address().port}`;
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || chromium.executablePath(),
  headless: true,
});
const context = await browser.newContext({ serviceWorkers: "block" });
const errors = [];
const checks = [];
const snapshot = await fetch(origin + "/api/state").then(r => r.json());
const longTitle = "Bitcoin, énergie et souveraineté : comprendre les transformations économiques et les enjeux des communautés francophones à travers des expériences concrètes";
try {
  for (const [width, height] of [[1920, 1080], [2560, 1080], [3440, 1440], [1280, 720], [1080, 1920]]) {
    for (const room of ["salle-a", "salle-b"]) {
      let labelPositions;
      for (const variant of ["real", "long-visual", "long-no-visual", "long-broken-visual", "manual", "fixed", "empty"]) {
        const data = structuredClone(snapshot);
        if (variant.startsWith("long")) {
          for (const entry of data.programme.entries) {
            entry.title = longTitle;
            entry.speakers = ["Intervenante au nom composé", "Second intervenant"];
          }
          data.visuals = variant === "long-visual" ? data.visuals : variant === "long-no-visual" ? {} :
            Object.fromEntries(data.programme.entries.map(e => [e.id, "/missing-layout-visual.png"]));
        }
        if (variant === "manual") {
          data.config.screens[room].manual = {
            entryId: data.programme.entries.find(e => e.room === data.config.screens[room].room && e.status === "confirmed").id,
            expiresAt: "2026-11-10T00:00:00+01:00",
          };
        }
        // A fixed session uses the same renderer and retains its status below the label.
        if (variant === "fixed")
          for (const entry of data.programme.entries) entry.status = "fixed";
        const page = await context.newPage();
        await page.setViewportSize({ width, height });
        await page.addInitScript(() => localStorage.clear());
        page.on("pageerror", e => errors.push(e.message));
        await page.route("**/api/state", route => route.fulfill({ json: data }));
        // The hall demo video is unrelated to the room layout.
        await page.route("**/media/demo-test.mp4", route => route.fulfill({ status: 404 }));
        const at = variant === "empty" ? "2026-11-10T20:00:00+01:00" : "2026-11-07T15:05:00+01:00";
        await page.goto(`${origin}/screen/${room}?at=${encodeURIComponent(at)}`);
        await page.locator(".session.next").waitFor();
        if (variant.startsWith("long"))
          assert.equal(await page.locator(".session-title").first().textContent(), longTitle);
        if (variant === "manual" || variant === "fixed")
          assert.equal(await page.locator(".session-status").textContent(), variant === "manual" ? "SÉLECTION RÉGIE" : "EN CE MOMENT");
        await page.waitForFunction(() => [...document.querySelectorAll(".session-visual")].every(img => img.complete));
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const geometry = await page.evaluate(() => {
          const rect = node => {
            const r = node.getBoundingClientRect();
            return { x: r.x, y: r.y, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
          };
          return [...document.querySelectorAll(".session")].map(zone => {
            const label = zone.querySelector(".eyebrow");
            return {
              zone: rect(zone), label: rect(label), text: label.textContent,
              border: getComputedStyle(zone).borderLeftWidth,
              content: [...zone.querySelectorAll(".session-title, .session-copy, .session-content")].map(n => ({
                rect: rect(n), overflowX: n.scrollWidth - n.clientWidth, overflowY: n.scrollHeight - n.clientHeight,
              })),
            };
          });
        });
        const name = `${room}-${width}x${height}-${variant}`;
        assert.deepEqual(geometry.map(z => z.text), ["EN COURS", "À SUIVRE"], name);
        const positions = geometry.map(z => ({ x: z.label.x, y: z.label.y }));
        labelPositions ||= positions;
        assert.deepEqual(positions, labelPositions, `${name}: labels moved`);
        if (width > height) {
          assert.equal(geometry[0].zone.y, geometry[1].zone.y, name);
          assert.equal(geometry[1].border, "1px", name);
          assert.ok(Math.abs(geometry[0].label.y - geometry[1].label.y) < 1, name);
          assert.ok(Math.abs((geometry[0].label.x - geometry[0].zone.x) - (geometry[1].label.x - geometry[1].zone.x - 1)) < 1, name);
        }
        for (const z of geometry) for (const c of z.content) {
          assert.ok(c.overflowX <= 2 && c.overflowY <= 2, `${name}: content overflow ${JSON.stringify(c)}`);
          assert.ok(c.rect.y >= z.label.bottom && c.rect.bottom <= z.zone.bottom + 1, `${name}: content outside zone`);
        }
        if ([1920, 3440].includes(width) && ["real", "long-no-visual"].includes(variant))
          await page.screenshot({ path: join(artifacts, name + ".png") });
        checks.push(name);
        await page.close();
      }
    }
  }
  assert.deepEqual(errors, []);
  await writeFile(join(artifacts, "results.json"), JSON.stringify({ checks, errors }, null, 2));
  console.log(JSON.stringify({ passed: checks.length, artifacts, errors }));
} finally {
  await browser.close();
  await new Promise(resolve => app.server.close(resolve));
}
