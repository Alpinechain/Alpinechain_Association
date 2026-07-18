# Cible de sauvegarde hors serveur AlpineChain

Version : V1.0  
Date de décision : 2026-07-18

## Décision

La cible retenue pour les sauvegardes Restic est **Infomaniak Swiss Backup, accès S3 compatible**, dans un espace distinct du serveur de production AlpineChain.

Cette cible répond aux exigences suivantes :

- stockage hors du serveur et hors de son disque ;
- chiffrement Restic côté client avant transfert ;
- protocole S3 compatible pris en charge nativement par Restic ;
- hébergement suisse cohérent avec l’écosystème Infomaniak déjà utilisé ;
- identifiants révocables dédiés à la sauvegarde.

## Paramètres d’exploitation validés

| Paramètre | Valeur |
|---|---:|
| RPO cible | 24 heures |
| RTO cible pour un service critique | 8 heures |
| Sauvegarde | Quotidienne |
| Contrôle Restic | Hebdomadaire |
| Test de restauration | Mensuel pendant 3 mois, puis trimestriel |
| Rétention | 14 quotidiennes, 8 hebdomadaires, 12 mensuelles, 3 annuelles |
| Âge maximal accepté du dernier snapshot | 36 heures |

Ces valeurs sont des objectifs internes d’exploitation, pas une garantie contractuelle.

## Configuration attendue

Le compte Infomaniak doit disposer d’un produit Swiss Backup et d’un appareil de type Cloud/S3 compatible. Les valeurs réelles restent exclusivement dans `/etc/alpinechain/backup.env` sur le serveur.

```text
RESTIC_REPOSITORY=s3:https://<endpoint-infomaniak>/<bucket-ou-chemin-dédié>
AWS_ACCESS_KEY_ID=<identifiant dédié>
AWS_SECRET_ACCESS_KEY=<secret dédié>
RESTIC_PASSWORD_FILE=/etc/alpinechain/restic-password
```

Aucune clé, aucun mot de passe et aucun contenu de sauvegarde ne doit être ajouté à GitHub, Nextcloud public ou ChatGPT.

## Séparation des responsabilités

- Propriétaire fonctionnel : trésorier / validateur opérationnel AlpineChain.
- Administrateur de la cible : compte Infomaniak AlpineChain.
- Administrateur technique serveur : personne disposant d’un accès root nominatif au serveur.
- Accès de secours : à attribuer nominativement et à tester avant clôture de la Phase 3.

## Révocation

En cas de compromission :

1. désactiver immédiatement les identifiants S3 concernés dans Infomaniak ;
2. arrêter les timers de sauvegarde sur le serveur ;
3. générer de nouveaux identifiants limités au dépôt ;
4. remplacer `/etc/alpinechain/backup.env` sans écrire les secrets dans Git ;
5. exécuter une sauvegarde et un contrôle Restic ;
6. documenter l’incident et la rotation dans l’Issue GitHub, sans exposer les secrets.

## État réel au 18 juillet 2026

- [x] Technologie et fournisseur choisis.
- [x] RPO, RTO, fréquence et rétention validés.
- [ ] Produit Swiss Backup et appareil S3 confirmés dans le Manager Infomaniak.
- [ ] Identifiants dédiés créés.
- [ ] Configuration appliquée sur le serveur.
- [ ] Dépôt Restic initialisé.
- [ ] Première sauvegarde réussie.
- [ ] Contrôle Restic réussi.
- [ ] Restauration Pretix isolée réussie.

La cible est donc **décidée mais pas encore activée**.