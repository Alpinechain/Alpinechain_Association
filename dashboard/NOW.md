# AlpineChain — Maintenant

Date de dernière mise à jour : **2026-11-02 — revue W45, billetterie et dépannage des contrôles**
Horizon : ouverture de B-Only le 7 novembre, puis bilans
Validateur opérationnel : Cyrille

## Priorités avant l’ouverture

| Priorité | Résultat attendu | Source de suivi |
|---|---|---|
| Essais et régie | Jonathan et Cedric : point avec le responsable technique **mercredi 4 novembre à 11 h** ; consigner les conclusions et essais restant à effectuer | [#12](https://github.com/Alpinechain/Alpinechain_Association/issues/12) |
| Logistique | Répartir les rôles avec les bénévoles **mercredi 4 novembre à 19 h** ; mise en place **vendredi 6 au soir et samedi 7 au matin** | [#25](https://github.com/Alpinechain/Alpinechain_Association/issues/25), #12 |
| Risques | Lister et vérifier les risques **mercredi 4 novembre au soir** ; consigner responsables, plans de repli et fiche de continuité | [#27](https://github.com/Alpinechain/Alpinechain_Association/issues/27) |
| Partenaires et finances | Wallets Neowalt reçus et OK ; finaliser les contreparties Bitstack, rapprochements et engagements restants. Un ticket BWS et un Mill3sim3 vendus, confirmations du 2 novembre | #4, #147, #26, #198, #217 |
| Communication | Toutes les publications évoquées à la revue sont faites selon Cyrille le 2 novembre ; archiver les URLs et métriques manquantes | [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) |

Les rendez-vous du **4 novembre à 11 h et 19 h** et la mise en place des **6–7 novembre** sont confirmés comme prévus par Cyrille le 2 novembre ; leur réalisation et les résultats des essais ne sont pas encore attestés. [#153](https://github.com/Alpinechain/Alpinechain_Association/issues/153) est l’index des jalons ; les détails actualisés restent dans les issues métiers.

## Décisions et suivi des 1er et 2 novembre

- **Clôturées sur décision de Cyrille :** W43 #227, W44 #232, vignettes #53, campagne Thomas #188, relais #168, campagne Loïc #203, campagne Frédéric #204 et hébergement #229. Les compléments de diffusion et d’archivage des quatre dernières sont repris dans **#24** ; leur clôture ne prouve pas une diffusion complète.
- **PR #220 clôturée sans fusion.** Les vidéos Neowalt sont reçues depuis le 19 octobre ; les lots, montages et essais restent distincts dans #147 / #12 / #25.
- **#223 clôturée après intégration des trois lots ; #153 reste l’index opérationnel.** PR #226 fusionnée (`9098fc4`), #197 fusionnée (`82b66c1`), #218 fusionnée (`e703bc1`) sur autorisation de Cyrille. Les sources Mill3sim3 sont archivées, sans nouvelle publication.
- **Codes sponsors #186 :** correction effectuée par Cyrille le 2 novembre après le blocage constaté en revue W45 : les trois codes ciblent désormais le **billet Late**, à **150 €**, pour **30 utilisations chacun**, jusqu’au **6 novembre à 23:59:59 Europe/Paris**. Paramètres API et parcours publics recontrôlés ; transmission aux sponsors et utilisations restent distinctes.
- **Revue d’exploitation W45 #246 réalisée le 2 novembre** ; cases et compte rendu actualisés dans l’issue. Les suites techniques demeurent dans Serveur #152/#153/#154 et les issues métiers.

## B-Only — repères confirmés et datés

### Programme, régie et partenaires

- Programme complet publié par #202 le 12 octobre : **30 créneaux actifs publics**, une entrée annulée conservée pour audit ; clôture lundi 11 h–11 h 50 sans invité nommé. Référence : [programme](../projects/b-only/programme/). Les besoins pratiques et autorisations restent distincts de la validation de la grille.
- Visite Novotel réalisée le 19 octobre. Implantation et mobilier à terminer dans #25 ; devis Aravision signé et envoyé, devis Grifartaix signé selon les confirmations déjà consignées. Aucun nouvel engagement ni audit financier déduit.
- **Affichage dynamique livré et mis en service** : évolutions du hall documentées les 27 et 29 octobre ; zones des salles déployées et vérifiées le **1er novembre** dans #244. [Recette détaillée](../projects/b-only/signage/RECETTE.md). Les contrôles logiciels ne remplacent pas la réception des téléviseurs, du réseau et des solutions de secours sur place (#12).
- Neowalt : **wallets bien reçus, tout est OK**, confirmation de Cyrille du 2 novembre. Les six lots documentés sont deux packs Tangem de deux cartes, deux Ellipal Titan Mini et deux SafePal X1. Aucune présence physique prévue. Deux [vidéos sources](https://github.com/Alpinechain/Alpinechain_Association/issues/147) classées dans Nextcloud le 19 octobre ; réception des wallets confirmée, essais vidéo et écrans distincts dans #12/#25.
- Statuts financiers historiques : Paymium 2 500 €, Cercle du Coin 2 000 € et Bitstack 2 000 € déclarés payés et rapprochés dans les sources existantes ; aucun nouveau contrôle de ces règlements ici. BWS : transmission des billets et reversement suivis dans #198. Bons Mill3sim3 : contrôles PDF/scan et exécution suivis dans #217, fin de vente documentée au 31 octobre.
- **Volumes confirmés par Cyrille le 2 novembre : un seul ticket BWS vendu et un seul ticket Mill3sim3 vendu.** Ne pas les additionner aux positions déjà comptées dans le relevé Pretix ci-dessous ; transmission/reversement BWS, recette et utilisation du bon Mill3sim3 restent distincts.

### Billetterie — dernier relevé disponible, pas un compteur actuel

Lecture Pretix du **2 novembre vers 20 h 53 Europe/Paris**, documentée dans #246 : **60 commandes payées**, **66 positions à prix positif** (34 Early, 23 pass standard, un Late, quatre journées samedi, deux journées dimanche, un complément BWS et une offre Mill3sim3), **trois invitations** et **un bon d’achat sans admission** comptés séparément. Ce relevé remplace celui du 26 octobre : +8 commandes payées et +10 positions à prix positif. Les positions ne représentent pas des personnes uniques ; le complément BWS reste distinct d’une nouvelle admission.

Early désactivé ; vente du pass standard terminée le 31 octobre ; **Late à 210 €** depuis le 1er novembre. Cyrille confirme le 2 novembre la correction de la présentation à 210 € et le rattachement des codes sponsors au Late ; contrôles API et publics après correction consignés dans #186/#246. Aucun achat ni paiement de test effectué.

### Communication — un suivi dans #24

- **PUBLIÉ — confirmation de Cyrille du 2 novembre : « toutes les publications ont été faites ».** Cette confirmation remplace les anciennes attentes de diffusion des publications évoquées en revue (rappels, informations pratiques/hébergement, Cercle du Coin, Blog Florent et suivi des campagnes). Dates/heures exactes par canal, URLs et métriques non fournies restent à archiver ; aucune preuve supposée n’est ajoutée. Les captations et restitutions futures de l’événement ne sont pas déclarées réalisées.
- Campagnes Nicolas, Laure, Alexandre, Marius, Thomas, Taz, Lionel et Mill3sim3 : preuves déjà archivées ; aucune reprogrammation des anciennes fenêtres. [Registre des liens](../projects/b-only/SUIVI_LIENS_PUBLICATIONS.md), [planning actif](../projects/b-only/PLANNING_PUBLICATIONS_2026-08-17_2026-11-06-v8.md).
- Loïc : Blog publié et archivé, cinq URLs sociales hors Nostr à collecter. Frédéric : six URLs hors Nostr à collecter. Diffusion confirmée globalement par Cyrille le 2 novembre ; les dates proposées ne prouvent pas les heures réelles. Suivi d’archivage dans #24.
- Hébergement : rubrique et FAQ publiées/testées le 22 octobre ; page/ancre recontrôlées le 1er novembre. **CTA unique : https://b-only.org/#hebergement**. Publication déclarée faite par Cyrille le 2 novembre ; URLs sociales à archiver dans #24.
- Blog Florent : publication confirmée dans la déclaration globale du 2 novembre ; URL à archiver. Compléments de métriques séparés. Relevé du 19 octobre : 39 observations sociales ; aucun nouveau relevé aujourd’hui.
- Nostr hors suivi, archives conservées. Piste « raisons concrètes de venir » à approfondir. **Audit du parcours de suivi, nouvelles sollicitations des relais et suivi hebdomadaire laissés de côté pour le moment**, décision du 19 octobre.

## Continuité — contrôles W45 du 2 novembre

- **W45 #246 :** dix points d’entrée publics HTTP 200, **28 conteneurs actifs, 14 healthchecks sains** ; deux anciens conteneurs de préparation terminés avec code 0. Disque `/` **51 %**, `/opt/podman` **60 %**. Sauvegarde du 2 novembre terminée à **03:48:46 Europe/Paris**, snapshot `f96e4047`, dépôt distant accessible. Dernier contrôle Restic : **1er novembre à 06:23:45**, métadonnées et 5 % des données sans erreur. Dernière restauration isolée documentée : **Pretix local, 19 octobre**, sans couverture de `join.alpinechain.xyz`.
- Office : recette DOCX, DOTX, ODT et ODS réussie le 26 octobre ; **Serveur #167 clôturée**, selon W44. Les premiers constats OnlyOffice sont historiques. Limites de recherche de compromission conservées dans le dépôt privé.
- MFA administrateurs Nextcloud imposée ; contrôle individuel du 2 novembre : **deux comptes sur quatre avec TOTP actif**, deux sans MFA activée ; un compte TOTP sans codes de secours activés. Inscriptions/recettes restantes, sauvegarde Pretix externe, confirmations fournisseurs et expirations de jetons suivies dans **Serveur #153/#154**. Douze certificats valides, aucun à moins de 30 jours ; scan Git depuis le 26 octobre sans détection sur le périmètre examiné.
- Maintenance générale après le 9 novembre dans **Serveur #152**, hors urgence validée ; Pretix et dépendances gelés. Bascule de la billetterie externe après B-Only selon **Serveur #66**.
- **Jetons — décision de Cyrille du 2 novembre :** aucune alerte d’expiration reçue ; mises à jour et renouvellement des jetons prévus **après B-Only**, après le 9 novembre. Coordination : Cyrille ; date précise, inventaire et périmètre à préparer dans **Serveur #152/#153**. Les échéances non exposées restent non vérifiées ; aucun renouvellement exécuté aujourd’hui.
- **DNS, administrateurs et droits — confirmation de Cyrille du 2 novembre :** aucun changement effectué ou autorisé de son côté depuis le 26 octobre. Cette confirmation complète les contrôles accessibles, sans remplacer l’historique exhaustif des fournisseurs. Suivi dans **Serveur #153**.
- **Contrôle mensuel dépanné le 2 novembre à 21:03:35 Europe/Paris** : permissions des métadonnées Git rétablies pour `almalinux`, fetch et service `--check` réussis. Inventaire produit sur le compose déployé ; aucun déploiement ni changement d’image. Le retard du checkout sur `origin/main` reste distinct de la réussite du diagnostic. Détails et rapport dans **Serveur #152**.
- **Control Center rétabli :** après l’erreur GraphQL du run du 2 novembre à 17:56, la réconciliation complète [41515547299](https://github.com/Alpinechain/Alpinechain_Association/actions/runs/41515547299) a terminé en **succès**. Relecture : **18 éléments ouverts, #246 présente une seule fois**, sans doublon d’issue ouverte ni page supplémentaire. Aucun changement de priorité ou de responsable inventé.

## Autres activités — repères conservés

- Souveraineté 3.0 / BitVault : rencontre du 24 septembre capitalisée, #7 clôturée le 4 octobre ; aucun prochain rendez-vous confirmé.
- Meetup Annecy Bitcoin Tour du 7 octobre réalisé, bilan dans #225. **8 commerçants actuellement au 19 octobre**, confirmation directe de Cyrille ; aucune déduction de neuf actifs depuis l’annonce CIAO ni audit des paiements.
- Repères communautaires déclarés en septembre : 8–15 participants habituels, cœur de 6–8, environ 4–6 nouveaux depuis le début de l’année ; trois adhésions individuelles 2026, environ 25 € de recettes par meetup et 100 € cumulés de goodies. Ces repères ne sont pas actualisés par cette passe. Revue stratégique : [note du 20 septembre](../notes/2026-09-20-revue-strategique-objectifs-2026.md).
- Assurance #132, confirmation documentaire SBP #193, adhésions #173, codes relais #61, migration du site #45 et bilan Meetup #225 restent dans leurs suivis propres ; aucune clôture ni nouvelle activation déduite.

## Prochaines échéances

| Date | Jalon / suivi |
|---|---|
| 2 novembre | Revue W45 réalisée (#246) ; confirmations des rendez-vous, réception Neowalt et ventes BWS/Mill3sim3 consignées |
| 4 novembre | **11 h :** Jonathan et Cedric avec le responsable technique (#12). **19 h :** bénévoles, répartition des rôles (#25). **Soir :** lister et vérifier les risques (#27), heure propre non précisée |
| 6 novembre au soir | Fin prolongée des codes Paymium/Cercle du Coin/Bitstack (#186) ; offre BWS selon #198 ; contrôle final matériel et organisation (#153) |
| 6 novembre au soir et 7 novembre au matin | Mise en place ; essais régie/écrans, accueil et secours à consigner (#12/#25/#27). Réception des wallets Neowalt déjà confirmée (#147) |
| 7–9 novembre | B-Only 2026 ; tracer incidents, décisions et écarts |
| 10, 12 et 24 novembre | Consolidation, capitalisation puis bilan financier/opérationnel intermédiaire (#153/#26) |

## Portée de cette mise à jour

Revue W45 du 2 novembre : contrôles GitHub, serveur et Pretix, puis vérification des corrections de billetterie effectuées par Cyrille et dépannage des automatisations demandé par lui. Les chiffres restent datés ; aucun nouvel audit comptable Paheko/Dolibarr ni des originaux Nextcloud. Aucun changement de programme, publication sociale, migration Pretix ou DNS dans ce lot. Les mises à jour documentaires restent soumises à la fusion humaine de leur PR.
