# AlpineChain — Maintenant

Date de dernière mise à jour : 2026-08-05
Horizon : 30 jours  
Validateur opérationnel : Cyrille

## Rôle

Ce fichier est le point d’entrée quotidien du pilotage AlpineChain. Il résume les priorités, décisions, blocages et échéances ; les Issues GitHub et les outils métiers conservent le détail.

## Priorités actives

1. **Poursuivre la diffusion des campagnes B-Only validées** : la campagne Le Cercle du Coin est publiée ; programmer les suivantes, puis tracer leurs URLs et métriques dans [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
2. **Consolider le programme provisoire** : obtenir les titres, synopsis, portraits, besoins techniques et confirmations manquants dans [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11).
3. **Suivre les sponsors sans mélanger communication et comptabilité** : relance Paymium le 10 août ; contrôle du règlement Bitstack le 19 août dans [#4](https://github.com/Alpinechain/Alpinechain_Association/issues/4).
4. **Préparer l’atelier multisig et Disaster Recovery du 2 septembre** : démarrage opérationnel J-21 le 12 août dans [#6](https://github.com/Alpinechain/Alpinechain_Association/issues/6).
5. **Finaliser la gouvernance des accès** : Nextcloud [#10](https://github.com/Alpinechain/Alpinechain_Association/issues/10), Meta [#8](https://github.com/Alpinechain/Alpinechain_Association/issues/8), Framer/OVH [#45](https://github.com/Alpinechain/Alpinechain_Association/issues/45).
6. **Tenir la revue d’exploitation W31** : contrôles et décisions dans [#75](https://github.com/Alpinechain/Alpinechain_Association/issues/75).

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
- Dernier état d’exploitation validé (W30) : services publics sains, 21 conteneurs démarrés, aucune unité systemd en échec, sauvegarde Restic et restauration Pretix contrôlées.
- La revue W31 reste à effectuer dans #75 ; ne pas présenter l’état W30 comme un contrôle temps réel.
- Le GitHub Project [AlpineChain Control Center](https://github.com/users/Alpinechain/projects/1) reste le cockpit des Issues ouvertes.

## Prochaines échéances

| Date | Action |
|---|---|
| Dès maintenant | Programmer les prochaines campagnes validées, archiver chaque URL publiée et relever les métriques du Cercle du Coin |
| 10 août | Relancer Ludovic / Paymium sur la publication commune et le giveaway |
| 12 août | Lancer la préparation J-21 de l’atelier multisig |
| 17 août | Relancer Cryptoast si le giveaway et la fenêtre de septembre ne sont pas confirmés |
| 19 août | Contrôler le règlement Bitstack |
| 1er septembre | Relancer Sandra / BFM Crypto |
| 2 septembre | Atelier multisig et Disaster Recovery |
| 7–9 novembre | B-Only 2026 |
