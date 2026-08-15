const REVEALABLE_STATUSES = new Set(["confirmed", "fixed"]);

export function isRevealed(entry) {
  return entry.visibility === "public" && REVEALABLE_STATUSES.has(entry.status);
}

export function publicEntries(data, selectedDate, selectedRoom = "all") {
  return data.entries
    .filter((entry) => entry.status !== "cancelled")
    .filter((entry) => entry.date === selectedDate)
    .filter((entry) => selectedRoom === "all" || entry.room === selectedRoom)
    .sort((a, b) => a.start.localeCompare(b.start) || a.room.localeCompare(b.room))
    .map((entry) => {
      if (isRevealed(entry)) {
        return {
          id: entry.id,
          date: entry.date,
          start: entry.start,
          end: entry.end,
          room: entry.room,
          revealed: true,
          title: entry.title,
          speakers: [...entry.speakers]
        };
      }

      return {
        id: entry.id,
        date: entry.date,
        start: entry.start,
        end: entry.end,
        room: entry.room,
        revealed: false,
        title: "À découvrir bientôt",
        speakers: []
      };
    });
}
