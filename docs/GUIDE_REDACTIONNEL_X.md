# Guide rédactionnel X

Version : V0.2  
Dernière mise à jour : 2026-09-01

---

## 1. Objet du guide

Ce guide définit les règles de rédaction, de validation et de revue des publications destinées à X produites depuis le dépôt AlpineChain Association.

Il doit aider à produire des contenus :

- clairs ;
- courts ;
- utiles ;
- actionnables ;
- non redondants ;
- alignés avec AlpineChain ;
- compatibles avec une automatisation future.

Ce guide n’est pas une analyse technique complète de X. C’est un outil opérationnel de publication.

---

## 2. Périmètre d’application

Ce guide s’applique à toute communication destinée à X issue de ce dépôt :

- annonces d’ateliers ;
- rappels événementiels ;
- publications pédagogiques ;
- relances ;
- comptes-rendus ;
- communications associatives ;
- relais d’événements ou de contenus portés par AlpineChain.

Les autres canaux peuvent réutiliser les idées, mais ce guide cible spécifiquement X.

---

## 3. Source de référence algorithmique

La source technique de référence est le dépôt public :

```text
https://github.com/xai-org/x-algorithm
```

Les règles de ce guide sont dérivées d’une lecture opérationnelle des mécanismes publics suivants :

- sélection de publications candidates ;
- enrichissement du contexte ;
- filtrage avant sélection ;
- scoring multi-signaux ;
- signaux positifs d’engagement ;
- signaux négatifs de désintérêt ;
- sélection finale des contenus à afficher.

Ces règles ne doivent pas être considérées comme définitives. Elles doivent être revues chaque trimestre.

---

## 4. Principe directeur

Une publication X doit être pensée comme un candidat de diffusion.

Elle doit donc être :

- compréhensible seule ;
- centrée sur une seule idée ;
- reliée à une action attendue ;
- utile pour le lecteur ;
- cohérente avec le positionnement AlpineChain ;
- pauvre en signaux négatifs.

Une publication ne doit pas seulement informer. Elle doit donner une raison claire de lire, répondre, partager, cliquer, s’inscrire ou suivre.

---

## 5. Contraintes de format

### Publication standard

Une publication X standard doit viser 240 caractères maximum.

Cette limite interne force la clarté, réduit le bruit et facilite l’automatisation future.

### Publication longue

Si l’idée ne tient pas correctement en 240 caractères, elle doit être découpée en thread.

Ne pas forcer une idée complexe dans une publication illisible.

### Liens et CTA

Un lien ou un appel à l’action doit être ajouté seulement s’il sert l’objectif de la publication.

Un CTA faible ou automatique est du bruit.

---

## 6. Règles de rédaction

Règles obligatoires :

- une publication = une idée ;
- une publication = un objectif ;
- une publication = une action attendue ;
- écrire pour un lecteur qui ne connaît pas le contexte ;
- privilégier les formulations concrètes ;
- supprimer les mots décoratifs ;
- éviter les annonces nues ;
- éviter les répétitions quasi identiques ;
- éviter le jargon inutile ;
- éviter les promesses financières ;
- éviter les formulations crypto génériques ;
- vérifier le CTA avant publication.

Une publication qui n’a pas d’action attendue doit être retravaillée ou refusée.

---

## 7. Règles de thread

Un thread est utilisé uniquement si l’idée principale dépasse le format court.

Règles obligatoires :

- le premier post porte l’idée principale ;
- chaque post suivant développe un seul point ;
- chaque post doit rester court ;
- chaque post doit rester compréhensible autant que possible ;
- le dernier post porte le CTA si un CTA est nécessaire ;
- éviter les threads longs sans forte valeur pédagogique.

Recommandation :

```text
Thread court : 3 à 5 posts.
Thread long : uniquement pour un contenu pédagogique structurant.
```

Un thread ne doit pas servir à masquer un message mal cadré.

---

## 8. Signaux positifs à rechercher

Chaque publication doit viser au moins un signal positif identifiable.

Signaux utiles :

- réponse ;
- repost ;
- citation ;
- clic ;
- inscription ;
- lecture attentive ;
- sauvegarde ;
- suivi du compte ;
- participation à un événement.

Une publication peut viser plusieurs signaux, mais elle doit garder un objectif principal.

---

## 9. Signaux négatifs à éviter

Une publication doit éviter les signaux qui peuvent réduire sa diffusion ou dégrader la perception d’AlpineChain.

À éviter :

- contenu trop vague ;
- contenu déjà vu ;
- répétition excessive ;
- annonce sans angle ;
- jargon non nécessaire ;
- promesse financière ;
- posture de gourou ;
- provocation gratuite ;
- confusion entre Bitcoin, crypto générique et web3 ;
- CTA automatique ou faible ;
- message compréhensible seulement par les initiés.

Un contenu qui ressemble à du spam doit être refusé.

---

## 10. Grille de validation avant publication

Score minimum recommandé :

```text
8/10
```

| Critère | Point |
|---|---:|
| Idée claire | 1 |
| Format 240 caractères ou thread propre | 1 |
| Compréhensible hors bulle Bitcoin | 1 |
| Aligné AlpineChain | 1 |
| Action attendue identifiable | 1 |
| Potentiel de réponse, repost, clic ou inscription | 1 |
| CTA clair si nécessaire | 1 |
| Pas de jargon inutile | 1 |
| Pas de signal négatif évident | 1 |
| Non redondant | 1 |

Décision :

```text
8-10 : publiable
6-7 : à retravailler
0-5 : à refuser
```

La validation humaine reste obligatoire avant publication.

---

## 11. Règles pour les agents IA

Un agent IA qui produit ou relit une publication X doit :

1. identifier l’objectif de la publication ;
2. identifier le public cible ;
3. identifier l’action attendue ;
4. vérifier la limite des 240 caractères ;
5. proposer un thread si nécessaire ;
6. appliquer la grille de validation ;
7. signaler les limites restantes ;
8. ne jamais publier automatiquement.

Un agent doit refuser ou retravailler une publication si :

- l’idée est floue ;
- le message est trop long sans structure de thread ;
- le CTA est absent alors qu’il est nécessaire ;
- le contenu est redondant ;
- le contenu utilise un jargon inutile ;
- le contenu contredit la ligne AlpineChain.

---

## 12. Revue trimestrielle de x-algorithm

Ce guide doit être revu chaque trimestre à partir du dépôt :

```text
https://github.com/xai-org/x-algorithm
```

Points à vérifier :

- `README.md` ;
- règles de scoring ;
- règles de ranking ;
- règles de filtering ;
- sources de candidats ;
- signaux positifs ;
- signaux négatifs ;
- changements majeurs de logique de sélection.

Si une évolution importante est détectée, ouvrir une issue dans ce dépôt pour réviser ce guide.

La revue trimestrielle ne doit pas déclencher de modification automatique. Elle sert à décider si une mise à jour est nécessaire.

---

## 13. Préparation à l’automatisation future

Les règles de ce guide doivent rester :

- courtes ;
- explicites ;
- testables ;
- non ambiguës ;
- compatibles avec une checklist ;
- compatibles avec un scoring automatique.

Toute future automatisation devra respecter :

- validation humaine avant publication ;
- contrôle du format ;
- contrôle du score minimal ;
- contrôle de la redondance ;
- contrôle du CTA ;
- traçabilité des publications proposées.

L’automatisation doit assister la production éditoriale, pas remplacer le discernement associatif.
