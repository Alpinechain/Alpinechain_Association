# Labels GitHub AlpineChain

## Rôle

Ce document définit le vocabulaire minimal des Issues du dépôt. Les labels servent à filtrer, pas à raconter toute l’histoire d’une tâche.

## Projet

| Label | Couleur suggérée | Usage |
|---|---|---|
| `project:association` | `1D76DB` | Gouvernance, adhésions et fonctionnement général |
| `project:bitcoin-meetup` | `F7931A` | Ateliers et rencontres Bitcoin |
| `project:souverainete` | `6F42C1` | Rendez-vous Souveraineté 3.0 |
| `project:b-only` | `111111` | Conférence B-Only |

## Nature

| Label | Couleur suggérée | Usage |
|---|---|---|
| `type:task` | `0E8A16` | Action concrète avec résultat attendu |
| `type:decision` | `D93F0B` | Arbitrage ou validation nécessaire |
| `type:content` | `5319E7` | Article, publication, visuel ou support |
| `type:incident` | `B60205` | Incident technique ou opérationnel |
| `type:idea` | `C5DEF5` | Hypothèse à qualifier avant lancement |

## Domaine

| Label | Couleur suggérée | Usage |
|---|---|---|
| `area:communication` | `FBCA04` | Communication et diffusion |
| `area:finance` | `0E8A16` | Budget, comptabilité, devis et factures |
| `area:sponsor` | `0052CC` | Sponsors et partenaires |
| `area:technical` | `006B75` | Infrastructure, outils et accès |
| `area:event` | `BFDADC` | Production et logistique événementielle |

## État particulier

| Label | Couleur suggérée | Usage |
|---|---|---|
| `blocked` | `B60205` | Impossible d’avancer sans lever un obstacle |
| `waiting` | `FEF2C0` | Réponse ou action d’un tiers attendue |
| `human-validation` | `D4C5F9` | Validation humaine requise avant poursuite |

## Règles

- Une Issue reçoit un seul label `project:*`.
- Une Issue reçoit un seul label `type:*`.
- Les labels `area:*` sont facultatifs et peuvent être multiples.
- `blocked`, `waiting` et `human-validation` sont utilisés uniquement lorsque la situation le justifie.
- Le statut normal est porté par GitHub Projects, pas par des labels `todo`, `doing` ou `done`.
