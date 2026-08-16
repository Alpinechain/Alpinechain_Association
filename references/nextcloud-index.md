# Index Nextcloud AlpineChain

Dernière vérification documentaire complète : 2026-07-30
Dernière mise à jour ciblée B-Only : 2026-08-16 — réconciliation GitHub ↔ Nextcloud
Dernière mise à jour de sécurité : 2026-08-16
Inventaire vérifié le 13 juillet : 66 dossiers, 133 fichiers, environ 228,5 Mio
Audit ciblé B-Only 2026 après nettoyage : 45 dossiers et 111 fichiers
Nextcloud au 16 août 2026 : 24 fichiers textuels de campagne encore actifs

## Statut d’accès

Le partage public historique suivant a été supprimé et n’existe plus :

```text
https://cloud.alpinechain.xyz/s/6aBTY243WDkbSGL
```

Il ne constitue plus un point d’accès à Nextcloud. Cette suppression coupe l’exposition publique observée lors de l’inventaire du 13 juillet 2026.

La structure 2026 a ensuite été créée et vérifiée au moyen d’un accès WebDAV authentifié et de requêtes `PROPFIND`. En revanche, l’absence de partage public empêche désormais toute relecture anonyme du contenu réel des dossiers, ce qui correspond au niveau de sécurité attendu. Toute nouvelle vérification documentaire doit être réalisée avec un accès Nextcloud ou WebDAV authentifié.

Le contrôle authentifié du 16 août 2026 recense trois partages publics actifs
sur le périmètre Association. Ils sont confirmés et doivent rester inchangés :
la campagne Christine Jeanneaux, ainsi que le contenu V2 et la vignette Paymium.
Un enregistrement public orphelin (`share_id=20`, `fileid=3478`) empêche
`occ share:list` de produire un inventaire complet. Sa suppression n'est pas
autorisée ; il reste donc signalé sans modification.

## Rôle

Nextcloud conserve les portraits, visuels, contrats, pièces administratives,
médias sources, présentations et exports lourds.

GitHub conserve les actions, décisions, procédures, responsabilités, textes,
calendriers, fichiers de liens et preuves publiques.

Ces contenus textuels ont une seule version maîtresse dans GitHub et ne sont
pas copiés dans Nextcloud. Les anciennes copies Nextcloud déjà présentes sont
des éléments de transition : leur retrait exige une liste exacte et une
validation humaine séparée.

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
│   │       └── Archives/ (vide après nettoyage manuel du 16 août 2026)
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
    └── Archives/ (vide après nettoyage manuel du 16 août 2026)
```

Les registres GitHub `projects/b-only/INTERVENANTS.md` et
`projects/b-only/ORGANISATIONS.md` portent les statuts de préparation. Nextcloud
conserve les fichiers sources et les exports graphiques. Le contrôle du
16 août 2026, après nettoyage manuel des archives et retrait approuvé de
22 doublons textuels, recense 45 dossiers et 111 fichiers dans B-Only 2026.
La corbeille n'a pas été vidée : elle contient alors 87 dossiers et 355 fichiers,
ce qui permet encore une restauration. Les portraits sont dans
`01_Programme-Intervenants/Photos Intervenants/`, les logos dans
`01_Programme-Intervenants/Logos Participants/`, les vignettes actives dans
`03_Communication/Vignettes/Intervenants/` ou `Organisations/`. Le dossier
`Archives/` est vide à la suite du nettoyage manuel confirmé par Cyrille.

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

Chaque README de projet GitHub indique le chemin Nextcloud permanent et porte
les règles de classement applicables. Un fichier `LISEZ-MOI.txt` dans
Nextcloud n'est pas requis : les règles centralisées et versionnées dans GitHub
prévalent. Les fichiers `LISEZ-MOI.txt` déjà présents peuvent rester comme
aides locales, mais ne constituent pas une source de vérité et n'ont pas à être
maintenus en parallèle.

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

Les anciennes copies Nextcloud des textes de campagne, calendriers et fichiers
de liens sont conservées temporairement tant que leur équivalent maître n'est
pas identifié dans GitHub et que leur retrait exact n'est pas validé. Elles ne
doivent plus être modifiées ni servir de source de préparation.

Le 16 août 2026, 22 doublons actifs dont l'empreinte SHA-256 était identique à
`origin/main` ont été retirés par WebDAV après validation explicite. Ils sont
restés dans la corbeille Nextcloud. Le dossier des campagnes conserve alors
24 fichiers textuels : les deux textes dont le partage public doit rester actif
et 22 autres fichiers à qualifier. Dans cette branche GitHub, dix fichiers
utiles absents du dépôt sont consolidés ; deux anciennes versions ProfEduStream
étaient déjà présentes à l'identique sous un autre chemin ; trois README ne sont
pas repris, conformément à la règle centralisée ; les huit fichiers Élodie Lüe
restent en attente de comparaison avec la V3 locale.

Le 16 août 2026, les six versions remplacées de la campagne Renaud Lifchitz ont
d'abord été déplacées sans écrasement sous
`Archives/Versions-anterieures/03_Communication/Campagnes/2026/bonly26_speakers/renaud-lifchitz/` :

- `README-v1.md` ;
- `README-v2.md` ;
- `README-v3.md` ;
- `article-blog-v1.md` ;
- `calendrier-diffusion-v1.csv` ;
- `contenus-multicanaux-v1.md`.

Les empreintes SHA-256 ont été contrôlées avant et après déplacement. Ces
archives ont ensuite été retirées lors du nettoyage manuel du dossier
`Archives/`, tandis que les versions textuelles de référence restent dans
GitHub. La vignette validée est
`vignette--renaud-lifchitz--reticulum-reseau-cypherpunk--2026-08-03--valide.png`.

Pour Aurore Galves, le portrait reçu le 5 août 2026 est
`intervenant--aurore-galves--portrait--2026-08-05--source.jpg`. La vignette
carrée validée est
`vignette--aurore-galves--have-fun-staying-fun--2026-08-05--valide.png`.

Pour Pierre Noizat, la source retenue est
`01_Programme-Intervenants/Photos Intervenants/intervenant--pierre-noizat--portrait--2026-08-12--source.jpg`.
La vignette active est
`03_Communication/Vignettes/Intervenants/vignette--pierre-noizat--energie-monnaie-et-civilisation--2026-08-12--valide.png`.
Les portraits `portrait-noir-et-blanc` et `portrait-profil` du 19 juillet sont
conservés sous `Archives/Versions-anterieures/01_Programme-Intervenants/Photos Intervenants/`.

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
- consolider les huit fichiers Élodie Lüe avec la V3 locale avant toute nouvelle
  suppression ;
- après fusion GitHub, soumettre une liste exacte distincte pour les textes
  désormais couverts, les deux anciennes copies ProfEduStream déjà identiques
  dans GitHub et les trois README devenus inutiles ;
- vérifier que les exports d’adhérents et participants ne sont conservés que pendant la durée nécessaire ;
- réaliser une nouvelle revue documentaire authentifiée lorsque l’état réel des fichiers doit être contrôlé.

## Règle absolue

Aucun fichier ni dossier ne doit être supprimé, déplacé vers la corbeille ou rendu inaccessible sans validation humaine explicite préalable.
