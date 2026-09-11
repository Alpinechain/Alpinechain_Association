# Campagne Christine Jeanneaux — suivi V1

## Position dans la séquence B-Only

La campagne Christine Jeanneaux est diffusée **immédiatement après la campagne Pierre Noizat** :

- Pierre Noizat : 10–12 septembre 2026 ;
- coupure / modération : 13 septembre ;
- Christine Jeanneaux : 14–16 septembre 2026.

Cette fenêtre est cohérente avec le planning maître V6 qui réserve Christine en vague A de la semaine du 14 septembre.

## Sujet

**Christine Jeanneaux** — « Et si on comptait les moutons ? — Anatomie d’un mimétisme autour de Bitcoin »

Contenus de référence : `contenus-multicanaux-v4.md`.

## Planning de diffusion

| Date | Heure | Canal | Compte |
|---|---:|---|---|
| 14 septembre | 08:00 | Blog | AlpineChain |
| 14 septembre | 12:15 | Nostr | AlpineChain — publication manuelle |
| 14 septembre | 18:15 | LinkedIn | AlpineChain |
| 15 septembre | 08:15 | LinkedIn | Annecy Bitcoin Meetup |
| 15 septembre | 18:15 | X | AlpineChain |
| 16 septembre | 18:30 | Facebook | B-Only |
| 16 septembre | 20:00 | Instagram | B-Only |

Calendrier machine : `calendrier-diffusion-v1.csv`.

## Gate avant programmation

- [x] sept vouchers Pretix et sept liens courts `b26-cj-*` contrôlés le 11 septembre 2026 ;
- vérifier que la vignette validée est bien la version utilisée sur chaque canal ;
- vérifier les aperçus et comptes avant programmation ;
- Nostr reste une publication manuelle ;
- ne pas démarrer Christine avant la fin de la vague Pierre ;
- après diffusion, archiver les URL publiques et métriques selon le processus de l’Issue #24.

## Statut

**PRÊT À PROGRAMMER — vouchers Pretix et liens courts actifs et vérifiés le 11 septembre 2026.**

Les sept vouchers Pretix sont uniques, sans remise (`price_mode=none`), limités
à 1 000 usages, inutilisés et associés au tag
`tracking:bonly26_speakers`. Les sept alias Shlink répondent en HTTP 302 vers
les destinations Pretix/UTM exactes de `campaign-links-v1.csv`, puis les pages
Pretix répondent en HTTP 200. Aucune création supplémentaire n'a été
nécessaire.
