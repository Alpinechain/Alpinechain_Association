import {
  paymiumSources,
  paymiumLocalSources,
  vimeoEmbed,
} from "./public/vimeo.mjs";

export const defaultConfig = {
  version: 1,
  screens: {
    "salle-a": {
      label: "Salle principale",
      scenario: "room",
      room: "main",
      delayMinutes: 0,
      manual: null,
    },
    "salle-b": {
      label: "Pleb Forum — Workshop",
      scenario: "room",
      room: "workshop",
      delayMinutes: 0,
      manual: null,
    },
    hall: {
      label: "Accueil",
      scenario: "hall",
      room: "main",
      delayMinutes: 0,
      manual: null,
    },
  },
  hall: { paused: false, agendaEvery: 2, onlineEnabled: false, randomOrder: false },
  announcement: null,
  playlist: [
    {
      id: "welcome",
      type: "text",
      title: "Bienvenue à B-Only’26",
      text: "7–9 novembre 2026 · Novotel Annecy Centre",
      durationSeconds: 12,
      enabled: true,
      approved: true,
    },
    {
      id: "demo-image",
      type: "image",
      title: "Image de démonstration",
      src: "/assets/demo-image.svg",
      durationSeconds: 8,
      enabled: true,
      approved: true,
      fit: "contain",
    },
    {
      id: "demo-logo",
      type: "image",
      title: "Logo fictif · Démonstration",
      src: "/assets/demo-logo.svg",
      durationSeconds: 8,
      enabled: true,
      approved: true,
      fit: "contain",
    },
    {
      id: "demo-video",
      type: "video",
      title: "Vidéo de test · À générer",
      src: "/media/demo-test.mp4",
      durationSeconds: 5,
      enabled: true,
      approved: true,
      fit: "contain",
      muted: true,
    },
    ...paymiumSources.map((s) => ({
      ...s,
      type: "vimeo",
      durationSeconds: 120,
      muted: true,
      enabled: false,
      approved: false,
    })),
    ...paymiumLocalSources,
  ],
};

// Chemins locaux fermés ; les deux sources Vimeo sont validées séparément.
export function validMediaPath(src) {
  return (
    typeof src === "string" &&
    (/^\/media\/[a-zA-Z0-9][a-zA-Z0-9_.-]{0,150}\.(mp4|webm|png|jpg|jpeg|webp|gif)$/.test(
      src,
    ) ||
      /^\/assets\/demo-(image|logo)\.svg$/.test(src))
  );
}

const plain = (v) => v && typeof v === "object" && !Array.isArray(v);
const text = (v, max, allowEmpty = false) =>
  typeof v === "string" &&
  v.length <= max &&
  (allowEmpty || v.trim().length > 0);
const integer = (v, min, max) => Number.isInteger(v) && v >= min && v <= max;
const expiry = (v) =>
  typeof v === "string" &&
  /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d{3})?Z$/.test(v) &&
  Number.isFinite(Date.parse(v));

export function validateConfig(input, programme) {
  if (!plain(input) || input.version !== 1 || !plain(input.screens))
    throw new Error("Configuration v1 requise");
  const keys = Object.keys(input.screens);
  if (
    keys.length !== 3 ||
    !["salle-a", "salle-b", "hall"].every((k) => keys.includes(k))
  )
    throw new Error("Trois écrans salle-a, salle-b et hall requis");
  const rooms = new Set(programme.rooms.map((r) => r.id));
  const config = {
    version: 1,
    screens: {},
    hall: null,
    announcement: null,
    playlist: [],
  };
  for (const id of keys) {
    const s = input.screens[id];
    if (
      !plain(s) ||
      !text(s.label, 80) ||
      !["room", "hall"].includes(s.scenario) ||
      !rooms.has(s.room) ||
      !integer(s.delayMinutes, -180, 180)
    )
      throw new Error(`Écran invalide : ${id}`);
    let manual = null;
    if (s.manual !== null) {
      if (
        !plain(s.manual) ||
        !expiry(s.manual.expiresAt) ||
        !programme.entries.some(
          (e) => e.id === s.manual.entryId && e.room === s.room,
        )
      )
        throw new Error(`Sélection manuelle invalide : ${id}`);
      manual = { entryId: s.manual.entryId, expiresAt: s.manual.expiresAt };
    }
    config.screens[id] = {
      label: s.label,
      scenario: s.scenario,
      room: s.room,
      delayMinutes: s.delayMinutes,
      manual,
    };
  }
  if (
    !plain(input.hall) ||
    typeof input.hall.paused !== "boolean" ||
    !integer(input.hall.agendaEvery, 0, 20) ||
    (input.hall.onlineEnabled !== undefined &&
      typeof input.hall.onlineEnabled !== "boolean") ||
    (input.hall.randomOrder !== undefined &&
      typeof input.hall.randomOrder !== "boolean")
  )
    throw new Error("Rotation hall invalide");
  config.hall = {
    paused: input.hall.paused,
    agendaEvery: input.hall.agendaEvery,
    onlineEnabled: input.hall.onlineEnabled ?? false,
    randomOrder: input.hall.randomOrder ?? false,
  };
  if (input.announcement !== null) {
    if (
      !plain(input.announcement) ||
      !text(input.announcement.text, 240) ||
      !expiry(input.announcement.expiresAt)
    )
      throw new Error("Annonce invalide");
    config.announcement = {
      text: input.announcement.text,
      expiresAt: input.announcement.expiresAt,
    };
  }
  if (!Array.isArray(input.playlist) || input.playlist.length > 100)
    throw new Error("Playlist trop longue");
  const ids = new Set();
  for (const s of input.playlist) {
    if (
      !plain(s) ||
      !/^[a-z0-9-]{1,60}$/.test(s.id) ||
      ids.has(s.id) ||
      !["text", "image", "video", "vimeo", "agenda"].includes(s.type) ||
      !text(s.title, 160) ||
      !integer(s.durationSeconds, 3, 3600) ||
      typeof s.enabled !== "boolean" ||
      typeof s.approved !== "boolean"
    )
      throw new Error("Diapositive invalide");
    ids.add(s.id);
    const item = {
      id: s.id,
      type: s.type,
      title: s.title,
      durationSeconds: s.durationSeconds,
      enabled: s.enabled,
      approved: s.approved,
    };
    if (s.type === "text") {
      if (!text(s.text, 500, true)) throw new Error("Texte invalide");
      item.text = s.text;
    }
    if (["image", "video"].includes(s.type)) {
      if (!validMediaPath(s.src) || !["contain", "cover"].includes(s.fit))
        throw new Error("Média invalide");
      if (s.type === "video" && !/\.(mp4|webm)$/.test(s.src))
        throw new Error("Extension vidéo invalide");
      if (s.type === "image" && /\.(mp4|webm)$/.test(s.src))
        throw new Error("Extension image invalide");
      item.src = s.src;
      item.fit = s.fit;
      if (s.type === "video") {
        if (typeof s.muted !== "boolean") throw new Error("Son invalide");
        item.muted = s.muted;
      }
    }
    if (s.type === "vimeo") {
      vimeoEmbed(s.sourceUrl);
      if (typeof s.muted !== "boolean") throw new Error("Son Vimeo invalide");
      item.sourceUrl = s.sourceUrl;
      item.muted = s.muted;
    }
    config.playlist.push(item);
  }
  return config;
}
