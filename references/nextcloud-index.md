# Index Nextcloud AlpineChain

Dernière vérification documentaire complète : 2026-07-30
Dernière mise à jour ciblée B-Only : 2026-08-11 — campagne Bitstack V2
Dernière mise à jour de sécurité : 2026-07-18  
Inventaire vérifié le 13 juillet : 66 dossiers, 133 fichiers, environ 228,5 Mio
Audit ciblé B-Only 2026 : 2026-07-30 — 107 dossiers et 395 fichiers

## Statut d’accès

Le partage public historique suivant a été supprimé et n’existe plus :

```text
https://cloud.alpinechain.xyz/s/6aBTY243WDkbSGL
```

Il ne constitue plus un point d’accès à Nextcloud. Cette suppression coupe l’exposition publique observée lors de l’inventaire du 13 juillet 2026.

La structure 2026 a ensuite été créée et vérifiée au moyen d’un accès WebDAV authentifié et de requêtes `PROPFIND`. En revanche, l’absence de partage public empêche désormais toute relecture anonyme du contenu réel des dossiers, ce qui correspond au niveau de sécurité attendu. Toute nouvelle vérification documentaire doit être réalisée avec un accès Nextcloud ou WebDAV authentifié.

## Rôle

Nextcloud conserve les fichiers lourds et les documents de travail : contrats, pièces administratives, visuels, photos, vidéos sources, présentations et exports.

GitHub conserve les actions, décisions, procédures, responsabilités et liens vers ces ressources.

## Arborescence réelle de référence

```text
Association/
├── Action - Initiatives/
│   ├── Annecy 3.0/
│   │   ├── Logo/
│   │   ├── Presentations Annecy 3.0/
│   │   └── Meetup/
│   │       └── 2026/
│   ├── Annecy Bitcoin/
│   │   ├── Formation 101/
│   │   ├── Meetup/
│   │   │   ├── 0_0_Template/
│   │   │   ├── 2023/
│   │   │   ├── 2024/
│   │   │   ├── 2025/
│   │   │   └── 2026/
│   │   ├── Présentations Annecy Bitcoin/
│   │   └── Ressources/
│   ├── B-Only/
│   │   └── 2026/
│   │       ├── 01_Programme-Intervenants/
│   │       │   ├── Photos Intervenants/
│   │       │   └── Logos Participants/
│   │       ├── 02_Sponsors-Contrats/
│   │       ├── 03_Communication/
│   │       │   └── Vignettes/
│   │       │       ├── Intervenants/
│   │       │       └── Organisations/
│   │       ├── 04_Production-Logistique/
│   │       ├── 05_Finances/
│   │       ├── 06_Medias/
│   │       └── Archives/
│   │           ├── Programme-Intervenants/
│   │           ├── Versions-anterieures/
│   │           └── Medias-2023-2025/
│   └── Grenoble 3.0/
├── Administration/
│   ├── Acteurs/
│   │   └── Adhérents/
│   ├── Comptabilité/
│   │   ├── .gestion/
│   │   ├── 2026/
│   │   └── Devis/
│   ├── Contrats-Conventions/
│   └── PV AG Statut Réglement/
├── Autres projets/
│   ├── Affichage libre/
│   ├── NostrAlps/
│   ├── pack4communities/
│   ├── Pizza Day/
│   └── Projet NFT/
├── Compte-rendus/
│   ├── 2023/
│   ├── 2024/
│   ├── 2025/
│   └── 2026/
└── LOGO Alpinechain/
    ├── PNG/
    └── SVG/
```

## Correspondance avec les projets GitHub

| Projet GitHub | Dossier Nextcloud réel | Règle |
|---|---|---|
| Association | `Administration/` et `Compte-rendus/` | Administration privée ; comptes rendus classés par année |
| Meetup Bitcoin | `Action - Initiatives/Annecy Bitcoin/` | Un dossier par événement dans `Meetup/<année>/` |
| Souveraineté 3.0 | `Action - Initiatives/Annecy 3.0/` | `Annecy 3.0` reste le nom documentaire historique |
| B-Only | `Action - Initiatives/B-Only/2026/` | Structure active par chantier pour l’édition 2026 |
| Communication transversale | `LOGO Alpinechain/` | Logos maîtres, guidelines et déclinaisons |
| Projets non actifs dans le Control Center | `Autres projets/` | Ne deviennent des projets GitHub que lorsqu’une action durable est engagée |

