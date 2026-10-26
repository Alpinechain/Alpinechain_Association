import {
  mkdir,
  readFile,
  writeFile,
  rename,
  copyFile,
  constants,
} from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { join } from "node:path";

export async function readJSON(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (e) {
    if (e.code === "ENOENT" && fallback !== undefined)
      return structuredClone(fallback);
    throw e;
  }
}

export async function saveJSON(path, value) {
  const tmp = `${path}.${randomUUID()}.tmp`;
  await writeFile(tmp, JSON.stringify(value, null, 2) + "\n", {
    mode: 0o600,
    flag: "wx",
  });
  await rename(tmp, path);
}

export async function backupConfig(dataDir) {
  await mkdir(join(dataDir, "backups"), { recursive: true, mode: 0o700 });
  try {
    await copyFile(
      join(dataDir, "config.json"),
      join(
        dataDir,
        "backups",
        `${new Date().toISOString().replaceAll(":", "-")}-${randomUUID()}.json`,
      ),
      constants.COPYFILE_EXCL,
    );
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
}
