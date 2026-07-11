# Contrôleur GitHub Project

Le workflow `../workflows/alpinechain-project-control.yml` pilote le Project utilisateur AlpineChain n°1.

## Commandes

```bash
.github/scripts/project-control.sh bootstrap
.github/scripts/project-control.sh reconcile
.github/scripts/project-control.sh issue-event <issue-url> <event-action>
```

## Pré-requis

- GitHub CLI `gh` ;
- `jq` ;
- variable `GH_TOKEN` autorisée à administrer le Project et lire les Issues du dépôt ;
- variables `PROJECT_OWNER`, `PROJECT_NUMBER` et `TARGET_REPOSITORY` définies par le workflow.

Le script est conçu pour être relancé sans créer de doublons.