## Structure 2026 créée et vérifiée

### B-Only 2026

```text
Action - Initiatives/B-Only/
└── 2026/
    ├── 01_Programme-Intervenants/
    │   ├── Photos Intervenants/
    │   └── Logos Participants/
    ├── 02_Sponsors-Contrats/
    │   └── Supports-partenariat/
    ├── 03_Communication/
    │   └── Vignettes/
    │       ├── Intervenants/
    │       └── Organisations/
    ├── 04_Production-Logistique/
    │   ├── Restauration/
    │   └── Notes-de-travail/
    ├── 05_Finances/
    ├── 06_Medias/
    └── Archives/
        ├── Programme-Intervenants/
        ├── Versions-anterieures/
        └── Medias-2023-2025/
```

Les registres GitHub `projects/b-only/INTERVENANTS.md` et
`projects/b-only/ORGANISATIONS.md` portent les statuts de préparation. Nextcloud
conserve les fichiers sources et les exports graphiques. Le contrôle du
30 juillet 2026 recense 107 dossiers et 395 fichiers. Les portraits sont dans
`01_Programme-Intervenants/Photos Intervenants/`, les logos dans
`01_Programme-Intervenants/Logos Participants/`, les vignettes actives dans
`03_Communication/Vignettes/Intervenants/` ou `Organisations/`, et les versions
remplacées dans `Archives/Versions-anterieures/`. Aucun fichier n'a été supprimé.

### Rencontres Souveraineté 3.0

```text
Action - Initiatives/Annecy 3.0/
└── Meetup/
    └── 2026/
```

### Contrats et conventions transversaux

```text
Administration/
└── Contrats-Conventions/
```

Les créations et le classement ont été contrôlés par WebDAV. Aucun fichier ou dossier existant n’a été supprimé ou remplacé ; tous les déplacements autorisés ont refusé l’écrasement d’une destination existante.

## Convention de liaison GitHub ↔ Nextcloud

Chaque README de projet GitHub indique le chemin Nextcloud permanent. Chaque dossier actif devrait contenir un fichier `LISEZ-MOI.txt` avec :

```text
Projet : <nom>
Dossier GitHub : <URL du projet>
Issue pilote : <URL si applicable>
Responsable : <nom ou compte GitHub>
Données sensibles : oui/non
Partage public autorisé : oui/non
Dernière revue : AAAA-MM-JJ
```

## Versions actives et archivage

Un dossier de travail ne doit exposer qu'une seule version active et valable
par famille de document. Lorsqu'un fichier est remplacé mais doit être
conservé :

1. vérifier explicitement quel fichier devient la version active ;
2. déplacer l'ancienne version dans `Archives/Versions-anterieures/`, sans
   écrasement et en conservant le chemin relatif de son dossier d'origine ;
3. si le déplacement n'est pas immédiatement possible, suffixer temporairement
   son nom complet par `.old` ;
4. traiter tout fichier déjà suffixé `.old` comme une version archivée, même
   s'il se trouve encore dans le dossier actif, puis le déplacer dans
   `Archives/` dès que possible ;
5. conserver le nom, la date ou le numéro de version permettant de relier
   l'archive à sa version active ;
6. vérifier l'empreinte ou, à défaut, la taille avant et après déplacement, puis
   tracer l'opération.

Le dossier `Archives/Versions-anterieures/` est la solution préférée : le
suffixe `.old` est un marquage transitoire ou complémentaire. Les formats
distincts d'un même livrable, les pièces signées, les sources graphiques, les
variantes explicitement utiles et les documents sans successeur confirmé ne
sont pas considérés comme obsolètes sur leur seul nom.

La même consigne est déposée dans le dossier B-Only 2026 sous
`REGLE-ARCHIVAGE.txt`.

