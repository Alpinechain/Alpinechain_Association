import { readFile, mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { importProgramme } from "./programme.mjs";
import { saveJSON } from "./storage.mjs";

const dataDir = resolve(
  process.env.SIGNAGE_DATA_DIR || join(homedir(), ".local/share/bonly-signage"),
);
await mkdir(dataDir, { recursive: true, mode: 0o700 });
const source =
  process.argv[2] || new URL("../programme/programme.json", import.meta.url);
const programme = importProgramme(await readFile(source, "utf8"));
// Import explicite seulement ; aucun changement de la source officielle.
await saveJSON(join(dataDir, "programme.json"), programme);
console.log(
  `Import validé : ${programme.entries.length} créneaux · ${programme.source.sha256}`,
);
