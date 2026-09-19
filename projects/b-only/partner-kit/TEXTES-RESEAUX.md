# Textes pour les réseaux

**État :** `PRÊT À RELIRE` — aucune publication effectuée.

## A — Relais ultra simple

```text
On remet ça à Annecy 🧡

B-Only revient du 7 au 9 novembre 2026 pour trois jours de rencontres,
d’ateliers, de discussions et de Bitcoin vécu ensemble.

Viens voir le programme : https://b-only.org/
```

## B — Recommandation du relais

```text
On connaît B-Only parce que {{RELATION_BONLY}}, et on avait envie de t’en parler
avec nos propres mots.

Ce qu’on aime dans cet événement : {{RAISON_PERSONNELLE}}.

B-Only revient à Annecy du 7 au 9 novembre 2026. Si l’idée de passer trois jours
à apprendre, échanger et vivre Bitcoin avec d’autres te parle, on se retrouve
là-bas.

Le programme est ici : https://b-only.org/
```

## C — Modèle personnalisable

Variables autorisées :

```text
{{PARTENAIRE}}
{{RELATION_BONLY}}
{{RAISON_PERSONNELLE}}
{{CTA}}
{{TON}}
```

```text
Chez {{PARTENAIRE}}, on connaît B-Only parce que {{RELATION_BONLY}}.

On avait envie de t’en parler parce que {{RAISON_PERSONNELLE}}.

On se retrouve à Annecy du 7 au 9 novembre 2026 ?

{{CTA}}
```

Instruction de ton : `{{TON}}`. Ne conserver que des formulations compatibles
avec la relation réellement validée dans `partners.csv`.

## Adaptations par canal

Une même base peut être adaptée intelligemment ; il n’est pas nécessaire de
fabriquer cinq messages artificiellement différents.

### LinkedIn

```text
Il y a les événements qu’on relaie parce qu’il le faut. Et il y a ceux dont on
parle parce qu’on a vraiment envie d’y retrouver du monde.

B-Only revient à Annecy du 7 au 9 novembre 2026. Trois jours pour apprendre,
tester, débattre et surtout passer du temps avec des personnes qui font vivre
Bitcoin de façons très différentes.

On connaît B-Only parce que {{RELATION_BONLY}}, et on te recommande cette
édition parce que {{RAISON_PERSONNELLE}}.

Si tu viens, fais-nous signe. On se retrouvera là-bas 🧡

Le programme : https://b-only.org/

#Bitcoin #BOnly26 #Annecy
```

### X

Une idée, un objectif, une action attendue et 240 caractères maximum, lien
compris.

```text
On remet ça à Annecy 🧡 B-Only revient du 7 au 9 novembre 2026 : trois jours
pour apprendre, débattre, bricoler et vivre Bitcoin ensemble. On s’y retrouve ?
https://b-only.org/
```

### Facebook

```text
On remet ça à Annecy du 7 au 9 novembre 2026 🧡

B-Only, ce sont trois jours pour apprendre, tester, débattre, poser toutes les
questions qu’on garde parfois pour plus tard… et surtout retrouver des gens avec
qui Bitcoin devient concret et vivant.

On connaît l’événement parce que {{RELATION_BONLY}} et on avait envie de t’en
parler parce que {{RAISON_PERSONNELLE}}.

Si tu viens, dis-le-nous. On se retrouvera là-bas !

Le programme : https://b-only.org/
```

### Instagram

```text
ON REMET ÇA À ANNECY 🧡

📅 7–9 novembre 2026
📍 Annecy

Trois jours pour apprendre, tester, discuter, refaire le monde autour d’un verre
et vivre Bitcoin avec celles et ceux qui le font avancer.

Tu viens ? Le programme est sur https://b-only.org/

#Bitcoin #BOnly26 #Annecy
```

### Nostr

```text
Pas de grand discours : on aime B-Only parce que {{RAISON_PERSONNELLE}}.

On y retrouve des bitcoiners qu’on connaît, on en rencontre de nouveaux, on
apprend, on teste des choses et on prend le temps de discuter pour de vrai.

B-Only revient à Annecy du 7 au 9 novembre 2026. Si tu passes dans le coin,
viens nous retrouver.

Le programme : https://b-only.org/

#bitcoin #bonly26 #annecy
```

## Adaptation pour un relais historique

Employer une relation passée explicite, par exemple « on a partagé une
précédente édition ». La proximité reste chaleureuse, mais ne doit jamais
laisser entendre une présence en 2026.

## Adaptation pour un visiteur 2025

Remplacer la recommandation institutionnelle par un souvenir ou une envie de
retrouvailles. Ne jamais fabriquer de témoignage : la variable
`{{RAISON_PERSONNELLE}}` doit être complétée par le visiteur ou supprimée.
