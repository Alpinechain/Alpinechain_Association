# Référentiel des outils AlpineChain

Version : V1.1
Dernière mise à jour : 2026-07-24

## Rôle

Ce document indique la fonction, la source de vérité, la criticité et le mode de contrôle de chaque outil. Il ne contient aucun mot de passe, token, clé API ou donnée personnelle sensible.

## Matrice opérationnelle

| Outil | Fonction principale | Source de vérité pour | Criticité | Contrôle / emplacement |
|---|---|---|---|---|
| ChatGPT | Analyse, coordination, rédaction et revue | Travail préparatoire, jamais décision finale isolée | Moyenne | Projets AlpineChain ; validation Cyrille |
| GitHub `Alpinechain_Association` | Pilotage et mémoire opérationnelle | Issues, décisions, procédures, priorités | Haute | Dépôt public Alpinechain |
| GitHub `Serveur` | Infrastructure as code et runbooks | Configuration, exploitation et reprise serveur | Critique | Dépôt privé Alpinechain |
| GitHub Project | Vue de portefeuille | Statuts, responsables, échéances et priorités | Haute | `https://github.com/users/Alpinechain/projects/1` |
| Vue B-Only 2026 | Portefeuille de la conférence | Chantiers B-Only filtrés | Haute | `https://github.com/users/Alpinechain/projects/1/views/2` |
| Nextcloud | Fichiers et collaboration | Contrats, visuels, photos et supports | Critique | `https://cloud.alpinechain.xyz` |
| Pretix | Billetterie | Événements, commandes, billets et participants | Critique | `https://ticket.alpinechain.xyz` |
| Paheko | Comptabilité associative | Écritures, références des pièces Nextcloud et suivi comptable | Critique | `https://compta.alpinechain.xyz` |
| Dolibarr | CRM / ERP | Contacts entreprises, sponsors, devis et factures | Critique | `https://gestion.alpinechain.xyz` |
| PeerTube | Publication vidéo | Vidéos publiques et playlists | Haute | `https://video.alpinechain.xyz` |
| be-BOP | Site, boutique ou caisse selon usage | Données opérationnelles de la plateforme | Haute | `https://bebop.alpinechain.xyz` |
| be-BOP Bar | Commandes du bar B-Only | Produits et commandes bar | Haute pendant B-Only | `https://bar.b-only.org` |
| Infomaniak | Domaine, DNS, site et messagerie | Domaine, DNS et courriels | Critique | Compte AlpineChain |
| Meetup.com | Découverte locale | Présentation publique et inscriptions selon événement | Moyenne | Compte AlpineChain |
| LinkedIn | Réseau professionnel | Diffusion uniquement | Moyenne | Page AlpineChain |
| X | Communauté Bitcoin et annonces courtes | Diffusion uniquement | Moyenne | Compte AlpineChain |
| Facebook | Relais local | Diffusion uniquement | Moyenne | Meta Business Suite |
| Instagram | Visuels, rappels et stories | Diffusion uniquement | Moyenne | Meta Business Suite |
| Nostr | Diffusion souveraine | Diffusion uniquement | Moyenne | Clés et relais sous contrôle AlpineChain |

## Contrôles automatiques actifs

| Contrôle | Fréquence | Résultat |
|---|---|---|
| Disponibilité des services publics | Horaire | Issue incident GitHub en cas d’échec |
| Revue d’exploitation | Hebdomadaire | Issue de revue dans le Control Center |
| Synchronisation des Issues | À chaque événement GitHub + hebdomadaire | Mise à jour du Project |
| Mise à jour serveur compatible | Mensuelle | Journal dans le dépôt serveur / serveur |
| Sauvegarde chiffrée | Quotidienne après déploiement | Snapshot Restic et journal local |
| Vérification de sauvegarde | Hebdomadaire après déploiement | `restic check` et journal local |
| Relève des boîtes professionnelles | Toutes les 4 heures | Curseurs IMAP et métadonnées des nouveaux messages dans un journal local protégé ; aucune action automatique |

## Responsabilités minimales

Chaque outil critique doit avoir :

- un propriétaire fonctionnel ;
- un administrateur technique ;
- au moins un accès de secours révocable ;
- un emplacement de sauvegarde ;
- une procédure de restauration ou de reprise ;
- une date de dernière revue des accès.

Cyrille reste le validateur opérationnel actuel. Les propriétaires et administrateurs nominatifs supplémentaires doivent être documentés sans publier leurs secrets.

## Règles

1. GitHub suit les actions et décisions ; Nextcloud conserve les fichiers lourds.
2. Les outils métiers restent la source de vérité de leurs données propres.
3. Les réseaux sociaux ne servent jamais d’archive principale.
4. Les secrets sont stockés dans un gestionnaire de mots de passe partagé, jamais dans ce dépôt.
5. Toute intégration automatisée dispose d’un responsable humain et d’une procédure de révocation.
6. Les flux entre outils sont documentés dans `references/data-flows.md`.
7. Les niveaux d’automatisation sont définis dans `references/automation-policy.md`.
