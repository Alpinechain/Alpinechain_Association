const STATUS_LABELS = {
  free: "Libre",
  option: "En option",
  reserved: "Réservé",
  confirmed: "Confirmé",
  fixed: "Temps commun",
  cancelled: "Annulé"
};

const state = {
  data: null,
  selectedDate: null,
  selectedRoom: "all"
};

const elements = {
  dayTabs: document.querySelector("#day-tabs"),
  roomFilter: document.querySelector("#room-filter"),
  schedule: document.querySelector("#schedule"),
  scheduleRegion: document.querySelector("#schedule-region"),
  selectedDate: document.querySelector("#selected-date"),
  updatedAt: document.querySelector("#updated-at"),
  emptyState: document.querySelector("#empty-state"),
  notice: document.querySelector("#publication-notice"),
  ticketLink: document.querySelector("#ticket-link"),
  legend: document.querySelector("#legend"),
  template: document.querySelector("#session-template"),
  livePanel: document.querySelector("#live-panel"),
  liveLabel: document.querySelector("#live-label"),
  liveTitle: document.querySelector("#live-title"),
  liveSession: document.querySelector("#live-session"),
  liveTime: document.querySelector("#live-time")
};

function localDateTime(date, time, utcOffset) {
  return new Date(`${date}T${time}:00${utcOffset}`);
}

function setText(element, value) {
  element.textContent = value || "";
  element.hidden = !value;
}

function visibleEntries() {
  const isPublished = state.data.publication.state === "published";

  return state.data.entries
    .filter((entry) => entry.status !== "cancelled")
    .filter((entry) => !isPublished || entry.visibility === "public")
    .filter((entry) => entry.date === state.selectedDate)
    .filter((entry) => state.selectedRoom === "all" || entry.room === state.selectedRoom)
    .sort((a, b) => a.start.localeCompare(b.start) || a.room.localeCompare(b.room));
}

function renderDays() {
  elements.dayTabs.replaceChildren();

  for (const day of state.data.days) {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "tab";
    button.dataset.date = day.date;
    button.textContent = day.label;
    button.setAttribute("aria-selected", String(day.date === state.selectedDate));
    button.addEventListener("click", () => {
      state.selectedDate = day.date;
      render();
    });
    elements.dayTabs.append(button);
  }
}

function renderRooms() {
  const selected = state.selectedRoom;
  elements.roomFilter.replaceChildren(new Option("Toutes les salles", "all"));

  for (const room of state.data.rooms) {
    const capacity = room.capacity ? ` · ${room.capacity} places` : "";
    elements.roomFilter.add(new Option(`${room.name}${capacity}`, room.id));
  }

  elements.roomFilter.value = selected;
}

function roomName(roomId) {
  return state.data.rooms.find((room) => room.id === roomId)?.name || roomId;
}

function renderEntry(entry) {
  const fragment = elements.template.content.cloneNode(true);
  const card = fragment.querySelector(".session-card");
  const start = fragment.querySelector(".start");
  const end = fragment.querySelector(".end");
  const room = fragment.querySelector(".room");
  const status = fragment.querySelector(".status");
  const title = fragment.querySelector("h3");
  const speakers = fragment.querySelector(".speakers");
  const format = fragment.querySelector(".format");
  const moderators = fragment.querySelector(".moderators");
  const notes = fragment.querySelector(".notes");

  card.dataset.status = entry.status;
  start.textContent = entry.start;
  start.dateTime = `${entry.date}T${entry.start}`;
  end.textContent = `– ${entry.end}`;
  room.textContent = roomName(entry.room);
  status.textContent = STATUS_LABELS[entry.status] || entry.status;
  title.textContent = entry.title;

  setText(speakers, entry.speakers?.join(" · "));
  setText(format, entry.format);
  setText(
    moderators,
    entry.moderators?.length ? `Modération à répartir : ${entry.moderators.join(", ")}` : ""
  );
  setText(notes, state.data.publication.state === "draft" ? entry.notes : "");

  return fragment;
}

function renderSchedule() {
  const entries = visibleEntries();
  elements.schedule.replaceChildren(...entries.map(renderEntry));
  elements.emptyState.hidden = entries.length > 0;
  elements.scheduleRegion.setAttribute("aria-busy", "false");

  const day = state.data.days.find((item) => item.date === state.selectedDate);
  elements.selectedDate.textContent = day?.label || "";
}

function renderPublicationState() {
  const { publication } = state.data;
  elements.notice.textContent = publication.notice;
  elements.notice.classList.toggle("is-draft", publication.state === "draft");
  elements.legend.hidden = publication.state === "published";

  elements.updatedAt.textContent = `Mis à jour le ${new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short"
  }).format(new Date(publication.updatedAt))}`;
}

function renderLivePanel() {
  if (state.data.publication.state !== "published") {
    elements.livePanel.hidden = true;
    return;
  }

  const utcOffset = state.data.event.utcOffset;
  const now = new Date();
  const publicEntries = state.data.entries
    .filter((entry) => entry.visibility === "public" && entry.status !== "cancelled")
    .map((entry) => {
      const start = localDateTime(entry.date, entry.start, utcOffset);
      const end = localDateTime(entry.date, entry.end, utcOffset);
      return { ...entry, startInstant: start, endInstant: end };
    })
    .sort((a, b) => a.startInstant - b.startInstant);

  const current = publicEntries.find((entry) => now >= entry.startInstant && now < entry.endInstant);
  const next = publicEntries.find((entry) => entry.startInstant > now);
  const highlighted = current || next;

  if (!highlighted) {
    elements.livePanel.hidden = true;
    return;
  }

  elements.liveLabel.textContent = current ? "En cours" : "À suivre";
  elements.liveTitle.textContent = highlighted.title;
  elements.liveSession.textContent = [
    highlighted.speakers.join(", "),
    roomName(highlighted.room)
  ].filter(Boolean).join(" · ");
  elements.liveTime.textContent = highlighted.start;
  elements.liveTime.dateTime = `${highlighted.date}T${highlighted.start}`;
  elements.livePanel.hidden = false;
}

function render() {
  renderDays();
  renderSchedule();
  renderPublicationState();
  renderLivePanel();
}

async function loadProgramme() {
  try {
    const response = await fetch("programme.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const previousDate = state.selectedDate;
    state.data = data;
    state.selectedDate = data.days.some((day) => day.date === previousDate)
      ? previousDate
      : data.days[0]?.date;

    document.title = `Programme — ${data.event.name}`;
    elements.ticketLink.href = data.event.ticketUrl;
    renderRooms();
    render();
  } catch (error) {
    elements.notice.textContent = "Le programme est momentanément indisponible. Veuillez réessayer.";
    elements.notice.setAttribute("role", "alert");
    elements.scheduleRegion.setAttribute("aria-busy", "false");
    console.error("Unable to load programme", error);
  }
}

elements.roomFilter.addEventListener("change", (event) => {
  state.selectedRoom = event.target.value;
  renderSchedule();
});

loadProgramme();
window.setInterval(loadProgramme, 60_000);
