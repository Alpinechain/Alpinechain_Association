import test from "node:test";
import assert from "node:assert/strict";
import {
  mkdtemp,
  writeFile,
  readFile,
  readdir,
  symlink,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createSignage } from "../server.mjs";
import { exportOffline } from "../export-offline.mjs";
import { request as httpRequest } from "node:http";

test("HTTP : auth, CSRF, validation, conflit, persistance, médias et secours", async (t) => {
  const dataDir = await mkdtemp(join(tmpdir(), "bonly-signage-test-"));
  const password = "test-only-password-230";
  const app = await createSignage({ dataDir, password, demo: true });
  await new Promise((resolve) => app.server.listen(0, "127.0.0.1", resolve));
  t.after(() => app.server.close());
  const origin = `http://127.0.0.1:${app.server.address().port}`;
  const authorization =
    "Basic " + Buffer.from(`admin:${password}`).toString("base64");
  const headers = { authorization, origin, "Content-Type": "application/json" };
  const state = await fetch(`${origin}/api/state`).then((r) => r.json());
  assert.equal(state.programme.entries.length, 30);
  assert.ok(!JSON.stringify(state).includes(password));
  assert.equal((await fetch(`${origin}/admin`)).status, 401);
  assert.equal((await fetch(`${origin}/api/admin/export`)).status, 401);
  assert.equal(
    (await fetch(`${origin}/admin`, { headers: { authorization } })).status,
    200,
  );
  const hostileHostStatus = await new Promise((resolve, reject) => {
    const req = httpRequest(
      origin,
      { headers: { host: "attacker.invalid" } },
      (response) => {
        response.resume();
        resolve(response.statusCode);
      },
    );
    req.on("error", reject);
    req.end();
  });
  assert.equal(hostileHostStatus, 403);
  const put = (payload, h = headers) =>
    fetch(`${origin}/api/admin/config`, {
      method: "PUT",
      headers: h,
      body: JSON.stringify(payload),
    });
  const config = structuredClone(state.config);
  config.screens["salle-a"].delayMinutes = 10;
  const payload = { revision: state.revision, config };
  assert.equal(
    (await put(payload, { ...headers, origin: "http://attacker.invalid" }))
      .status,
    403,
  );
  assert.equal(
    (await put(payload, { authorization, "Content-Type": "application/json" }))
      .status,
    403,
  );
  assert.equal(
    (await put(payload, { ...headers, "Content-Type": "text/plain" })).status,
    415,
  );
  const bad = structuredClone(payload);
  bad.config.screens["salle-a"].delayMinutes = "10";
  assert.equal((await put(bad)).status, 400);
  const saved = await put(payload);
  assert.equal(saved.status, 200);
  const updated = await saved.json();
  assert.equal(updated.config.screens["salle-a"].delayMinutes, 10);
  assert.equal((await put(payload)).status, 409);
  assert.equal(
    JSON.parse(await readFile(join(dataDir, "config.json"), "utf8")).screens[
      "salle-a"
    ].delayMinutes,
    10,
  );
  await put({ revision: updated.revision, config: updated.config });
  assert.equal((await readdir(join(dataDir, "backups"))).length, 1);
  await writeFile(join(app.mediaDir, "test.mp4"), Buffer.from("0123456789"));
  const range = await fetch(`${origin}/media/test.mp4`, {
    headers: { Range: "bytes=2-5" },
  });
  assert.equal(range.status, 206);
  assert.equal(await range.text(), "2345");
  assert.equal(
    (
      await fetch(`${origin}/media/test.mp4`, {
        headers: { Range: "bytes=20-" },
      })
    ).status,
    416,
  );
  await writeFile(join(dataDir, "outside.mp4"), "not-public");
  await symlink(join(dataDir, "outside.mp4"), join(app.mediaDir, "secret.mp4"));
  assert.equal((await fetch(`${origin}/media/secret.mp4`)).status, 403);
  assert.notEqual(
    (await fetch(`${origin}/media/%2e%2e%2fconfig.json`)).status,
    200,
  );
  const contact = await fetch(`${origin}/api/contact`, {
    method: "POST",
    headers: { origin, "Content-Type": "application/json" },
    body: JSON.stringify({ screen: "salle-a", client: "test-player-230" }),
  });
  assert.equal(contact.status, 200);
  const admin = await fetch(`${origin}/api/admin/status`, {
    headers: { authorization },
  }).then((r) => r.json());
  assert.equal(admin.contacts.length, 1);
  const output = join(dataDir, "secours");
  const exported = await exportOffline(dataDir, output);
  assert.deepEqual(exported.missing, ["demo-test.mp4"]);
  const html = await readFile(join(output, "salle-a.html"), "utf8");
  assert.ok(html.includes('data-screen="salle-a"'));
  assert.ok(!html.includes("from '/model.mjs'"));
  assert.ok(!html.includes(password));
  await assert.rejects(exportOffline(dataDir, output), { code: "EEXIST" });
  await new Promise((resolve) => app.server.close(resolve));
  const restarted = await createSignage({ dataDir, password });
  assert.equal(restarted.snapshot().config.screens["salle-a"].delayMinutes, 10);
  assert.equal(
    restarted.snapshot().programme.source.sha256,
    state.programme.source.sha256,
  );
});
test("mot de passe absent ou trop court : aucun serveur lancé", async () => {
  await assert.rejects(createSignage({ password: "" }), /16 caractères/);
});

test("sous-domaines publics : bon écran et aucune administration exposée", async (t) => {
  const dataDir = await mkdtemp(join(tmpdir(), "bonly-hosts-test-"));
  const password = "public-routing-test-only-230";
  const screenHosts = JSON.parse(
    await readFile(
      new URL("../deploy/public-screen-hosts.json", import.meta.url),
      "utf8",
    ),
  );
  const { server } = await createSignage({ dataDir, password, screenHosts });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}`;
  const authorization =
    "Basic " + Buffer.from(`admin:${password}`).toString("base64");
  const request = (host, path, method = "GET") =>
    new Promise((resolve, reject) => {
      const req = httpRequest(
        base + path,
        {
          method,
          headers: {
            host,
            authorization,
            origin: `https://${host}`,
            "Content-Type": "application/json",
          },
        },
        (response) => {
          const chunks = [];
          response.on("data", (c) => chunks.push(c));
          response.on("end", () =>
            resolve({
              status: response.statusCode,
              location: response.headers.location,
              body: JSON.parse(Buffer.concat(chunks).toString()),
            }),
          );
        },
      );
      req.on("error", reject);
      req.end();
    });
  for (const [host, screen] of Object.entries(screenHosts)) {
    const root = await request(host, "/?at=2026-11-07");
    assert.equal(root.status, 302);
    assert.equal(root.location, `/screen/${screen}?at=2026-11-07`);
    assert.equal((await request(host, "/api/state")).body.screenId, screen);
    for (const path of [
      "/admin",
      "/admin.js",
      "/api/admin/status",
      "/api/admin/export",
    ])
      assert.equal((await request(host, path)).status, 404);
    assert.equal((await request(host, "/api/admin/config", "PUT")).status, 404);
  }
  assert.equal(
    (await fetch(base + "/api/admin/status", { headers: { authorization } }))
      .status,
    200,
  );
});
