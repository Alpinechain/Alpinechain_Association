# AlpineChain — Maintenant

Dernière mise à jour : 2026-07-13  
Horizon : 30 jours  
Validateur opérationnel : Cyrille

## Rôle

Ce fichier est le point d’entrée quotidien du pilotage AlpineChain. Il ne remplace ni les Issues GitHub ni les outils métiers. Il résume les priorités, décisions, blocages et échéances.

## Priorités actives

1. **P0 : couper l’exposition publique des données personnelles et financières dans Nextcloud** : [Issue #37](https://github.com/Alpinechain/Alpinechain_Association/issues/37).
2. Ouvrir et communiquer la billetterie B-Only 2026 prévue le 21 juillet 2026 à 21:21 : [Issue #2](https://github.com/Alpinechain/Alpinechain_Association/issues/2).
3. Consolider les confirmations sponsors B-Only 2026 et les actions de facturation associées : [Issue #3](https://github.com/Alpinechain/Alpinechain_Association/issues/3).
4. Préparer l’atelier Bitcoin multisig et Disaster Recovery du 2 septembre 2026 selon la checklist datée J-21 à J+3 : [Issue #6](https://github.com/Alpinechain/Alpinechain_Association/issues/6).
5. Franchir la porte de lancement du prochain rendez-vous Souveraineté 3.0 : thème, date, lieu, format, promesse et inscription : [Issue #7](https://github.com/Alpinechain/Alpinechain_Association/issues/7).
6. Piloter les huit chantiers dans la [vue B-Only 2026](https://github.com/users/Alpinechain/projects/1/views/2).
7. Activer la sauvegarde chiffrée hors serveur et exécuter une restauration testée : [#9](https://github.com/Alpinechain/Alpinechain_Association/issues/9).

## Système de pilotage

Le GitHub Project [AlpineChain Control Center](https://github.com/users/Alpinechain/projects/1) est opérationnel. Les Issues ouvertes sont synchronisées automatiquement et une réconciliation complète s’exécute chaque semaine.

Le standard événement commun est défini dans [`references/event-standard.md`](../references/event-standard.md). Toute nouvelle rencontre utilise le modèle `.github/ISSUE_TEMPLATE/evenement.md` et reste ouverte jusqu’à la capitalisation J+3.

Les flux entre outils sont définis dans [`references/data-flows.md`](../references/data-flows.md), les limites d’automatisation dans [`references/automation-policy.md`](../references/automation-policy.md) et l’organisation Nextcloud réelle dans [`references/nextcloud-index.md`](../references/nextcloud-index.md).

## Phase 3 — État

- Cartographie des outils et flux : documentée.
- Monitoring externe des services publics : actif.
- Revue hebdomadaire : active.
- Inventaire Nextcloud : réalisé le 13 juillet 2026.
- Arborescence GitHub ↔ Nextcloud : alignée sur les dossiers existants.
- Incident de confidentialité Nextcloud : ouvert et prioritaire.
- Sauvegarde Restic et restauration : code prêt, activation réelle encore requise.
- Publication, paiement et décision : validation humaine maintenue.

## Décisions attendues

- Désactiver ou restreindre le partage public Nextcloud actuel.
- Valider les trois dossiers Nextcloud à créer : B-Only 2026, Meetup Souveraineté 2026 et Contrats-Conventions.
- Confirmer les modalités définitives de lancement de la billetterie B-Only 2026.
- Confirmer l’intervenant, la salle exacte, la capacité et le budget de l’atelier Bitcoin du 2 septembre 2026.
- Valider le prochain thème, la date, le lieu et la promesse du rendez-vous Souveraineté 3.0.
- Définir les personnes disposant des droits opérationnels sur les comptes Meta AlpineChain.
- Choisir et configurer la cible Restic chiffrée hors du serveur de production.
- Valider les objectifs initiaux RPO 24 heures et RTO 8 heures.

## En attente de tiers

- Confirmation formelle de participation de Bitstack au pack soutien B-Only 2026.
- Finalisation des éléments administratifs et commerciaux avec Paymium.
- Réponses des partenaires, sponsors et intervenants encore en discussion.
- Confirmation de l’intervenant de l’atelier multisig et Disaster Recovery.

## Risques à surveiller

- Partage public Nextcloud contenant des données personnelles, financières ou techniques.
- Informations divergentes entre GitHub, Nextcloud, Pretix, les conversations ChatGPT et les publications publiques.
- Événement publié avant franchissement de la porte de lancement J-21.
- Actions importantes sans responsable ni échéance.
- Dépendance excessive à une seule personne pour les comptes, validations et accès.
- Sauvegarde versionnée mais non encore activée ni restaurée sur le serveur.
- Communication B-Only lancée avant validation complète des tarifs, liens et conditions.

## Prochaines échéances connues

| Date | Échéance | Projet |
|---|---|---|
| Immédiat | Couper l’exposition publique Nextcloud | Association |
| 2026-07-21 21:21 | Ouverture prévue de la billetterie B-Only 2026 | B-Only |
| 2026-08-12 | J-21 de l’atelier multisig et Disaster Recovery | Meetup Bitcoin |
| 2026-09-02 19:00 | Atelier Bitcoin : multisig et Disaster Recovery | Meetup Bitcoin |
| 2026-09-05 | Capitalisation J+3 de l’atelier Bitcoin | Meetup Bitcoin |
| 2026-11-07 au 2026-11-09 | B-Only 2026 | B-Only |

## Publications à valider

Toute publication publique doit rester en validation humaine. Les campagnes actives doivent être rattachées à une Issue GitHub et comporter les liens publics définitifs.

Aucune publication principale d’événement ne part tant que la porte de lancement définie dans `references/event-standard.md` n’est pas franchie.

## Règle d’usage

- Une action concrète devient une Issue.
- Un événement utilise le modèle d’Issue événement et reste ouvert jusqu’à J+3.
- Une décision durable est ajoutée au document de référence concerné.
- Un fichier lourd ou un visuel est stocké dans Nextcloud avec des droits adaptés.
- Les données personnelles et commerciales détaillées restent dans les outils métiers ou espaces privés.
- Les contrôles automatiques peuvent ouvrir des Issues, mais ne publient ni ne paient.
- Ce tableau est actualisé au minimum une fois par semaine.
