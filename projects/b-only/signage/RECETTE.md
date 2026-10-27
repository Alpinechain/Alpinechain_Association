# Recette du MVP et de sa mise en service — 26 octobre 2026

**DÉPLOYÉ, réception logicielle réussie.** Mise en service validée explicitement
par Cyrille après revue du MVP. Les essais initiaux utilisent Node.js
24.18.0 et Chromium 156.0.8078.47. Aucun essai physique des téléviseurs,
boîtiers, câbles HDMI ou réseau du Novotel n'est déclaré.

## Contrôles du prototype avant installation

| Contrôle | Résultat |
|---|---|
| `npm test` | 11 tests réussis : horaires, import, décalages, expiration, fuseau été/hiver, sécurité HTTP, médias, persistance, export et routage public |
| Programme officiel | Validateur existant : 31 entrées, dont 30 publiques actives ; référence inchangée |
| Deux écrans simultanés | Salle principale : Alexandre à 15 h 05 samedi ; Workshop : ProfEduStream au même instant |
| Formats navigateur | 1920×1080 paysage, 1080×1920 portrait, secours 768×1024 ; admin 390×844 |
| Retard et sélection manuelle | Correction depuis l'admin, mise à jour sous 5 s ; autre salle inchangée |
| Annonce | Insertion prioritaire puis retrait depuis l'admin |
| Hall | Annonce, illustration, logo fictif et vidéo synthétique muette de 5 s ; pause/reprise et média absent |
| Coupure réseau simulée | Grille conservée ; rechargement par Service Worker sur localhost ; vidéo lue depuis un Blob du cache |
| Secours indépendant | HTML autonome ouvert en `file://`, sans serveur ; horloge du lecteur au lancement |
| Paymium Vimeo B2B et B2C | Démarrage, durée annoncée 97 s / 72 s ; recherche à 2 s de la fin par API officielle puis événement `ended` et transition vérifiés |
| Échec Vimeo | Première tentative B2B en erreur ; essais suivants réussis ; échec Internet contrôlé : repli sur la diapositive suivante |
| Vimeo hors ligne | Entrées écartées sans iframe ; aucune dépendance Vimeo dans l'export de secours |
| Paymium local B2B et B2C | H.264/AAC 1920×1080, environ 97,45 s / 72 s ; lecture après rechargement sans réseau, puis fin et transition vérifiées |
| JavaScript | Aucune erreur de page pendant les scénarios navigateur ; aucune requête Internet avec la boucle locale seule |
| Archivage Néowalt | Deux sources déjà présentes dans Nextcloud, tailles et SHA-256 identiques aux deux originaux du PC ; aucun doublon créé |
| Archivage Paymium | Deux originaux fournis copiés sans écrasement ; tailles et SHA-256 relus sur le serveur ; indexation du Groupfolder 1 : zéro erreur ; fichiers [5229](https://cloud.alpinechain.xyz/f/5229) et [5230](https://cloud.alpinechain.xyz/f/5230) |
| Adresses publiques préparées | Correspondance des trois sous-domaines et refus de l'admin testés ; aucun DNS ou serveur de production modifié |
| Racine d'un hôte d'écran | Redirection en ligne puis ouverture hors ligne de la racine vérifiées sur localhost ; cache de redirection corrigé |
| Exemple Caddy | `caddy adapt` réussi avec le conteneur existant ; aucune configuration appliquée |
| `adminvideo.b-only.org` | Racine authentifiée, redirection vers l'admin et refus d'un hôte partagé avec un écran testés ; filtrage réseau Caddy proposé, non déployé |
| Vignettes | 30 visuels disponibles localement ; cartes actuelle/suivante vérifiées en 1920×1080, 1080×1920 et 768×1024, dans le cache hors ligne et l'export `file://` ; image absente : texte conservé |

Les contrôles de pause/expirations utilisent l'heure de simulation sur les
écrans et l'admin lorsque `SIGNAGE_DEMO=1`. Les essais Vimeo confirment le
fonctionnement à l'instant du test ; une restriction propriétaire, un défaut
Internet ou l'autoplay du lecteur réel peuvent encore empêcher la lecture.
Les MP4 fournis évitent cette dépendance pour la boucle locale.

## Reproduire les essais navigateur

Playwright est un outil de recette facultatif, sans dépendance dans
l'application ni ses tests Node.js. Installer ses outils hors du dépôt :

```bash
npm install --prefix /tmp/bonly-browser playwright
# Utiliser un Chromium déjà installé ou celui de Playwright.
export PLAYWRIGHT_MODULE=/tmp/bonly-browser/node_modules/playwright/index.mjs
export CHROMIUM_PATH=/snap/bin/chromium
# Dossier accessible au navigateur ; Chromium Snap isole /tmp en file://.
export SIGNAGE_TEST_ARTIFACT_DIR="$HOME/Téléchargements/bonly-recette-230"
mkdir -p "$SIGNAGE_TEST_ARTIFACT_DIR"
export SIGNAGE_TEST_VIDEO="$SIGNAGE_DATA_DIR/media/demo-test.mp4"
node test/browser-check.mjs
node test/browser-vimeo-check.mjs --online
```

Le second script ouvre les lecteurs Vimeo officiels et nécessite Internet.
Il n'extrait ni ne télécharge leurs fichiers. Résultats JSON et captures sont
conservés dans le dossier d'artefacts, pas dans GitHub. Les tests n'installent
aucun service et utilisent un serveur de test sur un port local temporaire.

Pour les fichiers Paymium locaux, utiliser les boutons d'aperçu puis d'essai
dans l'admin en mode démonstration, observer les durées et le passage à la
suite, couper le réseau et recharger après préchauffage du cache. Refaire
cette recette sur les vrais lecteurs et avec les visuels approuvés.

## Mise en service vérifiée

La PR applicative [#234](https://github.com/Alpinechain/Alpinechain_Association/pull/234)
est fusionnée. L'installation est suivie dans le dépôt Serveur ; ses détails
techniques et accès privés y restent.

| Contrôle en production | Résultat |
|---|---|
| HTTPS et routage | [Salle principale](https://conference.b-only.org/), [Workshop](https://workshop.b-only.org/), [accueil](https://accueil.b-only.org/) : certificats valides et bon écran |
| Administration | [adminvideo](https://adminvideo.b-only.org/) : authentification obligatoire ; accès depuis tous les réseaux demandé le 27 octobre ; refus sur les trois hôtes publics même avec des identifiants valides |
| Visuels | 30 créneaux publics actifs, 30 URL d'images contrôlées ; aucune modification du programme officiel |
| Hall réel | Accueil, MP4 Paymium B2B puis B2C et agendas ; démonstrations fictives retirées, vidéos muettes |
| Paymium HTTPS | Tailles et SHA-256 conformes, requêtes partielles 206, autoplay, durées et transitions de fin vérifiés dans Chromium |
| Formats | Rendu réel avant événement et simulation isolée dans le navigateur : 1920×1080, 1080×1920, 768×1024 ; deux vignettes en simulation, sans changement de l'horloge serveur |
| Cache HTTPS | Rechargement sans réseau et deux images Blob depuis le cache après préchargement ; aucune erreur JavaScript de page |
| Régie mobile | Administration authentifiée vérifiée à 390×844, sans mutation du programme |
| Redémarrage du service | Santé correcte et configuration conservée ; démarrage automatique configuré, reboot complet du serveur non effectué |
| Services existants | Contrôles avant/après identiques ; aucun autre service applicatif recréé |

La validation de mise en service et la recette technique n'attestent pas
les essais des lecteurs/TV ni la validation finale de la diffusion pendant
l'événement. Ces actions sont reprises dans #12.

## Mise à jour du carrousel — 27 octobre 2026

Suivi : [#238](https://github.com/Alpinechain/Alpinechain_Association/issues/238).
La configuration de régie est sauvegardée avant une mise à jour par l'API
avec contrôle de révision ; les écrans, annonces et réglages Vimeo sont
conservés. Les deux entrées Paymium locales gardent leur place et leurs
réglages, avec de nouvelles copies accélérées.

- Deux originaux Néowalt recoupés avec Nextcloud par taille/SHA-256. Copies
  H.264 1080p préparées avec temps vidéo divisé par 1,5 et `atempo=1.5` si
  l'audio est présent : salon 48 s ; échecs environ 27,2 s, portrait conservé.
  La vitesse est encodée dans ces copies : le navigateur et le secours local
  lisent le même contenu accéléré sans réglage supplémentaire. Son muet
  dans la boucle, comme les autres vidéos du hall.
- Deux copies Paymium accélérées avec le même traitement vidéo/audio :
  B2B environ 64,97 s, B2C 48 s, H.264/AAC 1920×1080. Sources inchangées ;
  nouvelles tailles et empreintes contrôlées sur le serveur et via HTTPS.
- 18 vignettes Nextcloud, versions recoupées avec les références du programme.
  Marius conserve son nom de fichier `proposition`, validé dans sa campagne ;
  Alexandre reprend la V4 déjà intégrée au programme. Thomas Mang utilise le
  visuel publié du programme faute de source trouvée dans Nextcloud.
- 19 copies WebP, proportions conservées, contrôlées par empreintes après
  transfert. Chaque image et diapositive fixe dure 4 secondes. L'agenda
  explicite à 4 secondes remplace l'insertion automatique de 15 secondes.
- Les vidéos sont entrecoupées de groupes de vignettes et restent lues jusqu'à
  leur fin ; aucun arrêt après 4 secondes. Aucun horaire du programme modifié.
- Un cycle complet en production a chargé les 19 images ; les quatre MP4
  démarrent muets et passent au suivant à leur fin. Les quatre vidéos ont
  également été lues intégralement sans déplacement de lecture dans une
  playlist isolée du navigateur : environ 48,1 s, 65,1 s, 27,4 s et 48,1 s
  observées, jusqu’à l’événement `ended`.
- Après préchargement HTTPS et coupure réseau : rechargement de l’accueil,
  vignette puis vidéo Néowalt depuis des Blob du cache, transition de fin
  réussie. Captures paysage et portrait ; aucune erreur JavaScript de page.
- Mode aléatoire optionnel dans l’administration, compatible avec les
  configurations précédentes (désactivé si absent). Les contenus admissibles
  sont mélangés une fois par cycle ; les sondages de régie toutes les 5 s ne
  remélangent pas le cycle en cours. Agendas automatiques insérés après le
  mélange pour garder leur fréquence. Les durées et événements de fin vidéo
  sont conservés.
- Recette du mode aléatoire : case de l’administration enregistrée et relue ;
  deux cycles de quatre contenus dans des ordres différents, chaque contenu
  présent une fois par cycle ; vidéo encore en lecture après 6,2 secondes,
  puis événement de fin. 12 tests Node réussis, dont compatibilité et
  invariants du mélange.

## Recette matérielle reprise dans #12

- Identifier les écrans, résolutions, orientations et lecteurs réellement disponibles.
- Valider le LAN, le nom/IP de régie et HTTPS si le cache du navigateur doit permettre un redémarrage hors réseau.
- Tester extinction, reprise électrique, connexion automatique, bonne URL et bonne entrée HDMI.
- Charger un cycle complet sur chaque lecteur ; tester perte Internet puis coupure LAN/serveur.
- Vérifier NTP, lisibilité à plusieurs mètres et lecture sonore si retenue.
- Valider la reprise des vignettes sur écrans, les droits, logos et l'ordre des contenus partenaires.
- Désigner la régie et son relais ; préparer les clés USB et un retour au programme nominal.

La livraison du MVP et sa mise en service clôturent #230. La recette sur place
et la diffusion de l'événement restent suivies dans #12 ; elles ne sont pas
déclarées réalisées par la fusion ou le déploiement.
