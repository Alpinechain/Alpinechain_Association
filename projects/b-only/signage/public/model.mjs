// Modèle commun au serveur, aux navigateurs et à l'export de secours.
export const timezone = "Europe/Paris";
const partsFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: timezone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

export function localParts(epoch) {
  return Object.fromEntries(
    partsFormatter.formatToParts(epoch).map((p) => [p.type, p.value]),
  );
}

export function localDate(epoch) {
  const p = localParts(epoch);
  return `${p.year}-${p.month}-${p.day}`;
}

export function zonedEpoch(date, time) {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !/^([01]\d|2[0-3]):[0-5]\d$/.test(time)
  )
    throw new Error("Date ou heure invalide");
  const target = Date.parse(`${date}T${time}:00Z`);
  let guess = target;
  for (let i = 0; i < 4; i++) {
    const p = localParts(guess);
    const rendered = Date.parse(
      `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}Z`,
    );
    guess += target - rendered;
  }
  const p = localParts(guess);
  if (
    `${p.year}-${p.month}-${p.day}` !== date ||
    `${p.hour}:${p.minute}` !== time
  )
    throw new Error("Heure locale inexistante");
  return guess;
}

export function roomState(programme, screen, now) {
  const shift = screen.delayMinutes * 60000;
  const entries = programme.entries
    .filter((e) => e.room === screen.room)
    .map((e) => ({
      ...e,
      startMs: zonedEpoch(e.date, e.start) + shift,
      endMs: zonedEpoch(e.date, e.end) + shift,
    }))
    .sort((a, b) => a.startMs - b.startMs);
  const active = entries.filter((e) => e.startMs <= now && e.endMs > now);
  const manual =
    screen.manual && Date.parse(screen.manual.expiresAt) > now
      ? entries.find((e) => e.id === screen.manual.entryId)
      : null;
  const current = manual || active[0] || null;
  const next =
    entries.find(
      (e) =>
        e.id !== current?.id &&
        (manual
          ? e.startMs > current.startMs && e.endMs > now
          : e.startMs > now),
    ) || null;
  const day = localDate(now);
  const today = entries.filter((e) => localDate(e.startMs) === day);
  let phase = current
    ? current.status === "fixed"
      ? "fixed"
      : "session"
    : "gap";
  if (!current && (!entries.length || !today.length))
    phase = next ? "before" : "empty";
  else if (!current && now < today[0].startMs) phase = "before";
  else if (!current && now >= today.at(-1).endMs) phase = "finished";
  return {
    current,
    next,
    phase,
    manual: Boolean(manual),
    overlap: active.length > 1,
  };
}

export function activeAnnouncement(config, now) {
  return config.announcement && Date.parse(config.announcement.expiresAt) > now
    ? config.announcement.text
    : "";
}

export function hallSlides(
  config,
  online = true,
  random = Math.random,
  previousLastId = null,
) {
  const slides = config.playlist.filter(
    (s) =>
      s.enabled &&
      s.approved &&
      (s.type !== "vimeo" || (online && config.hall.onlineEnabled)),
  );
  if (config.hall.randomOrder && slides.length > 1) {
    for (let i = slides.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [slides[i], slides[j]] = [slides[j], slides[i]];
    }
    // Avoid immediately repeating the last item of the previous cycle.
    if (slides[0].id === previousLastId)
      [slides[0], slides[1]] = [slides[1], slides[0]];
  }
  const every = config.hall.agendaEvery;
  const result = [];
  for (let i = 0; i < slides.length; i++) {
    result.push(slides[i]);
    if (every && (i + 1) % every === 0)
      result.push({
        id: `agenda-${i}`,
        type: "agenda",
        title: "En ce moment · À suivre",
        durationSeconds: 15,
      });
  }
  return result.length
    ? result
    : [
        {
          id: "fallback",
          type: "agenda",
          title: "En ce moment · À suivre",
          durationSeconds: 15,
        },
      ];
}
