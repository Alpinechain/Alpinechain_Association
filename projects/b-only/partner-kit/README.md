# B-Only’26 — Kit pour inviter votre communauté

Quelques visuels et textes prêts à utiliser pour parler de B-Only à votre
communauté.

**État :** phase 2 — contenus génériques `PRÊTS À RELIRE`. Ils ne deviennent
`VALIDÉS` qu’après validation humaine.

## Cadrage

- Projet : B-Only 2026.
- Objectif : permettre à un relais d’inviter sa communauté en moins de deux
  minutes, avec un contenu directement copiable et personnalisable.
- CTA principal : <https://b-only.org/>.
- Validation : Cyrille avant tout envoi, programmation ou publication.
- Suivi : [Issue #168](https://github.com/Alpinechain/Alpinechain_Association/issues/168).

Le kit s’adresse séparément aux partenaires 2026, aux partenaires et relais
historiques, aux intervenants, artistes, marchands et communautés amies, ainsi
qu’aux visiteurs de l’édition 2025.

Un désistement pour 2026 n’interdit pas de proposer un relais historique. Le
message correspondant ne doit toutefois jamais suggérer une présence, un
partenariat ou un engagement en 2026. Un ancien nom remplacé sert uniquement
d’alias de rapprochement : le nom public actuel est utilisé pour tout contenu.

## Mode d’emploi en moins de deux minutes

1. Identifier le segment du destinataire dans `partners.csv`, ou le segment
   agrégé `attendee-2025` pour les anciens visiteurs.
2. Choisir le message d’approche dans `MESSAGE-ENVOI.md`.
3. Choisir une base sociale dans `TEXTES-RESEAUX.md` ou une version dans
   `NEWSLETTER.md`, puis personnaliser uniquement à partir de faits validés.
4. Joindre un visuel validé référencé dans `assets/README.md`.
5. Après validation humaine, envoyer manuellement le kit. Si le destinataire
   partage une publication, enregistrer uniquement son URL publique dans
   `diffusion-tracking.csv`.

## Données et confidentialité

`partners.csv` recense uniquement des organisations, noms publics et statuts
opérationnels nécessaires. Les noms, courriels et coordonnées des visiteurs
2025 restent dans Pretix ou dans l’outil de contact autorisé et ne sont jamais
copiés dans GitHub. Leur message est préparé comme un segment agrégé.

Les relais déjà assurés — Paymium, Cercle du Coin, Bitstack, Bitcoin.fr et
Cryptoast — restent référencés mais sont exclus de la première vague de
prospection du kit.

## Sources de vérité

- organisations : `../ORGANISATIONS.md` ;
- intervenants : `../INTERVENANTS.md` ;
- participants, assets et comptes publics : `../PARTICIPANTS.md` ;
- programme : `../programme/` et Issue #11 ;
- communication et preuves publiques : Issue #24 ;
- règles graphiques et vignettes : Issue #53 ;
- visuels lourds et logos sources : Nextcloud AlpineChain.

Toute contradiction est signalée au lieu d’être arbitrée automatiquement.

## Nextcloud

Racine documentée :

```text
Action - Initiatives/B-Only/2026/03_Communication/
```

Dossier créé et indexé dans le Groupfolder Association le 14 septembre 2026 :

```text
Action - Initiatives/B-Only/2026/03_Communication/Partner-Kit/
├── Generiques/
├── Co-brandes/
├── Videos/
└── Archives/
    └── Versions-anterieures/
```

Les fichiers lourds restent dans Nextcloud. GitHub conserve les textes, les
consignes, les noms de fichiers, les métadonnées, les statuts et les URL
publiques.

## Règles de personnalisation

- conserver les dates du 7 au 9 novembre 2026 et le CTA principal ;
- laisser le relais propriétaire de son ton ;
- privilégier le tutoiement, les formulations naturelles et l’esprit de
  retrouvailles entre bitcoiners ;
- éviter le ton institutionnel, commercial ou excessivement promotionnel ;
- ne jamais inventer une relation, un témoignage ou une présence en 2026 ;
- ne pas présenter un contenu préparé comme envoyé ou publié ;
- ne pas utiliser de logo sans source validée ;
- pour X, respecter la limite interne de 240 caractères, lien compris.

## Signalement d’une publication

Après réception d’une URL publique, ajouter une ligne dans
`diffusion-tracking.csv`. Le relais éventuel par AlpineChain ou B-Only reste une
action distincte soumise à validation humaine.
