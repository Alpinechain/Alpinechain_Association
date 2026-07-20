# AlpineChain — Maintenant

Date de dernière mise à jour : 2026-07-20
Horizon : 30 jours  
Validateur opérationnel : Cyrille

## Rôle

Ce fichier est le point d’entrée quotidien du pilotage AlpineChain. Il ne remplace ni les Issues GitHub ni les outils métiers. Il résume les priorités, décisions, blocages et échéances.

## Priorités actives

1. **P0 événement : réussir l’ouverture effective de la billetterie B-Only 2026 le 21 juillet 2026 à 21:21** : contrôle final, diffusion coordonnée, test réel et traçage des publications dans [#2](https://github.com/Alpinechain/Alpinechain_Association/issues/2) et [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
2. Consolider les confirmations sponsors B-Only 2026 et les prochaines actions : Paymium est soldé financièrement, Le Cercle du Coin reste à consolider et Bitstack attend une confirmation dans [#3](https://github.com/Alpinechain/Alpinechain_Association/issues/3) et [#4](https://github.com/Alpinechain/Alpinechain_Association/issues/4).
3. Poursuivre le calendrier éditorial B-Only 2026 après le lancement et compléter les URLs publiques : [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
4. Consolider le programme, les intervenants, les sujets et les créneaux B-Only 2026, notamment le titre de l’intervention de Pierre Noizat : [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11).
5. Finaliser la gouvernance des accès et les administrateurs de secours : Nextcloud dans [#10](https://github.com/Alpinechain/Alpinechain_Association/issues/10), Meta dans [#8](https://github.com/Alpinechain/Alpinechain_Association/issues/8) et Framer/OVH dans [#45](https://github.com/Alpinechain/Alpinechain_Association/issues/45).
6. Préparer l’atelier Bitcoin multisig et Disaster Recovery du 2 septembre 2026 selon la checklist J-21 à J+3 : [#6](https://github.com/Alpinechain/Alpinechain_Association/issues/6).
7. Franchir la porte de lancement du prochain rendez-vous Souveraineté 3.0 : thème, date, lieu, format, promesse et inscription : [#7](https://github.com/Alpinechain/Alpinechain_Association/issues/7).
8. Programmer la mise à niveau complète AlmaLinux 9.8 pendant la semaine du 27 juillet, après stabilisation de la billetterie : [Serveur #56](https://github.com/Alpinechain/Serveur/issues/56).

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
- La mise à jour 2026 est terminée dans [#33](https://github.com/Alpinechain/Alpinechain_Association/issues/33). Les contenus futurs restent dans [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) et la gouvernance Framer/OVH dans [#45](https://github.com/Alpinechain/Alpinechain_Association/issues/45).

### Sponsors

- Le traitement des confirmations, factures, paiements et contreparties reste en cours.
- Paymium : pack de 2 500 € facturé, payé et rapproché ; contreparties réparties entre les Issues programme, communication et logistique.
- Reprise opérationnelle prévue après la présente mise à jour.

## Revue d’exploitation 2026-W30

- Les cinq derniers runs du monitoring public sont réussis et aucun incident public n’est ouvert.
- Les 20 conteneurs de production sont démarrés, le MCP et ses six connecteurs sont sains, et aucune unité systemd n’est en échec.
- Les disques sont utilisés à 13 % pour `/` et 34 % pour le disque de données après suppression contrôlée d’une archive temporaire PeerTube de 23,76 Go.
- Le snapshot Restic `abee5432`, le contrôle de 5 % des données et la restauration Pretix isolée sont validés ; les timers quotidiens et hebdomadaires sont actifs. [#9](https://github.com/Alpinechain/Alpinechain_Association/issues/9) est clôturée.
- La rotation du secret, le nettoyage des healthchecks orphelins et des artefacts d’audit sont terminés dans [Serveur #35](https://github.com/Alpinechain/Serveur/issues/35), [#37](https://github.com/Alpinechain/Serveur/issues/37) et [#38](https://github.com/Alpinechain/Serveur/issues/38).
- Les correctifs de sécurité AlmaLinux sont appliqués et le noyau `5.14.0-687.26.1.el9_8` est actif. La montée complète 9.8 est planifiée dans [Serveur #56](https://github.com/Alpinechain/Serveur/issues/56).

## Système de pilotage

Le GitHub Project [AlpineChain Control Center](https://github.com/users/Alpinechain/projects/1) est opérationnel. Les Issues ouvertes sont synchronisées automatiquement et une réconciliation complète s’exécute chaque semaine.

Le standard événement commun est défini dans [`references/event-standard.md`](../references/event-standard.md). Toute nouvelle rencontre utilise le modèle `.github/ISSUE_TEMPLATE/evenement.md` et reste ouverte jusqu’à la capitalisation J+3.

Les flux entre outils sont définis dans [`references/data-flows.md`](../references/data-flows.md), les limites d’automatisation dans [`references/automation-policy.md`](../references/automation-policy.md) et l’organisation Nextcloud réelle dans [`references/nextcloud-index.md`](../references/nextcloud-index.md).

## Phase 3 — État

- La Phase 3 de connexion de l’exploitation est terminée et [#30](https://github.com/Alpinechain/Alpinechain_Association/issues/30) est clôturée. Les revues de droits restent suivies dans leurs Issues dédiées.
- Cartographie des outils et flux : documentée.
- Monitoring externe des services publics : actif.
- Revue hebdomadaire : active.
- Inventaire Nextcloud réalisé le 13 juillet 2026 : 66 dossiers, 133 fichiers, environ 228,5 Mio.
- Structure Nextcloud 2026 créée et vérifiée par accès authentifié : B-Only 2026, Meetup 2026 et Contrats-Conventions.
- Compte MCP Nextcloud dédié, mot de passe d’application et racine `Alpinechain-MCP` validés en WebDAV.
- Le partage public historique Nextcloud `6aBTY243WDkbSGL` a été supprimé et n’existe plus.
- L’exposition publique directe est considérée comme coupée ; la revue des droits, des liens hérités, de la rétention et des administrateurs de secours reste ouverte dans [#10](https://github.com/Alpinechain/Alpinechain_Association/issues/10).
- L’absence de partage public empêche désormais le contrôle anonyme du contenu réel, conformément au niveau de sécurité attendu. Toute nouvelle vérification documentaire doit utiliser un accès Nextcloud ou WebDAV authentifié.
- Cible Infomaniak Swiss Backup S3 active : première sauvegarde, contrôle Restic et restauration Pretix isolée terminés.
- MCP privé opérationnel pour Dolibarr, Paheko, Nextcloud, Pretix, PeerTube et IMAP. Décision validée : GPT reste l’interface de conversation, GitHub le cockpit et Codex accède au MCP par tunnel SSH ; aucune exposition publique n’est requise.
- Publication, paiement et décision : validation humaine maintenue.

## Décisions attendues

- Confirmer les modalités de contrôle opérationnel au moment exact de l’ouverture de la billetterie B-Only 2026.
- Confirmer les contreparties définitives et l’état administratif de chaque sponsor B-Only 2026.
- Confirmer l’intervenant, la salle exacte, la capacité et le budget de l’atelier Bitcoin du 2 septembre 2026.
- Valider le prochain thème, la date, le lieu et la promesse du rendez-vous Souveraineté 3.0.
- Définir les personnes disposant des droits opérationnels sur les comptes Meta AlpineChain.
- Définir les propriétaires Nextcloud et administrateurs de secours, puis dater la prochaine revue des droits.
- Confirmer la fenêtre de maintenance AlmaLinux 9.8 pendant la semaine du 27 juillet.

## En attente de tiers

- Confirmation formelle de participation de Bitstack au pack soutien B-Only 2026.
- Réponses des partenaires, sponsors et intervenants encore en discussion.
- Confirmation de l’intervenant de l’atelier multisig et Disaster Recovery.

## Risques à surveiller

- Informations divergentes entre GitHub, Nextcloud, Pretix, les conversations ChatGPT et les publications publiques.
- Liens de publications non archivés après diffusion.
- Actions importantes sans responsable ni échéance.
- Dépendance excessive à une seule personne pour les comptes, validations et accès.
- Échec d’une sauvegarde future ou vieillissement du dernier snapshot au-delà de 36 heures.
- Mise à niveau complète AlmaLinux 9.8 encore à exécuter dans une fenêtre contrôlée.
- Programme B-Only publié avant confirmation formelle des intervenants, sujets et créneaux.
- Liens publics Nextcloud hérités non encore identifiés.

## Prochaines échéances connues

| Date | Échéance | Projet |
|---|---|---|
| 2026-07-21 21:21 | Ouverture prévue de la billetterie B-Only 2026 | B-Only |
| Après chaque diffusion | Ajouter les URLs publiques et premiers résultats | B-Only |
| Semaine du 2026-07-27 | Mise à niveau complète AlmaLinux 9.8 | Infrastructure |
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
