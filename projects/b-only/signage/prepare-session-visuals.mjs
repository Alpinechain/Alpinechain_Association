import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { prepareSessionVisuals } from "./session-visuals.mjs";
const dataDir = resolve(
  process.env.SIGNAGE_DATA_DIR || join(homedir(), ".local/share/bonly-signage"),
);
const result = await prepareSessionVisuals(dataDir);
console.log(JSON.stringify(result, null, 2));
if (result.failed.length) process.exitCode = 1;
