# Flux opérationnels AlpineChain

Version : V1.0  
Dernière mise à jour : 2026-07-11

## Objet

Ce document décrit comment les informations circulent entre le Control Center et les outils métiers. Il ne crée pas de nouvelle base de données centrale : chaque outil conserve son rôle et sa source de vérité.

## Principe

```text
GitHub orchestre
Les outils métiers exécutent et conservent leurs données
Nextcloud conserve les documents
Les canaux publics diffusent
L’humain valide les décisions et publications
```

Aucun secret, billet nominatif, donnée bancaire, facture complète ou coordonnée personnelle ne doit être recopié dans une Issue.

## Cartographie technique

| Outil | URL / emplacement | Données principales | Sensibilité | Source de vérité |
|---|---|---|---|---|
| GitHub Association | `Alpinechain/Alpinechain_Association` | Actions, décisions, risques, procédures | Interne / public selon fichier | Oui pour le pilotage |
| GitHub Project | `https://github.com/users/Alpinechain/projects/1` | Statuts, priorités, échéances | Interne | Oui pour le portefeuille |
| GitHub Serveur | `Alpinechain/Serveur` | Configuration, scripts, runbooks | Sensible, dépôt privé | Oui pour l’infrastructure |
| Nextcloud | `https://cloud.alpinechain.xyz` | Contrats, visuels, photos, supports | Variable, parfois personnel | Oui pour les fichiers |
| Pretix | `https://ticket.alpinechain.xyz` | Événements, commandes, billets, participants | Personnel et financier | Oui pour la billetterie |
| Paheko | `https://compta.alpinechain.xyz` | Comptabilité, adhésions, pièces | Personnel et financier | Oui pour la comptabilité |
| Dolibarr | `https://gestion.alpinechain.xyz` | Sponsors, contacts, devis, factures | Personnel et commercial | Oui pour CRM / facturation |
| PeerTube | `https://video.alpinechain.xyz` | Vidéos, descriptions, playlists | Public / médias sources | Oui pour les vidéos publiées |
| be-BOP | `https://bebop.alpinechain.xyz` | Site, boutique ou caisse selon usage | Opérationnel | Oui pour ses transactions |
| be-BOP Bar | `https://bar.b-only.org` | Produits et commandes du bar | Financier / opérationnel | Oui pour le bar |
| Infomaniak | Compte AlpineChain | Domaines, DNS, site, messagerie | Critique | Oui pour domaine et courriel |
| Meetup et réseaux | Comptes AlpineChain | Publications et découverte | Public | Oui uniquement pour la diffusion |

## Flux 1 — Création d’un événement

```text
Décision humaine
  → Issue événement GitHub
  → validation de la porte J-21
  → création / mise à jour Pretix
  → page site et Meetup
  → contenus préparés
  → validation humaine
  → publication multicanale
  → métriques et capitalisation J+3 dans l’Issue
```

### Règles

- L’Issue contient le brief, les responsables, les liens et les risques.
- Pretix conserve les commandes et participants.
- Nextcloud conserve les visuels, supports et photos.
- Les URLs publiées sont archivées dans l’Issue.
- Aucun contenu n’est publié automatiquement.

## Flux 2 — Billetterie et participants

```text
Page publique
  → Pretix
  → commande / paiement / billet
  → accueil le jour J
  → agrégats non nominatifs dans l’Issue
  → pièces comptables dans Paheko
```

### Données pouvant remonter dans GitHub

- nombre d’inscriptions ;
- nombre de présents ;
- taux de présence ;
- recettes agrégées ;
- incidents et décisions.

### Données interdites dans GitHub

- noms et courriels des participants ;
- identifiants de commande ;
- données de paiement ;
- exports CSV nominatifs.

## Flux 3 — Sponsor ou partenaire

```text
Prospect / contact
  → Dolibarr
  → Issue GitHub pour la prochaine action
  → proposition, contrat ou courrier dans Nextcloud
  → validation humaine
  → devis / facture Dolibarr
  → écriture et pièce Paheko
  → contreparties dans l’Issue communication
```

GitHub ne conserve que le statut, la prochaine action, le responsable, l’échéance et les liens vers les emplacements de référence.

