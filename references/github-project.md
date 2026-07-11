# GitHub Project — AlpineChain Control Center

## Statut

Configuration cible du tableau GitHub Projects. La création du tableau nécessite un accès à l’interface ou à l’API GitHub Projects de l’organisation.

## Nom

`AlpineChain Control Center`

## Finalité

Fournir une vue unique des Issues du dépôt `Alpinechain/Alpinechain_Association`, sans dupliquer leur contenu.

## Champs recommandés

| Champ | Type | Valeurs / usage |
|---|---|---|
| Status | Sélection | Inbox, À faire, En cours, En attente, À valider, Terminé |
| Priorité | Sélection | P0, P1, P2, P3 |
| Projet | Sélection | Association, Meetup Bitcoin, Souveraineté, B-Only |
| Échéance | Date | Date opérationnelle principale |
| Responsable | Utilisateur | Responsable d’exécution |
| Effort | Nombre | Estimation simple 1, 2, 3, 5 ou 8 |

## Vues

### Maintenant

- Issues ouvertes ;
- échéance dans les 30 prochains jours ou priorité P0/P1 ;
- groupées par Status.

### Calendrier

- vue calendrier fondée sur le champ Échéance.

### B-Only 2026

- filtre : `label:project:b-only` ;
- groupement : Status ;
- tri : Échéance croissante.

### Meetups

- filtre : `label:project:bitcoin-meetup OR label:project:souverainete`.

### En attente

- filtre : `label:waiting OR label:blocked`.

### Validation Cyrille

- filtre : `label:human-validation`.

### Technique

- filtre : `label:area:technical`.

## Automatisations recommandées

- Toute nouvelle Issue entre dans `Inbox`.
- Une Issue fermée passe à `Terminé`.
- Une Issue avec `waiting` passe à `En attente`.
- Une Issue avec `human-validation` passe à `À valider` uniquement lorsque le livrable est prêt.

## Règle

Le Project ne remplace pas les Issues. Il affiche leur état de portefeuille. Toute information durable reste dans l’Issue ou le document de référence concerné.
