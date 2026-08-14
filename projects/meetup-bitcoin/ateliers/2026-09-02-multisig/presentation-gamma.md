# Présentation Gamma — Atelier multisig et Disaster Recovery

Dernière mise à jour : 2026-08-14  
Statut : **GÉNÉRÉE — À RELIRE ET VALIDER**  
Responsable : Copinmalin  
Issue : [#6](https://github.com/Alpinechain/Alpinechain_Association/issues/6)

## Accès Gamma

- Présentation : https://gamma.app/docs/mpxrob26kuclhz8
- Identifiant Gamma : `mpxrob26kuclhz8`
- Identifiant de génération : `7NBIZlVHjMHulCSrMTpZs`

## Cadrage

- Titre : **Multisig et Disaster Recovery**
- Sous-titre : **Choisir la bonne complexité et vérifier que ses bitcoins restent récupérables**
- Projet : Meetup Bitcoin Annecy
- Date de l’atelier : mercredi 2 septembre 2026
- Animateur : Copinmalin
- Contribution à la démonstration : Georges pour les échanges et signatures de PSBT
- Public : utilisateurs de Bitcoin connaissant déjà le fonctionnement général d’un wallet et d’une seed
- Format : 12 diapositives, 16:9
- Durée : 30 minutes de théorie, 25 minutes de démonstration, 5 minutes de conclusion

## Objectifs pédagogiques

À la fin de l’atelier, les participants doivent savoir :

- choisir entre une seed seule, une seed avec passphrase et un multisig ;
- comprendre un multisig 2-sur-3 ;
- identifier les informations nécessaires à sa restauration ;
- comprendre pourquoi un plan de récupération doit être testé avant une catastrophe.

Message central :

> La meilleure sécurité n’est pas la plus complexe : c’est celle qui correspond à l’enjeu et que l’on sait réellement restaurer.

## Direction visuelle transmise

- format 16:9 ;
- style sombre, sobre, technique et pédagogique ;
- palette noire, blanc cassé et orange Bitcoin ;
- une idée principale par diapositive ;
- très peu de texte visible ;
- titres affirmatifs et facilement lisibles ;
- schémas simples ;
- pas d’imagerie liée au trading, aux cours ou aux cryptomonnaies spéculatives ;
- privilégier les représentations de clés, sauvegardes, appareils, signatures et flux de données ;
- éviter les interfaces complexes, tableaux de bord et slides remplies de petites cartes ;
- ne pas ajouter de faits, statistiques ou détails techniques absents du brief ;
- conserver les explications détaillées dans les notes du présentateur.

## Storyboard final

### 1 — Multisig et Disaster Recovery

Sous-titre :

> Choisir la bonne complexité et vérifier que ses bitcoins restent récupérables

Informations :

- Annecy Bitcoin — 2 septembre 2026
- Animé par Copinmalin

Visuel : trois clés distinctes protégeant un même wallet Bitcoin.

Note orateur : présenter une architecture adaptée aux risques et réellement récupérable, pas la solution la plus impressionnante.

### 2 — Le risque n’est pas seulement le vol

**Compromission**

- seed découverte ;
- appareil compromis ;
- malware ;
- attaque physique.

**Indisponibilité**

- sauvegarde détruite ;
- passphrase oubliée ;
- appareil perdu ;
- décès ou incapacité.

Conclusion :

> Volés ou inaccessibles : le résultat est le même.

### 3 — Une seed n’est sûre que si elle est imprévisible

> Sur les Coldcard concernées, un manque d’entropie lors de la génération pouvait produire des seeds trop prévisibles et réduire fortement le nombre de combinaisons à explorer pour un attaquant.

Rappel :

> Lors de notre atelier sur la génération souveraine, nous avions utilisé des dés pour produire nous-mêmes un aléa vérifiable.

Conclusion :

> Un hardware wallet ne peut pas compenser une mauvaise génération initiale de la clé.

### 4 — La sécurité doit grandir avec l’enjeu

1. **Wallet + seed** — pour apprendre et manipuler de petits montants.
2. **Seed + passphrase** — pour renforcer une conservation personnelle.
3. **Multisig** — pour les enjeux importants, les entreprises et la transmission.

Conclusion :

> Ajouter de la complexité trop tôt peut diminuer la sécurité.

### 5 — Seed + passphrase : simple et robuste

- une seed compromise ne suffit plus ;
- seed et passphrase doivent être séparées ;
- la passphrase doit être sauvegardée ;
- la restauration doit être testée.

Conclusion :

> Une passphrase oubliée est une passphrase perdue.

### 6 — Avec un multisig, aucune clé ne décide seule

Politique : **deux signatures nécessaires parmi trois clés**.

- une clé volée ne suffit pas ;
- une clé perdue ne bloque pas les fonds ;
- deux clés perdues deviennent critiques.

Le visuel doit montrer que A+B, A+C ou B+C permettent de signer.

### 7 — Notre multisig réunit trois types de clés

- **BlueWallet** : clé mobile détenue par Georges ;
- **BitBox** : clé matérielle utilisée par Copinmalin ;
- **Sparrow** : troisième clé et coordinateur du wallet ;
- **politique** : deux signatures parmi trois.

Conclusion :

> Trois clés différentes, une clé peut disparaître sans bloquer les fonds.

### 8 — Les seeds ne suffisent pas pour tout restaurer

**Secrets**

- seeds ;
- passphrases ;
- accès aux appareils.

**Configuration du wallet**

- politique 2-sur-3 ;
- clés publiques ;
- fingerprints ;
- chemins de dérivation ;
- type de script ;
- wallet descriptor.

Conclusion :

> Il faut sauvegarder les clés et le plan du wallet.

### 9 — Un plan de récupération doit être testé

- téléphone disparu → BitBox + Sparrow ;
- BitBox détruite → BlueWallet + Sparrow ;
- ordinateur en panne → réimporter la configuration du wallet.

Question :

> Avons-nous réellement sauvegardé tout ce qui est nécessaire ?

### 10 — Ce soir, aucun secret réel

- aucun wallet personnel ;
- aucune seed personnelle ;
- aucune passphrase habituelle ;
- aucun bitcoin réel ;
- aucun secret photographié.

Conclusion :

> Tout le dispositif utilisé est pédagogique et factice.

### 11 — Créer → transmettre → signer → récupérer

1. **Créer** — Sparrow construit le wallet 2-sur-3.
2. **Transmettre** — Copinmalin envoie une PSBT à Georges.
3. **Signer** — Georges signe avec BlueWallet, puis Copinmalin avec BitBox.
4. **Récupérer** — BlueWallet disparaît ; BitBox + Sparrow restent suffisants.

#### Démonstration normale

1. Copinmalin construit le wallet 2-sur-3 dans Sparrow.
2. Les clés BlueWallet, BitBox et Sparrow sont enregistrées.
3. Copinmalin crée une transaction non signée.
4. Sparrow génère une PSBT.
5. La PSBT est transmise à Georges.
6. Georges vérifie et signe avec BlueWallet.
7. Georges renvoie la PSBT partiellement signée.
8. Copinmalin ajoute la seconde signature avec la BitBox.
9. Sparrow vérifie les signatures et finalise la transaction.

#### Disaster Recovery

1. BlueWallet devient indisponible.
2. La configuration est restaurée ou rouverte dans Sparrow.
3. La BitBox fournit une signature.
4. La clé Sparrow fournit la seconde signature.
5. Le wallet reste utilisable malgré la perte de BlueWallet.

Cette diapositive reste affichée pendant la démonstration.

### 12 — La meilleure sécurité est celle que vous savez restaurer

- commencez par une solution que vous comprenez ;
- augmentez la sécurité quand l’enjeu le justifie ;
- testez la récupération avant d’en avoir besoin.

Conclusion :

> Simple avant d’être complexe. Testé avant d’être nécessaire.

## Validation attendue

Avant utilisation publique :

- [ ] relire les douze diapositives dans Gamma ;
- [ ] vérifier que les consignes de production ne sont pas affichées comme contenu ;
- [ ] vérifier la formulation sur Coldcard et le manque d’entropie ;
- [ ] vérifier les schémas du quorum 2-sur-3 ;
- [ ] vérifier le flux de PSBT entre Copinmalin et Georges ;
- [ ] remplacer tout visuel hors sujet ou ambigu ;
- [ ] valider définitivement la présentation ;
- [ ] exporter ou rendre disponible une version hors ligne ;
- [ ] déposer la version finale dans le dossier Nextcloud de l’atelier.

## Étape suivante après validation

Préparer les communications associatives pour annoncer l’atelier sur les réseaux.
