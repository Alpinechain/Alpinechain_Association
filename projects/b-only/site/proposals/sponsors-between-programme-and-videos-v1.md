# B-Only 2026 — proposition d’intégration des sponsors

Suivi : Issue [#45 — accès Framer et migration de b-only.org](https://github.com/Alpinechain/Alpinechain_Association/issues/45), avec dépendance métier vers [#3 — pipeline sponsors](https://github.com/Alpinechain/Alpinechain_Association/issues/3).

## Rôle

Cette proposition définit un bloc sponsors à placer dans la page d’accueil
`b-only.org`, immédiatement après le composant `Programme` et avant la section
`Vidéos`.

La maquette associée est
[`sponsors-between-programme-and-videos-v1.html`](sponsors-between-programme-and-videos-v1.html).
Elle n’est ni publiée ni intégrée automatiquement dans Framer.

## Intention

- remercier les trois soutiens confirmés sans transformer la page en espace commercial ;
- offrir la même importance visuelle à Paymium, Bitstack et au Cercle du Coin ;
- créer une respiration claire entre le programme 2026 et les vidéos des éditions précédentes ;
- reprendre exactement les codes de la section « Vidéos » du site : fond ivoire,
  libellé Pixelify Sans `20/44 px`, titre JetBrains Mono `34/44 px`, marges
  latérales `100/60/32 px` et espacement vertical de `31 px` ;
- conserver un affichage lisible à trois colonnes sur ordinateur et une colonne
  sur mobile.

## Contenu proposé

```text
// Nos Sponsors 2026
Ils rendent B-only possible

B-Only est organisé par AlpineChain avec le soutien de partenaires engagés
aux côtés de l’événement. Merci à Paymium, Bitstack et au Cercle du Coin.

[Paymium] [Bitstack] [Le Cercle du Coin]
```

Les logos sont cliquables vers les sites officiels et s’ouvrent dans un nouvel
onglet. Aucun argumentaire, prix, offre ou appel à l’achat n’est ajouté.
Le Cercle du Coin utilise sa variante officielle `logo-sombre`, avec un lettrage
noir/gris foncé adapté au fond clair des cartes.

## Intégration Framer proposée

1. Insérer une nouvelle `Section` entre `Programme` et `videos` et lui donner
   l’ancre `partenaires`.
2. Utiliser un conteneur centré de largeur maximale `1248 px`, avec une marge
   intérieure verticale comprise entre `80 px` et `128 px` selon le breakpoint.
3. Reprendre sans adaptation les styles de titre et de surtitre de la section
   « Vidéos » : `// Nos Sponsors 2026` en Pixelify Sans puis
   `Ils rendent B-only possible` en JetBrains Mono gras.
4. Ajouter trois cartes de même largeur, fond `#F5F5F5`, rayon `24 px`, sans
   ombre, filet décoratif ni animation supplémentaire.
5. Faire occuper aux logos environ 85 à 90 % de la largeur utile des cartes,
   avec une hauteur visuelle maximale de `140 px`, sans étirement ni recadrage.
6. Importer dans Framer les logos validés stockés dans Nextcloud. Les URLs
   officielles présentes dans la maquette servent uniquement à la prévisualisation
   et ne doivent pas être conservées comme dépendances distantes en production.
7. Renseigner un texte alternatif exact pour chaque logo et vérifier le contraste,
   la navigation clavier et le comportement mobile.
8. Facultatif : ajouter « Partenaires » dans la navigation principale uniquement
   si les quatre liens tiennent sans dégrader le header tablette.

## Validation humaine avant publication

- [ ] formulation validée par Cyrille ;
- [ ] versions exactes des trois logos confirmées depuis Nextcloud ;
- [ ] droits d’utilisation et liens de destination revérifiés ;
- [ ] aperçu desktop, tablette et mobile relu dans Framer ;
- [ ] aucune publication avant validation explicite.
