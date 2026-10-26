import { roomState, activeAnnouncement, hallSlides } from "/model.mjs";
import { createVimeo } from "/vimeo.mjs";

const $ = (id) => document.getElementById(id);
const boot = document.getElementById("bootstrap");
const offlineExport = Boolean(boot);
let screenId =
  document.body.dataset.screen || location.pathname.split("/").at(-1);
const cacheKey = "bonly-signage-state-v1";
let state,
  receivedAt = 0,
  anchor = 0,
  lastOnline = 0,
  demoOffset = null;
let hallIndex = 0,
  hallDeadline = 0,
  slideKey = "",
  renderedKey = "",
  rotationKey = "",
  retryAfter = new Map();
let playingVideo = null,
  pausedAt = 0;
let vimeoPlayer = null;
let busy = false;
let client =
  globalThis.crypto?.randomUUID?.() ||
  `player-${Math.random().toString(36).slice(2)}`;
try {
  client = sessionStorage.getItem("bonly-client") || client;
  sessionStorage.setItem("bonly-client", client);
} catch {
  /* secours file:// sans stockage */
}
const clockFormat = new Intl.DateTimeFormat("fr-FR", {
  timeZone: "Europe/Paris",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
const hourFormat = new Intl.DateTimeFormat("fr-FR", {
  timeZone: "Europe/Paris",
  hour: "2-digit",
  minute: "2-digit",
});
const dayFormat = new Intl.DateTimeFormat("fr-FR", {
  timeZone: "Europe/Paris",
  weekday: "long",
  day: "numeric",
  month: "long",
});

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function accept(data, savedAt = Date.now(), online = true) {
  if (!screenId && data?.screenId) screenId = data.screenId;
  if (
    data?.version !== 1 ||
    !data.config?.screens?.[screenId] ||
    !data.programme?.entries?.length
  )
    throw new Error("Instantané invalide");
  state = data;
  anchor = performance.now();
  receivedAt = online
    ? data.serverNow
    : data.serverNow + Math.max(0, Date.now() - savedAt);
  if (online) lastOnline = Date.now();
  if (demoOffset === null && data.demo) {
    const at = new URLSearchParams(location.search).get("at");
    const value = at && /[zZ]|[+-]\d\d:\d\d$/.test(at) ? Date.parse(at) : NaN;
    demoOffset = Number.isFinite(value) ? value - receivedAt : 0;
  }
}
function now() {
  return receivedAt + performance.now() - anchor + (demoOffset || 0);
}
function saveState(data) {
  try {
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ savedAt: Date.now(), data }),
    );
  } catch {
    /* stockage plein : la page continue en mémoire */
  }
}
function setSync(text, offline = false) {
  $("sync").textContent = text;
  $("sync").classList.toggle("offline", offline);
}

async function refresh() {
  if (offlineExport || busy) return;
  busy = true;
  try {
    const response = await fetch("/api/state", {
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) throw new Error("Serveur indisponible");
    const data = await response.json();
    accept(data);
    saveState(data);
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ screen: screenId, client }),
      signal: AbortSignal.timeout(3000),
    }).catch(() => {});
    setSync(`Synchronisé · ${clockFormat.format(Date.now())}`);
    cacheMedia(data).catch(() => {});
  } catch {
    setSync(
      state
        ? "Hors connexion · programme conservé"
        : "Serveur indisponible · ouvrir le secours local",
      true,
    );
  } finally {
    busy = false;
  }
}

