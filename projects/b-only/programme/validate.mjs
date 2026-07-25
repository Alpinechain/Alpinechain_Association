import { readFile } from "node:fs/promises";

const programmeUrl = new URL("./programme.json", import.meta.url);
const data = JSON.parse(await readFile(programmeUrl, "utf8"));

const statuses = new Set(["free", "option", "reserved", "confirmed", "fixed", "cancelled"]);
const visibilities = new Set(["internal", "public"]);
const rooms = new Set(data.rooms.map((room) => room.id));
const days = new Set(data.days.map((day) => day.date));
const ids = new Set();
const errors = [];

if (!["draft", "published"].includes(data.publication.state)) {
  errors.push(`État de publication inconnu : ${data.publication.state}`);
}
if (!/^[+-](0\d|1[0-4]):[0-5]\d$/.test(data.event.utcOffset)) {
  errors.push(`Décalage UTC invalide : ${data.event.utcOffset}`);
}

function minutes(time) {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(time);
  if (!match) return null;
  return Number(match[1]) * 60 + Number(match[2]);
}

for (const entry of data.entries) {
  if (!entry.id || ids.has(entry.id)) errors.push(`Identifiant absent ou dupliqué : ${entry.id}`);
  ids.add(entry.id);

  if (!days.has(entry.date)) errors.push(`${entry.id}: date inconnue ${entry.date}`);
  if (!rooms.has(entry.room)) errors.push(`${entry.id}: salle inconnue ${entry.room}`);
  if (!statuses.has(entry.status)) errors.push(`${entry.id}: statut inconnu ${entry.status}`);
  if (!visibilities.has(entry.visibility)) {
    errors.push(`${entry.id}: visibilité inconnue ${entry.visibility}`);
  }
  if (!entry.title) errors.push(`${entry.id}: titre manquant`);
  if (!Array.isArray(entry.speakers)) errors.push(`${entry.id}: speakers doit être un tableau`);

  const start = minutes(entry.start);
  const end = minutes(entry.end);
  if (start === null || end === null || start >= end) {
    errors.push(`${entry.id}: horaire invalide ${entry.start}-${entry.end}`);
  }

  if (entry.visibility === "public" && !["confirmed", "fixed"].includes(entry.status)) {
    errors.push(`${entry.id}: une entrée publique doit être confirmée ou fixe`);
  }
}

for (const room of rooms) {
  for (const day of days) {
    const entries = data.entries
      .filter((entry) => entry.room === room && entry.date === day && entry.status !== "cancelled")
      .sort((a, b) => minutes(a.start) - minutes(b.start));

    for (let index = 1; index < entries.length; index += 1) {
      const previous = entries[index - 1];
      const current = entries[index];
      if (minutes(current.start) < minutes(previous.end)) {
        errors.push(
          `${day}/${room}: chevauchement entre ${previous.id} et ${current.id}`
        );
      }
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Programme valide : ${data.entries.length} entrées, ${data.days.length} jours.`);
}
