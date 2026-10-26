import { createServer } from "node:http";
import { timingSafeEqual } from "node:crypto";
import { mkdir, readFile, realpath, open, stat } from "node:fs/promises";
import { constants } from "node:fs";
import { homedir } from "node:os";
import { resolve, join, dirname, basename, extname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { defaultConfig, validateConfig, validMediaPath } from "./config.mjs";
import { importProgramme, validateProgramme } from "./programme.mjs";
import { readJSON, saveJSON, backupConfig } from "./storage.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};
const baseHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "X-Frame-Options": "DENY",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' blob: data:; media-src 'self' blob:; frame-src https://player.vimeo.com; connect-src 'self'; worker-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
};

export async function createSignage(options = {}) {
  const dataDir = resolve(
    options.dataDir ||
      process.env.SIGNAGE_DATA_DIR ||
      join(homedir(), ".local/share/bonly-signage"),
  );
  const password = options.password ?? process.env.SIGNAGE_ADMIN_PASSWORD;
  if (typeof password !== "string" || password.length < 16)
    throw new Error(
      "SIGNAGE_ADMIN_PASSWORD doit contenir au moins 16 caractères, hors dépôt",
    );
  const allowedHosts =
    options.allowedHosts ||
    (process.env.SIGNAGE_ALLOWED_HOSTS || "localhost,127.0.0.1,[::1]")
      .split(",")
      .map((s) => s.trim().toLowerCase());
  const screenHosts =
    options.screenHosts ||
    (process.env.SIGNAGE_SCREEN_HOSTS_FILE
      ? await readJSON(resolve(process.env.SIGNAGE_SCREEN_HOSTS_FILE))
      : {});
  if (
    !screenHosts ||
    typeof screenHosts !== "object" ||
    Array.isArray(screenHosts) ||
    Object.entries(screenHosts).some(
      ([host, screen]) =>
        !/^[a-z0-9.-]+$/.test(host) ||
        !["salle-a", "salle-b", "hall"].includes(screen),
    )
  )
    throw new Error("Sous-domaines d'écrans invalides");
  allowedHosts.push(...Object.keys(screenHosts));
  if (allowedHosts.some((h) => !/^(\[[a-f0-9:]+\]|[a-z0-9.-]+)$/.test(h)))
    throw new Error("Hôtes autorisés invalides (sans protocole ni port)");
  await mkdir(dataDir, { recursive: true, mode: 0o700 });
  const mediaDir = resolve(
    options.mediaDir || process.env.SIGNAGE_MEDIA_DIR || join(dataDir, "media"),
  );
  await mkdir(mediaDir, { recursive: true, mode: 0o700 });
  const programmePath = join(dataDir, "programme.json");
  let programme = await readJSON(programmePath, null);
  if (!programme) {
    programme = importProgramme(
      await readFile(
        new URL("../programme/programme.json", import.meta.url),
        "utf8",
      ),
    );
    await saveJSON(programmePath, programme);
  }
  validateProgramme(programme);
  let config = validateConfig(
    await readJSON(join(dataDir, "config.json"), defaultConfig),
    programme,
  );
  const demo = options.demo ?? process.env.SIGNAGE_DEMO === "1";
  const heartbeats = new Map();
  const failures = new Map();
  let revision = Date.now();
  let writeQueue = Promise.resolve();
  const snapshot = () => ({
    version: 1,
    revision,
    serverNow: Date.now(),
    demo,
    programme,
    config,
  });
  const expectedAuth = Buffer.from(
    "Basic " + Buffer.from(`admin:${password}`).toString("base64"),
  );

  const server = createServer(async (req, res) => {
    const send = (status, value, extra = {}) => {
      res.writeHead(status, {
        ...baseHeaders,
        "Cache-Control": "no-store",
        "Content-Type": "application/json; charset=utf-8",
        ...extra,
      });
      res.end(JSON.stringify(value));
    };
    const auth = () => {
      const ip = req.socket.remoteAddress;
      const now = Date.now();
      for (const [key, val] of failures)
        if (val.until < now) failures.delete(key);
      const failure = failures.get(ip);
      if (failure?.count >= 10) {
        send(429, { error: "Réessayer dans une minute" });
        return false;
      }
      const candidate = Buffer.from(req.headers.authorization || "");
      if (
        candidate.length === expectedAuth.length &&
        timingSafeEqual(candidate, expectedAuth)
      ) {
        failures.delete(ip);
        return true;
      }
      if (failures.size < 1000)
        failures.set(ip, {
          count: (failure?.count || 0) + 1,
          until: failure?.until || now + 60000,
        });
      send(
        401,
        { error: "Authentification requise" },
        { "WWW-Authenticate": 'Basic realm="B-Only regie", charset="UTF-8"' },
      );
      return false;
    };
    try {
      if (!req.headers.host || req.headers.host.includes("@"))
        return send(400, { error: "Hôte invalide" });
      const base = new URL(`http://${req.headers.host}`);
      if (!allowedHosts.includes(base.hostname.toLowerCase()))
        return send(403, { error: "Hôte non autorisé" });
      const url = new URL(req.url, base);
      if (url.origin !== base.origin)
        return send(400, { error: "URL invalide" });
      const path = decodeURIComponent(url.pathname);
      const publicScreen = Object.hasOwn(screenHosts, base.hostname)
        ? screenHosts[base.hostname]
        : null;
      const adminPath =
        path === "/admin" ||
        path === "/admin.js" ||
        path.startsWith("/api/admin/");
      if (
        publicScreen &&
        (adminPath ||
          (!["GET", "HEAD"].includes(req.method) && path !== "/api/contact"))
      )
        return send(404, { error: "Page absente" });
      if (publicScreen && path === "/" && ["GET", "HEAD"].includes(req.method))
        return send(
          302,
          {},
          { Location: `/screen/${publicScreen}${url.search}` },
        );
      if (adminPath && !auth()) return;
      if (["PUT", "POST", "DELETE", "PATCH"].includes(req.method)) {
        // Les navigateurs étrangers ne peuvent pas agir avec des identifiants Basic mémorisés.
        if (
          !req.headers.origin ||
          ![base.origin, base.origin.replace("http:", "https:")].includes(
            req.headers.origin,
          )
        )
          return send(403, { error: "Origine non autorisée" });
        if (req.headers["content-type"]?.split(";")[0] !== "application/json")
          return send(415, { error: "JSON requis" });
      }
      const body = async () => {
        let size = 0;
        const chunks = [];
        for await (const chunk of req) {
          size += chunk.length;
          if (size > 131072)
            throw Object.assign(new Error("Requête trop longue"), {
              status: 413,
            });
          chunks.push(chunk);
        }
        try {
          return JSON.parse(Buffer.concat(chunks).toString("utf8"));
        } catch {
          throw Object.assign(new Error("JSON invalide"), { status: 400 });
        }
      };
      if (req.method === "GET" && path === "/api/state")
        return send(200, {
          ...snapshot(),
          ...(publicScreen ? { screenId: publicScreen } : {}),
        });
      if (req.method === "GET" && path === "/healthz")
        return send(200, {
          status: "ok",
          programmeEntries: programme.entries.length,
        });
      if (req.method === "POST" && path === "/api/contact") {
        const contact = await body();
        if (
          !Object.hasOwn(config.screens, contact.screen) ||
          !/^[a-z0-9-]{8,64}$/i.test(contact.client || "")
        )
          return send(400, { error: "Lecteur invalide" });
        const now = Date.now();
        for (const [key, value] of heartbeats)
          if (now - value.lastSeen > 86400000) heartbeats.delete(key);
        const key = `${contact.screen}/${contact.client}`;
        if (heartbeats.size < 200 || heartbeats.has(key))
          heartbeats.set(key, {
            screen: contact.screen,
            client: contact.client,
            lastSeen: now,
          });
        return send(200, { received: true });
      }
      if (req.method === "GET" && path === "/api/admin/status")
        return send(200, { ...snapshot(), contacts: [...heartbeats.values()] });
      if (req.method === "GET" && path === "/api/admin/export")
        return send(200, config, {
          "Content-Disposition": 'attachment; filename="bonly-config.json"',
        });
      if (req.method === "GET" && path === "/api/admin/media") {
        const { readdir } = await import("node:fs/promises");
        const names = await readdir(mediaDir);
        const files = [];
        for (const name of names.filter((n) => validMediaPath(`/media/${n}`))) {
          if (
            await realpath(join(mediaDir, name)).then(
              (p) => dirname(p) === mediaDir,
            )
          ) {
            const s = await stat(join(mediaDir, name));
            if (s.isFile()) files.push({ name, size: s.size });
          }
        }
        return send(200, files);
      }
      if (req.method === "PUT" && path === "/api/admin/config") {
        const proposed = await body();
        const operation = writeQueue.then(async () => {
          if (proposed.revision !== revision)
            throw Object.assign(
              new Error(
                "Configuration modifiée ailleurs : recharger avant de sauvegarder",
              ),
              { status: 409 },
            );
          const validated = validateConfig(proposed.config, programme);
          await backupConfig(dataDir);
          await saveJSON(join(dataDir, "config.json"), validated);
          config = validated;
          revision++;
          console.log(
            JSON.stringify({
              at: new Date().toISOString(),
              action: "config-saved",
              revision,
            }),
          );
        });
        writeQueue = operation.catch(() => {});
        await operation;
        return send(200, snapshot());
      }
      if (!["GET", "HEAD"].includes(req.method))
        return send(405, { error: "Méthode non autorisée" });

      let file,
        isMedia = false;
      if (path.startsWith("/media/") && validMediaPath(path)) {
        const name = basename(path);
        file = join(mediaDir, name);
        isMedia = true;
        if (dirname(await realpath(file)) !== mediaDir)
          return send(403, { error: "Média hors dossier" });
      } else {
        const routes = {
          "/": "index.html",
          "/admin": "admin.html",
          "/admin.js": "admin.js",
          "/screen/salle-a": "screen.html",
          "/screen/salle-b": "screen.html",
          "/screen/hall": "screen.html",
          "/app.js": "app.js",
          "/model.mjs": "model.mjs",
          "/vimeo.mjs": "vimeo.mjs",
          "/styles.css": "styles.css",
          "/sw.js": "sw.js",
          "/assets/demo-image.svg": "assets/demo-image.svg",
          "/assets/demo-logo.svg": "assets/demo-logo.svg",
        };
        if (!Object.hasOwn(routes, path))
          return send(404, { error: "Page absente" });
        file = join(root, "public", routes[path]);
      }
      const handle = await open(
        file,
        constants.O_RDONLY | constants.O_NOFOLLOW,
      );
      try {
        const info = await handle.stat();
        if (!info.isFile()) return send(404, { error: "Fichier absent" });
        let start = 0,
          end = info.size - 1,
          status = 200;
        const headers = {
          ...baseHeaders,
          "Cache-Control": isMedia ? "no-cache" : "no-cache",
          "Content-Type": types[extname(file)] || "application/octet-stream",
          "Accept-Ranges": "bytes",
        };
        if (req.headers.range) {
          const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
          if (!match || (!match[1] && !match[2]))
            return send(
              416,
              { error: "Plage invalide" },
              { "Content-Range": `bytes */${info.size}` },
            );
          if (!match[1]) start = Math.max(0, info.size - Number(match[2]));
          else {
            start = Number(match[1]);
            if (match[2]) end = Math.min(end, Number(match[2]));
          }
          if (
            start > end ||
            start >= info.size ||
            !Number.isSafeInteger(start) ||
            !Number.isSafeInteger(end)
          )
            return send(
              416,
              { error: "Plage invalide" },
              { "Content-Range": `bytes */${info.size}` },
            );
          status = 206;
          headers["Content-Range"] = `bytes ${start}-${end}/${info.size}`;
        }
        headers["Content-Length"] = Math.max(0, end - start + 1);
        res.writeHead(status, headers);
        if (req.method === "HEAD" || !info.size) return res.end();
        await new Promise((done, reject) => {
          const stream = handle.createReadStream({
            start,
            end,
            autoClose: false,
          });
          stream.on("error", reject);
          stream.on("end", done);
          res.on("close", () => {
            stream.destroy();
            done();
          });
          stream.pipe(res);
        });
      } finally {
        await handle.close();
      }
    } catch (e) {
      if (res.headersSent) {
        res.destroy();
        return;
      }
      const status =
        e.status ||
        (e.code === "ENOENT"
          ? 404
          : e.code === "ELOOP"
            ? 403
            : e.code
              ? 503
              : 400);
      if (status >= 500) console.error("Erreur serveur", e.code || e.name);
      send(status, {
        error: e.code ? "Fichier ou stockage indisponible" : e.message,
      });
    }
  });
  server.requestTimeout = 15000;
  server.headersTimeout = 10000;
  return { server, snapshot, mediaDir, dataDir };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  try {
    const { server } = await createSignage();
    const host = process.env.HOST || "127.0.0.1";
    const port = Number(process.env.PORT || 8787);
    server.listen(port, host, () =>
      console.log(`B-Only régie · ${host}:${port} · Europe/Paris`),
    );
    for (const signal of ["SIGTERM", "SIGINT"])
      process.on(signal, () => server.close(() => process.exit(0)));
  } catch (e) {
    console.error(e.message);
    process.exitCode = 1;
  }
}
