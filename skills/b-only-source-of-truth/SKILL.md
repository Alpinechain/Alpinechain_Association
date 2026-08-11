# Skill — B-Only Source of Truth

## Nom

`b-only-source-of-truth`

## Objectif

Reconstruire l’état de vérité le plus fiable possible pour B-Only 2026 à partir des sources de vérité associatives, détecter les contradictions, informations obsolètes, statuts ambigus et données manquantes, puis proposer les corrections nécessaires sans les appliquer automatiquement.

Cette Skill répond à la question : **« Qu’est-ce qui est réellement vrai pour B-Only maintenant ? »**

## Déclencheurs

Utiliser cette Skill lorsque la demande concerne explicitement ou implicitement un contrôle de cohérence, de validité ou de vérité sur B-Only, notamment :

- `Contrôle B-Only.`
- `Contrôle la source de vérité B-Only.`
- `Vérifie B-Only.`
- `Audit B-Only.`
- `Vérifie le programme B-Only.`
- `Vérifie les sponsors B-Only.`
- `Vérifie [intervenant] pour B-Only.`
- `Cette information B-Only est-elle encore vraie ?`
- `Quel est l’état réel de B-Only ?`
- `Qui est réellement confirmé ?`
- `Quels sponsors sont réellement payés ?`
- `Qu’est-ce qui est encore provisoire ?`
- toute formulation en langage naturel demandant de vérifier une information B-Only, même si la commande canonique n’est pas utilisée.

Commande canonique : **`Contrôle B-Only.`**

## Périmètre

Inclure uniquement B-Only 2026 et les activités associatives directement nécessaires à sa vérification :

- programme ;
- intervenants ;
- sponsors et partenaires ;
- billetterie ;
- communication ;
- logistique ;
- audiovisuel ;
- budget associatif B-Only ;
- contrats et contreparties ;
- site B-Only ;
- visuels et médias ;
- calendrier et échéances ;
- décisions du bureau relatives à B-Only.

Exclure :

- Copinmalin professionnel ;
- B-Conseil ;
- B-Café ;
- B-Libre ;
- infrastructure professionnelle ;
- toute autre activité non associative.

En cas de doute, exclure plutôt que mélanger les périmètres.

## Principe général

La Skill ne doit pas résumer passivement le dépôt. Elle doit déterminer la meilleure information disponible, distinguer les niveaux de preuve, détecter les conflits entre sources et qualifier chaque information avec un statut explicite.

Ne jamais transformer :

- une proposition en décision ;
- un brouillon en publication ;
- un partenaire confirmé en partenaire payé ;
- un créneau provisoire en créneau confirmé ;
- une campagne validée en campagne publiée ;
- une ancienne information en état actuel sans contrôle de fraîcheur.

## Sources de vérité par domaine

| Domaine | Source primaire |
|---|---|
| Actions, décisions, échéances | GitHub Issues |
| Programme et horaires | `projects/b-only/programme/` |
| Intervenants | `projects/b-only/INTERVENANTS.md` |
| Organisations, sponsors et partenaires | `projects/b-only/ORGANISATIONS.md` |
| État synthétique | `dashboard/NOW.md` |
| Communications publiées | Issue #24 et URLs publiques archivées |
| Visuels, portraits, documents | Nextcloud |
| Tiers, devis, factures | Dolibarr |
| Comptabilité et paiements | Paheko |
| Billetterie réelle | Pretix |
| Site public | `b-only.org` / Framer |
| Vidéos publiques | PeerTube |
| Infrastructure associative | dépôt `Alpinechain/Serveur` uniquement si nécessaire |

Une source primaire d’un domaine prévaut sur un registre général lorsqu’elles se contredisent.

## Hiérarchie des preuves

Classer les éléments selon ces niveaux :

### Niveau A — preuve opérationnelle

Exemples : paiement dans Paheko, commande Pretix, facture Dolibarr, URL publique, fichier programme publié, document validé.

### Niveau B — décision explicitement enregistrée

Exemples : Issue avec décision validée, PR fusionnée, commentaire explicitement présenté comme validation.

### Niveau C — registre consolidé