Les quatre anciennes versions de la campagne Élodie Lué sont archivées sous
`Archives/Versions-anterieures/03_Communication/Campagnes/2026/bonly26_speakers/elodie-lue/` :

- `README.md.old` ;
- `campaign-links.csv.old` ;
- `contenus-multicanaux-v1.md.old` ;
- `contenus-x-v2.md.old`.

Ils sont considérés comme non actifs. Les fichiers actifs
`contenus-multicanaux-v2.md` et `brief-vignette-v1.md` contiennent encore des
horaires antérieurs du programme d'Élodie Lué : ils doivent être corrigés dans
de nouvelles versions avant archivage de leurs versions actuelles.

La campagne Christine Jeanneaux conserve uniquement `README-v4.md`,
`contenus-multicanaux-v4.md` et `campaign-links-v1.csv` dans son dossier actif.
Ses versions V1 à V3 sont archivées sous le même chemin relatif dans
`Archives/Versions-anterieures/`. Sa vignette validée, comme celles d'Élodie
Lué et Nicolas Cantu, reste directement dans
`03_Communication/Vignettes/Intervenants/` avec le suffixe `--valide`.

Pour Renaud Lifchitz, `README-v4.md` désigne la version active de la campagne.
Elle référence `contenus-multicanaux-v2.md`, `article-blog-v2.md`,
`campaign-links-v1.csv` et `calendrier-diffusion-v2.csv`. La vignette validée
est `vignette--renaud-lifchitz--reticulum-reseau-cypherpunk--2026-08-03--valide.png`.
Les versions V1 ainsi que les `README-v2.md` et `README-v3.md` restent
conservés comme versions antérieures ; ils ne doivent pas être utilisés pour la
programmation.

La campagne partenaire Bitstack conserve `campaign-links-v1.csv` et
`contenus-multicanaux-v2.md` comme livrables actifs sous
`03_Communication/Campagnes/2026/bonly26_sponsors/bitstack/`. La version
`contenus-multicanaux-v1.md` est archivée sous le même chemin relatif dans
`Archives/Versions-anterieures/`. La V2 reste soumise à validation humaine
avant programmation ; aucune publication sociale n'a été effectuée lors du
classement du 11 août 2026.

Pierre Noizat possède trois portraits actifs dans
`01_Programme-Intervenants/Photos Intervenants/`. Aucun n'est désigné comme
version de référence : ils restent tous en place jusqu'à sa confirmation.

## Classification et droits

| Zone | Classification recommandée | Accès |
|---|---|---|
| `Administration/Acteurs/Adhérents/` | Données personnelles | Bureau et personnes habilitées uniquement |
| `Administration/Comptabilité/` | Financier sensible | Trésorier et délégataires explicites |
| `Administration/PV AG Statut Réglement/` | Interne par défaut | Bureau ; publication fichier par fichier |
| `Administration/Contrats-Conventions/` | Contractuel sensible | Bureau et responsables concernés |
| `Action - Initiatives/` | Interne projet | Équipe organisatrice concernée |
| `LOGO Alpinechain/` | Public après validation | Partage public possible |
| `Compte-rendus/` | Interne ou public selon contenu | Validation avant partage |

## Points restant à vérifier

- vérifier les journaux d’accès et les autres liens publics hérités ;
- confirmer les propriétaires, droits nominatifs et administrateurs de secours ;
- vérifier la corbeille, les versions, la rétention et la restauration Nextcloud ;
- étendre progressivement les fichiers `LISEZ-MOI.txt` aux autres dossiers actifs ; celui de B-Only 2026 est en place ;
- produire les versions corrigées des contenus et du brief Élodie Lué avec les
  horaires actuels avant d'archiver les versions existantes ;
- obtenir de Pierre Noizat le portrait de référence avant d'archiver les deux
  variantes non retenues ;
- vérifier que les exports d’adhérents et participants ne sont conservés que pendant la durée nécessaire ;
- réaliser une nouvelle revue documentaire authentifiée lorsque l’état réel des fichiers doit être contrôlé.

## Règle absolue

Aucun fichier ni dossier ne doit être supprimé, déplacé vers la corbeille ou rendu inaccessible sans validation humaine explicite préalable.
