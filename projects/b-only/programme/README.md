# Programme B-Only 2026

Issue pilote : [#11 — Programme et intervenants](https://github.com/Alpinechain/Alpinechain_Association/issues/11)

## Rôle

Ce dossier contient la source structurée du programme et une page HTML statique
capable de l'afficher sans base de données ni dépendance externe.

- `programme.json` est la source unique des créneaux.
- `index.html`, `styles.css` et `app.js` produisent l'affichage.
- `public/` produit la vue publique progressive destinée à être intégrée dans
  le site Framer. Elle remplace toute entrée non publique par
  `À découvrir bientôt` sans afficher son titre, ses intervenants ou son format.
- `validate.mjs` contrôle la structure, les horaires et les chevauchements.

Le contenu est une base de travail tant que `publication.state` vaut `draft`.
Il ne doit pas être présenté comme le programme public définitif sans validation
humaine.

Les portraits, logos, biographies et documents sources restent dans Nextcloud.
Cette page ne contient que les informations nécessaires au programme.

## Validation du programme complet — 12 octobre 2026

Cyrille a déclaré la grille complète : 30 créneaux actifs publics, plus une
entrée annulée conservée pour audit. Le créneau du lundi 11 h–11 h 50 est une
« Présentation de clôture » sans invité nommé. Mill3sim3 / Bitcointrails est inclus dimanche 11 h 30–12 h en salle principale.
Cette validation autorise la
transition vers `publication.state: published` dans la PR de consolidation.
Les dernières communications restent à planifier dans #24 ; les besoins
opérationnels restent suivis séparément dans #12 et #25.

## Mise à jour

1. Modifier uniquement `programme.json`.
2. Conserver un identifiant unique et stable pour chaque entrée.
3. Utiliser les statuts suivants :
   - `free` : créneau disponible ;
   - `option` : proposition en attente ;
   - `reserved` : créneau attribué mais incomplet ;
   - `confirmed` : contenu publiable ;
   - `fixed` : ouverture, pause, repas ou activité collective ;
   - `cancelled` : entrée conservée pour audit mais masquée.
4. Mettre `visibility` à `public` uniquement après validation humaine.
5. Mettre à jour `publication.updatedAt`.
6. Exécuter :

```bash
node projects/b-only/programme/validate.mjs
```

## Prévisualisation locale

Depuis la racine du dépôt :

```bash
python3 -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000/projects/b-only/programme/
```

La page recharge `programme.json` toutes les 60 secondes. En mode `draft`, elle
affiche les créneaux internes, réservés et libres avec leur statut. En mode
`published`, elle masque par défaut les éléments non publics.

## Publication

Le workflow `.github/workflows/deploy-b-only-programme.yml` valide et publie
uniquement ce dossier sur GitHub Pages après une modification fusionnée dans
`main`.

URL publique :

```text
https://alpinechain.github.io/Alpinechain_Association/
```

Vue publique progressive à intégrer dans Framer :

```text
https://alpinechain.github.io/Alpinechain_Association/public/
```

La page de suivi à la racine reste inchangée. La vue `public/` utilise la même
source structurée, mais ne révèle une carte que si son statut est `confirmed`
ou `fixed` et si sa visibilité vaut `public`. Une mise à jour fusionnée dans
`main` est donc répercutée dans les deux vues sans nouvelle manipulation dans
Framer.

Le rattachement ultérieur à `programme.b-only.org` ou l'ajout d'un lien dans le
site Framer restent des actions séparées. La page demeure identifiée comme
provisoire tant que `publication.state` vaut `draft`.

## Mesure d'audience

`matomo.js` mesure uniquement cette page GitHub Pages publique avec le Site ID
Matomo `7`. Le traceur désactive les cookies, respecte `Do Not Track` et envoie
une URL canonique sans paramètres de requête ni fragment. Aucune interface
privée ou donnée de billetterie n'est présente dans ce déploiement.

## Pastilles des créneaux publics

La vue `public/` associe les identifiants stables à leurs visuels dans
`public/visuals.mjs`. Les vignettes des présentations viennent des images déjà
publiques des articles AlpineChain ; les petites tailles WordPress vérifiées
sont utilisées dans les cartes, les originales dans la fenêtre de zoom.
Les sources et médias de référence restent dans Nextcloud.

Ouverture, Surprise, pause déjeuner, grand débat et présentation de clôture
utilisent cinq pictogrammes SVG locaux sous `public/visuals/`, selon les
concepts validés par Cyrille le 12 octobre. La clôture ne nomme aucun invité.

Les pastilles sont agrandissables au clic ou au clavier. Une entrée masquée
par le modèle public ne charge pas sa vignette. Une image manquante ou
indisponible laisse un repère neutre ; cela ne modifie pas le créneau. Ajouter
un visuel uniquement s’il correspond à la session et si son usage public est
validé. Les portraits d’Élodie (workshop) et Laure (Cercle du Coin), ainsi que les
vignettes validées de Florent, Mill3sim3 et Taz, disposent de copies de
diffusion légères sous `public/visuals/`, avec provenance et empreintes
des originaux dans `SOURCES.md`. Les originaux restent dans Nextcloud.
Loïc et Frédéric disposent désormais de vignettes B-Only V1 à valider,
préparées à partir des portraits fournis par Cyrille et classées dans Nextcloud.
La vignette de Loïc utilise le logo BitVault. Provenance et empreintes
sont référencées dans `SOURCES.md`.
Le rendez-vous des organisateurs de meetups reste seul sans visuel associé.
