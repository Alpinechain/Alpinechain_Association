# Vague 01 — pilote du kit partenaire

**État :** `PRÊT À RELIRE` — aucun message envoyé, programmé ou publié.

## Cadrage

- Projet : B-Only 2026.
- Objectif : valider le fonctionnement du kit sur quatre relations différentes
  avant d’élargir la diffusion.
- CTA unique : <https://b-only.org/>.
- Visuels : quatre génériques `v02` référencés dans `../assets/README.md`, tous
  encore `À VALIDER`.
- Validation : Cyrille avant chaque envoi.

## Sélection pilote

| Cible | Segment | Pourquoi ce cas | Kit | Gate avant envoi |
|---|---|---|---|---|
| Neowalt | partenaire 2026 à distance | Tester un partenaire qui contribue sans être présent physiquement | `kits/neowalt.md` | Valider la désignation publique « partenaire de lots » et l’URL de destination |
| PlebStyle | relais historique | Tester une relation passée après un désistement 2026, sans ambiguïté sur la présence | `kits/plebstyle.md` | Relire le rappel explicite de l’absence en 2026 |
| Renaud Lifchitz | intervenant confirmé et public | Tester l’invitation personnelle d’un intervenant déjà annoncé | `kits/renaud-lifchitz.md` | Validation du message et des visuels du kit |
| Visiteurs B-Only 2025 | anciens participants | Tester le message de retrouvailles distinct des speakers, partenaires, marchands et artistes | `kits/visiteurs-2025.md` | Sélectionner les destinataires dans Pretix ou l’outil autorisé, hors GitHub |

## Hors vague

- Paymium, Cercle du Coin, Bitstack, Bitcoin.fr et Cryptoast : relais déjà
  assurés, donc exclus de cette prospection.
- Nicolas Cantu : participation confirmée mais session encore `internal` dans
  le programme au 14 septembre 2026 ; aucun kit activable tant que sa visibilité
  publique n’est pas ouverte.
- autres désistements et anciens noms remplacés : aucune présence 2026 ne doit
  être suggérée.

## Pièces jointes communes

Après validation graphique, joindre selon le canal un ou plusieurs fichiers du
dossier Nextcloud `Partner-Kit/Generiques/` :

- `bonly26--partner-kit--generic--square--1080x1080--v02.png` ;
- `bonly26--partner-kit--generic--vertical--1080x1350--v02.png` ;
- `bonly26--partner-kit--generic--story--1080x1920--v02.png` ;
- `bonly26--partner-kit--generic--landscape--1200x628--v02.png`.

Ne pas joindre automatiquement les quatre formats : choisir ceux réellement
utiles au destinataire. Aucun visuel co-brandé n’entre dans cette vague pilote.

## Ordre d’essai proposé

1. Renaud Lifchitz, après validation du message et des visuels.
2. PlebStyle, comme relais strictement historique.
3. Neowalt, après validation de sa désignation publique et de son URL.
4. Visiteurs 2025, après préparation de la sélection privée des destinataires.

Après chaque envoi, renseigner `send_status` dans `../partners.csv`. Une ligne
n’est ajoutée dans `../diffusion-tracking.csv` qu’après réception d’une URL
réellement publique.
