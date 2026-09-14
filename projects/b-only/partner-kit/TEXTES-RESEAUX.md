# Textes pour les réseaux

**État :** `PRÊT À RELIRE` — aucune publication effectuée.

## A — Relais ultra simple

```text
B-Only revient à Annecy du 7 au 9 novembre 2026 : trois jours pour comprendre
Bitcoin, apprendre et rencontrer celles et ceux qui le font vivre.

Programme et informations : https://b-only.org/
```

## B — Recommandation du relais

```text
Nous avons {{RELATION_BONLY}} et gardons de cette expérience une raison simple
de vous recommander l’événement : {{RAISON_PERSONNELLE}}.

B-Only revient à Annecy du 7 au 9 novembre 2026. Si vous souhaitez découvrir
Bitcoin, approfondir vos pratiques ou rencontrer celles et ceux qui le font
vivre, nous serons heureux de vous y retrouver.

Programme et informations : https://b-only.org/
```

## C — Modèle personnalisable

Variables autorisées :

```text
{{PARTENAIRE}}
{{RELATION_BONLY}}
{{RAISON_PERSONNELLE}}
{{CTA}}
{{TON}}
```

```text
{{PARTENAIRE}} {{RELATION_BONLY}}.

Pour nous, B-Only mérite votre attention parce que {{RAISON_PERSONNELLE}}.

Rendez-vous à Annecy du 7 au 9 novembre 2026.

{{CTA}}
```

Instruction de ton : `{{TON}}`. Ne conserver que des formulations compatibles
avec la relation réellement validée dans `partners.csv`.

## Adaptations par canal

Une même base peut être adaptée intelligemment ; il n’est pas nécessaire de
fabriquer cinq messages artificiellement différents.

### LinkedIn

```text
B-Only revient à Annecy du 7 au 9 novembre 2026.

Pendant trois jours, l’événement réunira des personnes venues comprendre
Bitcoin, approfondir leurs pratiques et partager des expériences concrètes.

Nous vous recommandons cette édition parce que {{RAISON_PERSONNELLE}}. Que vous
découvriez Bitcoin ou que vous le pratiquiez déjà, le programme offre plusieurs
portes d’entrée pour apprendre et rencontrer celles et ceux qui le font vivre.

Retrouvez le programme et les informations pratiques : https://b-only.org/

#Bitcoin #BOnly26 #Annecy
```

### X

Une idée, un objectif, une action attendue et 240 caractères maximum, lien
compris.

```text
B-Only revient à Annecy du 7 au 9 novembre 2026 : trois jours pour comprendre
Bitcoin, apprendre et rencontrer celles et ceux qui le font vivre.

Programme : https://b-only.org/
```

### Facebook

```text
B-Only revient à Annecy du 7 au 9 novembre 2026 !

Trois jours pour découvrir Bitcoin, poser ses questions, approfondir ses
pratiques et rencontrer des personnes qui partagent leurs expériences sans
réduire le sujet à des slogans.

Nous avons choisi de vous en parler parce que {{RAISON_PERSONNELLE}}.

Découvrez le programme et les informations pratiques : https://b-only.org/
```

### Instagram

```text
B-ONLY REVIENT À ANNECY 🧡

📅 7–9 novembre 2026
📍 Annecy

Trois jours pour comprendre Bitcoin, apprendre, expérimenter et rencontrer
celles et ceux qui le font vivre.

Programme et informations via https://b-only.org/

#Bitcoin #BOnly26 #Annecy
```

### Nostr

```text
B-Only revient à Annecy du 7 au 9 novembre 2026.

Trois jours pour parler de Bitcoin sans bruit inutile : comprendre, apprendre,
expérimenter et partager des pratiques concrètes avec des personnes venues de
différents horizons.

Nous vous recommandons cette édition parce que {{RAISON_PERSONNELLE}}.

Programme et informations : https://b-only.org/

#bitcoin #bonly26 #annecy
```

## Adaptation pour un relais historique

Employer une relation passée explicite, par exemple « nous avons participé à
une précédente édition ». Ne jamais laisser entendre une présence en 2026.

## Adaptation pour un visiteur 2025

Remplacer la recommandation institutionnelle par une expérience personnelle
facultative. Ne jamais fabriquer de témoignage : la variable
`{{RAISON_PERSONNELLE}}` doit être complétée par le visiteur ou supprimée.
