import { isRevealed, publicEntries } from "./model.mjs";

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
  notice: document.querySelector("#programme-notice"),
  revealCount: document.querySelector("#reveal-count"),
  ticketLink: document.querySelector("#ticket-link"),
  template: document.querySelector("#session-template")
};

function setText(element, value) {
  element.textContent = value || "";
  element.hidden = !value;
}

function roomName(roomId) {
  return state.data.rooms.find((room) => room.id === roomId)?.name || roomId;
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
    elements.roomFilter.add(new Option(room.name, room.id));
  }

  elements.roomFilter.value = selected;
}

function renderEntry(entry) {
  const fragment = elements.template.content.cloneNode(true);
  const card = fragment.querySelector(".session-card");
  const start = fragment.querySelector(".start");
  const end = fragment.querySelector(".end");
  const room = fragment.querySelector(".room");
  const revealState = fragment.querySelector(".reveal-state");
  const title = fragment.querySelector("h3");
  const speakers = fragment.querySelector(".speakers");
  const format = fragment.querySelector(".format");

  card.dataset.revealed = String(entry.revealed);
  start.textContent = entry.start;
  start.dateTime = `${entry.date}T${entry.start}`;
  end.textContent = `– ${entry.end}`;
  room.textContent = roomName(entry.room);
  revealState.textContent = entry.revealed ? "Révélé" : "Prochainement";
  title.textContent = entry.title;

  setText(speakers, entry.speakers.join(" · "));
  setText(format, entry.format);

  return fragment;
}

function renderSchedule() {
  const entries = publicEntries(state.data, state.selectedDate, state.selectedRoom);
  elements.schedule.replaceChildren(...entries.map(renderEntry));
  elements.emptyState.hidden = entries.length > 0;
  elements.scheduleRegion.setAttribute("aria-busy", "false");

  const day = state.data.days.find((item) => item.date === state.selectedDate);
  elements.selectedDate.textContent = day?.label || "";
}

function renderPublicationDetails() {
  const revealed = state.data.entries.filter(
    (entry) => entry.status !== "cancelled" && isRevealed(entry)
  ).length;

  elements.revealCount.textContent = `${revealed} créneaux déjà dévoilés`;
  elements.updatedAt.textContent = `Mis à jour le ${new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long"
  }).format(new Date(state.data.publication.updatedAt))}`;
}

function notifyParentOfHeight() {
  window.parent.postMessage(
    {
      type: "b-only-programme:resize",
      height: document.documentElement.scrollHeight
    },
    "*"
  );
}

function render() {
  renderDays();
  renderSchedule();
  renderPublicationDetails();
  window.requestAnimationFrame(notifyParentOfHeight);
}

async function loadProgramme() {
  try {
    const response = await fetch("../programme.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const previousDate = state.selectedDate;
    state.data = data;
    state.selectedDate = data.days.some((day) => day.date === previousDate)
      ? previousDate
      : data.days[0]?.date;

    elements.ticketLink.href = data.event.ticketUrl;
    renderRooms();
    render();
  } catch (error) {
    elements.notice.textContent = "Le programme est momentanément indisponible. Veuillez réessayer.";
    elements.notice.setAttribute("role", "alert");
    elements.scheduleRegion.setAttribute("aria-busy", "false");
    console.error("Unable to load public programme", error);
  }
}

elements.roomFilter.addEventListener("change", (event) => {
  state.selectedRoom = event.target.value;
  renderSchedule();
  window.requestAnimationFrame(notifyParentOfHeight);
});

if ("ResizeObserver" in window) {
  new ResizeObserver(notifyParentOfHeight).observe(document.body);
}

loadProgramme();
window.setInterval(loadProgramme, 60_000);
