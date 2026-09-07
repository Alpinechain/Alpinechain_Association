# Référentiel de communication B-Only 2026 — proposition V1

Date de préparation : 2026-09-07  
Statut : **PRÊT À RELIRE — PROPOSITION, NON VALIDÉE**  
Validation : Cyrille avant utilisation comme cadrage éditorial

## Rôle

Ce document propose le cadrage commun qui manque encore entre le planning V6,
les registres et les dossiers de campagne. Il ne remplace pas ces sources :

- `PLANNING_PUBLICATIONS_2026-08-17_2026-11-06-v6.md` porte les vagues ;
- `INTERVENANTS.md` et `ORGANISATIONS.md` portent les éléments attendus ;
- `campaigns/<campagne>/` porte les textes, calendriers, liens et preuves ;
- l'Issue #24 porte l'état consolidé et les métriques.

## Promesse centrale proposée

> B-Only réunit à Annecy celles et ceux qui veulent comprendre, pratiquer et
> débattre de Bitcoin, dans un format à taille humaine, sans discours
> commercial imposé.

Cette formulation doit être validée avant réemploi public.

## Messages clés proposés

1. B-Only permet de passer de l'écoute à la pratique grâce aux workshops.
2. Le programme confronte des sujets techniques, économiques et sociaux sans
   masquer les désaccords.
3. Le format à taille humaine favorise les questions et les échanges directs.
4. Les détails annoncés publiquement proviennent uniquement du programme
   confirmé et public.
5. Chaque campagne porte un seul angle principal et un seul CTA mesurable.

## Publics prioritaires et CTA

| Public prioritaire | Besoin | Campagnes adaptées | CTA principal proposé |
|---|---|---|---|
| Curieux et débutants | Comprendre et commencer sans jargon | Découverte, programme, workshops débutants | Réserver sa place |
| Utilisateurs de Bitcoin | Progresser par la pratique | Workshops, outils, sécurité et autonomie | Réserver et vérifier les prérequis |
| Communautés Bitcoin francophones | Débattre, rencontrer et partager des méthodes | Intervenants, tables rondes et communautés | Réserver et rejoindre la discussion |
| Professionnels, partenaires et médias | Identifier les sujets, personnes et possibilités de relais | Partenaires, intervenants et relations médias | Relayer l'information validée ou prendre contact |
| Participants inscrits | Préparer leur venue | Programme et informations pratiques | Consulter le programme et préparer son arrivée |
| Public après l'événement | Retrouver et prolonger les échanges | Remerciements, comptes-rendus et replays | Voir ou partager les contenus publiés |

Le public et le CTA retenus doivent être inscrits dans le brief de chaque
campagne. Un CTA secondaire ne doit pas concurrencer le CTA principal.

## Contenus attendus

### Pour chaque intervenant

- identité et fonction exactes, validées pour publication ;
- titre, synopsis court, format, durée, niveau et public visé ;
- trois acquis ou questions que le public pourra retenir ;
- portrait source, crédit, droits d'utilisation et texte alternatif ;
- comptes publics à mentionner ;
- besoins techniques et éventuels prérequis participants ;
- validation de l'intervenant lorsque le sujet l'exige ;
- validation finale de Cyrille avant programmation.

### Pour chaque partenaire, média ou exposant

- nom officiel, catégorie et statut exacts ;
- contribution ou contrepartie publiable, sans déduire un paiement d'un accord ;
- logo source, crédit et droit d'utilisation ;
- personne ou compte public à mentionner ;
- trois faits ou formulations explicitement validés ;
- conditions exactes d'une offre ou d'un giveaway, le cas échéant ;
- URL officielle, canal prioritaire, public et CTA ;
- validation du partenaire et validation finale de Cyrille.

Les champs déjà présents dans `INTERVENANTS.md` et `ORGANISATIONS.md` ne sont
pas recopiés ici : cette liste sert de Definition of Done commune.

## Matrice de diffusion : état et complément proposé

La matrice existe déjà de façon distribuée :

| Besoin | Source actuelle |
|---|---|
| Vague, sujet, fenêtre et état | planning V6 |
| Date, heure, canal, compte, statut, asset et lien court | `calendrier-diffusion-*.csv` |
| Voucher, lien court, destination UTM et état | `campaign-links-*.csv` |
| Date publiée, URL publique et vérification | `publications-*.csv` |

Il manque deux champs systématiques dans les calendriers actifs :
`responsable` et `validation_ref`. Ils sont à ajouter lors de la prochaine
version de chaque calendrier, sans réécrire l'historique. `validation_ref`
doit pointer vers une Issue, une PR ou un commentaire GitHub daté.

## Règles visuelles : acquis et manquants

Sont déjà établis :

- un modèle reconnaissable de vignette B-Only pour les intervenants et les
  organisations ;
- des fichiers sources et exports lourds conservés dans Nextcloud ;
- le suffixe `--valide` pour la seule version active validée ;
- l'archivage non destructif des versions remplacées ;
- la validation humaine et la vérification des droits avant publication.

Restent à formaliser à partir des modèles validés, sans inventer de valeurs :

- dimensions et déclinaisons par canal ;
- palette avec valeurs exactes ;
- typographies, hiérarchie et tailles minimales ;
- zones de sécurité, placement des logos et badges ;
- règles portrait, contraste, lisibilité mobile et texte alternatif ;
- inventaire des modèles sources réutilisables dans Nextcloud.

## Calendrier : couverture réelle et manquants

Le planning V6 couvre les vagues éditoriales jusqu'au **6 novembre 2026**. Il
ne couvre donc pas encore complètement l'objectif « jusqu'au 9 novembre puis
J+3 ».

À ajouter après validation des responsables et informations pratiques :

| Fenêtre | Séquence manquante | Livrable minimal |
|---|---|---|
| 7 novembre | Ouverture et repères du samedi | Informations vérifiées, programme du jour, accès et CTA utile |
| 8 novembre | Repères du dimanche | Informations vérifiées et programme du jour |
| 9 novembre | Repères du lundi et clôture | Programme du jour, informations de départ et message de clôture |
| 10 novembre — J+1 | Remerciements | Participants, intervenants, partenaires et prochaine étape |
| 12 novembre — J+3 | Capitalisation | URLs, premières métriques comparables, retours, replays et actions suivantes |

Le planning V6 contient aussi des vagues encore `À CADRER`, `À COMPLÉTER`,
`À PRODUIRE` ou `EN ATTENTE`. Elles ne sont pas des séquences prêtes tant que
leurs éléments et validations manquants ne sont pas levés.

## Prochaine décision proposée

1. Valider ou corriger la promesse, les cinq messages et la table publics/CTA.
2. Désigner le responsable et la référence de validation pour chaque vague
   encore active.
3. Produire une V7 du planning couvrant du 7 au 12 novembre.
4. Relever les règles graphiques exactes depuis les modèles validés Nextcloud.

Aucune publication ni programmation n'est autorisée par ce document.