Exemples : `INTERVENANTS.md`, `ORGANISATIONS.md`, `NOW.md`.

### Niveau D — préparation

Exemples : campagne prête, draft, calendrier proposé, PR ouverte, contenu à relire.

### Niveau E — hypothèse

Exemples : ancienne note, conversation préparatoire, piste, intention, proposition non validée.

Une information de niveau E ne peut jamais écraser une information de niveau A ou B.

## Statuts normalisés

Utiliser uniquement les statuts suivants lorsqu’un champ doit être qualifié :

- `CONFIRMÉ`
- `PROVISOIRE`
- `À VALIDER`
- `EN ATTENTE`
- `REMPLACÉ`
- `ANNULÉ`
- `OBSOLÈTE`
- `NON VÉRIFIABLE`
- `CONTRADICTOIRE`

Éviter les statuts vagues comme `OK`, `presque prêt`, `probablement confirmé` ou `semble payé`.

## Modes d’utilisation

### Mode ciblé

Exemple : `Vérifie Pierre Noizat.`

Contrôler uniquement l’entité ou l’information demandée et ses dépendances directes.

### Mode domaine

Exemples :

- `Vérifie les sponsors B-Only.`
- `Vérifie le programme B-Only.`
- `Vérifie la billetterie B-Only.`

Contrôler le domaine demandé sans lancer systématiquement l’audit global.

### Mode complet

Déclenché par `Contrôle B-Only.` ou formulation équivalente.

Auditer l’ensemble du périmètre.

## Contrôle des intervenants

Pour chaque intervenant contrôlé, vérifier séparément si disponible :

- nom ;
- titre professionnel ;
- participation ;
- sujet ;
- titre de présentation ;
- synopsis ;
- format ;
- jour ;
- horaire ;
- salle ;
- durée ;
- portrait ;
- droits du portrait ;
- réseaux ;
- besoins techniques ;
- campagne communication ;
- publication.

Ne jamais utiliser un seul statut global `confirmé` pour couvrir tous ces champs.

## Contrôle du programme

Comparer au minimum :

- `projects/b-only/programme/` ;
- `projects/b-only/INTERVENANTS.md` ;
- Issue #11 ;
- communications publiques pertinentes ;
- site public si la donnée y est publiée.

Détecter notamment :

- collision horaire ;
- intervenant présent dans le programme mais absent du registre ;
- intervenant confirmé mais absent du programme ;
- horaire différent entre programme et communication ;
- statut `reserved` ou `option` présenté publiquement comme confirmé ;
- titre divergent ;
- désistement non propagé ;
- créneau remplacé mais ancienne information encore active.

## Contrôle sponsors et partenaires

Pour chaque organisation contrôlée, vérifier séparément si disponible :

- organisation ;
- pack ;
- montant ;
- confirmation ;
- facture ;
- paiement ;
- contreparties ;
- stand ou espace partenaire ;
- intervention ;
- pass ou places ;
- giveaway ;
- communication ;
- URLs ;
- métriques.

Règles strictes :

- `confirmé ≠ facturé` ;
- `facturé ≠ payé` ;
- `payé ≠ contreparties réalisées` ;
- `campagne préparée ≠ publiée`.

## Contrôle communication

Pour chaque campagne, distinguer :

- `DRAFT`
- `RÉDIGÉE`
- `VALIDÉE`
- `PROGRAMMÉE`
- `PUBLIÉE`
- `URLS ARCHIVÉES`
- `MÉTRIQUES RELEVÉES`

Une campagne ne peut être considérée `PUBLIÉE` que si une preuve publique existe : URL, identifiant de publication ou autre trace équivalente.

## Contrôle billetterie

Toujours dater les chiffres.

Format recommandé :

```text
Source : Pretix / information validée
Date : YYYY-MM-DD
Billets payés : N
Commandes payées : N si disponible
Early : disponible / épuisé / non vérifiable
```

Si disponibles, distinguer :

- commandes ;
- billets ;
- billets payés ;
- billets gratuits ;
- annulations ;
- remboursements ;
- revenu.

