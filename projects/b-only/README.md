# Projet B-Only

## Finalité

Piloter la conférence annuelle B-Only à Annecy : programme, intervenants, sponsors, billetterie, communication, production, technique, finances et capitalisation.

## Édition active

B-Only 2026, du 7 au 9 novembre 2026 au Novotel Annecy Centre.

## Tableau de pilotage

Le portefeuille opérationnel est décrit dans [`BOARD.md`](BOARD.md) et affiché dans la [vue GitHub Project B-Only 2026](https://github.com/users/Alpinechain/projects/1/views/2).

Les deux registres de préparation des vignettes sont :

- [`INTERVENANTS.md`](INTERVENANTS.md) pour les personnes, leurs sujets et les
  éléments attendus ;
- [`ORGANISATIONS.md`](ORGANISATIONS.md) pour les entreprises, partenaires,
  médias, associations et exposants.
- [`programme/`](programme/) pour la grille horaire de travail et sa page HTML
  statique, encore soumise à validation humaine avant publication.

Ils ne contiennent que des statuts et métadonnées adaptés à un dépôt public.
Les conversations complètes, coordonnées, portraits, logos et documents sources
restent dans la messagerie ou dans Nextcloud selon leur nature.

## Chantiers et Issues pilotes

| Chantier | Issue pilote |
|---|---|
| Billetterie et parcours participant | [#2](https://github.com/Alpinechain/Alpinechain_Association/issues/2) |
| Sponsors et partenaires | [#3](https://github.com/Alpinechain/Alpinechain_Association/issues/3) |
| Programme et intervenants | [#11](https://github.com/Alpinechain/Alpinechain_Association/issues/11) |
| Communication et contenus | [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24) |
| Site public B-Only | [#33](https://github.com/Alpinechain/Alpinechain_Association/issues/33) |
| Production audiovisuelle et PeerTube | [#12](https://github.com/Alpinechain/Alpinechain_Association/issues/12) |
| Accueil, stands, bar et logistique | [#25](https://github.com/Alpinechain/Alpinechain_Association/issues/25) |
| Budget, contrats et trésorerie | [#26](https://github.com/Alpinechain/Alpinechain_Association/issues/26) |
| Risques et plan de continuité | [#27](https://github.com/Alpinechain/Alpinechain_Association/issues/27) |

Les dossiers sponsor spécifiques restent suivis dans [#4](https://github.com/Alpinechain/Alpinechain_Association/issues/4) et [#5](https://github.com/Alpinechain/Alpinechain_Association/issues/5).

## Sources de vérité

| Sujet | Outil |
|---|---|
| Actions, décisions et risques | GitHub Issues |
| Vue portefeuille | GitHub Project et `BOARD.md` |
| Documents, contrats, visuels et médias | Nextcloud |
| Billetterie et participants | Pretix |
| Site public et contenus web | Framer |
| Domaine et DNS de `b-only.org` | OVH |
| Sponsors, contacts, devis et factures | Dolibarr |
| Comptabilité associative | Paheko |
| Vidéos publiées | PeerTube |
| Bar | be-BOP Bar |

## Site public B-Only

- URL publique : https://b-only.org/
- Outil de création et de maintenance : **Framer**.
- Responsable opérationnel des contenus et mises à jour : **Wil**, membre du bureau AlpineChain.
- Domaine `b-only.org` : enregistré et administré chez **OVH** par **Copinmalin**.
- Issue de suivi : [#33](https://github.com/Alpinechain/Alpinechain_Association/issues/33).

### Règles de gouvernance

- Wil pilote les mises à jour éditoriales et fonctionnelles dans Framer.
- Copinmalin administre le domaine, le renouvellement et les paramètres DNS chez OVH.
- Les contenus publics suivent la validation humaine prévue par l’Issue communication [#24](https://github.com/Alpinechain/Alpinechain_Association/issues/24).
- Les accès Framer et OVH restent nominatifs, protégés par authentification forte et ne sont jamais stockés dans GitHub.
- Un administrateur de secours doit être documenté pour Framer et OVH afin de réduire la dépendance à une seule personne.

## Emplacement Nextcloud

Le dossier réel est :

```text
Action - Initiatives/B-Only/
```

Il doit être structuré par édition. Pour 2026, l’organisation minimale recommandée est :

```text
Action - Initiatives/B-Only/
└── 2026/
    ├── 01_Programme-Intervenants/
    │   ├── Photos Intervenants/
    │   └── Logos Participants/
    ├── 02_Sponsors-Contrats/
    │   └── Supports-partenariat/
    ├── 03_Communication/
    │   └── Vignettes/
    │       ├── Intervenants/
    │       └── Organisations/
    ├── 04_Production-Logistique/
    │   ├── Restauration/
    │   └── Notes-de-travail/
    ├── 05_Finances/
    ├── 06_Medias/
    └── Archives/
        ├── Programme-Intervenants/
        ├── Versions-anterieures/
        └── Medias-2023-2025/
```

Cette structure documentaire complète les huit chantiers GitHub sans les dupliquer dossier par dossier.

Le classement authentifié a été revérifié le 30 juillet 2026 : Nextcloud
contient 107 dossiers et 395 fichiers sous l'édition 2026. Les portraits sont
dans `01_Programme-Intervenants/Photos Intervenants/`, les logos dans
`01_Programme-Intervenants/Logos Participants/`, et seules les vignettes
actives restent dans `03_Communication/Vignettes/Intervenants/` ou
`Organisations/`. Les versions remplacées sont conservées dans
`Archives/Versions-anterieures/` en reprenant leur chemin de travail.

Les visuels historiques restent utilisables par défaut lorsqu'aucun remplaçant
n'a été reçu, sous réserve de vérifier les droits avant publication. Un nouveau
fichier ne doit jamais écraser un visuel existant : il reçoit un nom versionné ou
daté jusqu'à validation.

Lorsqu'une version en remplace une autre, une seule version reste active dans le
dossier de travail. La version remplacée est déplacée sans écrasement dans
`Archives/Versions-anterieures/`, en conservant le chemin relatif de son dossier
d'origine. Le suffixe `.old` peut la signaler temporairement, mais tout fichier
déjà suffixé `.old` est réputé archivé et ne doit plus servir de référence
active. Les variantes utiles, formats distincts, sources et pièces signées ne
sont archivés qu'après identification explicite d'un successeur. Pour Pierre
Noizat, le portrait choisi le 12 août 2026 devient la source active après
normalisation et contrôle des crédits/droits ; les deux autres portraits sont à
archiver sans écrasement une fois ce classement vérifié.

Les exports nominatifs de participants restent dans Pretix ou dans un espace Nextcloud privé strictement limité. Ils ne doivent jamais être inclus dans un partage public global.

## Échéances connues

- 21 juillet 2026 à 21:21 : billetterie ouverte et contrôlée ;
- 7 au 9 novembre 2026 : conférence ;
- les autres échéances sont fixées dans les Issues pilotes dès validation.

## Espace ChatGPT spécialisé

https://chatgpt.com/g/g-p-6846d971e4e48191a77913f037a444ed-b-only-conference/project

Toute décision ou action durable née dans cet espace doit être consolidée dans GitHub.
