import { paymiumSources, paymiumLocalSources, createVimeo } from "/vimeo.mjs";

const $ = (id) => document.getElementById(id);
let previewPlayer = null;
let snapshot;
let saving = false;
const datetime = (value) =>
  new Date(value).toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
function element(tag, text) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  return node;
}
function field(parent, label, input) {
  const wrapper = element("label", label);
  wrapper.append(input);
  parent.append(wrapper);
  return input;
}
function input(value, type = "text") {
  const node = element("input");
  node.type = type;
  node.value = value;
  return node;
}
function select(choices, value) {
  const node = element("select");
  for (const [id, text] of choices) {
    const option = element("option", text);
    option.value = id;
    node.append(option);
  }
  node.value = value;
  return node;
}
function result(text) {
  $("result").textContent = text;
}
async function request(path, options) {
  const res = await fetch(path, {
    ...options,
    signal: AbortSignal.timeout(10000),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `Erreur ${res.status}`);
  return data;
}
async function save(config) {
  if (saving) return;
  saving = true;
  try {
    const response = await request("/api/admin/config", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ revision: snapshot.revision, config }),
    });
    snapshot = response;
    loadedAt = Date.now();
    render();
    result(
      "Configuration enregistrée · les écrans se mettent à jour sous 5 secondes",
    );
  } catch (e) {
    result(e.message);
  } finally {
    saving = false;
  }
}
function configCopy() {
  return structuredClone(snapshot.config);
}
function render() {
  $("screens").replaceChildren();
  for (const [id, screen] of Object.entries(snapshot.config.screens)) {
    const form = element("form");
    const box = element("fieldset");
    box.append(element("legend", screen.label));
    form.append(box);
    const link = element("a", `/screen/${id} ↗`);
    link.href = `/screen/${id}`;
    link.target = "_blank";
    link.rel = "noopener";
    box.append(link);
    const label = field(box, "Nom affiché", input(screen.label));
    label.maxLength = 80;
    const scenario = field(
      box,
      "Scénario",
      select(
        [
          ["room", "Salle · En cours / À suivre"],
          ["hall", "Hall · Rotation"],
        ],
        screen.scenario,
      ),
    );
    const room = field(
      box,
      "Salle du programme",
      select(
        snapshot.programme.rooms.map((r) => [r.id, r.name]),
        screen.room,
      ),
    );
    const delay = field(
      box,
      "Décalage de la grille de cette salle (minutes)",
      input(screen.delayMinutes, "number"),
    );
    delay.min = -180;
    delay.max = 180;
    delay.required = true;
    const manual = field(
      box,
      "Sélection manuelle (optionnelle)",
      select(
        [
          ["", "Automatique"],
          ...snapshot.programme.entries
            .filter((e) => e.room === screen.room)
            .map((e) => [e.id, `${e.date} ${e.start} · ${e.title}`]),
        ],
        screen.manual?.entryId || "",
      ),
    );
    room.onchange = () => {
      manual.replaceChildren(
        ...select(
          [
            ["", "Automatique"],
            ...snapshot.programme.entries
              .filter((e) => e.room === room.value)
              .map((e) => [e.id, `${e.date} ${e.start} · ${e.title}`]),
          ],
          "",
        ).children,
      );
    };
    const minutes = field(
      box,
      "Maintenir la sélection pendant (minutes)",
      input(30, "number"),
    );
    minutes.min = 1;
    minutes.max = 180;
    minutes.required = true;
    if (screen.manual)
      box.append(
        element(
          "p",
          `Retour automatique au programme : ${datetime(screen.manual.expiresAt)}`,
        ),
      );
    const button = element("button", "Appliquer à cet écran");
    button.className = "primary";
    box.append(button);
    form.onsubmit = (event) => {
      event.preventDefault();
      const conf = configCopy();
      conf.screens[id] = {
        label: label.value,
        scenario: scenario.value,
        room: room.value,
        delayMinutes: Number(delay.value),
        manual: manual.value
          ? {
              entryId: manual.value,
              expiresAt: new Date(
                serverNow() + Number(minutes.value) * 60000,
              ).toISOString(),
            }
          : null,
      };
      save(conf);
    };
    $("screens").append(form);
  }
  $("message").value = snapshot.config.announcement?.text || "";
  $("paused").checked = snapshot.config.hall.paused;
  $("random-order").checked = snapshot.config.hall.randomOrder ?? false;
  $("online-enabled").checked = snapshot.config.hall.onlineEnabled;
  $("agenda-every").value = snapshot.config.hall.agendaEvery;
  $("playlist").value = JSON.stringify(snapshot.config.playlist, null, 2);
  updatePreviewOptions();
  $("programme-source").textContent =
    `Programme importé : ${snapshot.programme.entries.length} créneaux publics · SHA-256 source ${snapshot.programme.source?.sha256 || "inconnu"}`;
  $("paymium-actions").replaceChildren();
  for (const source of paymiumSources) {
    const preview = element(
      "button",
      `Prévisualiser ${source.id.endsWith("b2b") ? "B2B" : "B2C"} en ligne`,
    );
    preview.onclick = () => previewVimeo($("paymium-preview"), source);
    $("paymium-actions").append(preview);
    const link = element("a", "Ouvrir sur Vimeo ↗");
    link.href = source.sourceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    $("paymium-actions").append(link);
    if (snapshot.demo) {
      const trial = element(
        "button",
        `Essayer ${source.id.endsWith("b2b") ? "B2B" : "B2C"} dans le hall (démo)`,
      );
      trial.onclick = () => {
        const conf = configCopy();
        conf.hall.onlineEnabled = true;
        conf.hall.paused = false;
        const existing = conf.playlist.find((s) => s.id === source.id);
        for (const s of conf.playlist)
          if (s.id === `${source.id}-local`) s.enabled = false;
        conf.playlist = conf.playlist.filter((s) => s.id !== source.id);
        conf.playlist.unshift({
          ...source,
          ...(existing || {}),
          type: "vimeo",
          durationSeconds: 120,
          muted: true,
          enabled: true,
          approved: true,
        });
        save(conf);
      };
      $("paymium-actions").append(trial);
    }
  }
  for (const source of paymiumLocalSources) {
    const variant = source.id.includes("b2b") ? "B2B" : "B2C";
    const preview = element("button", `Prévisualiser ${variant} local`);
    preview.onclick = () => {
      previewPlayer?.destroy();
      $("paymium-preview").replaceChildren(element("h3", source.title));
      const video = element("video");
      video.controls = true;
      video.muted = true;
      video.src = source.src;
      video.className = "local-preview";
      video.onerror = () =>
        $("paymium-preview").append(
          element(
            "p",
            "Fichier local absent ou illisible · préparer la copie 1080p",
          ),
        );
      $("paymium-preview").append(video);
    };
    $("paymium-actions").append(preview);
    if (snapshot.demo) {
      const trial = element(
        "button",
        `Essayer ${variant} local dans le hall (démo)`,
      );
      trial.onclick = () => {
        const conf = configCopy();
        conf.hall.paused = false;
        for (const s of conf.playlist)
          if (s.id === source.id.replace(/-local$/, "")) s.enabled = false;
        conf.playlist = conf.playlist.filter((s) => s.id !== source.id);
        conf.playlist.unshift({ ...source, enabled: true, approved: true });
        save(conf);
      };
      $("paymium-actions").append(trial);
    }
  }
}
function previewVimeo(parent, source) {
  previewPlayer?.destroy();
  parent.replaceChildren(element("h3", source.title));
  const status = element("p", "Chargement Vimeo · Internet requis");
  parent.append(status);
  const box = element("div");
  box.className = "online-preview";
  parent.append(box);
  previewPlayer = createVimeo(box, {
    ...source,
    autoplay: false,
    muted: true,
    onReady: () => {
      status.textContent =
        "Lecteur Vimeo prêt · cliquer sur Lecture pour vérifier la vidéo";
    },
    onPlay: () => {
      status.textContent = "Lecture Vimeo démarrée";
    },
    onError: () => {
      status.textContent =
        "Vimeo indisponible ou intégration refusée · essayer le lien source";
    },
  });
  const currentPlayer = previewPlayer;
  setTimeout(() => {
    if (
      previewPlayer === currentPlayer &&
      status.textContent.startsWith("Chargement")
    )
      status.textContent =
        "Lecture non confirmée · vérifier la connexion ou ouvrir le lien Vimeo";
  }, 15000);
}
let loadedAt = Date.now();
let demoShift = 0;
function serverNow() {
  return snapshot.serverNow + Date.now() - loadedAt + demoShift;
}
async function load() {
  try {
    snapshot = await request("/api/admin/status");
    loadedAt = Date.now();
    const at = new URLSearchParams(location.search).get("at");
    const parsed = at && /[zZ]|[+-]\d\d:\d\d$/.test(at) ? Date.parse(at) : NaN;
    if (snapshot.demo && Number.isFinite(parsed) && !demoShift)
      demoShift = parsed - snapshot.serverNow;
    render();
    renderContacts(snapshot.contacts);
    result(
      demoShift
        ? "DÉMONSTRATION · expirations calculées sur l’heure simulée"
        : "Réglages chargés · Europe/Paris",
    );
  } catch (e) {
    result(e.message);
  }
  try {
    const files = await request("/api/admin/media");
    $("media-list").textContent = files.length
      ? files
          .map((f) => `${f.name} (${(f.size / 1048576).toFixed(1)} Mio)`)
          .join(" · ")
      : "Aucun média local. Générer la vidéo test ou copier les fichiers autorisés dans le dossier media.";
  } catch (e) {
    $("media-list").textContent = e.message;
  }
}
function updatePreviewOptions() {
  try {
    const items = JSON.parse($("playlist").value);
    const selectNode = $("preview-select");
    selectNode.replaceChildren();
    items.forEach((s, i) => {
      const option = element("option", `${i + 1} · ${s.title}`);
      option.value = i;
      selectNode.append(option);
    });
  } catch {
    result("JSON incomplet · corriger avant de prévisualiser");
  }
}
function renderContacts(contacts = []) {
  $("contacts").replaceChildren();
  if (!contacts.length)
    $("contacts").append(
      element("p", "Aucun lecteur contacté depuis le démarrage du serveur."),
    );
  for (const c of contacts) {
    const node = element(
      "p",
      `${c.screen} · ${c.client.slice(0, 8)} · ${datetime(c.lastSeen)} · ${Date.now() - c.lastSeen < 15000 ? "contact récent" : "contact ancien"}`,
    );
    node.className = "contact";
    $("contacts").append(node);
  }
}
$("announcement-form").onsubmit = (event) => {
  event.preventDefault();
  const conf = configCopy();
  conf.announcement = {
    text: $("message").value,
    expiresAt: new Date(
      serverNow() + Number($("message-minutes").value) * 60000,
    ).toISOString(),
  };
  save(conf);
};
$("clear-message").onclick = () => {
  const conf = configCopy();
  conf.announcement = null;
  save(conf);
};
$("hall-form").onsubmit = (event) => {
  event.preventDefault();
  const conf = configCopy();
  conf.hall = {
    paused: $("paused").checked,
    agendaEvery: Number($("agenda-every").value),
    onlineEnabled: $("online-enabled").checked,
    randomOrder: $("random-order").checked,
  };
  save(conf);
};
$("save-playlist").onclick = () => {
  try {
    const conf = configCopy();
    conf.playlist = JSON.parse($("playlist").value);
    save(conf);
  } catch {
    result("Playlist JSON invalide");
  }
};
$("playlist").onchange = updatePreviewOptions;
for (const type of ["text", "video"])
  $("add-" + type).onclick = () => {
    try {
      const items = JSON.parse($("playlist").value);
      const item = {
        id: `nouveau-${Date.now()}`,
        type,
        title: "À préparer",
        durationSeconds: 10,
        enabled: false,
        approved: false,
      };
      if (type === "text") item.text = "Texte à relire";
      else {
        item.src = "/media/fichier.mp4";
        item.fit = "contain";
        item.muted = true;
      }
      items.push(item);
      $("playlist").value = JSON.stringify(items, null, 2);
      updatePreviewOptions();
    } catch {
      result("Corriger le JSON avant ajout");
    }
  };
