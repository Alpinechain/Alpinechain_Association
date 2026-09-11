# Skill — publication-multicanale

## Objet

Préparer des contenus de communication multicanaux pour les activités strictement associatives d’AlpineChain, à partir d’informations validées et de la source de vérité du projet concerné.

Cette Skill est limitée aux branches associatives suivantes :

- AlpineChain institutionnel ;
- B-Only ;
- Meetup Bitcoin Annecy ;
- Souveraineté 3.0.

## Commande canonique

`Prépare la publication multicanale.`

Le langage naturel suffit lorsque l’intention est claire, par exemple :

- `Prépare les communications pour cette annonce.`
- `Fais les versions X, LinkedIn, Nostr, Instagram et Facebook.`
- `Prépare une campagne B-Only.`
- `Prépare la communication du prochain Meetup.`
- `Adapte cette annonce à tous les réseaux.`

## Routage par profil

Avant toute rédaction, identifier obligatoirement le profil associatif :

- `profiles/alpinechain.md`
- `profiles/b-only.md`
- `profiles/meetup-bitcoin.md`
- `profiles/souverainete-3-0.md`

Si le projet n’est pas identifiable avec certitude, ne pas mélanger les profils. Utiliser uniquement les informations explicitement fournies et signaler le profil non déterminé.

## Exclusions absolues

Ne jamais utiliser comme source, contexte, compte, CTA, ton ou ressource :

- Copinmalin professionnel ;
- B-Conseil ;
- B-Café ;
- B-Libre ;
- missions commerciales personnelles ;
- infrastructure professionnelle.

En cas de doute, exclure plutôt que mélanger.

## Sources de vérité

Ordre général :

1. décision ou information explicitement validée dans GitHub ;
2. fichier projet concerné dans `projects/` ;
3. `dashboard/NOW.md` pour le contexte courant ;
4. Issue de suivi correspondante ;
5. ressources Nextcloud, Pretix, Paheko, Dolibarr ou PeerTube selon le type d’information ;
6. informations fournies explicitement dans la demande en cours.

Pour B-Only, lorsqu’une information sensible porte sur un intervenant, un sponsor, un horaire, une billetterie ou une publication, appliquer les règles de `skills/b-only-source-of-truth/SKILL.md` avant rédaction.

## Statuts utilisables

Une information ne peut être utilisée comme fait public que si son statut permet sa publication.

- `VALIDÉ` / `CONFIRMÉ` → utilisable ;
- `PROVISOIRE` → seulement si le caractère provisoire est explicitement utile et assumé ;
- `À VALIDER` → ne pas présenter comme fait ;
- `EN ATTENTE` → ne pas annoncer ;
- `OBSOLÈTE` / `REMPLACÉ` → ignorer ;
- `CONTRADICTOIRE` → suspendre le point concerné et signaler l’incohérence ;
- `NON VÉRIFIABLE` → ne pas inventer.

## Modes

### Mode simple

Un seul canal demandé.

### Mode pack

Plusieurs canaux pour une même annonce.

### Mode campagne

Séquence de plusieurs publications dans le temps lorsque cela apporte une vraie valeur éditoriale.

Ne pas créer artificiellement une séquence si une publication unique suffit.

## Canaux supportés

Selon le profil et la demande :

- blog / article long ;
- LinkedIn ;
- Nostr ;
- X ;
- Instagram ;
- Facebook ;
- newsletter / email si explicitement demandé ;
- alt text pour le visuel.

Ne pas dupliquer littéralement le même texte sur tous les canaux. Adapter l’angle, la longueur, le rythme et le CTA.

## Règles par canal

### Blog

Structure recommandée : titre, accroche, contexte, développement, informations pratiques, CTA. Pour un article long, viser plus de 1 500 caractères. Lorsque la campagne prévoit un long-form Nostr, le texte Blog peut servir de version maîtresse et être publié à l'identique sur Nostr.

### LinkedIn

Accroche claire, contexte compréhensible, intérêt concret, information principale, CTA.

### Nostr

Ton communautaire ; contexte Bitcoin ou souveraineté lorsqu’il est pertinent ; pas de jargon inutile. Pour les campagnes B-Only en long-form, utiliser le même texte que l'article Blog lorsque ce format a été retenu, plutôt que créer artificiellement deux versions longues.

### X

Appliquer `docs/GUIDE_REDACTIONNEL_X.md`. Par défaut : une idée principale, formulation directe, CTA clair, limite interne de 240 caractères pour un post simple.

### Instagram

Accroche courte, paragraphes brefs, angle visuel, CTA, hashtags modérés et pertinents.

### Facebook

Contexte accessible, informations pratiques, CTA, ton moins formel que LinkedIn.

## Liens et attribution

Lorsque des liens de campagne existent, conserver les liens validés.

Si des UTM doivent être préparés, distinguer au minimum :

- `utm_source` ;
- `utm_medium` ;
- `utm_campaign` ;
- `utm_content`.

Ne jamais prétendre qu’un lien court, une redirection ou un UTM existe tant qu’il n’a pas été effectivement créé ou vérifié.

## Visuels

Statuts possibles : `VISUEL ABSENT`, `SOURCE DISPONIBLE`, `VISUEL À PRODUIRE`, `VISUEL PRODUIT`, `VISUEL VALIDÉ`.

La Skill peut proposer concept, texte sur image, prompt de création, formats recommandés et alt text. Elle ne transforme jamais `VISUEL PRODUIT` en `VISUEL VALIDÉ` sans validation humaine.

## Statuts de campagne

Utiliser :

- `BROUILLON` ;
- `PRÊT À RELIRE` ;
- `VALIDÉ` ;
- `PRÊT À PROGRAMMER` ;
- `PROGRAMMÉ` ;
- `PUBLIÉ` ;
- `URLS ARCHIVÉES` ;
- `MÉTRIQUES RELEVÉES`.

Ne jamais confondre rédigé/validé, validé/programmé, programmé/publié, publié/URLs archivées.

## Publication automatique interdite

Par défaut, la Skill prépare uniquement les contenus, calendriers, liens et recommandations. Elle ne publie, ne programme, n’envoie et ne modifie rien publiquement sans instruction explicite.

## Sortie standard — mode pack

```markdown
# Campagne multicanale — [Sujet]

## Cadrage
- Projet :
- Profil :
- Source validée :
- Public :
- Objectif :
- CTA :
- URL cible :
- Statut : PRÊT À RELIRE

## Angle éditorial
...

## Blog
...

## LinkedIn
...

## Nostr
...

## X
...

## Instagram
...

## Facebook
...

## Visuel
- État :
- Concept :
- Texte éventuel :
- Alt text :

## Liens / UTM
...

## Points à valider avant publication
...
```

N’inclure que les canaux réellement utiles ou explicitement demandés.

## Contrôle qualité final

Avant de livrer :

- projet correctement identifié ;
- bon profil chargé ;
- aucune source professionnelle utilisée ;
- noms, dates, horaires, lieux, montants et statuts vérifiés ;
- CTA correct ;
- liens cohérents ;
- aucun élément provisoire présenté comme confirmé ;
- ton adapté à chaque réseau ;
- X conforme au guide ;
- distinction claire entre préparé, validé, programmé et publié ;
- validation humaine encore requise.
