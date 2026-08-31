# AlpineChain — Maintenant

Date de dernière mise à jour : 2026-08-31
Horizon : 30 jours  
Validateur opérationnel : Cyrille

## Rôle

Ce fichier est le point d’entrée quotidien du pilotage AlpineChain. Il résume les priorités, décisions, blocages et échéances ; les Issues GitHub et les outils métiers conservent le détail.

## Priorités actives

1. **Sécuriser l’atelier multisig et Disaster Recovery du 2 septembre** : à J-3, relire/exporter Gamma, tester BlueWallet + BitBox + Sparrow de bout en bout, confirmer le matériel et le plan de repli, puis archiver les URLs réellement publiées dans [#6](https://github.com/Alpinechain/Alpinechain_Association/issues/6).
2. **Finaliser les preuves B-Only du 29 août** : Aurore et les workshops ProfEduStream disposent chacun de six URLs archivées ; la campagne quantique en possède quatre et attend encore Facebook et Instagram. Aucune nouvelle URL Nostr ne sera déclarée pour ces vagues : ce canal reste `NON VÉRIFIABLE`. La campagne V2 de Polto et Darko reste à relire dans la [PR #138](https://github.com/Alpinechain/Alpinechain_Association/pull/138) avant sa fenêtre proposée du 7 au 9 septembre.
3. **Relire la campagne Renaud Lifchitz** : la [PR #133](https://github.com/Alpinechain/Alpinechain_Association/pull/133) est encore en brouillon et en conflit, sans validation ni contrôles CI ; sa séquence n’est donc ni validée, ni programmée, ni publiée.
4. **Suivre les relais sans présumer leur validation** : la prospection partenaires et médias du 28 août est réalisée, mais le mécanisme de 5 € par billet reste une proposition en attente de qualification comptable, juridique et humaine dans [#61](https://github.com/Alpinechain/Alpinechain_Association/issues/61).
5. **Planifier la maintenance et la gouvernance des accès** : des correctifs de sécurité sont disponibles et restent suivis dans [Serveur #96](https://github.com/Alpinechain/Serveur/issues/96), sans application pendant la revue ; la MFA, la récupération Framer et le transfert de `b-only.org` restent ouverts dans [#45](https://github.com/Alpinechain/Alpinechain_Association/issues/45).

## Décisions et mises à jour au 31 août 2026

### Programme B-Only

- Pierre Noizat : titre, synopsis et créneau `confirmed/public` confirmés ; portrait choisi normalisé et deux variantes non retenues archivées le 14 août ; vignette définitive validée active.
- Jean est intégré samedi 7 novembre de 15 h 30 à 16 h 20 au Pleb Forum avec le workshop « Acheter du bitcoin de manière privée : méthodes, précautions et mise en pratique ».
- Michel Khazzaka prend le créneau de lundi 9 novembre de 10 h à 10 h 50 en salle principale.
- Alexandre Stachtchenko et Alexis Roussel échangent leurs créneaux : Alexandre est confirmé et rendu public samedi 7 novembre de 15 h à 15 h 50 sous le libellé provisoire « Responsable Stratégie - Bitstack », sans révéler le titre de sa présentation ; Alexis reste lundi 9 novembre de 11 h à 11 h 50.
- Sandra Gandoin reste dimanche à 16 h 30.
- Aurore Galves et les six interventions ProfEduStream confirmées ont été rendues publiques dans le programme par les PR #129 et #135.
- La PR #141 a inversé les deux créneaux de clôture concernés : le quiz est désormais samedi 7 novembre de 18 h à 18 h 50 et Lionel Jeannerat dimanche 8 novembre de 18 h 30 à 19 h 20, en salle principale. Les deux entrées restent `reserved/internal`.
- La source contient 29 entrées : 16 `confirmed`, dont 13 publiques ; 2 entrées fixes publiques, 1 option interne et 10 réservations internes.
- Le programme reste en état `draft` : la source est publiée, mais les créneaux non confirmés restent provisoires.

### Communication

- Le Cercle du Coin a été annoncé le 5 août ; les URLs et métriques disponibles sont archivées dans #24 et #73, campagne clôturée le 24 août.
- Paymium : campagne V2 publiée sur sept canaux ; URLs et métriques disponibles archivées le 24 août, rappel d’octobre suivi séparément.
- La campagne Bitstack V2 a été publiée manuellement le 11 août sur sept canaux ; URLs et métriques disponibles archivées, campagne clôturée le 24 août.
- La campagne multicanale V4 d’Élodie Lué est publiée sur sept canaux ; les URLs LinkedIn et les dates X/Meta ont été corrigées le 29 août, et les métriques X, LinkedIn et Meta disponibles sont relevées dans #24.
- Polto et Darko : vignette V1 validée le 16 août ; campagne multicanale V2, article Blog et calendrier du 7 au 9 septembre préparés dans la PR brouillon #138, avec relecture humaine requise avant programmation.
- ProfEduStream workshops : six URLs archivées — Blog, deux LinkedIn, X, Facebook et Instagram — et métriques Meta relevées ; Nostr reste `NON VÉRIFIABLE`.
- ProfEduStream quantique : quatre URLs archivées — Blog, deux LinkedIn et X — ; Facebook et Instagram restent à confirmer après diffusion, Nostr reste `NON VÉRIFIABLE` et la relecture sensible demeure à tracer.
- Alexandre Stachtchenko a été publié sur cinq réseaux ; le relais LinkedIn Annecy Bitcoin Meetup n’a pas été publié et ne le sera pas.
- Aurore : six URLs archivées — Blog, deux LinkedIn, X, Facebook et Instagram — et métriques Meta relevées ; Nostr reste `NON VÉRIFIABLE`.
- Renaud Lifchitz : contenus V3 et calendrier V4 préparés pour le 3 au 5 septembre dans la PR brouillon #133 ; aucune programmation ni publication n’est revendiquée avant validation et fusion.
- Pierre Noizat : campagne intervenant V1 préparée dans la PR brouillon #140 pour le 10 au 12 septembre ; contenus et calendrier sont `PRÊTS À RELIRE`, mais les sept vouchers Pretix et alias courts restent à créer et vérifier avant programmation.
- L’inversion Lionel/quiz n’exige aucune correction de publication déjà diffusée : aucune preuve publique archivée ne contient ces deux créneaux. Toute future campagne Lionel devra reprendre le dimanche 8 novembre, 18 h 30–19 h 20 ; aucune vague dédiée au quiz n’est actuellement planifiée.
- Relations presse : l’envoi à 38 adresses professionnelles publiques est déclaré réalisé par Cédric le 28 août ; réponses, erreurs de distribution et preuves publiques restent à suivre dans #24.
- Atelier multisig du 2 septembre : salle Refuge et page publique confirmées ; campagne J-10 → Jour J programmée en majorité, publication non vérifiée. La présentation Gamma, le test de bout en bout, le matériel et le plan de repli restent à finaliser dans #6.

## État opérationnel B-Only 2026

### Billetterie

- Billetterie publique ouverte : https://join.alpinechain.xyz/org/bonly26/
- Contrôle Pretix du 29 août : **39 billets payés** répartis sur **33 commandes payées**, hors positions annulées ; dernier paiement confirmé le 27 août.
- Le quota **Early est épuisé** ; aucune place Early n’est encore disponible.
- Les liens UTM et courts sont prêts pour les campagnes ; les URLs publiées et métriques doivent être reportées dans #24 et #64.

### Sponsors

- Paymium : pack partenaire de 2 500 € payé et rapproché ; campagne V2 publiée sur sept canaux vérifiés ; métriques encore à suivre.
- Le Cercle du Coin : soutien de 2 000 € payé ; campagne publiée le 5 août sur cinq réseaux, métriques à relever.
- Bitstack : pack soutien de 2 000 € confirmé, payé et rapproché dans Dolibarr et Paheko ; campagne V2 publiée sur sept canaux. Stand, pass et giveaway restent à finaliser dans #4 et #25.

### Programme et visuels

- Les modèles de vignettes intervenants et organisations sont validés.
- Les vignettes partenaires Le Cercle du Coin, Paymium et Bitstack sont disponibles.
- Pierre Noizat : portrait source de référence et vignette définitive classés dans Nextcloud ; les deux portraits non retenus sont archivés sans suppression.
- Le workshop de Renaud est confirmé et public dans le programme ; sa vignette est validée et sa campagne V3 reste en PR brouillon pour le 3 au 5 septembre.
- Lionel Jeannerat reste provisoire et interne au programme, désormais dimanche 8 novembre de 18 h 30 à 19 h 20 ; son éventuelle campagne du 1er au 3 octobre reste `À COMPLÉTER` et ne doit pas présenter ce créneau comme confirmé.
- Les titres de Christine, Nicolas et de la présentation principale de ProfEduStream sont intégrés dans le programme et le registre des intervenants.
- Le portrait ProfEduStream est validé et normalisé ; les deux vignettes finales sont validées pour la campagne quantique et le parcours pratique.
- Restent notamment à obtenir : sujet de Michel Khazzaka, identité complète de Jean et confirmations des créneaux encore provisoires.

## Exploitation et infrastructure

- La mise à niveau AlmaLinux 9.8 est terminée ; [Serveur #56](https://github.com/Alpinechain/Serveur/issues/56) est clôturée.
- État contrôlé le 29 août à 13:09 UTC : les dix services publics répondent en HTTP 200 ; le rapport d’exploitation du jour a réussi, ce qui confirme les 24 conteneurs attendus démarrés sans état `unhealthy`, les timers suivis actifs et une sauvegarde récente. Aucune unité systemd n’est en échec ; le MCP métier est sain.
- Disques : `/` à 15 % et `/opt/podman` à 56 % ; aucun seuil d’alerte de 80 % n’est atteint.
- Dernière sauvegarde réussie : 29 août de 02:39 à 02:48 UTC, snapshot `d64d53c5`. Dernier contrôle Restic réussi : 23 août de 05:16 à 05:17 UTC. Le dépôt Restic était accessible pendant ces deux opérations et aucune erreur n’apparaît dans le dernier journal de sauvegarde consulté. Dernier test de restauration isolée Pretix prouvé : 27 juillet, 150 tables vérifiées.
- Des mises à jour de sécurité AlmaLinux restent disponibles au contrôle `--cacheonly` du 29 août. Elles doivent être évaluées et appliquées dans une fenêtre sauvegardée et réversible suivie par [Serveur #96](https://github.com/Alpinechain/Serveur/issues/96). Pretix, `pretix_db` et `pretix_redis` restent explicitement gelés.
- Les dix certificats TLS publics contrôlés sont valides au moins jusqu’au 8 octobre 2026. Aucun avertissement Dependabot ouvert n’est remonté ; l’API GitHub de secret scanning n’est pas accessible, mais le contrôle local ciblé des fichiers suivis ne détecte pas de secret manifeste.
- Control Center au 29 août : aucun P0/P1 actif, quatre éléments `En attente`, aucun élément `À valider`. L’ancienne revue W34 #126 est clôturée ; les actions actives restent distribuées dans leurs Issues dédiées.

## Prochaines échéances

| Date | Action |
|---|---|
| À planifier | Valider une nouvelle fenêtre de maintenance pour les correctifs de sécurité AlmaLinux dans Serveur #96, avec sauvegarde récente et rollback |
| 30 août | Finaliser le contrôle J-3 de l’atelier : test technique, matériel, supports hors ligne, participants attendus et plan de repli dans #6 |
| 31 août | Archiver les URLs Facebook et Instagram de la campagne quantique si elles sont disponibles ; réconcilier les PR #133, #138 et #140 avec le planning courant |
| Avant le 3 septembre | Faire relire la PR #133 et décider de la campagne Renaud ; aucune programmation avant validation/fusion |
| Avant le 7 septembre | Relire la campagne V2 de Polto et Darko dans la PR #138 ; aucune programmation avant validation |
| Avant le 10 septembre | Relire la campagne Pierre Noizat dans la PR #140 et créer puis tester ses sept vouchers Pretix et alias courts |
| En attente | Relance Cryptoast effectuée auprès de Marius le 20 août ; attendre sa réponse sur le giveaway et la fenêtre de septembre |
| 1er septembre | Relancer Sandra / BFM Crypto |
| 2 septembre | Atelier multisig et Disaster Recovery |
| 7 septembre | Relancer les relais partenaires sans réponse et qualifier le modèle des 5 € avant tout engagement |
| 7–9 novembre | B-Only 2026 |
