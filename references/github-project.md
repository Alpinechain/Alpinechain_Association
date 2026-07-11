# GitHub Project — AlpineChain Control Center

## État opérationnel

- URL : https://github.com/users/Alpinechain/projects/1
- Propriétaire : `Alpinechain`
- Numéro : `1`
- Dépôt piloté : `Alpinechain/Alpinechain_Association`
- Mise en production validée : 2026-07-11
- Issue de mise en place : [#14](https://github.com/Alpinechain/Alpinechain_Association/issues/14), terminée
- Réconciliation complète validée : [run 29165354583](https://github.com/Alpinechain/Alpinechain_Association/actions/runs/29165354583)

Le Project est la vue portefeuille. Les Issues restent la source de vérité des actions, décisions, responsables et échanges.

## Contrôleur automatique

Le dépôt contient :

```text
.github/workflows/alpinechain-project-control.yml
.github/scripts/project-control.sh
```

Le contrôleur utilise GitHub Actions et l’API GraphQL Projects V2. GitHub CLI est utilisé comme client de l’API et pour lire les Issues, mais aucune commande `gh project` n’est utilisée.

Ce choix évite les scopes annexes `read:org` et `read:discussion` réclamés par certaines sous-commandes GitHub CLI alors qu’ils ne sont pas nécessaires au fonctionnement de ce Project utilisateur.

### Fonctions validées

- relier le dépôt au Project ;
- mettre à jour le nom, la description et le README du Project ;
- créer les champs manquants sans dupliquer ceux qui existent ;
- importer toutes les Issues ouvertes ;
- ajouter automatiquement les Issues ouvertes, rouvertes, transférées ou modifiées ;
- détecter les éléments déjà présents ;
- classer les Issues selon leurs labels `project:*` ;
- initialiser la priorité à `P2` ;
- extraire une échéance au format `YYYY-MM-DD` depuis le corps de l’Issue ;
- passer les Issues `blocked` ou `waiting` en `En attente` ;
- passer les Issues fermées en `Terminé` ;
- réconcilier le Project chaque lundi matin ;
- permettre une exécution manuelle `bootstrap` ou `reconcile` ;
- publier dans l’Issue déclenchante le résultat et les dernières lignes d’erreur.

Le script est idempotent : une nouvelle exécution complète ou corrige le Project sans recréer les mêmes éléments.

## Authentification

Le jeton standard `GITHUB_TOKEN` d’un workflow est limité au dépôt et ne peut pas administrer ce Project utilisateur.

Le dépôt utilise donc un secret Actions nommé :

```text
PROJECTS_TOKEN
```

Il est configuré dans :

```text
Settings → Secrets and variables → Actions
```

Le contrôleur vérifie que ce jeton appartient bien au compte `Alpinechain` avant toute mutation.

### Permissions retenues

Pour un PAT classic :

```text
project
repo
```

Aucun scope `read:org` ou `read:discussion` n’est requis par le contrôleur GraphQL actuel.

Le jeton ne doit jamais être écrit dans une Issue, un fichier du dépôt ou une conversation.

## Exploitation

### Automatique

- tout événement pertinent sur une Issue synchronise l’Issue concernée ;
- toute Issue fermée passe à `Terminé` ;
- une réconciliation complète s’exécute chaque lundi à 04:17 UTC ;
- toute erreur est commentée sur l’Issue déclenchante avec le lien du run et un extrait du log.

### Manuelle

Dans l’onglet **Actions**, sélectionner **AlpineChain Project Control**, puis lancer :

- `bootstrap` pour initialiser ou réinitialiser l’ensemble ;
- `reconcile` pour remettre toutes les Issues ouvertes en cohérence.

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

## Vues recommandées

GitHub ne fournit pas de mutation stable pour créer et configurer les vues enregistrées. La vue par défaut est opérationnelle ; les vues complémentaires restent des réglages d’interface non bloquants.

### Maintenant

- Issues ouvertes ;
- échéance dans les 30 prochains jours ou priorité P0/P1 ;
- groupement par `Statut opérationnel`.

### Calendrier

- disposition calendrier ;
- champ de date : `Échéance`.

### B-Only 2026

Référence détaillée : [`projects/b-only/BOARD.md`](../projects/b-only/BOARD.md)

- nom : `B-Only 2026` ;
- filtre : `label:project:b-only` ;
- disposition : tableau ou board ;
- groupement : `Statut opérationnel` ;
- tri : `Priorité`, puis `Échéance` croissante ;
- champs visibles : Titre, Priorité, Échéance, Assignees et Labels ;
- champ natif `Status` masqué s’il fait doublon.

Vues secondaires recommandées :

- `B-Only — En attente` : `label:project:b-only label:waiting,blocked` ;
- `B-Only — Finances` : `label:project:b-only label:area:finance` ;
- `B-Only — Production` : `label:project:b-only label:area:event,area:technical` ;
- `B-Only — Validation Cyrille` : `label:project:b-only label:human-validation`.

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
