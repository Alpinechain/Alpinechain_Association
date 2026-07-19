# AlpineChain — Maintenant

Dernière mise à jour : 2026-07-19
Horizon : 30 jours  
Validateur opérationnel : Cyrille

## Rôle

Ce fichier est le point d’entrée quotidien du pilotage AlpineChain. Il ne remplace ni les Issues GitHub ni les outils métiers. Il résume les priorités, décisions, blocages et échéances.

## Priorités actives

1. **P0 sécurité : retirer et faire tourner le mot de passe d’administration découvert en clair dans le dépôt serveur** : ne jamais reproduire sa valeur et suivre la rotation dans [Serveur #35](https://github.com/Alpinechain/Serveur/issues/35).
2. **P0 événement : réussir l’ouverture effective de la billetterie B-Only 2026 le 21 juillet 2026 à 21:21** : contrôle final, diffusion coordonnée, test réel et traçage des publications dans [#2](https://github.com/Alpinechain/Alpinechain_Association/issues/2) et [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
3. Consolider les confirmations sponsors B-Only 2026, les factures, paiements et contreparties associées : [Issue #3](https://github.com/Alpinechain/Alpinechain_Association/issues/3).
4. Poursuivre le calendrier éditorial B-Only 2026 après le lancement et ajouter les URLs publiques au fil de leur diffusion : [Issue #24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
5. Consolider le programme, les intervenants, les sujets et les créneaux B-Only 2026 : [Issue #11](https://github.com/Alpinechain/Alpinechain_Association/issues/11).
6. Préparer l’atelier Bitcoin multisig et Disaster Recovery du 2 septembre 2026 selon la checklist datée J-21 à J+3 : [Issue #6](https://github.com/Alpinechain/Alpinechain_Association/issues/6).
7. Franchir la porte de lancement du prochain rendez-vous Souveraineté 3.0 : thème, date, lieu, format, promesse et inscription : [Issue #7](https://github.com/Alpinechain/Alpinechain_Association/issues/7).
8. Configurer la cible Swiss Backup S3 déjà validée, activer la sauvegarde chiffrée hors serveur et exécuter une restauration testée : [Issue #9](https://github.com/Alpinechain/Alpinechain_Association/issues/9).

## État opérationnel B-Only 2026

### Billetterie

- Partie publique vérifiée et déclarée opérationnelle : https://join.alpinechain.xyz/org/bonly26/
- Ouverture programmée le 21 juillet 2026 à 21:21 Europe/Paris.
- Publications de lancement préparées et programmées.
- Les URLs publiques seront ajoutées dans GitHub au fil de leur diffusion.
- L’Issue reste ouverte jusqu’au contrôle du lancement effectif, au test final et à l’archivage des liens.

### Site public

- `https://b-only.org/` est à jour pour l’édition 2026.
- Une FAQ a été ajoutée.
- La maintenance continue du site est suivie dans [#33](https://github.com/Alpinechain/Alpinechain_Association/issues/33).

### Sponsors

- Le traitement des confirmations, factures, paiements et contreparties reste en cours.
- Paymium : pack de 2 500 € facturé, payé et rapproché ; contreparties réparties entre les Issues programme, communication et logistique.
- Reprise opérationnelle prévue après la présente mise à jour.

## Revue d’exploitation 2026-W29

- Les neuf services publics contrôlés répondent en HTTP 200 et les cinq derniers runs de monitoring sont réussis ; aucun incident public n’est ouvert.
- Les 20 conteneurs de production sont démarrés. Les disques sont utilisés à 9 % pour `/` et 43 % pour `/opt/podman`.
- Les timers de sauvegarde, de vérification Restic et de rapport d’exploitation ne sont pas installés ni activés. Aucun snapshot, aucun contrôle Restic et aucun test de restauration ne sont attestés ; suivi dans [#9](https://github.com/Alpinechain/Alpinechain_Association/issues/9).
- Trois timers de healthcheck Podman orphelins produisent des échecs systemd sans affecter les conteneurs actuels ; suivi dans [Serveur #37](https://github.com/Alpinechain/Serveur/issues/37).
- Des mises à jour de sécurité AlmaLinux, notamment pour le noyau, OpenSSH, OpenSSL, systemd et Podman, nécessitent une fenêtre de maintenance contrôlée ; suivi dans [Serveur #36](https://github.com/Alpinechain/Serveur/issues/36).
- Deux répertoires d’audit non suivis rendent le worktree de production non propre ; aucune suppression n’est autorisée sans validation, suivi dans [Serveur #38](https://github.com/Alpinechain/Serveur/issues/38).
- Le contrôle de sécurité a identifié un mot de passe d’administration versionné en clair. Sa valeur ne doit jamais être reproduite ; retrait et rotation suivis en P0 dans [Serveur #35](https://github.com/Alpinechain/Serveur/issues/35).

## Système de pilotage

Le GitHub Project [AlpineChain Control Center](https://github.com/users/Alpinechain/projects/1) est opérationnel. Les Issues ouvertes sont synchronisées automatiquement et une réconciliation complète s’exécute chaque semaine.

Le standard événement commun est défini dans [`references/event-standard.md`](../references/event-standard.md). Toute nouvelle rencontre utilise le modèle `.github/ISSUE_TEMPLATE/evenement.md` et reste ouverte jusqu’à la capitalisation J+3.

Les flux entre outils sont définis dans [`references/data-flows.md`](../references/data-flows.md), les limites d’automatisation dans [`references/automation-policy.md`](../references/automation-policy.md) et l’organisation Nextcloud réelle dans [`references/nextcloud-index.md`](../references/nextcloud-index.md).

## Phase 3 — État

- Cartographie des outils et flux : documentée.
- Monitoring externe des services publics : actif.
- Revue hebdomadaire : active.
- Inventaire Nextcloud réalisé le 13 juillet 2026 : 66 dossiers, 133 fichiers, environ 228,5 Mio.
- Structure Nextcloud 2026 créée et vérifiée par accès authentifié : B-Only 2026, Meetup 2026 et Contrats-Conventions.
- Le partage public historique Nextcloud `6aBTY243WDkbSGL` a été supprimé et n’existe plus.
- L’exposition publique directe est considérée comme coupée ; la revue des droits, des liens hérités, de la rétention et des administrateurs de secours reste ouverte dans [#10](https://github.com/Alpinechain/Alpinechain_Association/issues/10).
- L’absence de partage public empêche désormais le contrôle anonyme du contenu réel, conformément au niveau de sécurité attendu. Toute nouvelle vérification documentaire doit utiliser un accès Nextcloud ou WebDAV authentifié.
- Cible Restic hors serveur validée : Infomaniak Swiss Backup S3. Configuration des identifiants, première sauvegarde, contrôle Restic et restauration réelle encore requis.
- Publication, paiement et décision : validation humaine maintenue.

## Décisions attendues

- Confirmer les modalités de contrôle opérationnel au moment exact de l’ouverture de la billetterie B-Only 2026.
- Confirmer les contreparties définitives et l’état administratif de chaque sponsor B-Only 2026.
- Confirmer l’intervenant, la salle exacte, la capacité et le budget de l’atelier Bitcoin du 2 septembre 2026.
- Valider le prochain thème, la date, le lieu et la promesse du rendez-vous Souveraineté 3.0.
- Définir les personnes disposant des droits opérationnels sur les comptes Meta AlpineChain.
- Configurer les identifiants de la cible Swiss Backup S3, activer les timers et valider une restauration réelle.
- Confirmer définitivement les objectifs initiaux RPO 24 heures et RTO 8 heures après le premier test de restauration.
- Définir les propriétaires Nextcloud et administrateurs de secours, puis dater la prochaine revue des droits.

## En attente de tiers

- Confirmation formelle de participation de Bitstack au pack soutien B-Only 2026.
- Réponses des partenaires, sponsors et intervenants encore en discussion.
- Confirmation de l’intervenant de l’atelier multisig et Disaster Recovery.

## Risques à surveiller

- Informations divergentes entre GitHub, Nextcloud, Pretix, les conversations ChatGPT et les publications publiques.
- Liens de publications non archivés après diffusion.
- Actions importantes sans responsable ni échéance.
- Dépendance excessive à une seule personne pour les comptes, validations et accès.
- Sauvegarde versionnée mais non encore activée ni restaurée sur le serveur.
- Secret d’administration présent dans l’historique du dépôt serveur tant que la rotation et le retrait ne sont pas terminés.
- Mises à jour de sécurité système en attente d’une fenêtre contrôlée.
- Timers de healthcheck Podman orphelins générant des faux positifs systemd.
- Programme B-Only publié avant confirmation formelle des intervenants, sujets et créneaux.
- Liens publics Nextcloud hérités non encore identifiés.

## Prochaines échéances connues

| Date | Échéance | Projet |
|---|---|---|
| 2026-07-21 21:21 | Ouverture prévue de la billetterie B-Only 2026 | B-Only |
| Après chaque diffusion | Ajouter les URLs publiques et premiers résultats | B-Only |
| 2026-08-12 | J-21 de l’atelier multisig et Disaster Recovery | Meetup Bitcoin |
| 2026-09-02 19:00 | Atelier Bitcoin : multisig et Disaster Recovery | Meetup Bitcoin |
| 2026-09-05 | Capitalisation J+3 de l’atelier Bitcoin | Meetup Bitcoin |
| 2026-11-07 au 2026-11-09 | B-Only 2026 | B-Only |

## Publications à valider

Toute publication publique doit rester en validation humaine. Les campagnes actives doivent être rattachées à une Issue GitHub et comporter les liens publics définitifs dès leur diffusion.

Les publications d’ouverture de la billetterie sont programmées. Leur traçabilité reste à compléter dans [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) à mesure de leur publication.

## Règle d’usage

- Une action concrète devient une Issue.
- Un événement utilise le modèle d’Issue événement et reste ouvert jusqu’à J+3.
- Une décision durable est ajoutée au document de référence concerné.
- Un fichier lourd ou un visuel est stocké dans Nextcloud avec des droits adaptés.
- Les données personnelles et commerciales détaillées restent dans les outils métiers ou espaces privés.
- Les contrôles automatiques peuvent ouvrir des Issues, mais ne publient ni ne paient.
- Ce tableau est actualisé au minimum une fois par semaine.
