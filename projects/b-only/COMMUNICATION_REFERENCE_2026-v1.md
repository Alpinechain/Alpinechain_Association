# Référentiel de communication B-Only 2026 — état opérationnel

Date de mise à jour : 2026-09-19  
Statut : **PRÊT À RELIRE — VERSION ACTUALISÉE**  
Validation : Cyrille avant fusion et utilisation comme cadrage transversal

## Rôle

Ce document fixe le cadre commun de communication B-Only 2026 sans dupliquer les
sources opérationnelles :

- le planning éditorial porte les vagues, fenêtres et états ;
- `INTERVENANTS.md` et `ORGANISATIONS.md` portent les données de référence ;
- `campaigns/<campagne>/` porte les textes, calendriers, liens et preuves ;
- l'Issue #24 porte l'état consolidé de la communication et les métriques ;
- Pretix reste la source primaire pour la billetterie et les conversions ;
- Nextcloud conserve les portraits, logos, visuels sources et exports lourds.

Depuis la première version du 7 septembre, plusieurs propositions de ce
référentiel sont devenues des pratiques opérationnelles. Cette version les
reclasse donc en acquis, décisions à valider et actions restantes.

## Promesse centrale

> B-Only réunit à Annecy celles et ceux qui veulent comprendre, pratiquer et
> débattre de Bitcoin, dans un format à taille humaine, sans discours
> commercial imposé.

Cette formulation reste soumise à validation éditoriale finale avant d'être
utilisée comme signature publique systématique.

## Messages structurants

1. B-Only permet de passer de l'écoute à la pratique grâce aux workshops.
2. Le programme couvre des sujets techniques, économiques et sociaux, avec de la
   place pour les désaccords et les échanges.
3. Le format à taille humaine favorise les questions, les rencontres et les
   discussions directes avec les intervenants.
4. Les annonces publiques doivent provenir uniquement du programme et des
   informations confirmées.
5. Chaque campagne doit conserver un angle principal et un CTA mesurable.

## Publics prioritaires et CTA

| Public prioritaire | Besoin | Campagnes adaptées | CTA principal |
|---|---|---|---|
| Curieux et débutants | Comprendre Bitcoin sans jargon inutile | Découverte, programme, workshops accessibles | Réserver sa place |
| Utilisateurs de Bitcoin | Progresser par la pratique | Workshops, sécurité, outils et autonomie | Réserver et vérifier les prérequis |
| Communautés Bitcoin francophones | Rencontrer, débattre et transmettre | Intervenants, tables rondes, communautés | Réserver et rejoindre la discussion |
| Professionnels, partenaires et médias | Identifier les sujets et possibilités de relais | Partenaires, intervenants, presse | Relayer une information validée ou prendre contact |
| Participants inscrits | Préparer leur venue | Programme et informations pratiques | Consulter le programme et préparer son arrivée |
| Public après l'événement | Retrouver et prolonger les échanges | Remerciements, comptes-rendus, replays | Voir et partager les contenus publiés |

Le public visé et le CTA doivent être identifiables dans chaque campagne. Un CTA
secondaire ne doit pas concurrencer le CTA principal.

## Workflow désormais opérationnel

La préparation d'une campagne intervenant ou partenaire suit maintenant un
workflow réutilisable :

1. confirmer les informations publiables ;
2. préparer les textes par canal ;
3. disposer d'un visuel source et d'une version validée ;
4. créer et vérifier les vouchers Pretix et liens courts lorsque nécessaires ;
5. renseigner le calendrier avec responsable et référence de validation ;
6. faire relire humainement ;
7. programmer ou publier ;
8. archiver les URL publiques réelles ;
9. relever les métriques séparément.

Ce workflow a été éprouvé depuis le 7 septembre sur plusieurs campagnes,
notamment Christine Jeanneaux, Lionel Jeannerat, BitVault et le kit partenaires.

## Contenus attendus

### Pour chaque intervenant

- identité et fonction exactes validées ;
- titre, synopsis, format, durée, niveau et public visé lorsque ces éléments sont
  nécessaires à la campagne ;
- portrait source, crédit, droits d'utilisation et texte alternatif ;
- comptes publics à mentionner ;
- besoins techniques et prérequis éventuels ;
- validation de l'intervenant lorsque nécessaire ;
- validation humaine finale avant programmation.

### Pour chaque partenaire, média ou exposant

- nom officiel, catégorie et statut exacts ;
- contribution ou contrepartie réellement publiable ;
- logo source, crédit et droit d'utilisation ;
- compte public ou interlocuteur à mentionner ;
- faits et formulations validés ;
- conditions exactes d'une offre ou d'un giveaway ;
- URL officielle, public et CTA ;
- validation du partenaire lorsque nécessaire ;
- validation humaine finale avant programmation.

## Matrice de diffusion

La matrice est désormais distribuée entre plusieurs sources :

| Besoin | Source |
|---|---|
| Vague, sujet, fenêtre et état | planning éditorial |
| Date, heure, canal, compte, statut, asset et lien court | `calendrier-diffusion-*.csv` |
| Voucher, lien court, destination UTM et état | `campaign-links-*.csv` |
| Date publiée, URL publique et vérification | `publications-*.csv` |
| État consolidé et métriques | Issue #24 |

Les champs `responsable` et `validation_ref`, initialement proposés dans cette
PR, ont commencé à être intégrés dans les campagnes récentes. Ils deviennent la
règle pour les nouvelles versions de calendriers actifs.

