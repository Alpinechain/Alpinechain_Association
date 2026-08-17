# Planning des publications B-Only — 17 août au 6 novembre 2026

Version : V6
Date de préparation : 2026-08-16
Fuseau : Europe/Paris
Statut global : **PRÊT À RELIRE**
Validation : humaine avant programmation ou publication

## Cadrage

- Projet : B-Only 2026
- Objectif : couvrir les workshops et speakers sans brouiller les messages.
- Cadence : deux vagues éditoriales distinctes par semaine.
- Vague A : lundi à mercredi, généralement workshop ou sujet pratique.
- Vague B : jeudi à samedi, généralement speaker ou présentation.
- CTA principal : réservation B-Only via le lien suivi du canal.

## Règle opérationnelle

Chaque vague conserve un seul sujet, un seul angle directeur, un seul visuel
principal et un seul CTA. Les déclinaisons sont adaptées aux canaux utiles sans
obligation de publier partout.

Le passage d'une vague à l'autre ne doit pas être entremêlé : terminer la vague
A avant de lancer la vague B. Le jeudi matin est réservé autant que possible à
la modération, aux réponses et à l'observation des premiers résultats.

## Calendrier prévisionnel par vagues

| Semaine | Vague A — début de semaine | État | Vague B — fin de semaine | État |
|---|---|---|---|---|
| 17–22 août | **17–19 août — Élodie Lué** : « Quand Bitcoin rencontre le mobile money » | `PROGRAMMÉ` — confirmation de Cyrille le 16 août ; publication à vérifier | **20–22 août — Aurore Galves** : « Have Fun Staying Fun — Les mèmes, le langage de la révolution monétaire » | `PRÊT À PROGRAMMER` — textes validés, calendrier V3 actif |
| 24–29 août | **24–26 août — ProfEduStream** : parcours des quatre workshops pratiques | `PRÊT À RELIRE` — contenu V3 proposé, calendrier V3 conservé | **27–29 août — ProfEduStream** : « Face à la menace quantique, faut-il geler les bitcoins de Satoshi ? » | `PRÊT À RELIRE` — contenu V3 proposé, calendrier V3 conservé |
| 31 août–5 septembre | **31 août–2 septembre — Renaud Lifchitz** : « Reticulum, le réseau cypherpunk dont vous avez besoin ! » | `PRÊT À RELIRE` — contenu validé, calendrier V3 à relire | **3–5 septembre — Christine Jeanneaux** : « Et si on comptait les moutons ? — Anatomie d’un mimétisme autour de Bitcoin » | `PRÊT À RELIRE` — campagne V4 préparée |
| 7–12 septembre | **7–9 septembre — Polto et Darko** : « Justifier l'origine de ses bitcoins » | `PRÊT À RELIRE` | **10–12 septembre — Pierre Noizat** : « Energie, monnaie et civilisation » | `À PRODUIRE` — informations et visuel validés |
| 14–19 septembre | **14–16 septembre — Élodie Lué** : « Paiements via Lightning Network » | `À PRODUIRE` — modalités des commerçants à préciser | **17–19 septembre — Alexandre Stachtchenko** | `À COMPLÉTER` — sujet, titre, portrait et contenu manquants |
| 21–26 septembre | **21–23 septembre — Jean** : achat de bitcoin de manière privée | `À COMPLÉTER` | **24–26 septembre — Florent Gabriel** | `À COMPLÉTER` — titre et contenu manquants |
| 28 septembre–3 octobre | **28–30 septembre — Marius Farashi** : Ark et solutions de seconde couche | `À COMPLÉTER` | **1er–3 octobre — Lionel Jeannerat** : « Bitcoin est pour les copaines » | `À COMPLÉTER` |
| 5–10 octobre | **5–7 octobre — Schnuartz** : Specter Workshop | `À COMPLÉTER` | **8–10 octobre — Nicolas Cantu** : « Lire les dégâts de l’impression monétaire dans les sols. » | `À PRODUIRE` |
| 12–17 octobre | **12–14 octobre — Noé / WeSatoshis** | `À COMPLÉTER` | **15–17 octobre — Michel Khazzaka** | `À COMPLÉTER` |
| 19–24 octobre | **19–21 octobre — rappel des workshops pratiques** | `À CADRER` | **22–24 octobre — Alexis Roussel** | `À COMPLÉTER` |
| 26–31 octobre | **26–28 octobre — guide des workshops et prérequis** | `À CADRER` | **29–31 octobre — Sandra Gandoin** | `EN ATTENTE` — participation et sujet à confirmer |
| 2–6 novembre | **2–4 novembre — dernier rappel des workshops** | `À CADRER` | **5–6 novembre — Le Cercle du Coin** : « Une communauté autour de Bitcoin & Souveraineté » | `À PRODUIRE` — présentation uniquement |

## Déroulé type d'une vague complète

### Vague A — lundi à mercredi

- lundi : article éventuel et publication LinkedIn AlpineChain ;
- mardi : LinkedIn Annecy Bitcoin Meetup puis X ;
- mercredi : Nostr puis Meta ;
- jeudi matin : modération, réponses et observation.

### Vague B — jeudi à samedi

- jeudi à partir de midi : article éventuel et publication LinkedIn AlpineChain ;
- vendredi : LinkedIn Annecy Bitcoin Meetup puis X ;
- samedi : Nostr puis Meta.

Ce déroulé est un modèle, pas une obligation de publier sur tous les canaux. Une
campagne courte peut retenir uniquement les plateformes où son public est
réellement présent.

## Calendriers versionnés actifs après validation

| Campagne | Calendrier proposé | Calendrier remplacé |
|---|---|---|
| Élodie Lué — présentation | `campaigns/elodie-lue/calendrier-diffusion-v4.csv` | V3 |
| Aurore Galves | `campaigns/aurore-galves/calendrier-diffusion-v3.csv` | V2 |
| ProfEduStream — workshops | `campaigns/profedustream/calendrier-diffusion-workshops-v3.csv` | Contenu V3 |
| ProfEduStream — présentation quantique | `campaigns/profedustream/calendrier-diffusion-quantique-v3.csv` | Contenu V3 |
| Renaud Lifchitz | `campaigns/renaud-lifchitz/calendrier-diffusion-v3.csv` | V2 |

Les versions précédentes restent dans GitHub pour l'historique et ne doivent
pas être programmées en parallèle.

## Gate avant programmation

- [ ] contenu et visuel validés ;
- [ ] statut du programme compatible avec une annonce publique ;
- [ ] liens courts contrôlés vers leurs destinations UTM exactes ;
- [ ] comptes et aperçus vérifiés ;
- [ ] absence de chevauchement avec une autre vague sur le même compte ;
- [ ] validation humaine enregistrée.

## Suivi

Après publication réelle, archiver canal, compte, date, URL publique, statut
HTTP et date de vérification dans l'Issue #24. Conserver distincts les statuts
`PROGRAMMÉ`, `PUBLIÉ`, `URLS ARCHIVÉES` et `MÉTRIQUES RELEVÉES`.
