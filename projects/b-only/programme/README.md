# Programme B-Only 2026

Issue pilote : [#11 — Programme et intervenants](https://github.com/Alpinechain/Alpinechain_Association/issues/11)

## Rôle

Ce dossier contient la source structurée du programme et une page HTML statique
capable de l'afficher sans base de données ni dépendance externe.

- `programme.json` est la source unique des créneaux.
- `index.html`, `styles.css` et `app.js` produisent l'affichage.
- `validate.mjs` contrôle la structure, les horaires et les chevauchements.

Le contenu est une base de travail tant que `publication.state` vaut `draft`.
Il ne doit pas être présenté comme le programme public définitif sans validation
humaine.

Les portraits, logos, biographies et documents sources restent dans Nextcloud.
Cette page ne contient que les informations nécessaires au programme.

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

## Publication envisagée

La cible recommandée est une GitHub Page reliée ensuite à
`programme.b-only.org` ou intégrée par lien dans le site Framer. L'activation de
GitHub Pages, le DNS et l'ajout au site restent des actions séparées soumises à
validation.
