# AlpineChain — Maintenant

Date de dernière mise à jour : 2026-08-10
Horizon : 30 jours  
Validateur opérationnel : Cyrille

## Rôle

Ce fichier est le point d’entrée quotidien du pilotage AlpineChain. Il résume les priorités, décisions, blocages et échéances ; les Issues GitHub et les outils métiers conservent le détail.

## Priorités actives

1. **Traiter les échéances de communication B-Only** : relancer Paymium le 10 août, confirmer ou replanifier sa séquence proposée du 12 au 14 août, puis tracer chaque publication et métrique dans [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) et [#72](https://github.com/Alpinechain/Alpinechain_Association/issues/72).
2. **Consolider le programme provisoire** : obtenir les titres, synopsis, portraits, besoins techniques et confirmations manquants dans [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11).
3. **Suivre les sponsors sans mélanger communication et comptabilité** : relance Paymium le 10 août ; contrôle du règlement Bitstack le 19 août dans [#4](https://github.com/Alpinechain/Alpinechain_Association/issues/4).
4. **Préparer l’atelier multisig et Disaster Recovery du 2 septembre** : démarrage opérationnel J-21 le 12 août dans [#6](https://github.com/Alpinechain/Alpinechain_Association/issues/6).
5. **Finaliser la gouvernance des accès Framer/OVH** : attribuer un responsable, confirmer la fenêtre de transfert de `b-only.org` et dater la prochaine revue des accès dans [#45](https://github.com/Alpinechain/Alpinechain_Association/issues/45). Les actions Nextcloud #10 et Meta #8 sont clôturées.
6. **Faire valider la revue d’exploitation W33** : preuves, écarts et décisions dans [#105](https://github.com/Alpinechain/Alpinechain_Association/issues/105) ; les mises à jour de sécurité système restent à planifier dans [Serveur #96](https://github.com/Alpinechain/Serveur/issues/96).

## Décisions du 29 juillet 2026

### Programme B-Only

- Jean est intégré samedi 7 novembre de 15 h 30 à 16 h 20 au Pleb Forum avec le workshop « Acheter du bitcoin de manière privée : méthodes, précautions et mise en pratique ».
- Michel Khazzaka prend le créneau de lundi 9 novembre de 10 h à 10 h 50 en salle principale.
- Alexandre Stachtchenko et Alexis Roussel échangent leurs créneaux : Alexandre est programmé samedi 7 novembre de 15 h à 15 h 50 ; Alexis lundi 9 novembre de 11 h à 11 h 50.
- Sandra Gandoin reste dimanche à 16 h 30.
- Titres intégrés :
  - Renaud Lifchitz : « Reticulum, le réseau cypherpunk dont vous avez besoin ! » ;
  - Christine Jeanneaux : « Et si on comptait les moutons ? — Anatomie d’un mimétisme autour de Bitcoin » ;
  - Nicolas Cantu : « Lire les dégâts de l’impression monétaire dans les sols. ».
- Le programme reste en état `draft` : la source est publiée, mais les créneaux non confirmés restent provisoires.

### Communication

- La campagne multicanale V2 d’Élodie Lué est validée ; Cyrille assure sa programmation par réseau.
- Polto et Darko : campagne multicanale V1 et calendrier du 31 août au 4 septembre préparés ; vignette et contenus restent à relire avant programmation.
- ProfEduStream : deux campagnes V2, deux calendriers et quatorze liens suivis sont prêts à publier ; les deux vignettes ont été validées par ProfEduStream le 3 août.
- Le Cercle du Coin a été annoncé le 5 août sur X, Nostr, LinkedIn, Instagram et Facebook ; les cinq URLs publiques sont archivées dans #24 et #73, les métriques restent à relever.
- Alexandre Stachtchenko a été publié sur cinq réseaux ; le relais LinkedIn Annecy Bitcoin Meetup prévu le 9 août n’est pas encore prouvé par une URL publique dans #24.
- La campagne Bitstack est approuvée. Sa diffusion est pilotée séparément du contrôle de règlement prévu le 19 août.
- Pour les vignettes intervenants :
  - Nicolas : titre, pitch, portrait et vignette validés ;
  - Renaud : créneau, vignette et campagne multicanale V2 validés le 3 août ; programme en statut confirmé et dossier prêt à programmer ; sept vouchers Pretix et sept liens Shlink vérifiés ;
  - Christine : portrait, titre, vignette et campagne multicanale V4 validés ; prête à programmer.

## État opérationnel B-Only 2026

### Billetterie

- Billetterie publique ouverte : https://join.alpinechain.xyz/org/bonly26/
- Dernier contrôle chiffré archivé, au 22 juillet : 22 commandes payées et 26 billets.
- Les liens UTM et courts sont prêts pour les campagnes ; les URLs publiées et métriques doivent être reportées dans #24 et #64.

### Sponsors

- Paymium : pack partenaire de 2 500 € payé et rapproché ; relance communication le 10 août.
- Le Cercle du Coin : soutien de 2 000 € payé ; campagne publiée le 5 août sur cinq réseaux, métriques à relever.
- Bitstack : pack soutien de 2 000 € confirmé ; campagne approuvée ; facture `FA2607-0003` à contrôler le 19 août.

### Programme et visuels

- Les modèles de vignettes intervenants et organisations sont validés.
- Les vignettes partenaires Le Cercle du Coin, Paymium et Bitstack sont disponibles.
- Le workshop de Renaud est confirmé et public dans le programme ; sa vignette et sa campagne V2 sont prêtes à programmer.
- Les titres de Christine, Nicolas et de la présentation principale de ProfEduStream sont intégrés dans le programme et le registre des intervenants.
- Le portrait ProfEduStream est validé et normalisé ; les deux vignettes finales sont validées pour la campagne quantique et le parcours pratique.
- Restent notamment à obtenir : titre de Pierre Noizat, sujet de Michel Khazzaka, identité complète de Jean et confirmations des créneaux encore provisoires.

## Exploitation et infrastructure

- La mise à niveau AlmaLinux 9.8 est terminée ; [Serveur #56](https://github.com/Alpinechain/Serveur/issues/56) est clôturée.
- État contrôlé le 10 août : les dix services publics répondent en HTTP 200, les 23 conteneurs attendus sont démarrés, aucun healthcheck n’est dégradé et aucune unité systemd n’est en échec.
- Disques : `/` à 15 % et `/opt/podman` à 38 % ; les timers de sauvegarde, vérification Restic, rapport d’exploitation, relève des courriels et contrôle mensuel sont actifs.
- Dernière sauvegarde réussie : 10 août à 02:43:42 UTC, snapshot `d58565e6`. Dernier contrôle Restic réussi : 9 août à 05:56:39 UTC, 5 % des données contrôlées sans erreur. Dernier test de restauration isolée Pretix prouvé : 27 juillet, 150 tables vérifiées.
- Des mises à jour de sécurité AlmaLinux sont disponibles, notamment pour le noyau, `libarchive`, `libgcrypt`, `p11-kit` et `sg3_utils`. Elles doivent être évaluées et appliquées dans une fenêtre sauvegardée et réversible suivie par [Serveur #96](https://github.com/Alpinechain/Serveur/issues/96). Pretix, `pretix_db` et `pretix_redis` restent explicitement gelés.
- Le GitHub Project [AlpineChain Control Center](https://github.com/users/Alpinechain/projects/1) ne contient aucun P0/P1 ouvert au contrôle W33. Six Issues sont en `En attente`, aucune en `À valider` ; les actions prioritaires restent suivies dans leurs Issues.

## Prochaines échéances

| Date | Action |
|---|---|
| Dès maintenant | Relancer Ludovic / Paymium, confirmer ou replanifier la séquence du 12 au 14 août, vérifier le relais LinkedIn ABM d’Alexandre et archiver toute URL publique |
| À planifier | Valider une nouvelle fenêtre de maintenance pour les correctifs de sécurité AlmaLinux dans Serveur #96, avec sauvegarde récente et rollback |
| 12 août | Lancer la préparation J-21 de l’atelier multisig |
| 17 août | Relancer Cryptoast si le giveaway et la fenêtre de septembre ne sont pas confirmés |
| 19 août | Contrôler le règlement Bitstack |
| 1er septembre | Relancer Sandra / BFM Crypto |
| 2 septembre | Atelier multisig et Disaster Recovery |
| 7–9 novembre | B-Only 2026 |
