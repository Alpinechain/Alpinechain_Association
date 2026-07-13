# Index Nextcloud AlpineChain

Dernière vérification : 2026-07-13  
Inventaire : 66 dossiers, 133 fichiers, environ 228,5 Mio

## Point d’accès observé

Le partage analysé pointe vers une racine documentaire contenant l’administration, les initiatives, les comptes rendus, les logos et plusieurs projets historiques.

Le lien public communiqué était :

```text
https://cloud.alpinechain.xyz/s/6aBTY243WDkbSGL
```

Ce lien ne doit plus être considéré comme un point d’accès permanent tant que l’incident de confidentialité #37 n’est pas résolu.

## Rôle

Nextcloud conserve les fichiers lourds et les documents de travail : contrats, pièces administratives, visuels, photos, vidéos sources, présentations et exports.

GitHub conserve les actions, décisions, procédures, responsabilités et liens vers ces ressources.

## Arborescence réelle de référence

```text
Racine partagée/
├── Action - Initiatives/
│   ├── Annecy 3.0/
│   │   ├── Logo/
│   │   └── Presentations Annecy 3.0/
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
│   └── Grenoble 3.0/
├── Administration/
│   ├── Acteurs/
│   │   └── Adhérents/
│   ├── Comptabilité/
│   │   ├── .gestion/
│   │   ├── 2026/
│   │   └── Devis/
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
| B-Only | `Action - Initiatives/B-Only/` | Dossier actif à structurer par édition |
| Communication transversale | `LOGO Alpinechain/` | Logos maîtres, guidelines et déclinaisons |
| Projets non actifs dans le Control Center | `Autres projets/` | Ne deviennent des projets GitHub que lorsqu’une action durable est engagée |

## Dossiers réellement nécessaires à ajouter

L’organisation existante est conservée. Trois ajouts seulement sont recommandés.

### 1. B-Only 2026

```text
Action - Initiatives/B-Only/
└── 2026/
    ├── 01_Programme-Intervenants/
    ├── 02_Sponsors-Contrats/
    ├── 03_Communication/
    ├── 04_Production-Logistique/
    ├── 05_Finances/
    └── 06_Medias/
```

Justification : le dossier B-Only existe mais aucune structure d’édition n’est visible. Les six sous-dossiers couvrent les huit chantiers GitHub sans créer un labyrinthe documentaire.

### 2. Rencontres Souveraineté 3.0

```text
Action - Initiatives/Annecy 3.0/
└── Meetup/
    └── 2026/
```

Justification : les logos et présentations existent, mais aucun emplacement événementiel annuel n’est visible. Chaque rencontre peut ensuite utiliser un dossier daté `AAAA-MM-JJ_Theme`.

### 3. Contrats et conventions transversaux

```text
Administration/
└── Contrats-Conventions/
```

Justification : les contrats associatifs, conventions de lieu, assurances et partenariats transversaux ne doivent pas être mélangés aux devis comptables ni aux dossiers propres à B-Only.

## Dossiers non recommandés

- Pas de nouvelle racine numérotée `01_Association`, `02_Meetup`, etc. : elle dupliquerait l’organisation existante et casserait les habitudes.
- Pas de dossier global `Communication` : les logos transversaux sont déjà dans `LOGO Alpinechain/` et les campagnes doivent rester dans leur projet.
- Pas de dossier global `Archives` pour le moment : les années et projets historiques remplissent déjà ce rôle.
- Pas de stockage de mots de passe, clés ou tokens dans Nextcloud : utiliser le gestionnaire de secrets prévu.

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

- couper ou restreindre le partage public actuel selon #37 ;
- vérifier les journaux d’accès et les liens publics hérités ;
- confirmer les propriétaires et droits des dossiers ;
- vérifier la corbeille, la rétention et la restauration Nextcloud ;
- créer les trois dossiers nécessaires après validation humaine ;
- ajouter les fichiers `LISEZ-MOI.txt` sans déplacer massivement les documents existants.
