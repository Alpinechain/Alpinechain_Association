# Campagne replay — Abdelhamid Bakhta — V1

## État

**Prêt à programmer pour le 6 août 2026.** La validation humaine des textes,
du visuel et du calendrier a été enregistrée le 5 août 2026.

Le replay direct a été identifié et contrôlé comme public sur le PeerTube
AlpineChain. Les textes, le calendrier et les destinations UTM sont validés.
Les quatorze redirections courtes sont actives et ont été testées vers leur
destination exacte.

Aucune publication, programmation sociale ou modification PeerTube n'a été
effectuée.

- Campagne : `bonly25_replays`
- Contenu : `abdel_starks_bitcoin`
- Intervenant : Abdelhamid Bakhta, StarkWare
- Conférence : « Bitcoin et Starks » — B-Only'25
- Replay direct :
  https://video.alpinechain.xyz/videos/watch/86681bf6-a7df-4db1-8451-087ce12370ac
- Relais : B-Only'26, à Annecy, du 7 au 9 novembre 2026
- Suivi interne : https://github.com/Alpinechain/Alpinechain_Association/issues/24

## Objectif et public

- Objectif : faire découvrir le replay B-Only'25 et prolonger l'intérêt vers
  B-Only'26 sans réduire les STARKs à la seule programmabilité.
- Public : communauté Bitcoin, personnes intéressées par la scalabilité, la
  confidentialité, la souveraineté et la vérification cryptographique.
- Action attendue : regarder la conférence ; secondairement, consulter la
  billetterie B-Only'26.
- Validation : humaine avant toute programmation ou publication.

## Livrables

- `contenus-multicanaux-v1.md` : textes pour X, LinkedIn AlpineChain, LinkedIn
  Annecy Bitcoin Meetup, Nostr, Facebook et Instagram ;
- `campaign-links-v1.csv` : aliases actifs et destinations UTM vérifiées pour
  le replay et la billetterie ;
- `calendrier-diffusion-v1.csv` : créneaux validés le 6 août 2026 en
  `Europe/Paris` ;
- `vignette--abdelhamid-bakhta--bitcoin-starks--2026-08-05--valide.png` :
  visuel validé pour la campagne.

Le lien `b25-abdel-blog` est réservé dans la matrice de liens, mais aucun
article de blog ni créneau de publication n'est inclus dans ce lot.

## Contrôles réalisés

- titre, UUID, chaîne et caractère public du replay contrôlés via l'API publique
  PeerTube le 5 août 2026 ;
- date et lieu de B-Only'26 cohérents avec `projects/b-only/README.md` ;
- quatorze aliases Shlink contrôlés libres avant création, puis vérifiés en
  redirection HTTP 302 vers leur destination UTM exacte ;
- texte X converti en thread court, chaque publication visant au plus
  140 caractères hors rendu propre des URLs ;
- sources UTM distinguées par canal ;
- aucune donnée personnelle ni aucun secret ajouté.

## Contrôles finaux opérateur

1. sélectionner le compte exact indiqué dans le calendrier ;
2. joindre le visuel validé et renseigner son texte alternatif ;
3. vérifier la prévisualisation et les deux liens courts avant programmation ;
4. ne pas modifier ni réaffecter les aliases Shlink actifs ;
5. archiver chaque URL publique et les métriques dans l'Issue #24.
