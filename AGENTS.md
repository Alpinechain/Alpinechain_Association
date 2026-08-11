# AGENTS.md

Instructions pour les agents IA travaillant sur le dépôt AlpineChain Association.

Version : V0.4  
Dernière mise à jour : 2026-08-11

## 1. Rôle du dépôt

Ce dépôt est le centre de pilotage des activités associatives AlpineChain :

- gouvernance et coordination ;
- Meetup Bitcoin Annecy ;
- Souveraineté 3.0 ;
- B-Only ;
- communication et calendrier éditorial ;
- actions, décisions et risques ;
- capitalisation après événement ;
- usage structuré de l’IA.

Le fichier de cadrage est `ALPINECHAIN_ASSOCIATION_OS.md`. Le point d’entrée opérationnel est `dashboard/NOW.md`.

## 2. Principe général

Un agent IA ne décide pas à la place de l’association.

Il peut cadrer, structurer, rédiger, relire, documenter, proposer, coordonner et signaler les risques.

Il ne doit pas :

- publier automatiquement ;
- inventer des décisions associatives ;
- parler au nom du bureau sans validation ;
- présenter une hypothèse comme une décision validée ;
- copier des secrets ou données personnelles inutiles dans GitHub ;
- transformer AlpineChain en canal commercial.

## 3. Sources de vérité

| Sujet | Source de vérité |
|---|---|
| Priorités, actions, décisions et procédures | GitHub |
| Contrats, visuels, médias et documents lourds | Nextcloud |
| Billetterie et participants | Pretix |
| Comptabilité associative | Paheko |
| CRM, sponsors, devis et factures | Dolibarr |
| Vidéos publiques | PeerTube |
| Infrastructure et runbooks serveur | Dépôt `Alpinechain/Serveur` |

Une conversation ChatGPT peut préparer une décision ou une action. Toute information durable doit être consolidée dans la source de vérité appropriée.

## 4. Agent coordinateur

L’agent coordinateur est prioritaire lorsqu’une tâche touche à plusieurs projets ou fichiers.

Sa mission :

- identifier le projet et le résultat attendu ;
- vérifier le périmètre et la source de vérité ;
- empêcher les doublons ;
- maintenir une structure courte et lisible ;
- créer ou mettre à jour les Issues nécessaires ;
- proposer la prochaine action utile ;
- signaler clairement les limites et les échecs.

Règle :

```text
Un fichier créé doit avoir un rôle clair, sinon il n’est pas créé.
```

## 5. Rôles IA autorisés

| Rôle | Mission |
|---|---|
| Agent coordinateur | Cohérence globale, dispatch et suivi |
| Analyste | Objectif, public, angle et contraintes |
| Rédacteur | Articles, annonces, posts et descriptions |
| Reviewer | Cohérence, ton, CTA, clarté et conformité |
| Documentaliste | Comptes-rendus, fiches et synthèses |
| Planificateur | Calendrier et séquences de publication |
| Contradicteur | Flou, jargon, hors-scope et hypothèses cachées |

## 6. Règles de production

Avant toute production, identifier :

```text
Projet : [association | meetup-bitcoin | souverainete | b-only]
Objectif : [objectif unique]
Public : [public cible]
Sortie attendue : [format]
Contraintes : [contraintes connues]
Validation : humaine avant publication
```

Pour les contenus publics, vérifier le CTA, le lien, la date, le lieu, le format, le niveau technique et la cohérence AlpineChain.

Pour X, appliquer `docs/GUIDE_REDACTIONNEL_X.md`, notamment la limite interne de 140 caractères et les règles de thread.

## 7. Gestion des actions

Une action concrète doit être créée ou suivie dans une Issue GitHub.

Chaque Issue doit comporter :

- un objectif ;
- un résultat attendu ou une Definition of Done ;
- un label `project:*` ;
- un label `type:*` ;
- un responsable lorsque possible ;
- une échéance dans le corps si elle est connue ;
- les dépendances ou validations nécessaires.

Le vocabulaire des labels est défini dans `references/github-labels.md`.

## 8. Structure

```text
.
├── AGENTS.md
├── ALPINECHAIN_ASSOCIATION_OS.md
├── README.md
├── dashboard/
│   ├── NOW.md
│   └── .daily-review-state.json
├── skills/
│   ├── alpinechain-daily-review/
│   │   └── SKILL.md
│   └── b-only-source-of-truth/
│       └── SKILL.md
├── projects/
│   ├── association/
│   ├── meetup-bitcoin/
│   ├── souverainete/
│   └── b-only/
├── references/
├── docs/
├── notes/
├── templates/
└── assets/
```

Rôles :

- `dashboard/` : vue synthétique du présent ;
- `skills/` : procédures IA réutilisables et versionnées ;
- `projects/` : cadrage stable de chaque activité ;
- `references/` : outils, labels, liens et conventions ;
- `docs/` : documentation principale ;
- `templates/` : modèles réutilisables ;
- `notes/` : suivi périodique ;
- `assets/` : index de ressources stockées ailleurs.

## 9. Skills locales

Lorsqu’une demande correspond à une Skill existante, l’agent doit lire son `SKILL.md` avant d’exécuter la tâche.

Commandes canoniques :

- `Fais le point AlpineChain.` → `skills/alpinechain-daily-review/SKILL.md`
- `Contrôle B-Only.` → `skills/b-only-source-of-truth/SKILL.md`

Les commandes canoniques sont des raccourcis mémorisables. Elles ne sont pas obligatoires : une formulation en langage naturel déclenche la Skill dès lors que l’intention correspond clairement à son périmètre.

Exemples :

- `Qu’est-ce que j’ai à faire aujourd’hui pour AlpineChain ?` → revue quotidienne AlpineChain ;
- `Vérifie si le programme B-Only est cohérent.` → contrôle source de vérité B-Only ;
- `Est-ce que Bitstack est réellement payé ?` → contrôle ciblé B-Only sur le statut financier de Bitstack.

## 10. Validation humaine

Validateur opérationnel actuel : Cyrille.

Aucun contenu généré par IA ne doit être considéré comme publiable sans validation humaine. Les partenariats, sujets sensibles, décisions du bureau et engagements financiers exigent une validation renforcée par la personne compétente.

## 11. Definition of Done minimale

Une tâche est terminée quand :

```text
[ ] le livrable demandé existe ;
[ ] son rôle est clair ;
[ ] les actions sont tracées ;
[ ] il respecte le cadrage AlpineChain ;
[ ] les limites et échecs sont explicites ;
[ ] la prochaine action est identifiable ;
[ ] aucune publication automatique n’a été faite.
```
