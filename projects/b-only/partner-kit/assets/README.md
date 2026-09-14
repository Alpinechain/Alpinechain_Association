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

## Visuels produits à valider

Les exports ont été déposés le 14 septembre 2026 sans partage public. Ils
restent tous `À VALIDER` : leur présence dans Nextcloud ne vaut pas validation
graphique ni autorisation de diffusion.

| Fichier | Dossier Nextcloud | Dimensions | Taille | SHA-256 | ID | Statut |
|---|---|---:|---:|---|---:|---|
| `bonly26--partner-kit--generic--square--v01.png` | `Generiques/` | 1080 × 1080 | 655 671 o | `a4110b62619f5f0ea71c0b41cb994afc68e99c9f45f59acc387fcf26125c79a8` | 4902 | À VALIDER |
| `bonly26--partner-kit--generic--vertical--v01.png` | `Generiques/` | 1080 × 1350 | 834 880 o | `ebeeb77a8a6bf69e2516d708c20fdc05339d51215ebb72d32b145e5c233736b0` | 4903 | À VALIDER |
| `bonly26--partner-kit--generic--story--v01.png` | `Generiques/` | 1080 × 1920 | 1 036 311 o | `a5f1cf65e329a14277fd53ce0966d91856d59b660f78e98fb13c5445d05e2dbf` | 4901 | À VALIDER |
| `bonly26--partner-kit--generic--landscape--v01.png` | `Generiques/` | 1200 × 628 | 358 228 o | `0b903522aa01750be7db418f81589a81555b5bbd7d3d0cf2b710560b4ee6977b` | 4900 | À VALIDER |
| `bonly26--partner-kit--template--cobrand--square--v01.png` | `Co-brandes/` | 1080 × 1080 | 517 742 o | `db62aa30518f75acde9c637259424d81e1fa3ba5b9fc33f2420fd42bbdf03136` | 4904 | À VALIDER |

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
