# Campagne replay — Alexandre Stachtchenko — V1

## État

**Prêt à programmer — validé le 8 août 2026.** La fenêtre de diffusion est
fixée au 10 août 2026 selon les horaires du calendrier.

Le replay direct a été identifié et contrôlé comme public sur le PeerTube
AlpineChain. Les textes, le calendrier et les destinations UTM sont finalisés.
Les quatorze redirections courtes ont été créées et vérifiées en HTTP 302 vers
leurs destinations exactes le 8 août 2026.

Aucune publication sociale automatique ni modification PeerTube n'a été
effectuée. La programmation reste manuelle depuis les comptes concernés.

- Campagne : `bonly25_replays`
- Contenu : `alexandre_monnaie_climat`
- Intervenant : Alexandre Stachtchenko
- Conférence : « Monnaie, Climat même combat » — B-Only'25
- Replay direct :
  https://video.alpinechain.xyz/videos/watch/235779ab-290d-429a-81f2-64ca0b0dac53
- Relais : B-Only'26, à Annecy, du 7 au 9 novembre 2026
- Suivi interne : https://github.com/Alpinechain/Alpinechain_Association/issues/24

## Angle éditorial

La conférence ne traite pas principalement du minage. Alexandre Stachtchenko y
défend une thèse économique : le système monétaire influence la consommation,
l'épargne, la dette, le coût du capital et les signaux-prix qui orientent
l'utilisation des ressources.

Les publications attribuent explicitement cette analyse à l'intervenant. Elles
ne présentent pas ses liens causaux comme une position institutionnelle
d'AlpineChain ni comme un consensus scientifique établi.

- Objectif : inviter à regarder une conférence qui relie politique monétaire,
  sobriété et écologie sous un angle rarement discuté.
- Public : communauté Bitcoin, personnes intéressées par l'économie, le climat,
  les signaux-prix et les politiques publiques.
- Action attendue : regarder la conférence ; secondairement, consulter la
  billetterie B-Only'26.
- Validation : confirmée le 8 août 2026 ; programmation sociale manuelle.

## Livrables

- `contenus-multicanaux-v1.md` : textes pour X, LinkedIn AlpineChain, LinkedIn
  Annecy Bitcoin Meetup, Nostr, Facebook et Instagram ;
- `campaign-links-v1.csv` : aliases actifs et destinations UTM vérifiées pour
  le replay et la billetterie ;
- `calendrier-diffusion-v1.csv` : créneaux prêts à programmer le 10 août 2026 en
  `Europe/Paris` ;
- `vignette--alexandre-stachtchenko--monnaie-climat--2026-08-08--valide.png` :
  vignette validée.

Le lien `b25-alex-blog` est réservé dans la matrice de liens, mais aucun article
de blog ni créneau de publication n'est inclus dans ce lot.

## Direction de la vignette

- photo source d'Alexandre utilisée comme cible d'édition ;
- identité, visage, posture, tenue et micro préservés ;
- système graphique inspiré de la vignette B-Only'25 « Bitcoin + STARKS » ;
- palette bleu nuit, blanc cassé et orange Bitcoin ;
- texte principal : « MONNAIE, CLIMAT — MÊME COMBAT ? » ;
- sous-titre : « Inflation • Sobriété • Signaux-prix » ;
- bas de vignette : « ALEXANDRE • BITSTACK — REPLAY B-ONLY'25 ».

La vignette a été produite avec l'outil intégré de génération d'images et
validée pour cette campagne le 8 août 2026.

## Contrôles réalisés

- transcription VTT analysée jusqu'à la conclusion de la conférence ;
- titre, UUID, chaîne, durée et caractère public du replay contrôlés via l'API
  publique PeerTube le 8 août 2026 ;
- date et lieu de B-Only'26 cohérents avec `projects/b-only/README.md` ;
- texte X converti en thread court visant au plus 140 caractères par
  publication avec les URLs finales ;
- sources UTM distinguées par canal ;
- quatorze aliases Shlink créés, puis contrôlés en HTTP 302 vers leurs
  destinations UTM exactes le 8 août 2026 ;
- dix services publics AlpineChain contrôlés en HTTP 200 après création ;
- aucune donnée personnelle ni aucun secret ajouté.

## Consignes de programmation

1. respecter les comptes et horaires de `calendrier-diffusion-v1.csv` ;
2. sélectionner les mentions exactes décrites dans
   `contenus-multicanaux-v1.md` ;
3. joindre la vignette validée avec le texte alternatif fourni ;
4. archiver chaque URL publique et les métriques dans l'Issue #24 après
   diffusion.
