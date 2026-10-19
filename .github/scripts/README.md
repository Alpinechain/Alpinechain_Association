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
- Python 3 (bibliothèque standard uniquement) ;
- variable `GH_TOKEN` autorisée à administrer le Project et lire les Issues du dépôt ;
- variables `PROJECT_OWNER`, `PROJECT_NUMBER` et `TARGET_REPOSITORY` définies par le workflow.

Le script est conçu pour être relancé sans créer de doublons. Les opérations
`bootstrap` et `reconcile` parcourent toutes les Issues ouvertes, ainsi que les
Issues fermées déjà présentes dans le Project. Elles peuvent ainsi réparer un
statut `Terminé` manqué sans importer tout l'historique des Issues fermées.

## Échéances

`project-due-date.py` accepte uniquement une déclaration explicite dans le corps, selon [la convention du Project](../../references/github-project.md#échéances-explicites). Aucune date n’est inférée d’un nom de fichier. Les échéances non déclarées des Issues ouvertes sont effacées ; celles des Issues fermées restent historiques.
