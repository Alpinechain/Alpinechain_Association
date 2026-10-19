# Réconciliation AlpineChain — 19 octobre 2026

Projet : association / B-Only. Objectif : aligner les sources actives sur les décisions confirmées et préparer la suite. Public : coordination associative. Suivi : [#223](https://github.com/Alpinechain/Alpinechain_Association/issues/223). Validation : Cyrille avant toute fusion ou publication. Échéance non fixée.

## Lot technique — échéances

Correctif préparé dans [#221 / PR #222](https://github.com/Alpinechain/Alpinechain_Association/pull/222) : ligne explicite `Échéance : YYYY-MM-DD`, validation calendaire et rejet des contradictions ; sans déclaration, effacement du champ des Issues ouvertes ; dates des Issues fermées conservées. Onze tests et CI de non-régression. La source de vérité reste le corps de l’Issue.

Réparation ponctuelle du Project effectuée après mise à jour des Issues : quatre dates inférées effacées (#24, #53, #204, #217), avec suivi dans #221 et relecture du Project. Seules les échéances réellement déclarées sont retenues. L’échéance logistique déjà exprimée avant l’ouverture du 7 novembre est normalisée dans #25 ; celle du pilotage #153 reste au 9 novembre. Les dates de portraits, de relevés et d’expiration de bons ne deviennent pas des échéances de tâche. Tant que #222 n’est pas fusionnée, l’ancien contrôleur peut réintroduire une date inférée lors d’une modification d’Issue ; la réparation ponctuelle ne remplace pas son déploiement.

## Décisions propagées

- Nostr hors suivi des liens et statistiques ; archives et formulations des anciens contenus conservées.
- Campagnes Nicolas, Laure, Alexandre, Marius, Thomas, Taz, Lionel et Mill3sim3 publiées selon les preuves archivées. Les métriques Blog ne sont pas déduites des statistiques sociales ; LinkedIn ABM Mill3sim3 reste à compléter.
- Florent : cinq URLs sociales archivées, Blog à faire ; métriques reçues sur ABM, compléments selon période.
- Loïc et Frédéric encore planifiés : collecte des liens et statistiques après diffusion. Copies de vignettes validées déjà enregistrées dans #209 ; les sources de préparation ne sont pas une validation à refaire.
- Piste « raisons concrètes de venir » à approfondir dans #24. Audit du parcours de suivi, nouvelles sollicitations des relais et suivi hebdomadaire laissés de côté pour le moment.
- Pretix : une utilisation du bon sponsor Paymium, autres bons suivis à zéro, selon Cyrille ; aucune donnée de commande ni identifiant du bon recopié. Aucun nouveau total de billets vendus n’est déduit ; dernier total communiqué : 52 au 12 octobre.

Le dashboard, le planning et les fiches de campagne sont préparés dans la [PR documentaire #224](https://github.com/Alpinechain/Alpinechain_Association/pull/224), non fusionnée. Les Issues actives portent les mêmes décisions sans fermeture de leurs tâches opérationnelles restantes. Les textes validés, le programme, les créneaux et les services métier ne sont pas modifiés.

## Suite préparée — sans exécution ni fusion automatique

| Lot | Rapprochement à effectuer | Source / résultat attendu | Validation ou dépendance |
|---|---|---|---|
| PR #197 — campagne Mill3sim3 | Mettre la préparation en regard des preuves publiées et des six URLs hors Nostr | Réviser le statut de la PR ; intégrer les cinq sources de campagne sans remplacer le registre de preuves déjà dans main | Relecture puis autorisation de fusion distincte |
| PR #218 / #217 — offre Mill3sim3 | Rapprocher l’état « prêt à relire » de la preuve Facebook présente dans l’export Meta fourni | Distinguer ce qui est réellement diffusé, ce qui reste prévu et la validation des supports ; ne pas compter cette offre comme l’annonce Bitcointrails | Vérifier la correspondance de la publication et les validations ; aucune nouvelle diffusion |
| PR #220 — Neowalt | Propager aux registres les vidéos déjà reçues selon #147/#12/#25/#153 | Main ne doit plus les présenter comme attendues après fusion ; réception des lots et essais restent distincts | PR existante à relire et à fusionner seulement sur accord |
| Visuels / sources | Réconcilier les références et statuts #209/#211/#213 avec README du programme, SOURCES et briefs | Remplacer les mentions actives « à valider » ou « déploiement à autoriser » devenues historiques ; conserver les noms de fichiers et preuves | Vérifier les références exactes sans renommer les originaux Nextcloud |
| Souveraineté / Meetup | Remplacer l’ancien « prochain rendez-vous » du 24 septembre par le bilan #7 ; indexer le rendez-vous Annecy Bitcoin Tour d’octobre | Fiches de projet cohérentes avec les événements réellement réalisés ; identifier le suivi GitHub approprié sans créer de doublon | Aucune date de prochain événement inventée |
| Annecy Bitcoin Tour | Rapprocher le repère de huit commerçants de l’annonce du CIAO comme neuvième partenaire | Nombre actuel d’actifs et date de référence à confirmer | Confirmation métier nécessaire, sans audit des paiements |
| b-only.org / billetterie | Réconcilier la fin du tarif Classic affichée au 30 octobre avec les suivis indiquant le 31 | Faire constater la règle de vente de référence puis proposer la correction du support divergent | Source Pretix et validation de la modification du site ; aucune publication automatique |
| Propositions du site | Relier les six fichiers locaux de propositions au suivi #216 | Identifier la version retenue, les sources et le mode de livraison ; laisser les autres propositions intactes | Préserver les fichiers non suivis, ne pas les ajouter au lot courant |
| Pilotage / revues | Requalifier BOARD, curseur de revue, W40–W42 et priorités du Project à partir des preuves | Distinguer historique, préparation et actions actives ; pas de clôture technique assimilée à un audit serveur | Vérification des actions distribuées avant clôture de chaque revue |

## Ordre proposé pour la prochaine passe

1. Déployer le correctif des échéances et vérifier la réconciliation du Project ; fusionner séparément la propagation documentaire validée.
2. Réconcilier les PR #197/#218/#220 avec les preuves et décisions les plus récentes.
3. Aligner les sources de visuels et les fiches Meetup/Souveraineté.
4. Faire confirmer le comptage Annecy Bitcoin Tour et la date tarifaire avant toute correction publique.

Cette file de travail ne réactive ni l’audit du parcours de suivi, ni de nouvelles sollicitations des relais, ni le suivi hebdomadaire des ventes. Elle ne déclenche aucune publication, opération financière, intervention serveur ou suppression de fichier.