Ne jamais présenter un ancien chiffre comme valeur actuelle sans date.

## Recherche des informations obsolètes

Rechercher activement les expressions et statuts du type :

- `à confirmer` ;
- `en attente` ;
- `provisoire` ;
- `à obtenir` ;
- `relancer le` ;
- `aucune publication` ;
- `non réglé` ;
- `draft` ;
- `à programmer`.

Puis vérifier si une source plus récente les a déjà résolus.

## Détection des contradictions

Classer les contradictions :

### 🟡 Mineure

Orthographe, variante de titre ou différence de formulation sans impact opérationnel immédiat.

### 🟠 Importante

Horaire différent, statut confirmé/provisoire divergent, titre public incompatible, dépendance non propagée.

### 🔴 Critique

Publication publique fausse, paiement déclaré reçu sans preuve, intervenant annoncé après désistement, donnée financière ou billetterie manifestement contradictoire avec la source primaire.

## Format d’une incohérence

```text
⚠️ Incohérence — [description]

Source A : ...
Source B : ...
Information la plus récente : ...
Niveau de preuve : A / B / C / D / E
Correction probable : ...
Validation humaine nécessaire : oui / non
```

## Complétude intervenants

Lorsque cela aide le contrôle, calculer un indicateur objectif de complétude à partir de champs présents ou absents, par exemple :

- participation ;
- titre professionnel ;
- titre session ;
- synopsis ;
- créneau ;
- portrait ;
- droits ;
- besoins techniques ;
- communication ;
- publication.

Le score doit être présenté comme indicateur de complétude documentaire, jamais comme score de qualité.

## Historique

Cette Skill ne doit pas utiliser `dashboard/.daily-review-state.json` pour déterminer la vérité actuelle.

Elle peut examiner commits, PRs, dates et historique Git afin de départager les sources, mais son objectif est l’état actuel, pas le delta quotidien.

## Format de sortie — mode complet

```markdown
# B-Only — Contrôle source de vérité

**Date du contrôle :** YYYY-MM-DD
**État général :** 🟢 Cohérent / 🟠 Incohérences / 🔴 Contradictions critiques

## Résumé
- X contradictions critiques
- X incohérences importantes
- X informations obsolètes
- X informations non vérifiables
- X corrections recommandées

## 🔴 Contradictions critiques
...

## 🟠 Incohérences
...

## 🕰 Informations obsolètes
...

## Programme
| Intervenant | Participation | Sujet | Créneau | Portrait | Publication |
|---|---|---|---|---|---|

## Sponsors
| Organisation | Confirmation | Facture | Paiement | Communication |
|---|---|---|---|---|

## Billetterie
...

## Communications
### Publié
...
### À venir
...

## Informations manquantes
...

## Corrections recommandées
1. ...
2. ...
3. ...

## État de confiance
**Fort / Moyen / Faible**

Sources non consultables : ...
```

Adapter la sortie au mode ciblé ou domaine en supprimant les sections non pertinentes.

## Politique d’écriture

Par défaut : lecture et analyse uniquement.

La Skill peut proposer des corrections mais ne doit pas automatiquement :

- modifier une Issue ;
- modifier le programme ;
- modifier un registre ;
- publier ;
- envoyer un message ;
- changer une information financière ;
- prendre une décision associative.

Une modification nécessite une instruction explicite séparée telle que :

- `Applique les corrections B-Only.`
- `Mets à jour les Issues concernées.`
- `Corrige le programme selon l’audit.`

## Information non vérifiable

Lorsqu’une source nécessaire n’est pas accessible, écrire explicitement :

`Information non vérifiable avec les sources actuellement disponibles.`

Continuer l’audit avec les autres sources au lieu d’inventer la donnée.

## Priorité de résolution

Lorsqu’une contradiction existe, utiliser par défaut cette priorité :

1. preuve opérationnelle de la source primaire du domaine ;
2. décision explicitement validée ;
3. registre métier spécialisé ;
4. `dashboard/NOW.md` ;
5. note de travail ;
6. conversation ou hypothèse.

Ne jamais corriger automatiquement une contradiction importante sans validation humaine.