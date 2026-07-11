# GitHub Project — AlpineChain Control Center

## Project actif

- URL : https://github.com/users/Alpinechain/projects/1
- Propriétaire : `Alpinechain`
- Numéro : `1`
- Dépôt piloté : `Alpinechain/Alpinechain_Association`

Le Project est la vue portefeuille. Les Issues restent la source de vérité des actions, décisions, responsables et échanges.

## Contrôleur automatique

Le dépôt contient :

```text
.github/workflows/alpinechain-project-control.yml
.github/scripts/project-control.sh
```

Le contrôleur utilise GitHub Actions, GitHub CLI et l’API GraphQL Projects V2.

### Fonctions

- relier le dépôt au Project ;
- mettre à jour le nom, la description et le README du Project ;
- créer les champs manquants sans dupliquer ceux qui existent ;
- importer toutes les Issues ouvertes ;
- ajouter automatiquement les Issues ouvertes, rouvertes, transférées ou modifiées ;
- classer les Issues selon leurs labels `project:*` ;
- initialiser la priorité à `P2` ;
- extraire une échéance au format `YYYY-MM-DD` depuis le corps de l’Issue ;
- passer les Issues `blocked` ou `waiting` en `En attente` ;
- passer les Issues fermées en `Terminé` ;
- réconcilier le Project chaque lundi matin ;
- permettre une exécution manuelle `bootstrap` ou `reconcile`.

Le script est idempotent : une nouvelle exécution complète ou corrige le Project sans recréer les mêmes éléments.

## Authentification obligatoire

Le jeton standard `GITHUB_TOKEN` d’un workflow est limité au dépôt et ne peut pas administrer GitHub Projects.

Un secret Actions nommé exactement :

```text
PROJECTS_TOKEN
```

doit être créé dans :

```text
Settings → Secrets and variables → Actions → New repository secret
```

### Option recommandée

Créer un personal access token à portée limitée, détenu par le compte `Alpinechain`, avec :

- accès en lecture et écriture au Project utilisateur ;
- accès au dépôt `Alpinechain/Alpinechain_Association` ;
- lecture des Issues et métadonnées du dépôt.

### Option de compatibilité

Utiliser un PAT classic avec les portées :

```text
project
repo
```

Le jeton ne doit jamais être écrit dans une Issue, un fichier du dépôt ou une conversation.

## Initialisation

Après création du secret `PROJECTS_TOKEN` :

1. ouvrir l’onglet **Actions** du dépôt ;
2. sélectionner **AlpineChain Project Control** ;
3. choisir **Run workflow** ;
4. conserver l’opération `bootstrap` ;
5. lancer le workflow ;
6. vérifier que les Issues ouvertes apparaissent dans le Project.

Les exécutions suivantes seront automatiques. L’opération manuelle `reconcile` permet de forcer une remise en cohérence complète.

## Champs gérés

| Champ | Type | Valeurs / usage |
|---|---|---|
| `Statut opérationnel` | Sélection | Inbox, À faire, En cours, En attente, À valider, Terminé |
| `Priorité` | Sélection | P0, P1, P2, P3 |
| `Projet` | Sélection | Association, Meetup Bitcoin, Souveraineté, B-Only |
| `Échéance` | Date | Première date ISO trouvée dans le corps de l’Issue |
| `Effort` | Nombre | Estimation simple 1, 2, 3, 5 ou 8 |
| `Assignees` | Champ GitHub natif | Responsables d’exécution |

Le champ GitHub natif `Status` peut être masqué dans les vues afin d’éviter un doublon avec `Statut opérationnel`.

## Vues à créer dans l’interface

L’API GitHub permet d’administrer les éléments et les champs, mais ne fournit pas une gestion fiable des vues enregistrées. Ces vues restent donc configurées dans l’interface du Project.

### Maintenant

- Issues ouvertes ;
- échéance dans les 30 prochains jours ou priorité P0/P1 ;
- groupement par `Statut opérationnel`.

### Calendrier

- disposition calendrier ;
- champ de date : `Échéance`.

### B-Only 2026

- filtre : `label:project:b-only` ;
- groupement : `Statut opérationnel` ;
- tri : `Échéance` croissante.

### Meetups

- filtre : `label:project:bitcoin-meetup,project:souverainete`.

### En attente

- filtre : `label:waiting,blocked`.

### Validation Cyrille

- filtre : `label:human-validation`.

### Technique

- filtre : `label:area:technical`.

## Règles de synchronisation

- Une nouvelle Issue entre dans `Inbox`.
- Une Issue sans priorité reçoit `P2`.
- Une Issue avec `waiting` ou `blocked` passe à `En attente`.
- Une Issue rouverte passe à `À faire`.
- Une Issue fermée passe à `Terminé`.
- Un statut manuel `En cours` ou `À valider` n’est pas écrasé par la réconciliation générale.
- Le label `human-validation` signale un contrôle obligatoire, mais ne suffit pas à déclarer le livrable prêt à valider.

## Règle générale

Le Project ne remplace pas les Issues. Il affiche leur état de portefeuille. Toute information durable reste dans l’Issue ou le document de référence concerné.
