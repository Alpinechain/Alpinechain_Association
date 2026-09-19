# Continuité et sauvegardes AlpineChain

Version : V1.2
Dernière mise à jour : 2026-09-12

## Rôle de cette référence

Ce document conserve uniquement les décisions associatives relatives à la
continuité d’activité. L’architecture, le fournisseur, les chemins, les
identifiants, les commandes, les contrôles détaillés et les procédures de
restauration relèvent du dépôt privé `Alpinechain/Serveur`, dans
`docs/backup-restore-runbook.md`.

## Objectifs validés

| Objectif | Valeur |
|---|---:|
| Perte de données maximale visée | 24 heures |
| Reprise visée d’un service critique | 8 heures |
| Sauvegarde | Quotidienne |
| Vérification | Hebdomadaire |
| Test de restauration | Mensuel pendant 3 mois, puis trimestriel |

Ces valeurs sont des objectifs internes d’exploitation, pas une garantie
contractuelle.

## État associatif

Le dispositif de sauvegarde chiffrée hors serveur est actif et un test de
restauration isolée a été validé. Le dépôt Association ne conserve que cet état
synthétique et les décisions nécessitant un arbitrage humain.

Les résultats datés, incidents, rotations d’accès et preuves techniques sont
suivis dans le dépôt privé Serveur. Aucun secret, identifiant de stockage,
chemin interne ou identifiant de snapshot ne doit être copié ici.
