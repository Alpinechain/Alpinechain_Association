import { createHash } from "node:crypto";
import { zonedEpoch, timezone } from "./public/model.mjs";

export function importProgramme(source) {
  const raw = typeof source === "string" ? JSON.parse(source) : source;
  if (
    raw.publication?.state !== "published" ||
    raw.event?.timezone !== timezone
  )
    throw new Error("Programme publié Europe/Paris requis");
  const data = {
    event: { name: raw.event.name, location: raw.event.location, timezone },
    publication: { state: "published", updatedAt: raw.publication.updatedAt },
    rooms: raw.rooms.map((r) => ({ id: r.id, name: r.name })),
    days: raw.days.map((d) => ({ date: d.date, label: d.label })),
    entries: raw.entries
      .filter(
        (e) =>
          e.visibility === "public" &&
          ["confirmed", "fixed"].includes(e.status),
      )
      .map(({ id, date, start, end, room, status, title, speakers }) => ({
        id,
        date,
        start,
        end,
        room,
        status,
        visibility: "public",
        title,
        speakers,
      })),
    source: {
      path: "projects/b-only/programme/programme.json",
      sha256: createHash("sha256")
        .update(typeof source === "string" ? source : JSON.stringify(source))
        .digest("hex"),
    },
  };
  validateProgramme(data);
  return data;
}

export function validateProgramme(data) {
  if (
    data.event?.timezone !== timezone ||
    data.publication?.state !== "published"
  )
    throw new Error("Programme non validé");
  if (
    !Array.isArray(data.entries) ||
    !data.entries.length ||
    !Array.isArray(data.rooms) ||
    !data.rooms.length
  )
    throw new Error("Programme vide");
  const ids = new Set();
  const rooms = new Set(data.rooms.map((r) => r.id));
  const dates = new Set(data.days.map((d) => d.date));
  for (const e of data.entries) {
    if (
      !e.id ||
      ids.has(e.id) ||
      !rooms.has(e.room) ||
      !dates.has(e.date) ||
      !e.title ||
      !Array.isArray(e.speakers) ||
      e.visibility !== "public" ||
      !["confirmed", "fixed"].includes(e.status)
    )
      throw new Error("Créneau non public ou invalide");
    ids.add(e.id);
    if (zonedEpoch(e.date, e.start) >= zonedEpoch(e.date, e.end))
      throw new Error("Durée invalide");
  }
  for (const room of rooms) {
    const entries = data.entries
      .filter((e) => e.room === room)
      .sort(
        (a, b) => zonedEpoch(a.date, a.start) - zonedEpoch(b.date, b.start),
      );
    for (let i = 1; i < entries.length; i++)
      if (
        zonedEpoch(entries[i].date, entries[i].start) <
        zonedEpoch(entries[i - 1].date, entries[i - 1].end)
      )
        throw new Error(`Chevauchement dans ${room}`);
  }
  return data;
}
