# Prompt Codex — kit partenaire B-Only’26

**État :** `PRÊT À RELIRE`.

À partir d’une ligne validée de `partners.csv` :

1. relire `ORGANISATIONS.md`, `INTERVENANTS.md`, `PARTICIPANTS.md` et les Issues
   B-Only liées ;
2. signaler toute contradiction au lieu de l’arbitrer ;
3. produire le message d’approche, les textes sociaux, la newsletter et le
   brief visuel adaptés au segment ;
4. utiliser uniquement un logo ou un asset explicitement validé ;
5. marquer le kit `PRÊT À RELIRE`, jamais `VALIDÉ`, `ENVOYÉ` ou `PUBLIÉ` sans
   preuve et validation correspondantes ;
6. préparer une PR liée à l’Issue #168 ;
7. ne jamais envoyer, programmer ou publier directement.

Pour le segment privé `attendee-2025`, produire seulement un modèle agrégé. Ne
jamais importer dans GitHub les noms, courriels ou données Pretix.

## Format de sortie

```markdown
# Kit — {{PARTENAIRE}}

## Cadrage
- Segment :
- Relation vérifiée :
- Sources consultées :
- CTA : https://b-only.org/
- Logo :
- Statut : PRÊT À RELIRE

## Message d’envoi
...

## Réseaux utiles
### LinkedIn
...
### X
...
### Facebook
...
### Instagram
...
### Nostr
...

## Newsletter
...

## Brief visuel
...

## Points à valider
...
```

N’inclure que les canaux réellement utiles. Mesurer tout texte X avec son lien
et refuser une version supérieure à 240 caractères.
