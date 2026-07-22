# Index Nextcloud AlpineChain

Dernière vérification documentaire complète : 2026-07-13  
Dernière mise à jour de sécurité : 2026-07-18  
Inventaire vérifié le 13 juillet : 66 dossiers, 133 fichiers, environ 228,5 Mio

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
│   │       ├── 02_Sponsors-Contrats/
│   │       ├── 03_Communication/
│   │       │   └── Vignettes/
│   │       │       ├── Intervenants/
│   │       │       ├── Organisations/
│   │       │       └── Exports-valides/
│   │       │           ├── Intervenants/
│   │       │           └── Organisations/
│   │       ├── 04_Production-Logistique/
│   │       ├── 05_Finances/
│   │       └── 06_Medias/
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
    ├── 02_Sponsors-Contrats/
    ├── 03_Communication/
    │   └── Vignettes/
    │       ├── Intervenants/
    │       ├── Organisations/
    │       └── Exports-valides/
    │           ├── Intervenants/
    │           └── Organisations/
    ├── 04_Production-Logistique/
    ├── 05_Finances/
    └── 06_Medias/
```

Les registres GitHub `projects/b-only/INTERVENANTS.md` et
`projects/b-only/ORGANISATIONS.md` portent les statuts de préparation. Nextcloud
conserve les fichiers sources et les exports graphiques. Les visuels existants
ne sont ni déplacés ni dupliqués lors de la création de cette arborescence ; les
registres référencent leur emplacement réel.

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

Les créations ont été contrôlées par `PROPFIND`. Aucun fichier ou dossier existant n’a été supprimé, déplacé, renommé ou remplacé.

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
- ajouter les fichiers `LISEZ-MOI.txt` après validation de leur contenu ;
- vérifier que les exports d’adhérents et participants ne sont conservés que pendant la durée nécessaire ;
- réaliser une nouvelle revue documentaire authentifiée lorsque l’état réel des fichiers doit être contrôlé.

## Règle absolue

Aucun fichier ni dossier ne doit être supprimé, déplacé vers la corbeille ou rendu inaccessible sans validation humaine explicite préalable.
