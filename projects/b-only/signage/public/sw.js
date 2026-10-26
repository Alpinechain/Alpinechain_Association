const shellCache = "bonly-shell-v1";
const shell = [
  "/",
  "/screen/salle-a",
  "/screen/salle-b",
  "/screen/hall",
  "/app.js",
  "/model.mjs",
  "/vimeo.mjs",
  "/styles.css",
  "/assets/demo-image.svg",
  "/assets/demo-logo.svg",
];
self.addEventListener("install", (event) =>
  event.waitUntil(
    caches
      .open(shellCache)
      .then(async (cache) => {
        await cache.addAll(shell);
        // Un hôte public redirige sa racine vers un écran. Une Response
        // marquée redirected ne peut pas servir de navigation de secours.
        const root = await cache.match("/");
        if (root?.redirected)
          await cache.put(
            "/",
            new Response(await root.arrayBuffer(), {
              status: 200,
              headers: root.headers,
            }),
          );
      })
      .then(() => self.skipWaiting()),
  ),
);
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || event.request.method !== "GET")
    return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/admin"))
    return;
  if (!shell.includes(url.pathname)) return;
  event.respondWith(
    fetch(event.request).catch(async () => {
      return (
        (await (await caches.open(shellCache)).match(url.pathname)) ||
        Response.error()
      );
    }),
  );
});
