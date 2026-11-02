# Tableau de pilotage B-Only 2026

Date de dernière réconciliation documentaire : 2026-11-02
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

Les issues closes de lancement restent des références historiques ; le suivi actif est indiqué ci-dessous.

| Chantier | Suivi actif | Repère daté et prochaine action |
|---|---|---|
| Billetterie | #26, #186, #198, #217 | Relevé du 2 novembre : **60 commandes payées, 66 positions à prix positif**, trois invitations et un bon sans admission séparés ; pas un nombre de personnes uniques. Codes sponsors rattachés par Cyrille au Late à 150 €, 30 utilisations chacun, jusqu’au 6 novembre à 23:59:59 Europe/Paris ; parcours recontrôlés dans #186/#246. Présentation du pass corrigée à 210 €. |
| Sponsors et partenaires | #4, #147, #25 | Paiements historiques consignés dans ORGANISATIONS.md ; wallets Neowalt reçus et OK selon Cyrille le 2 novembre. Contreparties Bitstack et organisation des stands restent distinctes. |
| Programme et intervenants | #12, #25 | #11 clôturée ; programme complet publié, 30 créneaux actifs. Besoins pratiques et droits restent distincts ; ne pas rouvrir la validation des vignettes livrées (#53 clôturée). |
| Communication et contenus | #24 | **Toutes les publications évoquées en revue sont faites**, confirmation de Cyrille du 2 novembre. Archivage des URLs et métriques manquantes distinct dans #24 ; Nostr hors suivi. Aucune captation ou restitution future de l’événement déclarée réalisée. |
| Audiovisuel et affichage | #12, #147 | Jonathan et Cedric ont rendez-vous avec le responsable technique le 4 novembre à 11 h. Affichage mis en service, recette physique et conclusions du point technique encore à consigner. |
| Accueil, stands, bar et logistique | #25 | Rendez-vous bénévoles le 4 novembre à 19 h pour répartir les rôles ; mise en place le 6 novembre au soir et le 7 au matin, selon Cyrille le 2 novembre. |
| Budget, contrats et trésorerie | #26, #198, #217 | Un ticket BWS et un ticket Mill3sim3 vendus, confirmations de Cyrille du 2 novembre, sans double comptage avec Pretix. Transmission/reversement BWS et utilisation du bon restent distincts ; aucun nouvel audit comptable. |
| Risques et continuité | #27 | Risques à lister et vérifier mercredi 4 novembre au soir ; consigner propriétaires et plans de repli après cette revue. |

Index des jalons : [#153](https://github.com/Alpinechain/Alpinechain_Association/issues/153). Réconciliation documentaire : [#223](https://github.com/Alpinechain/Alpinechain_Association/issues/223). W43 #227 et W44 #232 clôturées le 1er novembre ; revue W45 du 2 novembre dans [#246](https://github.com/Alpinechain/Alpinechain_Association/issues/246). Le Project est une vue des issues ; les états métier restent dans leurs sources.

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
