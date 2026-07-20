# Cible de sauvegarde hors serveur AlpineChain

Version : V1.1
Date de décision : 2026-07-18
Date d’activation : 2026-07-20

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
- Accès de secours : compte principal du Manager capable de régénérer les clés ; la gouvernance nominative globale des accès reste suivie dans les Issues dédiées.

## Révocation

En cas de compromission :

1. désactiver immédiatement les identifiants S3 concernés dans Infomaniak ;
2. arrêter les timers de sauvegarde sur le serveur ;
3. générer de nouveaux identifiants limités au dépôt ;
4. remplacer `/etc/alpinechain/backup.env` sans écrire les secrets dans Git ;
5. exécuter une sauvegarde et un contrôle Restic ;
6. documenter l’incident et la rotation dans l’Issue GitHub, sans exposer les secrets.

## État réel au 20 juillet 2026

- [x] Technologie et fournisseur choisis.
- [x] RPO, RTO, fréquence et rétention validés.
- [x] Produit Swiss Backup et appareil S3 confirmés dans le Manager Infomaniak.
- [x] Identifiants dédiés créés.
- [x] Configuration appliquée sur le serveur, hors Git et en mode root-only.
- [x] Dépôt Restic initialisé.
- [x] Première sauvegarde réussie : snapshot `abee5432` du 20 juillet 2026.
- [x] Contrôle Restic réussi : métadonnées et lecture de 5 % des données, sans erreur.
- [x] Restauration Pretix isolée réussie dans PostgreSQL sans réseau.
- [x] Timers de sauvegarde, vérification et rapport d’exploitation actifs.

La cible est **active et contrôlée**. La rotation des clés S3 s’effectue en générant une nouvelle paire dans le Manager Infomaniak, en la validant avec `restic snapshots`, puis en révoquant l’ancienne. Le suivi détaillé de l’activation et de la restauration se trouve dans l’Issue #9.