## Flux 4 — Dépense fournisseur

```text
Besoin identifié dans une Issue
  → devis dans Nextcloud
  → décision et validation humaine
  → commande ou engagement
  → facture dans Dolibarr / Nextcloud
  → paiement et écriture Paheko
  → statut agrégé dans l’Issue
```

Aucun paiement ne doit être déclenché automatiquement par ChatGPT ou GitHub Actions.

## Flux 5 — Production de contenu et vidéo

```text
Issue de contenu
  → sources et médias Nextcloud
  → rédaction / montage
  → validation humaine et droits vérifiés
  → publication site, PeerTube ou réseau
  → URL publique dans l’Issue
  → métriques et réutilisations
```

Les fichiers maîtres restent dans Nextcloud. PeerTube conserve la version vidéo publiée et ses métadonnées publiques.

## Flux 6 — Bar B-Only

```text
Catalogue et stock be-BOP Bar
  → commandes et paiements pendant l’événement
  → clôture de caisse
  → export ou synthèse
  → contrôle humain
  → comptabilisation Paheko
  → résultat agrégé dans l’Issue logistique / finances
```

Les transactions détaillées restent dans be-BOP Bar et les outils comptables.

## Flux 7 — Infrastructure et incident

```text
Configuration GitHub Serveur
  → application contrôlée sur le serveur
  → contrôle externe des URLs
  → échec détecté
  → Issue incident automatique dans Alpinechain_Association
  → diagnostic humain avec runbook Serveur
  → correction validée
  → contrôle de rétablissement
  → fermeture automatique ou humaine de l’incident
```

Les changements de production passent par le dépôt privé `Alpinechain/Serveur`. Le dépôt public ne contient ni secrets ni configuration sensible.

## Flux 8 — Sauvegarde et restauration

```text
Bases et volumes Podman
  → dumps cohérents
  → sauvegarde Restic chiffrée
  → dépôt hors serveur
  → rétention automatique
  → contrôle d’intégrité
  → restauration isolée planifiée
  → rapport daté dans GitHub
```

Une sauvegarde n’est déclarée opérationnelle qu’après un test de restauration documenté.

## Contrats d’interface minimaux

| Producteur | Consommateur | Donnée échangée | Mode recommandé | Validation |
|---|---|---|---|---|
| GitHub | Pretix | Paramètres publics d’événement | Saisie contrôlée ou API future | Humaine avant écriture |
| Pretix | GitHub | Agrégats d’inscription | Rapport manuel ou lecture API | Contrôle humain |
| Dolibarr | Paheko | Pièces et synthèses comptables | Export / procédure documentée | Trésorier |
| Nextcloud | Site / réseaux | Médias approuvés | Publication manuelle | Humaine |
| PeerTube | Réseaux | URL vidéo publique | Publication préparée | Humaine |
| Monitoring | GitHub | Disponibilité des URLs | GitHub Actions | Automatique |
| Serveur | Dépôt de sauvegarde | Données chiffrées | Restic | Automatique, contrôle humain |

## Intégrations actives au 24 juillet 2026

- lecture filtrée de Pretix ;
- lecture contrôlée de Dolibarr ;
- lecture et écritures comptables bornées dans Paheko ;
- lecture et dépôt sans écrasement dans Nextcloud ;
- lecture des métadonnées publiques PeerTube ;
- recherche et lecture IMAP séparées pour `contact@alpinechain.xyz` et
  `cyrille@alpinechain.xyz`, sans modification des messages ; relève
  incrémentale des métadonnées toutes les quatre heures et lecture détaillée à
  la demande ;
- sauvegarde Restic quotidienne, contrôle hebdomadaire et rapport local.

Le MCP reste privé sur le serveur et est utilisé par Codex via tunnel SSH. Une exposition directe à GPT n’est pas nécessaire dans l’architecture retenue.

## Prochaines intégrations possibles

- création de brouillons de communication depuis les données validées ;
- remontée du dernier succès de sauvegarde vers le Control Center GitHub.

Toute intégration future doit respecter `references/automation-policy.md` et disposer d’une procédure de révocation.