// Cache Storage n'est disponible que sur HTTPS de confiance ou localhost.
const cachedRevision = new Set();
let caching = false;
async function cacheMedia(data) {
  if (!("caches" in globalThis) || cachedRevision.has(data.revision) || caching)
    return;
  caching = true;
  try {
    const media = [
      ...Object.values(data.visuals || {}),
      ...data.config.playlist
        .filter((s) => s.approved && s.enabled && s.src)
        .map((s) => s.src),
    ];
    const cache = await caches.open("bonly-media-v1");
    let complete = true;
    for (const src of new Set(media)) {
      if (await cache.match(src)) continue;
      const response = await fetch(src, {
        cache: "no-cache",
        signal: AbortSignal.timeout(120000),
      });
      if (response.ok && response.status === 200)
        await cache.put(src, response);
      else complete = false;
    }
    if (complete) cachedRevision.add(data.revision);
  } finally {
    caching = false;
  }
}
async function localMedia(src) {
  if (offlineExport) return src.replace(/^\//, "");
  if (!("caches" in globalThis)) return src;
  // Une URL Blob permet la lecture vidéo et les plages sans dépendre du serveur.
  try {
    const match = await (await caches.open("bonly-media-v1")).match(src);
    if (match) return URL.createObjectURL(await match.blob());
  } catch {
    /* le média distant garde son fallback */
  }
  return src;
}
function clearMedia() {
  if (vimeoPlayer) {
    vimeoPlayer.handle?.destroy();
    vimeoPlayer = null;
  }
  if (playingVideo) {
    playingVideo.pause();
    playingVideo.removeAttribute("src");
    playingVideo.load();
    playingVideo = null;
  }
  for (const node of $("display").querySelectorAll("[data-blob]"))
    URL.revokeObjectURL(node.dataset.blob);
}
function sessionCard(label, entry, screen, next = false) {
  const section = el("section", next ? "session next" : "session current");
  section.append(el("p", "eyebrow", label));
  const content = el("div", "session-content");
  const copy = el("div", "session-copy");
  content.append(copy);
  section.append(content);
  if (entry) {
    copy.append(el(next ? "h2" : "h1", "session-title", entry.title));
    if (entry.speakers.length)
      copy.append(el("p", "speakers", entry.speakers.join(" · ")));
    const date = dayFormat.format(entry.startMs);
    copy.append(
      el(
        "p",
        "slot-time",
        `${date} · ${hourFormat.format(entry.startMs)} — ${hourFormat.format(entry.endMs)}`,
      ),
    );
    const src = state.visuals?.[entry.id];
    if (src) {
      const img = el("img", "session-visual");
      img.alt = `Vignette · ${entry.title}`;
      img.decoding = "async";
      content.classList.add("with-visual");
      content.append(img);
      img.onload = fitTitles;
      img.onerror = () => {
        if (img.dataset.blob) URL.revokeObjectURL(img.dataset.blob);
        img.remove();
        content.classList.remove("with-visual");
        fitTitles();
      };
      localMedia(src).then((url) => {
        if (!img.isConnected) {
          if (url.startsWith("blob:")) URL.revokeObjectURL(url);
          return;
        }
        if (url.startsWith("blob:")) img.dataset.blob = url;
        img.src = url;
      });
    }
  } else {
    copy.append(
      el(
        next ? "h2" : "h1",
        "session-title",
        next ? "Aucun autre créneau annoncé" : "Bienvenue à B-Only’26",
      ),
    );
  }
  return section;
}
function drawRoom(screen, time) {
  const room = roomState(state.programme, screen, time);
  const key = JSON.stringify([
    screen,
    room.current?.id,
    room.next?.id,
    room.phase,
    room.manual,
    room.overlap,
    state.visuals?.[room.current?.id],
    state.visuals?.[room.next?.id],
  ]);
  if (key === renderedKey) return;
  renderedKey = key;
  clearMedia();
  slideKey = "";
  const label = room.manual
    ? "SÉLECTION RÉGIE"
    : room.phase === "fixed"
      ? "EN CE MOMENT"
      : "EN COURS";
  const display = $("display");
  display.className = "room-display";
  const current = sessionCard(label, room.current, screen);
  if (!room.current) {
    const states = {
      before: "Avant ouverture",
      gap: "Pause entre deux créneaux",
      finished: "Fin de journée · Merci !",
      empty: "Aucun créneau annoncé",
    };
    current.querySelector("h1").textContent = states[room.phase];
  }
  if (screen.delayMinutes)
    current.append(
      el(
        "p",
        "delay",
        `Horaires ajustés par la régie : ${screen.delayMinutes > 0 ? "+" : ""}${screen.delayMinutes} min`,
      ),
    );
  if (room.overlap)
    current.append(el("p", "delay", "Chevauchement · vérifier avec la régie"));
  display.replaceChildren(
    current,
    sessionCard("À SUIVRE", room.next, screen, true),
  );
  fitTitles();
}
function drawAgenda(node, time) {
  node.append(el("p", "eyebrow", "LE PROGRAMME · MAINTENANT ET ENSUITE"));
  for (const room of state.programme.rooms) {
    const screen = Object.values(state.config.screens).find(
      (s) => s.scenario === "room" && s.room === room.id,
    ) || { room: room.id, delayMinutes: 0, manual: null };
    const status = roomState(state.programme, screen, time);
    const block = el("section", "agenda-room");
    block.append(el("h2", "", room.name));
    for (const [label, entry] of [
      ["En cours", status.current],
      ["À suivre", status.next],
    ]) {
      if (entry)
        block.append(
          el(
            "p",
            "",
            `${label} · ${hourFormat.format(entry.startMs)} — ${entry.title}${entry.speakers.length ? " · " + entry.speakers.join(", ") : ""}`,
          ),
        );
    }
    if (!status.current && !status.next)
      block.append(el("p", "", "Aucun créneau annoncé"));
    node.append(block);
  }
}
function advanceHall() {
  hallIndex++;
  hallDeadline = 0;
  slideKey = "";
}
async function showSlide(slide, time, key) {
  clearMedia();
  const display = $("display");
  display.className = "hall-display";
  const section = el("section", `slide slide-${slide.type}`);
  if (slide.type === "agenda") drawAgenda(section, time);
  else if (slide.type === "text")
    section.append(
      el("p", "eyebrow", "B-ONLY’26 · INFOS"),
      el("h1", "", slide.title),
      el("p", "slide-text", slide.text),
    );
  else if (slide.type === "vimeo") {
    section.append(el("p", "eyebrow", `${slide.title} · EN LIGNE`));
    display.replaceChildren(section);
    const fail = () => {
      if (key !== slideKey) return;
      vimeoPlayer?.handle?.destroy();
      vimeoPlayer = null;
      section.replaceChildren(
        el("h1", "", "B-Only’26"),
        el("p", "slide-text", "Vimeo indisponible · reprise du programme"),
      );
      retryAfter.set(slide.id, performance.now() + 60000);
      hallDeadline = performance.now() + 3000;
    };
    vimeoPlayer = {
      lastProgress: performance.now(),
      seconds: -1,
      duration: slide.durationSeconds,
      started: false,
      fail,
    };
    hallDeadline = performance.now() + 12000;
    vimeoPlayer.handle = createVimeo(section, {
      sourceUrl: slide.sourceUrl,
      muted: slide.muted,
      title: slide.title,
      onEnded: () => {
        if (key === slideKey) advanceHall();
      },
      onError: fail,
      onDuration: (duration) => {
        if (key !== slideKey || !vimeoPlayer) return;
        vimeoPlayer.duration = Math.min(3600, Math.max(1, duration));
        if (vimeoPlayer.started)
          hallDeadline =
            performance.now() +
            Math.max(
              1,
              vimeoPlayer.duration - Math.max(0, vimeoPlayer.seconds),
            ) *
              1000 +
            5000;
      },
      onPlay: () => {
        if (key !== slideKey || !vimeoPlayer) return;
        vimeoPlayer.started = true;
        vimeoPlayer.lastProgress = performance.now();
        hallDeadline = performance.now() + vimeoPlayer.duration * 1000 + 5000;
        if (state.config.hall.paused) vimeoPlayer.handle.pause();
      },
      onProgress: (data) => {
        if (
          key === slideKey &&
          vimeoPlayer &&
          Number.isFinite(data?.seconds) &&
          data.seconds > vimeoPlayer.seconds
        ) {
          if (!vimeoPlayer.started && data.seconds > 0) {
            vimeoPlayer.started = true;
            hallDeadline =
              performance.now() +
              Math.max(1, vimeoPlayer.duration - data.seconds) * 1000 +
              5000;
          }
          vimeoPlayer.seconds = data.seconds;
          vimeoPlayer.lastProgress = performance.now();
        }
      },
    });
    return;
  } else {
    section.append(el("p", "eyebrow", slide.title));
    const media = el(
      slide.type === "video" ? "video" : "img",
      `media ${slide.fit}`,
    );
    if (slide.type === "image") media.alt = slide.title;
    section.append(media);
    display.replaceChildren(section);
    const src = await localMedia(slide.src);
    if (key !== slideKey) {
      if (src.startsWith("blob:")) URL.revokeObjectURL(src);
      return;
    }
    if (src.startsWith("blob:")) media.dataset.blob = src;
    const fail = () => {
      if (key !== slideKey) return;
      if (media.dataset.blob) URL.revokeObjectURL(media.dataset.blob);
      media.remove();
      playingVideo = null;
      section.append(
        el("h1", "", "B-Only’26"),
        el("p", "slide-text", "Média indisponible · reprise du programme"),
      );
      retryAfter.set(slide.id, performance.now() + 60000);
      hallDeadline = performance.now() + 3000;
    };
    media.onerror = fail;
    if (slide.type === "video") {
      media.muted = slide.muted;
      media.playsInline = true;
      media.preload = "auto";
      playingVideo = media;
      media.onended = () => {
        if (key === slideKey) advanceHall();
      };
      media.onloadedmetadata = () => {
        if (key === slideKey && Number.isFinite(media.duration))
          hallDeadline =
            performance.now() + Math.min(3600000, media.duration * 1000) + 5000;
      };
      media.onplaying = () => {
        media.dataset.started = "yes";
      };
      media.src = src;
      media.play().catch(fail);
      if (state.config.hall.paused) media.pause();
    } else media.src = src;
    fitTitles();
    return;
  }
  display.replaceChildren(section);
  fitTitles();
}
function drawHall(time) {
  renderedKey = "";
  const rotation =
    JSON.stringify(state.config.playlist) +
    JSON.stringify(state.config.hall.agendaEvery);
  if (rotation !== rotationKey) {
    rotationKey = rotation;
    hallIndex = 0;
    hallDeadline = 0;
    slideKey = "";
  }
  const slides = hallSlides(
    state.config,
    !offlineExport && navigator.onLine,
  ).filter((s) => (retryAfter.get(s.id) || 0) <= performance.now());
  const usable = slides.length
    ? slides
    : [
        {
          id: "retry-fallback",
          type: "agenda",
          title: "Le programme",
          durationSeconds: 15,
        },
      ];
  if (state.config.hall.paused) {
    if (!pausedAt) {
      pausedAt = performance.now();
      playingVideo?.pause();
      vimeoPlayer?.handle.pause();
    }
  } else if (pausedAt) {
    hallDeadline += performance.now() - pausedAt;
    pausedAt = 0;
    playingVideo?.play().catch(() => advanceHall());
    if (vimeoPlayer) {
      vimeoPlayer.lastProgress = performance.now();
      vimeoPlayer.handle.play();
    }
  }
  if (
    vimeoPlayer &&
    !state.config.hall.paused &&
    performance.now() - vimeoPlayer.lastProgress >
      (vimeoPlayer.started ? 15000 : 12000)
  )
    vimeoPlayer.fail();
  if (
    hallDeadline &&
    performance.now() >= hallDeadline &&
    !state.config.hall.paused
  )
    advanceHall();
  const slide = usable[hallIndex % usable.length];
  const agendaTick = slide.type === "agenda" ? Math.floor(time / 10000) : "";
  const key = `${rotation}/${hallIndex}/${slide.id}/${agendaTick}`;
  if (key !== slideKey) {
    slideKey = key;
    if (!hallDeadline)
      hallDeadline =
        performance.now() +
        slide.durationSeconds * 1000 +
        (slide.type === "video" ? 10000 : 0);
    showSlide(slide, time, key).catch(() => advanceHall());
  }
}
function fitTitles() {
  requestAnimationFrame(() => {
    for (const title of document.querySelectorAll(
      ".session-title, .slide h1",
    )) {
      title.style.fontSize = "";
      let size = parseFloat(getComputedStyle(title).fontSize);
      while (
        (title.scrollHeight > title.clientHeight + 1 ||
          title.scrollWidth > title.clientWidth + 1) &&
        size > 22
      )
        title.style.fontSize = `${--size}px`;
    }
  });
}
function tick() {
  if (!state) return;
  const time = now();
  const screen = state.config.screens[screenId];
  $("clock").textContent = clockFormat.format(time);
  $("screen-name").textContent = screen.label;
  $("demo").hidden = !state.demo;
  if (state.demo)
    $("demo").textContent = demoOffset
      ? "DÉMONSTRATION · HORLOGE SIMULÉE"
      : "DÉMONSTRATION · MÉDIAS FICTIFS";
  const announcement = activeAnnouncement(state.config, time);
  $("announcement").hidden = !announcement;
  $("announcement").textContent = announcement;
  document.body.classList.toggle("has-announcement", Boolean(announcement));
  if (screen.scenario === "room") {
    pausedAt = 0;
    hallDeadline = 0;
    drawRoom(screen, time);
  } else drawHall(time);
  if (offlineExport)
    setSync("SECOURS LOCAL · instantané sans pilotage distant", true);
  else if (lastOnline && Date.now() - lastOnline > 15000)
    setSync("Hors connexion · programme conservé", true);
}

$("fullscreen").addEventListener("click", () =>
  document.documentElement.requestFullscreen?.().catch(() => {}),
);
window.addEventListener("resize", fitTitles);
if (boot) {
  try {
    const data = JSON.parse(boot.textContent);
    data.serverNow = Date.now();
    accept(data, Date.now(), false);
  } catch {
    setSync("Secours invalide", true);
  }
} else {
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    if (cached) accept(cached.data, cached.savedAt, false);
  } catch {
    /* première ouverture */
  }
  refresh();
  setInterval(refresh, 5000);
  if ("serviceWorker" in navigator)
    navigator.serviceWorker.register("/sw.js").catch(() => {});
}
tick();
setInterval(tick, 500);
