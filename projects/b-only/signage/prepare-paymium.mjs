import { spawn } from "node:child_process";
import { mkdir, stat, open } from "node:fs/promises";
import { createHash } from "node:crypto";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const sources = process.argv.slice(2);
if (sources.length !== 2)
  throw new Error(
    "Usage : node prepare-paymium.mjs /source/b2b.mp4 /source/b2c.mp4",
  );
const dataDir = resolve(
  process.env.SIGNAGE_DATA_DIR || join(homedir(), ".local/share/bonly-signage"),
);
const mediaDir = resolve(
  process.env.SIGNAGE_MEDIA_DIR || join(dataDir, "media"),
);
await mkdir(mediaDir, { recursive: true, mode: 0o700 });
for (const [index, source] of sources.entries()) {
  const target = join(
    mediaDir,
    `paymium-${index === 0 ? "b2b" : "b2c"}-v1-1080p.mp4`,
  );
  if (!(await stat(source)).isFile()) throw new Error("Source vidéo absente");
  await new Promise((done, reject) => {
    const ffmpeg = spawn(
      "ffmpeg",
      [
        "-n",
        "-hide_banner",
        "-loglevel",
        "error",
        "-i",
        resolve(source),
        "-vf",
        "scale=1920:-2",
        "-c:v",
        "libx264",
        "-preset",
        "veryfast",
        "-crf",
        "23",
        "-c:a",
        "aac",
        "-b:a",
        "128k",
        "-movflags",
        "+faststart",
        "-threads",
        "2",
        target,
      ],
      { stdio: ["ignore", "ignore", "inherit"] },
    );
    ffmpeg.on("error", reject);
    ffmpeg.on("exit", (code) =>
      code === 0
        ? done()
        : reject(
            new Error(
              `Encodage interrompu (${code}) ; aucun fichier existant remplacé`,
            ),
          ),
    );
  });
  const hash = createHash("sha256");
  const file = await open(target);
  for await (const block of file.createReadStream()) hash.update(block);
  console.log(
    JSON.stringify({
      file: target,
      bytes: (await stat(target)).size,
      sha256: hash.digest("hex"),
    }),
  );
}
