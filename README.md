# AlpineChain Association

Dépôt central de pilotage des activités associatives AlpineChain.

Il organise la méthode de travail, les projets, les actions, la communication, les décisions et la capitalisation. L’IA soutient le pilotage mais ne remplace ni la validation humaine ni les outils métiers.

## Accès rapide

| Besoin | Emplacement |
|---|---|
| Voir les priorités actuelles | [`dashboard/NOW.md`](dashboard/NOW.md) |
| Ouvrir le cockpit opérationnel | [AlpineChain Control Center](https://github.com/users/Alpinechain/projects/1) |
| Comprendre le cadre général | [`ALPINECHAIN_ASSOCIATION_OS.md`](ALPINECHAIN_ASSOCIATION_OS.md) |
| Consulter les actions | [Issues GitHub](https://github.com/Alpinechain/Alpinechain_Association/issues) |
| Administrer l’automatisation du Project | [`references/github-project.md`](references/github-project.md) |
| Comprendre les labels | [`references/github-labels.md`](references/github-labels.md) |
| Identifier la fonction des outils | [`references/tools.md`](references/tools.md) |
| Accéder à l’index Nextcloud | [`references/nextcloud-index.md`](references/nextcloud-index.md) |

## Projets

| Projet | Espace |
|---|---|
| Association | [`projects/association/`](projects/association/) |
| Meetup Bitcoin Annecy | [`projects/meetup-bitcoin/`](projects/meetup-bitcoin/) |
| Souveraineté 3.0 | [`projects/souverainete/`](projects/souverainete/) |
| B-Only | [`projects/b-only/`](projects/b-only/) |

## Principes de fonctionnement

```text
ChatGPT réfléchit et prépare
GitHub suit, décide et mémorise
Nextcloud conserve les fichiers
Les applications métiers exécutent
L’humain valide
```

- Une action concrète devient une Issue GitHub.
- Une décision durable est documentée dans le fichier de référence concerné.
- Les documents lourds, contrats, visuels et médias restent dans Nextcloud.
- Pretix, Paheko, Dolibarr, PeerTube et be-BOP restent les sources de vérité de leurs données propres.
- Aucun contenu préparé avec l’IA n’est publié automatiquement.

## Document principal

Le fichier de cadrage est :

```text
ALPINECHAIN_ASSOCIATION_OS.md
```

Il définit le positionnement associatif, les formats récurrents, les publics, la ligne éditoriale, les canaux, les rôles IA et les règles de validation humaine.

## Documents spécialisés

| Fichier | Rôle |
|---|---|
| `docs/CALENDRIER_EDITORIAL.md` | Séquence de production avant et après les rendez-vous |
| `docs/GUIDE_REDACTIONNEL_X.md` | Guide opérationnel pour les publications X |
| `references/github-labels.md` | Vocabulaire des Issues |
| `references/github-project.md` | Project actif, champs et automatisation |
| `references/tools.md` | Répartition des responsabilités entre outils |
| `references/nextcloud-index.md` | Liaison avec la bibliothèque documentaire |

## Structure

```text
.
├── .github/
│   ├── scripts/project-control.sh
│   └── workflows/alpinechain-project-control.yml
├── AGENTS.md
├── ALPINECHAIN_ASSOCIATION_OS.md
├── README.md
├── dashboard/
│   └── NOW.md
├── projects/
│   ├── association/
│   ├── meetup-bitcoin/
│   ├── souverainete/
│   └── b-only/
├── references/
│   ├── github-labels.md
│   ├── github-project.md
│   ├── nextcloud-index.md
│   └── tools.md
├── docs/
│   ├── CALENDRIER_EDITORIAL.md
│   ├── GUIDE_REDACTIONNEL_X.md
│   └── journal-progression/
├── notes/
├── templates/
└── assets/
```

La structure est enrichie uniquement si chaque fichier possède un rôle opérationnel clair.

## Usage recommandé

1. Lire `dashboard/NOW.md` pour connaître les priorités.
2. Utiliser les Issues pour créer, assigner et fermer les actions.
3. Consulter le Project pour la vue portefeuille.
4. Consulter le README du projet concerné.
5. Respecter `AGENTS.md` pour toute intervention assistée par IA.
6. Appliquer `docs/GUIDE_REDACTIONNEL_X.md` aux publications X.
7. Valider humainement tout contenu avant publication publique.
8. Mettre à jour le tableau de bord au minimum une fois par semaine.

## Règle de progression

```text
Un fichier créé doit avoir un rôle clair, sinon il n’est pas créé.
```
