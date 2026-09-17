# Assets du kit partenaire B-Only’26

Les fichiers lourds restent dans Nextcloud. Ce dossier GitHub conserve
uniquement les consignes, noms de fichiers, dimensions, rattachements et
statuts.

## Emplacement

Racine Nextcloud documentée :

```text
Action - Initiatives/B-Only/2026/03_Communication/
```

Dossier créé et indexé dans Nextcloud le 14 septembre 2026 :

```text
Action - Initiatives/B-Only/2026/03_Communication/Partner-Kit/
├── Generiques/
├── Co-brandes/
├── Videos/
└── Archives/
    └── Versions-anterieures/
```

## Statuts

- `À PRODUIRE`
- `À VALIDER`
- `VALIDÉ`
- `ARCHIVÉ`

Un fichier produit ne devient jamais `VALIDÉ` sans validation humaine.

## Visuels produits

Les exports ont été déposés le 14 septembre 2026 sans partage public. Cyrille a
confirmé le 17 septembre 2026 la validation et la transmission des quatre
formats génériques avec la première vague. Le modèle co-brandé, qui n’a pas été
utilisé dans cette vague, reste `À VALIDER`.

| Fichier | Dossier Nextcloud | Dimensions | Taille | SHA-256 | ID | Statut |
|---|---|---:|---:|---|---:|---|
| `bonly26--partner-kit--generic--square--1080x1080--v02.png` | `Generiques/` | 1080 × 1080 | 713 952 o | `e6d86670d7aa90a35fce9671adab10bfec50936166410f5f6fc40089c390a12b` | 4913 | VALIDÉ |
| `bonly26--partner-kit--generic--vertical--1080x1350--v02.png` | `Generiques/` | 1080 × 1350 | 910 436 o | `5166b2e432bc70a243256de3bd54f0f0057c700484a228512bd6c975c6d4a84f` | 4914 | VALIDÉ |
| `bonly26--partner-kit--generic--story--1080x1920--v02.png` | `Generiques/` | 1080 × 1920 | 1 128 612 o | `cf5da3afd122de3c342e1cc4e1934a6e780a037b93d03911212f69ee42d278ae` | 4915 | VALIDÉ |
| `bonly26--partner-kit--generic--landscape--1200x628--v02.png` | `Generiques/` | 1200 × 628 | 382 516 o | `faa4278a61ebb6a94d7744623c3b7468acb6b44b51a3439f27f86f3517e68c71` | 4916 | VALIDÉ |
| `bonly26--partner-kit--template--cobrand--square--v01.png` | `Co-brandes/` | 1080 × 1080 | 517 742 o | `db62aa30518f75acde9c637259424d81e1fa3ba5b9fc33f2420fd42bbdf03136` | 4904 | À VALIDER |

Les quatre exports génériques `v01`, dont les couches de montagnes n’étaient
pas correctement alignées, ont été supprimés des dossiers du kit le
14 septembre 2026. Ils restent récupérables dans la corbeille Nextcloud tant
que celle-ci n’est pas vidée. Les `v02` reprennent la géométrie du modèle
co-brandé : silhouette orange, montagne violette alignée et aucune calotte
blanche.

Texte générique limité à :

```text
B-Only’26
Annecy
7–9 novembre 2026
b-only.org
```

## Modèle co-brandé

Convention :

```text
bonly26--partner-kit--<partner>--cobrand--<format>--v01.png
```

Après validation : suffixe `--valide` avant l’extension.

Contenu prévu :

```text
{{LOGO_PARTENAIRE}} × B-Only’26
On se retrouve à Annecy
7–9 novembre 2026
```

Le logo doit provenir d’une source validée référencée dans `partners.csv`. Ne
jamais récupérer ou reconstruire automatiquement un logo non vérifié.

## Accessibilité

Texte alternatif conseillé pour les quatre formats génériques :

```text
B-Only’26 à Annecy, du 7 au 9 novembre 2026. Informations sur b-only.org.
```

Texte alternatif à personnaliser pour le modèle co-brandé :

```text
{{NOM_PARTENAIRE}} et B-Only’26 se retrouvent à Annecy du 7 au 9 novembre 2026.
```

## Reproduction et provenance

Le script `render-visuals.sh` génère les cinq exports sans écraser un fichier
existant. `template.html` documente la composition et les variantes prévues.
Les exports utilisent le logo officiel et le fond du site B-Only, associés aux
polices Zig, Pixelify Sans et JetBrains Mono. Les sources doivent être
téléchargées depuis leurs emplacements officiels puis passées explicitement au
script ; aucun binaire lourd n’est versionné dans GitHub.

Empreintes des deux sources graphiques utilisées pour cette version :

- logo B-Only PNG : `e8a265a3fc9b44a7d502330232f8489cb391f3163fceec54228c42dacdf508c2` ;
- fond du site B-Only PNG : `28382070684164d1428f22675960af6d99de38c8608e555b3dca56af0f2648ec`.
