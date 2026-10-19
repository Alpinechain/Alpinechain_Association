# Tableau de pilotage B-Only 2026

Date de dernière mise à jour : 2026-10-19
Événement : 7 au 9 novembre 2026  
Lieu : Novotel Annecy Centre

## Rôle

Ce fichier décrit la structure du portefeuille B-Only. L’état vivant des actions se trouve dans la [vue GitHub Project B-Only 2026](https://github.com/users/Alpinechain/projects/1/views/2) et dans les Issues.

Toutes les Issues du tableau portent le label `project:b-only` et sont automatiquement synchronisées dans le Project.

Les états détaillés nécessaires aux vignettes sont tenus séparément dans les
registres [`INTERVENANTS.md`](INTERVENANTS.md) et
[`ORGANISATIONS.md`](ORGANISATIONS.md). Les actions restent dans les Issues et
le champ `Statut opérationnel` du Project continue de faire foi.

## Chantiers

| Chantier | Issue pilote | Issues liées | Repère consolidé | Prochaine action |
|---|---|---|---|---|
| Billetterie et parcours participant | [#2](https://github.com/Alpinechain/Alpinechain_Association/issues/2) | [#25](https://github.com/Alpinechain/Alpinechain_Association/issues/25) | Billetterie ouverte ; dernier total communiqué : 52 au 12 octobre, sans extraction récente | Préserver le repère daté ; aucun nouveau suivi hebdomadaire des ventes lancé |
| Sponsors et partenaires | [#3](https://github.com/Alpinechain/Alpinechain_Association/issues/3) | [#4](https://github.com/Alpinechain/Alpinechain_Association/issues/4), [#5](https://github.com/Alpinechain/Alpinechain_Association/issues/5) | Statuts consignés dans ORGANISATIONS.md et les Issues ; pas de nouvel audit financier ici | Finaliser les contreparties et besoins de stand déjà suivis ; nouvelles sollicitations laissées de côté |
| Programme et intervenants | [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11) | [#12](https://github.com/Alpinechain/Alpinechain_Association/issues/12), [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) | Programme complet publié, 30 créneaux actifs ; #11 clôturée ; titres et horaires de référence dans programme.json | Consolider besoins techniques et droits ; toute modification de grille exige une validation distincte |
| Communication et contenus | [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) | [#2](https://github.com/Alpinechain/Alpinechain_Association/issues/2), [#3](https://github.com/Alpinechain/Alpinechain_Association/issues/3), [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11), [#53](https://github.com/Alpinechain/Alpinechain_Association/issues/53) | Preuves et statistiques consolidées ; Nostr hors suivi ; Loïc/Frédéric encore planifiés | Blog Florent à faire ; approfondir les raisons concrètes de venir dans #24 |
| Production audiovisuelle et PeerTube | [#12](https://github.com/Alpinechain/Alpinechain_Association/issues/12) | [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11), [#27](https://github.com/Alpinechain/Alpinechain_Association/issues/27) | Devis signé selon les confirmations enregistrées ; essais, droits et responsabilités restent suivis dans #12 | Préparer les tests et plans dégradés ; vidéos Neowalt reçues selon #147, propagation documentaire en PR #220 |
| Accueil, stands, bar et logistique | [#25](https://github.com/Alpinechain/Alpinechain_Association/issues/25) | [#2](https://github.com/Alpinechain/Alpinechain_Association/issues/2), [#3](https://github.com/Alpinechain/Alpinechain_Association/issues/3), [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11) | Plans cotés reçus ; implantation finale, bénévoles, écrans et flux restent à valider | Confirmer l’implantation avant l’ouverture, échéance déclarée dans #25 au 7 novembre |
| Budget, contrats et trésorerie | [#26](https://github.com/Alpinechain/Alpinechain_Association/issues/26) | [#2](https://github.com/Alpinechain/Alpinechain_Association/issues/2), [#3](https://github.com/Alpinechain/Alpinechain_Association/issues/3), [#4](https://github.com/Alpinechain/Alpinechain_Association/issues/4), [#5](https://github.com/Alpinechain/Alpinechain_Association/issues/5), [#12](https://github.com/Alpinechain/Alpinechain_Association/issues/12) | Budget déclaré mis à jour le 28 septembre ; pas de nouvel audit financier ici | Suivre engagements et modalités BWS dans leurs Issues, sans déduire de paiement ou reversement |
| Risques et plan de continuité | [#27](https://github.com/Alpinechain/Alpinechain_Association/issues/27) | Tous les chantiers | Registre et scénarios opérationnels à construire dans #27 | Identifier propriétaires, déclencheurs et plans de repli avant l’ouverture |

Ces repères sont datés et ne remplacent pas les sources métier. Les Issues portent les décisions et tâches ; le Project est leur vue de portefeuille. Les échéances ne sont reprises que depuis une déclaration explicite dans l’Issue.

## Chaîne critique

1. **Billetterie #2** fournit les volumes et revenus nécessaires à la logistique #25 et au budget #26.
2. **Programme #11** alimente la communication #24, l’audiovisuel #12 et l’occupation des espaces #25.
3. **Sponsors #3** alimente les recettes #26, les contreparties #24 et les stands #25.
4. **Logistique #25** et **audiovisuel #12** alimentent le registre des risques #27.
5. **Risques #27** valide les plans dégradés avant l’ouverture du 7 novembre 2026.

Une modification de la chaîne critique doit être répercutée dans toutes les Issues dépendantes.

## Vue GitHub Project active

- URL : https://github.com/users/Alpinechain/projects/1/views/2
- Nom : `B-Only 2026`
- Filtre de référence : `label:project:b-only`
- Groupement recommandé : `Statut opérationnel`
- Tri recommandé : `Priorité`, puis `Échéance` croissante
- Champs utiles : Titre, Priorité, Échéance, Assignees et Labels

### Vues secondaires utiles

- **B-Only — En attente** : `label:project:b-only label:waiting,blocked`
- **B-Only — Finances** : `label:project:b-only label:area:finance`
- **B-Only — Production** : `label:project:b-only label:area:event,area:technical`
- **B-Only — Validation Cyrille** : `label:project:b-only label:human-validation`

## Règles de pilotage

Chaque Issue pilote doit posséder :

- un responsable unique ;
- un objectif et une Definition of Done ;
- une prochaine action concrète ;
- une échéance dès qu’elle est décidée ;
- les dépendances vers les autres chantiers ;
- un lien vers les documents de référence ;
- les risques ou attentes de tiers explicitement signalés.

Les sous-actions importantes deviennent des Issues liées. Une checklist de 40 lignes sans responsable ni date n’est pas un plan, c’est un grenier.

## Revue hebdomadaire B-Only

Ordre conseillé, 30 à 45 minutes :

1. billetterie et trésorerie ;
2. sponsors et décisions attendues ;
3. programme et confirmations ;
4. communication des 14 prochains jours ;
5. production, logistique et bar ;
6. risques critiques ;
7. décisions à faire valider par Cyrille ;
8. attribution des prochaines actions et dates.

## Definition of Done du tableau

Le tableau est opérationnel lorsque :

- [x] chaque chantier possède une Issue pilote ;
- [x] les Issues existantes sont reliées aux bons chantiers ;
- [x] les dépendances principales sont documentées ;
- [x] toutes les Issues portent `project:b-only` et remontent dans le Control Center ;
- [x] la vue enregistrée `B-Only 2026` est configurée dans l’interface ;
- [ ] chaque chantier possède une prochaine action datée et un responsable confirmé ;
- [ ] la revue hebdomadaire est intégrée au fonctionnement de l’équipe.
