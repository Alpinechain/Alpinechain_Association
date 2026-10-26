import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { importProgramme } from "../programme.mjs";
import { defaultConfig, validateConfig } from "../config.mjs";
import {
  roomState,
  zonedEpoch,
  hallSlides,
  activeAnnouncement,
} from "../public/model.mjs";
import { vimeoEmbed, paymiumSources } from "../public/vimeo.mjs";

const programme = importProgramme(
  await readFile(
    new URL("../../programme/programme.json", import.meta.url),
    "utf8",
  ),
);
const screen = defaultConfig.screens["salle-a"];
const at = (time) => zonedEpoch("2026-11-07", time);

test("programme réel : deux salles distinctes, créneaux internes exclus", () => {
  assert.equal(programme.entries.length, 30);
  assert.ok(
    programme.entries.every(
      (e) => !Object.hasOwn(e, "notes") && e.visibility === "public",
    ),
  );
  assert.equal(
    roomState(programme, screen, at("15:10")).current.id,
    "sat-main-alexandre",
  );
  assert.equal(
    roomState(programme, defaultConfig.screens["salle-b"], at("15:10")).current
      .id,
    "sat-workshop-profedu-qa",
  );
  assert.equal(
    roomState(programme, screen, at("15:10")).next.id,
    "sun-main-pierre",
  );
});
test("bornes exactes, pause, ouverture, fin de journée et fin événement", () => {
  assert.equal(roomState(programme, screen, at("13:00")).phase, "before");
  assert.equal(
    roomState(programme, screen, at("14:00")).current.id,
    "sat-opening",
  );
  assert.equal(roomState(programme, screen, at("14:50")).phase, "gap");
  assert.equal(
    roomState(programme, screen, at("15:00")).current.id,
    "sat-main-alexandre",
  );
  assert.equal(roomState(programme, screen, at("19:00")).phase, "finished");
  assert.equal(
    roomState(programme, screen, zonedEpoch("2026-11-10", "12:00")).phase,
    "empty",
  );
  assert.equal(
    roomState(programme, screen, zonedEpoch("2026-11-08", "12:30")).phase,
    "fixed",
  );
});
test("décalage indépendant par écran et sélection manuelle à expiration", () => {
  const delayed = { ...screen, delayMinutes: 20 };
  assert.equal(
    roomState(programme, delayed, at("15:05")).current.id,
    "sat-opening",
  );
  assert.equal(
    roomState(programme, screen, at("15:10")).current.id,
    "sat-main-alexandre",
  );
  const manual = {
    ...screen,
    manual: {
      entryId: "sat-main-florent",
      expiresAt: new Date(at("15:15")).toISOString(),
    },
  };
  assert.equal(
    roomState(programme, manual, at("15:10")).current.id,
    "sat-main-florent",
  );
  assert.equal(
    roomState(programme, manual, at("15:10")).next.id,
    "sun-workshop-quiz",
  );
  assert.equal(
    roomState(programme, manual, at("15:15")).current.id,
    "sat-main-alexandre",
  );
});
test("Europe/Paris : hiver, été et refus d’une heure inexistante", () => {
  assert.equal(new Date(at("15:00")).toISOString(), "2026-11-07T14:00:00.000Z");
  assert.equal(
    new Date(zonedEpoch("2026-07-07", "15:00")).toISOString(),
    "2026-07-07T13:00:00.000Z",
  );
  assert.throws(() => zonedEpoch("2026-03-29", "02:30"));
});
test("import refuse draft et chevauchement ; ignore entrée annulée", () => {
  const raw = structuredClone(programme);
  raw.publication.state = "draft";
  assert.throws(() => importProgramme(raw));
  raw.publication.state = "published";
  raw.entries.push({ ...raw.entries[0], id: "overlap", start: "14:10" });
  assert.throws(() => importProgramme(raw), /Chevauchement/);
});
test("configuration refuse médias distants, traversal, mauvais types et sélection autre salle", () => {
  const valid = structuredClone(defaultConfig);
  assert.deepEqual(validateConfig(valid, programme), valid);
  for (const src of [
    "https://vimeo.com/123",
    "/media/../secret.mp4",
    "/media/a%2f.mp4",
    "/media/a.svg",
  ]) {
    const c = structuredClone(valid);
    c.playlist[1].src = src;
    assert.throws(() => validateConfig(c, programme));
  }
  const manual = structuredClone(valid);
  manual.screens["salle-a"].manual = {
    entryId: "sat-workshop-profedu-qa",
    expiresAt: "2026-11-07T20:00:00Z",
  };
  assert.throws(() => validateConfig(manual, programme));
  const wrong = structuredClone(valid);
  wrong.playlist[0].enabled = "false";
  assert.throws(() => validateConfig(wrong, programme));
});
test("hall : validation séparée, fréquence et fallback programme", () => {
  const c = structuredClone(defaultConfig);
  c.playlist[1].approved = false;
  c.playlist[2].enabled = false;
  assert.deepEqual(
    hallSlides(c).map((s) => s.id),
    ["welcome", "demo-video", "agenda-1"],
  );
  c.playlist = [];
  assert.equal(hallSlides(c)[0].type, "agenda");
  c.announcement = { text: "Annonce", expiresAt: "2026-11-07T14:10:00Z" };
  assert.equal(activeAnnouncement(c, at("15:09")), "Annonce");
  assert.equal(activeAnnouncement(c, at("15:10")), "");
});
test("Vimeo en ligne : identifiants privés conservés, liste fermée et exclusion hors ligne", () => {
  const embed = new URL(vimeoEmbed(paymiumSources[0].sourceUrl));
  assert.equal(embed.origin, "https://player.vimeo.com");
  assert.equal(embed.pathname, "/video/1237252706");
  assert.equal(embed.searchParams.get("h"), "a8cfeb9722");
  assert.equal(embed.searchParams.get("muted"), "1");
  assert.equal(embed.searchParams.get("dnt"), "1");
  assert.throws(() => vimeoEmbed("https://attacker.invalid/video"));
  const c = structuredClone(defaultConfig);
  const online = c.playlist.find((s) => s.id === "paymium-b2b");
  online.enabled = true;
  online.approved = true;
  assert.ok(!hallSlides(c).some((s) => s.type === "vimeo"));
  c.hall.onlineEnabled = true;
  assert.ok(hallSlides(c).some((s) => s.type === "vimeo"));
  assert.ok(!hallSlides(c, false).some((s) => s.type === "vimeo"));
  assert.equal(
    validateConfig(c, programme).playlist.find((s) => s.id === online.id)
      .sourceUrl,
    online.sourceUrl,
  );
});
