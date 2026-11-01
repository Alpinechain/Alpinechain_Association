# AlpineChain — Maintenant

Date de dernière mise à jour : **2026-11-01 — réconciliation documentaire et décisions de Cyrille**
Horizon : ouverture de B-Only le 7 novembre, puis bilans
Validateur opérationnel : Cyrille

## Priorités avant l’ouverture

| Priorité | Résultat attendu | Source de suivi |
|---|---|---|
| Essais et régie | Fixer l’essai visé le **2 novembre** avec Novotel/Aravision ; tester micros + audio PC, captation, stockage et secours | [#12](https://github.com/Alpinechain/Alpinechain_Association/issues/12) |
| Logistique | Finaliser implantation, bénévoles, mobilier, stands, bar et livraisons ; réceptionner les TV/lecteurs et le réseau sur place | [#25](https://github.com/Alpinechain/Alpinechain_Association/issues/25), #12 |
| Risques | Affecter les risques critiques et leurs plans de repli ; préparer une fiche de continuité hors ligne | [#27](https://github.com/Alpinechain/Alpinechain_Association/issues/27) |
| Partenaires et finances | Finaliser les contreparties Bitstack, l’inventaire des lots Neowalt, les rapprochements et engagements restants | #4, #147, #26, #198, #217 |
| Communication | Arbitrer les rappels, informations pratiques et Cercle du Coin ; collecter les preuves restantes et préparer la couverture de l’événement | [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) |

L’essai du 2 novembre reste **à fixer** selon la confirmation de Cyrille du 26 octobre ; appel, horaire et participants ne sont pas confirmés. [#153](https://github.com/Alpinechain/Alpinechain_Association/issues/153) est l’index des jalons ; les détails restent dans les issues métiers.

## Décisions et état documentaire du 1er novembre

- **Clôturées sur décision de Cyrille :** W43 #227, W44 #232, vignettes #53, campagne Thomas #188, relais #168, campagne Loïc #203, campagne Frédéric #204 et hébergement #229. Les compléments de diffusion et d’archivage des quatre dernières sont repris dans **#24** ; leur clôture ne prouve pas une diffusion complète.
- **PR #220 clôturée sans fusion.** Les vidéos Neowalt sont reçues depuis le 19 octobre ; les lots, montages et essais restent distincts dans #147 / #12 / #25.
- **#223 clôturée après intégration des trois lots ; #153 reste l’index opérationnel.** PR #226 fusionnée (`9098fc4`), #197 fusionnée (`82b66c1`), #218 fusionnée (`e703bc1`) sur autorisation de Cyrille. Les sources Mill3sim3 sont archivées, sans nouvelle publication.
- **Codes sponsors #186 :** 30 utilisations par sponsor validées par Cyrille le 26 octobre ; le précédent écart 30/50 est résolu. Paymium, Le Cercle du Coin et Bitstack prolongés par Cyrille jusqu’au **6 novembre au soir** ; heure exacte non précisée. Transmission et usages restent distincts ; aucun nouveau contrôle Pretix dans cette passe.
- **Nouvelle revue d’exploitation prévue le lundi 2 novembre**, selon Cyrille. Les suites techniques demeurent dans Serveur #153/#154 et les issues métiers.

## B-Only — repères confirmés et datés

### Programme, régie et partenaires

- Programme complet publié par #202 le 12 octobre : **30 créneaux actifs publics**, une entrée annulée conservée pour audit ; clôture lundi 11 h–11 h 50 sans invité nommé. Référence : [programme](../projects/b-only/programme/). Les besoins pratiques et autorisations restent distincts de la validation de la grille.
- Visite Novotel réalisée le 19 octobre. Implantation et mobilier à terminer dans #25 ; devis Aravision signé et envoyé, devis Grifartaix signé selon les confirmations déjà consignées. Aucun nouvel engagement ni audit financier déduit.
- **Affichage dynamique livré et mis en service** : évolutions du hall documentées les 27 et 29 octobre ; zones des salles déployées et vérifiées le **1er novembre** dans #244. [Recette détaillée](../projects/b-only/signage/RECETTE.md). Les contrôles logiciels ne remplacent pas la réception des téléviseurs, du réseau et des solutions de secours sur place (#12).
- Neowalt : **six lots produits** — deux packs Tangem de deux cartes, deux Ellipal Titan Mini, deux SafePal X1. Aucune présence physique prévue. Deux [vidéos sources](https://github.com/Alpinechain/Alpinechain_Association/issues/147) classées dans Nextcloud le 19 octobre ; réception/inventaire des lots et sélection/tests vidéo restent à confirmer.
- Statuts financiers historiques : Paymium 2 500 €, Cercle du Coin 2 000 € et Bitstack 2 000 € déclarés payés et rapprochés dans les sources existantes ; aucun nouveau contrôle de ces règlements ici. BWS : transmission des billets et reversement suivis dans #198. Bons Mill3sim3 : contrôles PDF/scan et exécution suivis dans #217, fin de vente documentée au 31 octobre.

### Billetterie — dernier relevé disponible, pas un compteur actuel

Lecture Pretix du **26 octobre à 15 h 36 Europe/Paris**, documentée dans #232 : **52 commandes payées**, **56 billets à prix positif** (34 Early, 20 pass standard, un complément BWS, une offre Mill3sim3), **trois invitations** et **un bon d’achat sans admission** comptés séparément. Le repère humain de 52 billets au 12 octobre est remplacé par ce relevé daté.

Early désactivé au relevé ; fin du pass standard au 31 octobre à 23:59:59 et début Late prévu au 1er novembre à 00:00:01 Europe/Paris dans la configuration alors lue. Aucune relecture Pretix aujourd’hui ; ne pas présenter ces paramètres ou volumes comme recontrôlés le 1er novembre.

### Communication — un suivi dans #24

- Campagnes Nicolas, Laure, Alexandre, Marius, Thomas, Taz, Lionel et Mill3sim3 : preuves déjà archivées ; aucune reprogrammation des anciennes fenêtres. [Registre des liens](../projects/b-only/SUIVI_LIENS_PUBLICATIONS.md), [planning actif](../projects/b-only/PLANNING_PUBLICATIONS_2026-08-17_2026-11-06-v8.md).
- Loïc : Blog publié et archivé, cinq URLs sociales hors Nostr à collecter ou canaux non publiés à qualifier. Frédéric : six URLs hors Nostr à collecter ou canaux à qualifier. Dernières confirmations de programmation au 19 octobre ; les dates proposées ne prouvent pas les heures réelles de diffusion. Suivi repris dans #24 après clôture #203/#204.
- Hébergement : rubrique et FAQ publiées/testées le 22 octobre ; page, ancre et six annonces recontrôlées le 1er novembre. **CTA unique : https://b-only.org/#hebergement**. Diffusion sociale à arbitrer et prouver dans #24 ; textes du pack toujours soumis à validation.
- Blog Florent à faire puis URL à archiver ; compléments de métriques séparés. Relevé du 19 octobre : 39 observations sociales ; aucun nouveau relevé aujourd’hui.
- Nostr hors suivi, archives conservées. Piste « raisons concrètes de venir » à approfondir. **Audit du parcours de suivi, nouvelles sollicitations des relais et suivi hebdomadaire laissés de côté pour le moment**, décision du 19 octobre.

## Continuité — dernières preuves, pas un nouvel audit serveur

- Dernière revue documentée W44 du **26 octobre** : dix services publics HTTP 200, 26 conteneurs actifs, 12 healthchecks sains ; disque `/` 49 %, `/opt/podman` 59 %. Sauvegarde terminée à 8 h 38 ; contrôle Restic du 25 octobre, métadonnées et 5 % des données. Dernière restauration isolée : **Pretix local, 19 octobre**, sans couverture de l’instance externe `join.alpinechain.xyz`.
- Office : recette DOCX, DOTX, ODT et ODS réussie le 26 octobre ; **Serveur #167 clôturée**, selon W44. Les premiers constats OnlyOffice sont historiques. Limites de recherche de compromission conservées dans le dépôt privé.
- MFA administrateurs Nextcloud imposée le 26 octobre ; inscriptions et recettes individuelles restantes, confirmations fournisseurs et expirations de jetons suivies dans **Serveur #153/#154**. La clôture des revues n’en déclare pas la résolution.
- Maintenance générale après le 9 novembre dans **Serveur #152**, hors urgence validée ; Pretix et dépendances gelés. Bascule de la billetterie externe après B-Only selon **Serveur #66**.

## Autres activités — repères conservés

- Souveraineté 3.0 / BitVault : rencontre du 24 septembre capitalisée, #7 clôturée le 4 octobre ; aucun prochain rendez-vous confirmé.
- Meetup Annecy Bitcoin Tour du 7 octobre réalisé, bilan dans #225. **8 commerçants actuellement au 19 octobre**, confirmation directe de Cyrille ; aucune déduction de neuf actifs depuis l’annonce CIAO ni audit des paiements.
- Repères communautaires déclarés en septembre : 8–15 participants habituels, cœur de 6–8, environ 4–6 nouveaux depuis le début de l’année ; trois adhésions individuelles 2026, environ 25 € de recettes par meetup et 100 € cumulés de goodies. Ces repères ne sont pas actualisés par cette passe. Revue stratégique : [note du 20 septembre](../notes/2026-09-20-revue-strategique-objectifs-2026.md).
- Assurance #132, confirmation documentaire SBP #193, adhésions #173, codes relais #61, migration du site #45 et bilan Meetup #225 restent dans leurs suivis propres ; aucune clôture ni nouvelle activation déduite.

## Prochaines échéances

| Date | Jalon / suivi |
|---|---|
| 2 novembre | Nouvelle revue d’exploitation ; essai Novotel/Aravision visé mais rendez-vous à fixer (#12) |
| 4 novembre | Confirmer présences, livraisons et plans de repli (#153 et issues métiers) |
| 6 novembre au soir | Fin prolongée des codes Paymium/Cercle du Coin/Bitstack (#186) ; offre BWS selon #198 ; contrôle final matériel et organisation (#153) |
| Avant le 7 novembre | Inventaire Neowalt, essais régie/écrans, accueil, bénévoles et secours (#147/#12/#25/#27) |
| 7–9 novembre | B-Only 2026 ; tracer incidents, décisions et écarts |
| 10, 12 et 24 novembre | Consolidation, capitalisation puis bilan financier/opérationnel intermédiaire (#153/#26) |

## Portée de cette mise à jour

Rapprochement de GitHub et des décisions de Cyrille du 1er novembre. Les clôtures, la prolongation des trois codes et les transferts vers #24 sont confirmés ; les chiffres métier restent datés. Aucun nouvel audit de Pretix, Paheko, Dolibarr, des originaux Nextcloud ou du serveur. Aucun changement de programme, texte public validé, service, droit ou DNS dans ce lot.