$("preview-button").onclick = () => {
  try {
    const s = JSON.parse($("playlist").value)[
      Number($("preview-select").value)
    ];
    $("preview").replaceChildren(element("h3", s.title));
    if (s.type === "text") $("preview").append(element("p", s.text));
    else if (s.type === "vimeo") previewVimeo($("preview"), s);
    else if (["image", "video"].includes(s.type)) {
      if (
        !/^\/(media\/[a-zA-Z0-9][a-zA-Z0-9_.-]*\.(mp4|webm|png|jpg|jpeg|webp|gif)|assets\/demo-(image|logo)\.svg)$/.test(
          s.src,
        )
      )
        throw new Error("Chemin média invalide");
      const media = element(s.type === "video" ? "video" : "img");
      media.src = s.src;
      if (s.type === "video") {
        media.controls = true;
        media.muted = true;
      } else media.alt = s.title;
      media.onerror = () =>
        $("preview").append(element("p", "Média absent ou illisible"));
      $("preview").append(media);
    } else
      $("preview").append(
        element(
          "p",
          "Le programme de chaque salle est calculé en direct sur l’écran hall.",
        ),
      );
  } catch (e) {
    result(e.message);
  }
};
$("restore").onclick = async () => {
  try {
    const file = $("restore-file").files[0];
    if (!file || file.size > 131072)
      throw new Error("Choisir un export JSON de moins de 128 Kio");
    await save(JSON.parse(await file.text()));
  } catch (e) {
    result(e.message);
  }
};
$("reload").onclick = load;
setInterval(async () => {
  try {
    const current = await request("/api/admin/status");
    renderContacts(current.contacts);
    if (snapshot && current.revision !== snapshot.revision)
      result(
        "Des réglages ont changé dans un autre onglet · recharger avant modification",
      );
  } catch {
    result("Serveur local indisponible · modifications suspendues");
  }
}, 5000);
load();
