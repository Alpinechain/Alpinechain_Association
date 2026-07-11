# Workflows AlpineChain

## AlpineChain Project Control

Le workflow `alpinechain-project-control.yml` synchronise les Issues avec le Project :

https://github.com/users/Alpinechain/projects/1

Il nécessite le secret Actions suivant :

```text
PROJECTS_TOKEN
```

Sans ce secret, le workflow s’arrête volontairement avant toute mutation du Project.

Voir `../../references/github-project.md` pour la procédure d’activation et les permissions nécessaires.
