# Suivi post-envoi — vague 01

**État :** `PRÊT À RELIRE` — suivi post-envoi ouvert ; aucune publication
attribuable aux destinataires n’est encore attestée par une URL publique.

## Cadrage

- Projet : B-Only 2026.
- Périmètre : Neowalt, PlebStyle, Renaud Lifchitz et le segment agrégé des
  visiteurs B-Only 2025.
- Fait confirmé : kits et visuels génériques validés puis transmis lors de la
  première vague.
- Objectif : recueillir les retours et les URLs des relais réellement publiés,
  sans pression ni confusion entre envoi et publication.
- CTA du kit : <https://b-only.org/>.

## État initial

| Cible | Kit | Publication du destinataire | URL archivée | Prochaine action |
|---|---|---|---|---|
| Neowalt | `ENVOYÉ` | `NON VÉRIFIABLE` | aucune | Attendre le retour ; une relance amicale au plus à partir de J+3 |
| PlebStyle | `ENVOYÉ` | `NON VÉRIFIABLE` | aucune | Attendre le retour ; une relance amicale au plus à partir de J+3, comme relais historique uniquement |
| Renaud Lifchitz | `ENVOYÉ` | `NON VÉRIFIABLE` | aucune | Attendre le retour ; une relance amicale au plus à partir de J+3 |
| Visiteurs B-Only 2025 | `ENVOYÉ` | `NON VÉRIFIABLE` | aucune | Suivi agrégé uniquement ; aucune relance individuelle automatique |

`J+3` se calcule depuis la date réelle de transmission conservée dans l’outil
de contact. Cette date n’est pas déduite de la date de confirmation GitHub.

Une recherche publique bornée effectuée le 17 septembre 2026 n’a pas identifié
de relais indexé attribuable à ces quatre cibles. Ce constat ne prouve pas
l’absence de publication : les réseaux et messageries peuvent ne pas être
indexés.

## Relance amicale — contacts nommés

À utiliser une seule fois, uniquement en l’absence de réponse après J+3 :

```text
Salut {{PRÉNOM}},

Petit message juste pour vérifier que le kit B-Only est bien arrivé 😊
Aucun stress ni aucune obligation de partager, bien sûr. Et si tu publies
quelque chose, pense simplement à nous envoyer le lien : ça nous fera plaisir
de le voir et on pourra éventuellement le relayer de notre côté.

À bientôt 🧡
```

Pour PlebStyle, ne jamais ajouter de formulation suggérant une présence ou un
partenariat en 2026. Pour Neowalt, ne pas suggérer de présence physique.

## Traitement des retours

| Retour reçu | Statut de suivi | Action |
|---|---|---|
| Le destinataire confirme la bonne réception | `CONFIRMÉ` | Remercier ; ne pas relancer immédiatement |
| Le destinataire prévoit de partager | `EN ATTENTE` | Attendre l’URL sans annoncer de publication |
| Une URL publique est reçue et vérifiée | `URLS ARCHIVÉES` | Ajouter une ligne dans `../diffusion-tracking.csv` |
| Le destinataire décline | `ANNULÉ` pour cette vague | Remercier et clore le suivi pour cette vague |
| Aucun retour après une relance | `NON VÉRIFIABLE` | Ne pas effectuer de deuxième relance automatique |

## Archivage d’une publication réelle

Lorsqu’une URL est reçue :

1. ouvrir l’URL et vérifier qu’elle est publique et attribuable au destinataire ;
2. relever le canal et la date de publication sans inventer l’heure ;
3. ajouter une ligne dans `../diffusion-tracking.csv` ;
4. renseigner `published_url` dans `../partners.csv` ;
5. proposer séparément un relais AlpineChain/B-Only ;
6. ne marquer `reshared_by_bonly` qu’après preuve du relais effectif.

Le registre reste vide tant qu’aucune URL réelle n’a été reçue ou vérifiée.

## Respect des visiteurs

- aucune identité, adresse ou donnée de commande n’est copiée dans GitHub ;
- aucun suivi individuel n’est constitué dans ce dépôt ;
- aucune relance automatique de masse n’est préparée ;
- les réponses et désinscriptions restent traitées dans l’outil autorisé.
