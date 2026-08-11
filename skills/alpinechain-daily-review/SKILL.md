# AlpineChain Daily Review

## Objet

Revue opérationnelle quotidienne des activités associatives AlpineChain et B-Only.

Cette Skill doit être utilisée notamment pour les demandes :

- `Fais le point AlpineChain.`
- `Revue quotidienne AlpineChain.`
- `Que dois-je faire aujourd'hui pour AlpineChain ?`
- `Qu'est-ce qui a changé depuis la dernière revue ?`

L'objectif est de déterminer ce qui mérite une attention ou une action maintenant, et non de résumer tout le dépôt.

## 1. Périmètre

### Inclus

Uniquement les activités associatives :

- AlpineChain ;
- B-Only ;
- Meetup Bitcoin Annecy ;
- Souveraineté 3.0 ;
- gouvernance associative ;
- communication associative ;
- partenariats et sponsors B-Only ;
- événements et billetterie associatifs ;
- infrastructure uniquement lorsqu'elle affecte directement une activité associative.

Dépôt principal : `Alpinechain/Alpinechain_Association`.

### Exclus

Ne jamais intégrer les activités professionnelles :

- Copinmalin ;
- B-Conseil ;
- B-Café ;
- B-Libre ;
- missions commerciales personnelles ;
- infrastructure professionnelle.

En cas de doute, classer l'information hors périmètre plutôt que mélanger PRO et ASSO.

## 2. Sources et ordre de lecture

1. Lire `dashboard/NOW.md` en premier.
2. Respecter `AGENTS.md` et, si nécessaire, `ALPINECHAIN_ASSOCIATION_OS.md`.
3. Examiner les Issues GitHub ouvertes pertinentes.
4. Examiner les derniers commits sur `main`.
5. Examiner les PR ouvertes et récemment fusionnées.
6. Pour B-Only, comparer les fichiers métier concernés, notamment le programme, les registres intervenants/organisations et les suivis de communication.

Ne pas considérer `NOW.md` comme suffisant lorsqu'une Issue ou un fichier métier contient une information plus récente.

## 3. Issues à prioriser

Priorité aux Issues :

- P0 ou P1 ;
- avec échéance proche ou dépassée ;
- récemment modifiées ;
- bloquées ;
- en attente de validation ;
- en attente d'un tiers ;
- concernant B-Only ;
- concernant une publication ou un événement proche.

Une action concrète doit normalement être représentée par une Issue.

## 4. Changements depuis la revue précédente

Répondre explicitement à : `Qu'est-ce qui a changé depuis le dernier état connu ?`

Utiliser `dashboard/.daily-review-state.json` comme curseur technique.

Comparer au minimum :

- nouvelles Issues ;
- Issues fermées ou modifiées ;
- nouvelles échéances ;
- changements de responsable ;
- décisions ajoutées ou remplacées ;
- commits significatifs ;
- PR fusionnées ;
- changements de programme B-Only ;
- nouvelles publications ;
- confirmations ou désistements ;
- changement de statut d'un sponsor ;
- nouveau blocage.

Si le fichier d'état est absent ou inexploitable, utiliser la date de dernière mise à jour de `dashboard/NOW.md` et signaler : `Baseline initiale — aucune revue précédente persistée.`

Ne jamais inventer un changement en l'absence de référence fiable.

## 5. Échéances et priorité

Toujours utiliser la date réelle du jour.

Contrôler :

- échéances dépassées ;
- échéances aujourd'hui ;
- échéances dans les 7 prochains jours ;
- jalons B-Only ;
- événements AlpineChain ;
- campagnes programmées ;
- relances partenaires ;
- obligations administratives associatives documentées.

### BLOQUANT

- incident empêchant une action importante ;
- décision nécessaire avant de continuer ;
- échéance dépassée critique ;
- dépendance externe empêchant une tâche prioritaire ;
- contradiction empêchant de déterminer la bonne action.

### AUJOURD'HUI

- échéance aujourd'hui ;
- échéance dépassée à régulariser ;
- action nécessaire pour ne pas bloquer une échéance proche ;
- tâche explicitement immédiate dans `NOW.md` ;
- action à fort impact réalisable immédiatement.

### CETTE SEMAINE

- actions à réaliser dans les 7 jours ;
- préparation nécessaire d'un jalon à venir ;
- travaux importants non urgents aujourd'hui.

### EN ATTENTE D'UN TIERS

Classer ici uniquement une action dont la prochaine étape dépend réellement d'un intervenant, sponsor, prestataire, membre du bureau, partenaire ou validation extérieure.

Indiquer si possible : qui, quoi, depuis quand et prochaine relance.

## 6. Contrôle B-Only

### Programme

Comparer programme, registres, Issues et dernières modifications.

Détecter notamment :

- créneaux différents ;
- intervenant absent d'une source ;
- désistement non propagé ;
- titre différent ;
- créneau provisoire présenté comme confirmé ;
- intervenant confirmé mais communication non préparée.

