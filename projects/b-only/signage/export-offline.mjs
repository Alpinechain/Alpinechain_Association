import {
  mkdir,
  readFile,
  writeFile,
  copyFile,
  realpath,
  constants,
} from "node:fs/promises";
import { homedir } from "node:os";
import { join, resolve, dirname, basename } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { defaultConfig, validateConfig } from "./config.mjs";
import { importProgramme, validateProgramme } from "./programme.mjs";
import { readJSON } from "./storage.mjs";
import { loadSessionVisuals } from "./session-visuals.mjs";

const root = dirname(fileURLToPath(import.meta.url));
export async function exportOffline(
  dataDir,
  output,
  mediaDir = join(dataDir, "media"),
) {
  const programme =
    (await readJSON(join(dataDir, "programme.json"), null)) ||
    importProgramme(
      await readFile(
        new URL("../programme/programme.json", import.meta.url),
        "utf8",
      ),
    );
  validateProgramme(programme);
  const config = validateConfig(
    await readJSON(join(dataDir, "config.json"), defaultConfig),
    programme,
  );
  const omittedOnline = config.playlist
    .filter((s) => s.type === "vimeo")
    .map((s) => s.id);
  config.playlist = config.playlist.filter((s) => s.type !== "vimeo");
  config.hall.onlineEnabled = false;
  const { visuals, routes: visualRoutes } = loadSessionVisuals(
    programme,
    dataDir,
  );
  // Refuse un dossier existant : ne remplace jamais un précédent secours.
  await mkdir(output, { mode: 0o700 });
  await mkdir(join(output, "assets"));
  await mkdir(join(output, "media"));
  await mkdir(join(output, "session-visuals"));
  for (const [route, source] of Object.entries(visualRoutes))
    await copyFile(
      source,
      join(output, "session-visuals", basename(route)),
      constants.COPYFILE_EXCL,
    );
  const snapshot = {
    version: 1,
    revision: 1,
    serverNow: Date.now(),
    demo: false,
    programme,
    visuals,
    config,
  };
  const [template, css, model, app] = await Promise.all(
    ["screen.html", "styles.css", "model.mjs", "app.js"].map((name) =>
      readFile(join(root, "public", name), "utf8"),
    ),
  );
  const js =
    model.replace(/^export /gm, "") +
    '\nconst createVimeo = () => { throw new Error("Secours local : pas de Vimeo"); };\n' +
    app.replace(/^import[\s\S]*?;\s*/gm, "");
  const safeJSON = JSON.stringify(snapshot).replaceAll("<", "\\u003c");
  for (const id of Object.keys(config.screens)) {
    const html = template
      .replace(
        '<body class="screen">',
        `<body class="screen" data-screen="${id}">`,
      )
      .replace(
        /<link\b[^>]*href="\/styles.css"[^>]*>/,
        () => `<style>${css}</style>`,
      )
      .replace(
        /<script\b[^>]*src="\/app.js"[^>]*>\s*<\/script>/,
        () =>
          `<script id="bootstrap" type="application/json">${safeJSON}</script><script type="module">${js}</script>`,
      );
    await writeFile(join(output, `${id}.html`), html, {
      flag: "wx",
      mode: 0o600,
    });
  }
  for (const name of ["demo-image.svg", "demo-logo.svg"])
    await copyFile(
      join(root, "public/assets", name),
      join(output, "assets", name),
      constants.COPYFILE_EXCL,
    );
  const missing = [];
  for (const src of new Set(
    config.playlist
      .filter((s) => s.enabled && s.approved && s.src?.startsWith("/media/"))
      .map((s) => s.src),
  )) {
    const source = join(mediaDir, basename(src));
    try {
      if (dirname(await realpath(source)) !== (await realpath(mediaDir)))
        throw new Error("Lien symbolique hors médias");
      await copyFile(
        source,
        join(output, "media", basename(src)),
        constants.COPYFILE_EXCL,
      );
    } catch (e) {
      if (e.code !== "ENOENT") throw e;
      missing.push(basename(src));
    }
  }
  await writeFile(
    join(output, "LISEZ-MOI.txt"),
    `Secours B-Only — ${new Date().toISOString()}\nOuvrir salle-a.html, salle-b.html ou hall.html avec Chromium.\nConserver assets/, media/ et session-visuals/ dans ce dossier. Aucun serveur ou Internet requis.\nInstantané figé : pas d'administration ni de correction distante. Vérifier l'horloge du lecteur Europe/Paris.\nMédias absents (fallback programme) : ${missing.join(", ") || "aucun"}\n`,
    { flag: "wx" },
  );
  return { output, missing, omittedOnline };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const dataDir = resolve(
    process.env.SIGNAGE_DATA_DIR ||
      join(homedir(), ".local/share/bonly-signage"),
  );
  const output = resolve(
    process.argv[2] || join(dataDir, `secours-${Date.now()}`),
  );
  try {
    console.log(
      JSON.stringify(
        await exportOffline(
          dataDir,
          output,
          process.env.SIGNAGE_MEDIA_DIR || join(dataDir, "media"),
        ),
      ),
    );
  } catch (e) {
    console.error(e.message);
    process.exitCode = 1;
  }
}
