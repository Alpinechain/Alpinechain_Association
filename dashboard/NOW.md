# AlpineChain — Maintenant

Date de dernière mise à jour : 2026-09-12
Horizon : 30 jours  
Validateur opérationnel : Cyrille

## Rôle

Ce fichier est le point d’entrée quotidien du pilotage AlpineChain. Il résume les priorités, décisions, blocages et échéances ; les Issues GitHub et les outils métiers conservent le détail.

## Priorités actives

1. **Qualifier puis clôturer l’incident public du 12 septembre** : deux contrôles automatiques ont échoué, dont celui de 09:25 UTC suivi dans [#163](https://github.com/Alpinechain/Alpinechain_Association/issues/163). Un contrôle manuel ultérieur retrouve les onze points d’entrée, dont la nouvelle page `bio.alpinechain.xyz`, en HTTP 200 ; la cause et la clôture restent à documenter.
2. **Terminer la diffusion Pierre Noizat** : trois URLs publiques sont archivées et revérifiées ; vérifier Nostr, X, Facebook et Instagram après publication réelle, puis relever les métriques par plateforme dans [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
3. **Préparer la séquence Christine Jeanneaux des 14–16 septembre** : la campagne et ses sept couples voucher/alias sont `PRÊTS À PROGRAMMER`, mais la programmation et la publication restent soumises au contrôle humain des comptes et aperçus.
4. **Sécuriser les séquences Florent et Lionel** : Florent Gabriel est `PROGRAMMÉ` du 17 au 19 septembre ; Lionel Jeannerat est `PRÊT À PROGRAMMER` du 21 au 23 septembre. Contrôler les comptes et aperçus, conserver Nostr manuel, puis archiver uniquement les URLs réellement publiées dans [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
5. **Consolider les chantiers B-Only et replanifier la maintenance** : programme [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11), audiovisuel [#12](https://github.com/Alpinechain/Alpinechain_Association/issues/12), logistique [#25](https://github.com/Alpinechain/Alpinechain_Association/issues/25), budget [#26](https://github.com/Alpinechain/Alpinechain_Association/issues/26) et risques [#27](https://github.com/Alpinechain/Alpinechain_Association/issues/27) restent à consolider avant le 30 septembre. La nouvelle fenêtre de maintenance reste à décider dans [Serveur #119](https://github.com/Alpinechain/Serveur/issues/119), avec Pretix gelé.

## Décisions et mises à jour au 12 septembre 2026

### Programme B-Only

- Pierre Noizat : titre, synopsis et créneau `confirmed/public` confirmés ; portrait choisi normalisé et deux variantes non retenues archivées le 14 août ; vignette définitive validée active.
- Le workshop initialement prévu avec Jean est abandonné pour 2026. BitVault / Loïc Ruchat-Leuthardt reprend le créneau du samedi 7 novembre de 15 h 30 à 16 h 20 au Pleb Forum sous le titre « Posséder ses bitcoins en toute sécurité » ; la participation et le créneau sont confirmés, mais la session reste interne tant que les éléments opérationnels manquants ne sont pas consolidés.
- Michel Khazzaka prend le créneau de lundi 9 novembre de 10 h à 10 h 50 en salle principale.
- Alexandre Stachtchenko et Alexis Roussel échangent leurs créneaux : Alexandre est confirmé et rendu public samedi 7 novembre de 15 h à 15 h 50 sous le libellé provisoire « Responsable Stratégie - Bitstack », sans révéler le titre de sa présentation ; Alexis reste lundi 9 novembre de 11 h à 11 h 50.
- Sandra Gandoin est indisponible pour l’édition 2026. Son ancien créneau du dimanche à 16 h 30 est proposé à Delphine Vincent, au statut `option/internal` dans l’attente de sa réponse et de ses éléments éditoriaux.
- Aurore Galves et les six interventions ProfEduStream confirmées ont été rendues publiques dans le programme par les PR #129 et #135.
- La PR #141 a inversé les deux créneaux de clôture concernés : le quiz est désormais samedi 7 novembre de 18 h à 18 h 50 et Lionel Jeannerat dimanche 8 novembre de 18 h 30 à 19 h 20, en salle principale. Les deux entrées restent `reserved/internal`.
- Le workshop Specter de Schnuartz est remplacé par « Atelier Bitcoin Lego » avec Laure Merlin, dimanche 8 novembre de 18 h à 18 h 50 au Pleb Forum. Le créneau est `confirmed/public` depuis le 2026-09-06 ; ses détails pratiques et besoins techniques restent à finaliser.
- Le Cercle du Coin intervient désormais lundi 9 novembre de 9 h à 10 h avec Laure Merlin : présentation du Cercle pendant 10 à 15 minutes, puis keynote « Comment faire communauté » pendant 30 à 35 minutes. Le créneau reste `confirmed/public`.
- La source contient 30 entrées, dont 1 annulée conservée pour audit. Les 29 entrées actives comprennent 17 `confirmed`, dont 14 publiques ; 2 entrées fixes publiques, 1 option interne et 9 réservations internes.
- Le programme reste en état `draft` : la source est publiée, mais les créneaux non confirmés restent provisoires.

### Communication

- Le Cercle du Coin a été annoncé le 5 août ; les URLs et métriques disponibles sont archivées dans #24 et #73, campagne clôturée le 24 août.
- Paymium : campagne V2 publiée sur sept canaux ; URLs et métriques disponibles archivées le 24 août, rappel d’octobre suivi séparément.
- La campagne Bitstack V2 a été publiée manuellement le 11 août sur sept canaux ; URLs et métriques disponibles archivées, campagne clôturée le 24 août.
- La campagne multicanale V4 d’Élodie Lué est publiée sur sept canaux ; les URLs LinkedIn et les dates X/Meta ont été corrigées le 29 août, et les métriques X, LinkedIn et Meta disponibles sont relevées dans #24.
- Polto et Darko : campagne V2 publiée ; les sept URLs publiques, dont Nostr
  publié manuellement, sont archivées et revérifiées en HTTP 200 le 11
  septembre. Les métriques restent à relever dans #24.
- ProfEduStream workshops : six URLs archivées — Blog, deux LinkedIn, X, Facebook et Instagram — et métriques Meta relevées ; Nostr reste `NON VÉRIFIABLE`.
- ProfEduStream quantique : six URLs archivées — Blog, deux LinkedIn, X, Facebook et Instagram —, toutes vérifiées en HTTP 200 ; Nostr reste `NON VÉRIFIABLE` et la relecture sensible demeure à tracer.
- Alexandre Stachtchenko a été publié sur cinq réseaux ; le relais LinkedIn Annecy Bitcoin Meetup n’a pas été publié et ne le sera pas.
- Aurore : six URLs archivées — Blog, deux LinkedIn, X, Facebook et Instagram — et métriques Meta relevées ; Nostr reste `NON VÉRIFIABLE`.
- Renaud Lifchitz : campagne V3 publiée du 3 au 5 septembre ; les sept URLs publiques, dont Nostr publié manuellement, sont archivées et revérifiées en HTTP 200 le 11 septembre. Les métriques restent à relever dans #24.
- Pierre Noizat : campagne intervenant V1 en diffusion ; Blog et deux publications LinkedIn sont `PUBLIÉS / TROIS URLS ARCHIVÉES`. Nostr, X, Facebook et Instagram restent à vérifier et archiver après publication réelle.
- Planning actif : Christine Jeanneaux du 14 au 16 septembre est `PRÊTE À PROGRAMMER` ; Florent Gabriel est `PROGRAMMÉ` du 17 au 19 septembre avec la campagne V2 ; Lionel Jeannerat est `PRÊT À PROGRAMMER` du 21 au 23 septembre avec la campagne V2 validée. Le créneau du 24 au 26 septembre reste à cadrer ; BitVault est prévu du 26 au 28 octobre et Delphine Vincent du 29 au 31 octobre uniquement si sa participation est confirmée.
- L’inversion Lionel/quiz n’exige aucune correction de publication déjà diffusée : aucune preuve publique archivée ne contient ces deux créneaux. Toute future campagne Lionel devra reprendre le dimanche 8 novembre, 18 h 30–19 h 20 ; aucune vague dédiée au quiz n’est actuellement planifiée.
- Relations presse : l’envoi à 38 adresses professionnelles publiques est déclaré réalisé par Cédric le 28 août ; réponses, erreurs de distribution et preuves publiques restent à suivre dans #24.

## État opérationnel B-Only 2026

### Billetterie

- Billetterie publique ouverte : https://join.alpinechain.xyz/org/bonly26/
- Contrôle Pretix du 29 août : **39 billets payés** répartis sur **33 commandes payées**, hors positions annulées ; dernier paiement confirmé le 27 août.
- Le quota **Early est épuisé** ; aucune place Early n’est encore disponible.
- Le point d’entrée Pretix répondait en HTTP 200 le 11 septembre à 18:58 UTC. Les agrégats de ventes n’ont pas pu être relus dans Pretix pendant la revue W37 : le chiffre du 29 août reste donc le dernier état confirmé, pas une valeur déclarée actuelle.
- Les liens UTM et courts sont prêts pour les campagnes ; les URLs publiées et métriques doivent être reportées dans #24 et #64.

### Sponsors

- Paymium : pack partenaire de 2 500 € payé et rapproché ; campagne V2 publiée sur sept canaux vérifiés ; métriques encore à suivre.
- Le Cercle du Coin : soutien de 2 000 € payé ; campagne publiée le 5 août sur cinq réseaux, métriques à relever.
- Bitstack : pack soutien de 2 000 € confirmé, payé et rapproché dans Dolibarr et Paheko ; campagne V2 publiée sur sept canaux. Stand, pass et giveaway restent à finaliser dans #4 et #25.

### Partenaire de lots — Neowalt

- Mise à jour ciblée du 5 septembre : accord confirmé pour l'envoi de 3 × 2 clés matérielles (6 unités) à offrir au quiz du samedi 7 novembre au soir ; aucune présence physique prévue.
- Expédition, réception des lots et vidéo de présentation attendues. Deux logos sources et carte de contact archivés dans Nextcloud le 5 septembre, tailles et SHA-256 vérifiés ; déclinaison vidéo pour boucle écrans à valider. Suivi opérationnel : [#147](https://github.com/Alpinechain/Alpinechain_Association/issues/147).

### Programme et visuels

- Les modèles de vignettes intervenants et organisations sont validés.
- Les vignettes partenaires Le Cercle du Coin, Paymium et Bitstack sont disponibles.
- Pierre Noizat : portrait source de référence et vignette définitive classés dans Nextcloud ; les deux portraits non retenus sont archivés sans suppression.
- Le workshop de Renaud est confirmé et public dans le programme ; sa vignette est validée et sa campagne V3 a été publiée du 3 au 5 septembre. Les sept URLs sont archivées dans la PR #133 ; les métriques restent à relever.
- Florent Gabriel : campagne V2 `PROGRAMMÉE` du 17 au 19 septembre, avec textes, calendrier, vignette V6 et sept liens suivis actifs. Les aperçus restent à contrôler dans les outils et Nostr demeure manuel.
- Lionel Jeannerat reste provisoire et interne au programme, désormais dimanche 8 novembre de 18 h 30 à 19 h 20. Son portrait et sa vignette sont validés et classés dans Nextcloud ; sa campagne V2 du 21 au 23 septembre est `PRÊTE À PROGRAMMER`, avec contenus validés et sept liens actifs. Le contrôle des comptes et aperçus reste requis ; Nostr demeure manuel.
- Les titres de Christine, Nicolas et de la présentation principale de ProfEduStream sont intégrés dans le programme et le registre des intervenants.
- Le portrait ProfEduStream est validé et normalisé ; les deux vignettes finales sont validées pour la campagne quantique et le parcours pratique.
- Restent notamment à obtenir : sujet de Michel Khazzaka, identité complète de Jean et confirmations des créneaux encore provisoires.

## Exploitation et infrastructure

- La mise à niveau AlmaLinux 9.8 est terminée ; [Serveur #56](https://github.com/Alpinechain/Serveur/issues/56) est clôturée.
- L’incident OOM du 11 septembre est corrigé et [Serveur #122](https://github.com/Alpinechain/Serveur/issues/122) est clôturée. Les limites mémoire et caches MongoDB sont effectifs, une swap chiffrée de 2 Gio est active, le processus orphelin et l’unité systemd en échec sont traités, et aucun nouvel OOM n’était observé depuis 18:38:32 UTC au contrôle de clôture.
- Les contrôles d’intégrité ont réussi sur MariaDB et 71 collections MongoDB. La sauvegarde post-incident s’est terminée à 20:11 UTC avec le snapshot `96fc79da` ; le contrôle Restic de 71 snapshots et 275 paquets sur 5 % des données n’a remonté aucune erreur.
- Le monitoring public a de nouveau échoué le 12 septembre à 04:44 puis 09:25 UTC ; [#163](https://github.com/Alpinechain/Alpinechain_Association/issues/163) reste ouverte. Un contrôle manuel ultérieur retrouve les onze points d’entrée en HTTP 200, mais ne suffit pas à établir la cause ni à clôturer l’incident sans compte-rendu.
- La page de liens officielle `https://bio.alpinechain.xyz` est publiée depuis le 12 septembre : DNS, HTTPS, certificat, conteneur sain, sept destinations et en-têtes de sécurité ont été vérifiés dans [#164](https://github.com/Alpinechain/Alpinechain_Association/issues/164), désormais clôturée.
- Disques contrôlés à 19:08 UTC : `/` à 14 % et `/opt/podman` à 58 % ; aucun seuil d’alerte de 80 % n’est atteint.
- Dernière sauvegarde réussie : 11 septembre à 20:11 UTC, snapshot post-incident `96fc79da`. Le contrôle Restic associé a réussi sur 71 snapshots et 275 paquets, avec un sous-ensemble de données de 5 %. Dernier test de restauration isolée Pretix prouvé : 27 juillet, 150 tables vérifiées.
- Le contrôle mensuel `alpinechain-monthly-update.service` du 6 septembre est terminé en succès. La fenêtre proposée du 9 septembre n’a pas de décision enregistrée et reste à replanifier dans [Serveur #119](https://github.com/Alpinechain/Serveur/issues/119), en tenant compte des protections mémoire désormais déployées. Pretix, `pretix_db` et `pretix_redis` restent explicitement gelés.
- Les dix certificats TLS publics contrôlés le 11 septembre sont valides au moins jusqu’au 8 octobre 2026 ; le certificat de `bio.alpinechain.xyz` a été validé séparément le 12 septembre. Aucun avertissement Dependabot ouvert n’est remonté ; l’API GitHub de secret scanning reste inaccessible. Le contrôle local ciblé des fichiers suivis ne détecte pas de clé privée ni de jeton manifeste.
- Control Center au 11 septembre : aucun P0/P1 actif, trois éléments `En attente` (#4, #11 et #132), aucun élément `À valider`. L’ancienne revue W36 #145 est clôturée ; les actions actives restent distribuées dans leurs Issues dédiées.

## Prochaines échéances

| Date | Action |
|---|---|
| Immédiat | Qualifier les deux échecs de monitoring du 12 septembre, consigner la cause et clôturer #163 seulement sur preuve |
| 12 septembre | Vérifier et archiver les quatre publications Pierre Noizat encore manquantes ; relever ensuite les métriques séparément dans #24 |
| 14–16 septembre | Programmer puis publier Christine Jeanneaux uniquement après validation humaine ; archiver chaque URL réellement diffusée |
| 17–19 septembre | Surveiller la campagne Florent Gabriel programmée ; publier Nostr manuellement puis archiver uniquement les URLs réellement diffusées |
| 21–23 septembre | Programmer Lionel Jeannerat après contrôle final des comptes et aperçus ; conserver Nostr manuel |
| 24–26 septembre | Cadrer la respiration B-Only, billetterie, programme ou prochain intervenant prêt sans inventer de campagne |
| Avant le 30 septembre | Consolider programme, audiovisuel, logistique, budget, risques et modèles/expédition des lots Neowalt dans les Issues pilotes |
| À replanifier | Décider une fenêtre de maintenance sauvegardée et réversible dans Serveur #119, en tenant compte des protections mémoire déployées ; conserver Pretix gelé |
| 9 octobre | J-30 B-Only : faire valider le niveau de gel du programme et les dépendances logistiques, audiovisuelles, financières et de continuité |
| 7–9 novembre | B-Only 2026 |