### Sponsors

Vérifier séparément :

- partenariat confirmé ;
- facturation ;
- paiement ;
- communication ;
- relance prévue.

Ne jamais déduire qu'un paiement est reçu parce qu'un partenariat est confirmé.

### Communication

Distinguer strictement :

- préparée ;
- validée ;
- programmée ;
- publiée ;
- URLs archivées ;
- métriques relevées.

`Prêt à publier` n'est jamais équivalent à `publié`.

### Billetterie

N'utiliser que le dernier chiffre daté disponible et toujours afficher sa date. Ne jamais présenter un ancien chiffre comme un état temps réel.

## 7. Incohérences

Comparer activement :

- `dashboard/NOW.md` ;
- Issues ;
- programme B-Only ;
- registres intervenants/organisations ;
- fichiers de communication ;
- commits/PR ;
- échéances documentées.

Format :

`⚠️ Incohérence — [description]`

Puis indiquer : source A, source B, information la plus récente, correction probable et besoin éventuel de validation.

Hiérarchie indicative :

1. décision explicitement validée ;
2. Issue contenant la décision ;
3. fichier métier/source de vérité du sujet ;
4. `NOW.md` ;
5. note de travail ;
6. conversation ou hypothèse.

La date la plus récente ne suffit pas toujours. Ne pas corriger automatiquement une contradiction importante sans validation.

## 8. Infrastructure

Ne pas refaire quotidiennement la revue complète `operations/weekly-review.md`.

Dans la Daily Review, ne remonter que :

- incident GitHub ouvert ;
- infrastructure signalée comme bloquante ;
- échéance technique explicitement mentionnée ;
- résultat récent d'une revue d'exploitation influençant les priorités.

Ne jamais présenter un ancien état serveur comme un contrôle temps réel.

## 9. Règles de classement

Toujours distinguer :

- FAIT ;
- DÉCISION ;
- ACTION ;
- HYPOTHÈSE ;
- PROPOSITION ;
- INFORMATION OBSOLÈTE.

Ne jamais transformer :

- une proposition en décision ;
- une campagne préparée en campagne publiée ;
- un partenaire confirmé en paiement reçu ;
- un créneau provisoire en créneau confirmé.

Ne pas gonfler artificiellement la liste des tâches.

## 10. Sélection des actions

Par défaut :

- Bloquant : tous les vrais blocages ;
- Aujourd'hui : maximum 5 actions ;
- Cette semaine : maximum 7 actions ;
- En attente : uniquement les dépendances actives.

Pour chaque action, indiquer si possible : `Action — résultat attendu — source`.

## 11. Format de sortie

# AlpineChain — Point quotidien

**Date :** YYYY-MM-DD  
**État général :** 🟢 Maîtrisé / 🟠 Attention / 🔴 Bloqué

## Ce qui a changé

Maximum 5 changements significatifs.

Si aucun : `Aucun changement opérationnel significatif détecté depuis la précédente revue.`

## 🔴 Bloquant

Si aucun : `Aucun blocage identifié.`

## 🎯 Aujourd'hui

Pour chaque action :

- Action ;
- Pourquoi ;
- Résultat attendu ;
- Source.

## 📅 Cette semaine

Actions, échéances et résultats attendus.

## ⏳ En attente d'un tiers

Pour chaque élément : personne/organisation, attente, depuis, relance, source.

## ⚠️ Incohérences détectées

Si aucune : `Aucune incohérence significative détectée.`

## B-Only — surveillance

Afficher uniquement les éléments nécessitant une attention :

- Programme ;
- Sponsors ;
- Communication ;
- Billetterie ;
- Prochaine échéance.

Ne pas faire un résumé complet de B-Only si rien n'a changé.

## Prochaine action recommandée

Terminer par une seule action :

`Maintenant : [action précise].`

Elle doit être réalisable, prioritaire et immédiatement exécutable.

## 12. Niveau de détail

La revue quotidienne doit pouvoir être lue en moins de 3 minutes.

Ne pas produire :

- historique complet ;
- résumé de toutes les Issues ;
- résumé de tous les commits ;
- liste exhaustive de tout le projet.

## 13. Information insuffisante

Ne jamais combler les trous.

Utiliser : `Information non vérifiable avec les sources actuellement disponibles.`

Si une source normalement disponible ne peut être consultée, la nommer et poursuivre avec les autres sources.

## 14. Actions interdites par défaut

Cette Skill est en lecture et analyse par défaut.

Elle ne doit pas automatiquement :

- modifier ou fermer une Issue ;
- modifier `NOW.md` ;
- modifier le programme ;
- publier une communication ;
- envoyer un message ;
- engager une dépense ;
- prendre une décision au nom du bureau.

Toute écriture ou action externe nécessite une instruction explicite de l'utilisateur.

## Commande canonique

`Fais le point AlpineChain.`
