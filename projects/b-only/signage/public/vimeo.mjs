// Lecteur officiel intégré, sans extraction de flux ni copie du fichier Vimeo.
export const paymiumSources = [
  {
    id: "paymium-b2b",
    title: "Paymium · B2B · Priorité quiz",
    sourceUrl: "https://vimeo.com/1237252706/a8cfeb9722?share=copy",
  },
  {
    id: "paymium-b2c",
    title: "Paymium · B2C · Complément",
    sourceUrl: "https://vimeo.com/1237252731/9246571fc3?share=copy",
  },
];

export const paymiumLocalSources = paymiumSources.map((source, index) => ({
  id: `${source.id}-local`,
  title: `${source.title} · Fichier local`,
  type: "video",
  src: `/media/${source.id}-v1-1080p.mp4`,
  durationSeconds: index === 0 ? 98 : 72,
  fit: "contain",
  muted: true,
  enabled: false,
  approved: false,
}));

export function vimeoEmbed(sourceUrl, muted = true, autoplay = true) {
  const known = paymiumSources.find((s) => s.sourceUrl === sourceUrl);
  if (!known)
    throw new Error("Seuls les deux liens Paymium reçus sont autorisés");
  const [, id, hash] = new URL(sourceUrl).pathname.split("/");
  const url = new URL(`https://player.vimeo.com/video/${id}`);
  url.search = new URLSearchParams({
    h: hash,
    autoplay: autoplay ? "1" : "0",
    muted: muted ? "1" : "0",
    loop: "0",
    dnt: "1",
    playsinline: "1",
    controls: "1",
  });
  return url.href;
}

export function createVimeo(parent, options) {
  const frame = document.createElement("iframe");
  frame.className = "vimeo-frame";
  frame.title = options.title || "Paymium · vidéo en ligne";
  frame.allow = "autoplay; fullscreen; picture-in-picture";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  const origin = "https://player.vimeo.com";
  let disposed = false,
    ready = false;
  const send = (method, value) => {
    if (!disposed)
      frame.contentWindow?.postMessage(
        value === undefined ? { method } : { method, value },
        origin,
      );
  };
  const subscribe = () => {
    if (ready) return;
    ready = true;
    for (const event of ["ended", "error", "play", "timeupdate"])
      send("addEventListener", event);
    send("getDuration");
    options.onReady?.();
  };
  const receive = (event) => {
    if (
      disposed ||
      event.origin !== origin ||
      event.source !== frame.contentWindow
    )
      return;
    let data;
    try {
      data =
        typeof event.data === "string" ? JSON.parse(event.data) : event.data;
    } catch {
      return;
    }
    if (!data || typeof data !== "object") return;
    if (data.event === "ready" || data.method === "ping") subscribe();
    if (data.event === "ended") options.onEnded?.();
    if (data.event === "error") options.onError?.();
    if (data.event === "play") options.onPlay?.();
    if (data.event === "timeupdate") options.onProgress?.(data.data);
    if (data.method === "getDuration" && Number.isFinite(data.value))
      options.onDuration?.(data.value);
  };
  window.addEventListener("message", receive);
  frame.onload = () => send("ping");
  frame.onerror = () => options.onError?.();
  frame.src = vimeoEmbed(
    options.sourceUrl,
    options.muted ?? true,
    options.autoplay ?? true,
  );
  parent.append(frame);
  return {
    frame,
    pause: () => send("pause"),
    play: () => send("play"),
    destroy: () => {
      disposed = true;
      window.removeEventListener("message", receive);
      frame.remove();
    },
  };
}