`validation_ref` doit pointer vers une Issue, une PR ou un commentaire GitHub
daté permettant de retrouver la validation humaine.

## Kit partenaires et relais

Depuis la version initiale de ce document, le kit partenaires est devenu un
chantier opérationnel à part entière.

La PR #169 a structuré :

- les partenaires 2026 ;
- les relais historiques ;
- les intervenants ;
- les visiteurs B-Only 2025 comme segment agrégé ;
- les messages d'approche ;
- les publications sociales et newsletters ;
- quatre formats visuels génériques validés ;
- le suivi de réception, intention de partage, publication, refus et absence de
  retour ;
- une relance amicale unique à partir de J+3 réel pour les cibles concernées.

La première vague a été envoyée à Neowalt, PlebStyle, Renaud Lifchitz et au
segment agrégé des visiteurs B-Only 2025.

Une transmission de kit ne vaut jamais preuve de publication : seules les URL
publiques réelles et vérifiées passent dans le registre de diffusion.

## Presse et relais médias

La communication médias dispose désormais de matière spécifique pour :

- Bitcoin.fr ;
- Cryptoast ;
- la presse locale annécienne.

L'angle local retenu met en avant l'association AlpineChain, la continuité des
meetups, les commerçants locaux acceptant Bitcoin et la capacité de B-Only à
faire venir à Annecy une communauté nationale.

Le travail restant porte principalement sur le suivi des prises de contact,
l'obtention de publications réelles et l'archivage de leurs URL.

## Règles visuelles

Sont déjà établis :

- un modèle reconnaissable de vignette B-Only ;
- des fichiers sources et exports lourds conservés dans Nextcloud ;
- une seule version active validée par visuel ;
- l'archivage non destructif des versions remplacées ;
- la validation humaine et la vérification des droits avant publication ;
- des formats génériques partenaires 1080×1080, 1080×1350, 1080×1920 et
  1200×628 validés dans le cadre du kit partenaires.

Restent à formaliser depuis les modèles réellement validés :

- palette avec valeurs exactes ;
- typographies, hiérarchie et tailles minimales ;
- zones de sécurité et placement des logos ;
- règles portrait, contraste et lisibilité mobile ;
- inventaire des modèles sources réutilisables dans Nextcloud.

Ce travail ne doit pas retarder les campagnes déjà prêtes.

## État des campagnes et séquences au 19 septembre

La phase de conception du dispositif est largement passée. Les priorités sont
désormais l'exécution, la conversion billetterie et l'amplification.

Éléments consolidés depuis le 7 septembre :

- BitVault : workshop confirmé et éléments intégrés ;
- Christine Jeanneaux : liens de campagne vérifiés ;
- Lionel Jeannerat : campagne préparée et liens activés ;
- Florent : campagne programmée dans le tableau de bord au 12 septembre ;
- Pierre Noizat : campagne largement produite et partiellement publiée, avec
  clôture documentaire encore à terminer dans la PR #140 ;
- kit partenaires : première vague envoyée et suivi ouvert via la PR #169.

Les états détaillés restent dans l'Issue #24, les dossiers de campagne et le
tableau de bord ; ce référentiel ne les duplique pas.

## Calendrier restant à couvrir

Le planning éditorial doit encore garantir une couverture continue jusqu'à
l'événement puis la capitalisation immédiate.

Séquences minimales à verrouiller :

| Fenêtre | Séquence | Livrable minimal |
|---|---|---|
| jusqu'au 6 novembre | conversion et rappels | campagnes intervenants, programme, partenaires, presse, informations pratiques |
| 7 novembre | ouverture et repères samedi | programme du jour, accès, informations utiles |
| 8 novembre | repères dimanche | programme du jour et informations utiles |
| 9 novembre | repères lundi et clôture | programme du jour, départs, clôture |
| 10 novembre — J+1 | remerciements | participants, intervenants, partenaires, prochaine étape |
| 12 novembre — J+3 | capitalisation | URL, premières métriques, retours, replays et suites |

## Priorités opérationnelles

À partir du 19 septembre, l'ordre de priorité proposé est :

1. suivre l'état réel de la billetterie et relier les campagnes aux conversions ;
2. garantir une cadence éditoriale continue jusqu'au 7 novembre ;
3. poursuivre l'activation du réseau avec les vagues suivantes du kit partenaires ;
4. obtenir et archiver les relais presse et médias ;
5. verrouiller les derniers éléments du programme public et les synchroniser avec
   b-only.org ;
6. clôturer les campagnes anciennes encore ouvertes administrativement ;
7. produire les séquences live, J+1 et J+3 ;
8. formaliser la charte graphique exacte sans bloquer l'exécution.

## Definition of Done du référentiel

Ce référentiel peut être considéré comme opérationnel lorsque :

- la promesse et les messages structurants sont validés ;
- les publics et CTA servent de cadre commun aux campagnes ;
- les calendriers actifs utilisent `responsable` et `validation_ref` ;
- la couverture éditoriale va jusqu'au 12 novembre ;
- les liens publiés et preuves sont archivés ;
- les droits visuels sont vérifiés ;
- la capitalisation J+3 est prévue ;
- les sources de vérité restent séparées entre GitHub, Nextcloud et Pretix.

Ce document ne programme ni ne publie aucun contenu par lui-même.
