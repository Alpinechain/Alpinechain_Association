import { sessionVisuals } from "../programme/public/visuals.mjs";
import { lstatSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { importProgramme } from "./programme.mjs";

function sources(programme, dataDir) {
  return programme.entries.flatMap((entry) => {
    const source = sessionVisuals[entry.id]?.full;
    if (!source || !/^[a-z0-9-]+$/.test(entry.id)) return [];
    let file,
      suffix,
      remote = false;
    if (
      source.startsWith("visuals/") &&
      /^visuals\/[a-zA-Z0-9_.-]+\.(webp|png|jpg|jpeg|svg)$/.test(source)
    ) {
      suffix = extname(source);
      file = fileURLToPath(
        new URL(`../programme/public/${source}`, import.meta.url),
      );
    } else {
      const url = new URL(source);
      if (
        url.origin !== "https://alpinechain.xyz" ||
        !url.pathname.startsWith("/wp-content/uploads/") ||
        !/\.(png|jpg|jpeg|webp)$/.test(url.pathname)
      )
        throw new Error("Source de vignette non autorisée");
      remote = true;
      suffix = extname(url.pathname);
      file = join(
        dataDir,
        "visuals",
        `${entry.id}-${createHash("sha256").update(source).digest("hex").slice(0, 12)}${suffix}`,
      );
    }
    const name = `${entry.id}-${createHash("sha256").update(source).digest("hex").slice(0, 12)}${suffix}`;
    return [
      { id: entry.id, source, file, remote, route: `/session-visuals/${name}` },
    ];
  });
}

export function loadSessionVisuals(programme, dataDir) {
  const visuals = {},
    routes = {};
  for (const item of sources(programme, dataDir)) {
    try {
      if (!lstatSync(item.file).isFile()) continue;
    } catch (e) {
      if (e.code === "ENOENT") continue;
      throw e;
    }
    visuals[item.id] = item.route;
    routes[item.route] = item.file;
  }
  return { visuals, routes };
}

export async function prepareSessionVisuals(dataDir) {
  const source = await readFile(
    new URL("../programme/programme.json", import.meta.url),
    "utf8",
  );
  const programme = importProgramme(source);
  await mkdir(join(dataDir, "visuals"), { recursive: true, mode: 0o700 });
  const fetched = [],
    failed = [];
  for (const item of sources(programme, dataDir).filter(
    (item) => item.remote,
  )) {
    try {
      try {
        if (lstatSync(item.file).isFile()) continue;
        throw new Error("Chemin de vignette non régulier");
      } catch (e) {
        if (e.code !== "ENOENT") throw e;
      }
      const response = await fetch(item.source, {
        redirect: "error",
        signal: AbortSignal.timeout(20000),
      });
      if (
        !response.ok ||
        !response.headers.get("content-type")?.startsWith("image/")
      )
        throw new Error("Image indisponible");
      const chunks = [];
      let size = 0;
      for await (const chunk of response.body) {
        size += chunk.length;
        if (size > 16 * 1024 * 1024) throw new Error("Image trop volumineuse");
        chunks.push(chunk);
      }
      const bytes = Buffer.concat(chunks);
      const png = bytes
        .subarray(0, 8)
        .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      const jpg = bytes[0] === 255 && bytes[1] === 216;
      const webp =
        bytes.toString("ascii", 0, 4) === "RIFF" &&
        bytes.toString("ascii", 8, 12) === "WEBP";
      if (!png && !jpg && !webp) throw new Error("Format image non reconnu");
      await writeFile(item.file, bytes, { flag: "wx", mode: 0o600 });
      fetched.push(item.id);
    } catch (e) {
      failed.push({ id: item.id, error: e.message });
    }
  }
  return {
    fetched,
    failed,
    available: Object.keys(loadSessionVisuals(programme, dataDir).visuals)
      .length,
  };
}
