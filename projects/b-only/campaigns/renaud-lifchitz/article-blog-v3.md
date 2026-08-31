# Reticulum : et si Internet n'était qu'un chemin parmi d'autres ?

**État : VALIDÉ / PROGRAMMÉ — publication prévue le 3 septembre 2026.**

**Nos communications semblent immatérielles. Elles reposent pourtant sur des
câbles, des antennes, des opérateurs et des points de contrôle que nous ne
maîtrisons généralement pas. À B-Only'26, Renaud Lifchitz présentera Reticulum,
une pile réseau fondée sur la cryptographie qui permet de construire des réseaux
indépendants sur des supports très différents.**

## Nous avons confondu Internet avec le réseau

Lorsqu'une application affiche « hors connexion », nous considérons souvent que
le réseau a disparu.

En réalité, seul le chemin habituel est devenu indisponible.

Deux appareils peuvent toujours être proches. Une liaison radio peut exister.
Un câble, un réseau local, un port série ou un autre relais peut être accessible.
Mais nos applications ont été conçues autour d'une hypothèse : elles doivent
retrouver l'infrastructure centrale qu'elles connaissent.

Cette dépendance reste invisible tant que tout fonctionne. Elle devient évidente
lors d'une coupure, d'une catastrophe, d'une censure ou simplement dans une zone
où le réseau classique n'a jamais été fiable.

La souveraineté numérique ne concerne donc pas seulement les logiciels et les
données. Elle concerne aussi les chemins empruntés par nos communications.

## Reticulum n'est ni une application ni un « nouvel Internet »

Reticulum est une pile réseau construite autour de la cryptographie.

Cette distinction est importante. Une application répond à un usage visible :
envoyer un message, partager un fichier ou publier une information. Une pile
réseau fournit les mécanismes plus fondamentaux qui permettent aux applications
de s'identifier, de trouver leurs correspondants et de transporter des données.

Reticulum n'est pas non plus un réseau mondial unique auquel il faudrait ouvrir
un compte. Le projet fournit des briques pour construire de nombreux réseaux
indépendants, locaux ou étendus, capables de fonctionner seuls ou de
s'interconnecter.

Sa vision officielle est claire : permettre à chacun de devenir opérateur de
son propre réseau.

## Faire communiquer des supports très différents

Les réseaux conventionnels supposent souvent une infrastructure relativement
homogène. Reticulum a été conçu pour relier des supports dont les capacités
peuvent être radicalement différentes.

Une partie du réseau peut fonctionner sur Ethernet ou Wi-Fi. Une autre peut
passer par Internet, une liaison série, un modem radio ou un support à très
faible débit.

Reticulum est particulièrement adapté aux liens à forte latence et faible bande
passante. Il peut transporter les messages sur plusieurs sauts et relier des
segments hétérogènes.

Cela ne signifie évidemment pas qu'une liaison lente devient rapide. Un lien
radio conserve sa portée, ses limites réglementaires et son faible débit. Une
interface mal configurée peut saturer une ressource rare. Le protocole ne
supprime pas la physique.

Son intérêt est ailleurs : ne pas imposer à tous les chemins les hypothèses et
la surcharge d'un réseau traditionnel.

## Des destinations plutôt que des adresses distribuées par une autorité

Reticulum abandonne les notions classiques d'adresse IP et de port au profit de
« destinations ».

Une destination est dérivée cryptographiquement à partir de l'identité et des
caractéristiques de l'application. Un appareil peut en générer sans demander
une attribution à une autorité centrale.

Ces destinations peuvent annoncer leur existence. Le réseau apprend alors
comment les joindre et construit les chemins nécessaires, y compris sur
plusieurs sauts.

Ce fonctionnement ne promet pas une joignabilité universelle. Pour qu'un paquet
arrive, il faut toujours un ensemble de nœuds et de liaisons disponibles.

La différence est qu'aucun registre central n'a besoin de distribuer les
identités ou de connaître l'intégralité de la topologie.

## La cryptographie comme fondation du transport

Dans de nombreux systèmes, le réseau transporte d'abord les données et le
chiffrement est ajouté par l'application.

Reticulum place la cryptographie au cœur de son architecture. Les destinations
sont liées à des identités, les données sont chiffrées et des preuves de
livraison peuvent confirmer qu'un paquet a atteint son destinataire.

Les liens chiffrés offrent notamment une confidentialité persistante, tandis que
le système de transport peut établir des chemins multi-sauts sans faire circuler
une adresse source conventionnelle dans les paquets.

Cette conception réduit certains points de contrôle. Elle ne rend pas
l'utilisateur invisible en toutes circonstances. La temporalité, la présence
d'un émetteur radio, les volumes échangés ou l'utilisation d'une connexion TCP
peuvent encore révéler des métadonnées.

Un discours sérieux sur la résilience doit reconnaître ces limites.

## Des réseaux sans « bouton d'arrêt » central

Reticulum ne dépend pas d'un serveur unique chargé d'autoriser les utilisateurs,
de distribuer toutes les adresses ou de décider quels nœuds peuvent communiquer.

Chaque réseau peut choisir son matériel, ses interfaces et son niveau
d'interconnexion. Des réseaux peuvent s'associer, se séparer ou conserver leur
autonomie.

Cette architecture devient pertinente dans des contextes très différents :

- communication locale en l'absence d'accès Internet fiable ;
- réseaux communautaires ou événementiels ;
- liaisons entre sites isolés ;
- scénarios de secours ;
- expérimentations radio ou maillées ;
- applications nécessitant un transport chiffré sur une infrastructure
  hétérogène.

La liste ne constitue pas une promesse de fonctionnement automatique. Chaque
cas demande un dimensionnement, du matériel, des tests et une compréhension des
contraintes locales.

Une infrastructure résiliente se prépare avant d'être nécessaire.

## Un réseau cypherpunk ?

Le titre du workshop de Renaud Lifchitz assume un positionnement :

> **Reticulum, le réseau cypherpunk dont vous avez besoin !**

Le terme « cypherpunk » ne désigne pas simplement l'usage du chiffrement. Il
porte une méthode : construire des outils qui réduisent le besoin de faire
confiance à une autorité et donnent aux individus la capacité d'agir directement.

Reticulum applique cette logique au transport de l'information.

Au lieu de demander quel opérateur ou quelle plateforme protégera nos
communications, le projet pose une question différente : pouvons-nous construire
et relier nous-mêmes les réseaux dont nous avons besoin ?

La réponse n'est pas une application prête à tout résoudre. C'est une pile
technique, une documentation et un ensemble d'outils que chacun peut adapter à
son contexte.

Cette exigence rappelle Bitcoin. Bitcoin ne promet pas de supprimer le besoin
d'apprendre la conservation, les transactions ou les compromis de
confidentialité. Il donne la possibilité de reprendre en main la monnaie.

Reticulum donne la possibilité de reprendre en main le réseau.

## Le workshop de Renaud Lifchitz à B-Only'26

**Renaud Lifchitz**, CTO chez **Sharekey**, animera ce workshop le dimanche
8 novembre 2026, de 15 h 30 à 16 h 20, au Pleb Forum de B-Only'26.

La session permettra de comprendre :

- comment Reticulum représente les identités et les destinations ;
- comment les nœuds découvrent des chemins ;
- comment fonctionne le transport sur plusieurs sauts ;
- comment différents supports peuvent être reliés ;
- quelles garanties apporte la cryptographie ;
- et quelles contraintes demeurent dans un déploiement réel.

L'intérêt du format workshop tient à la possibilité d'aller au-delà du schéma
parfait. Que se passe-t-il lorsqu'un nœud disparaît ? Quelle bande passante faut-il
réserver ? Quels supports utiliser ? Quels usages radio sont autorisés ? Comment
tester une solution de repli avant l'urgence ?

Ces questions font la différence entre un concept séduisant et une
infrastructure utilisable.

## Pourquoi venir à B-Only pour parler de réseau ?

B-Only est un événement consacré à Bitcoin. Mais la souveraineté que Bitcoin
rend possible ne s'arrête pas à la monnaie.

Un portefeuille doit communiquer avec d'autres nœuds. Une transaction doit être
transmise. Une communauté doit pouvoir partager de l'information. Un outil
monétaire résistant à la censure reste dépendant des réseaux qui le transportent.

Reticulum ne remplace pas Bitcoin et le workshop ne prétend pas résoudre à lui
seul la diffusion des transactions hors ligne. Il ouvre une réflexion plus
large : quelles infrastructures devons-nous être capables d'opérer nous-mêmes ?

Le format à taille humaine de B-Only permet de poser cette question concrètement.
Les participants peuvent rencontrer les intervenants, confronter leurs scénarios
et poursuivre les discussions après la session.

## Ne cherchez pas un réseau magique : apprenez à construire le vôtre

Reticulum ne fait pas disparaître les obstacles.

Il ne crée pas de portée sans antenne, de débit sans spectre ni de chemin sans
nœuds disponibles.

Il propose mieux qu'une promesse magique : une architecture permettant de
combiner des supports, de créer des identités sans coordination centrale et de
faire émerger des chemins entre des réseaux indépendants.

Si vous vous intéressez à Bitcoin, aux réseaux maillés, à la radio, à la
résilience ou à la souveraineté numérique, venez découvrir ce que cette approche
change réellement.

Internet n'est qu'un chemin.

À nous d'apprendre à en construire d'autres.

📍 **B-Only'26 — Novotel Annecy Centre, Annecy**
📅 **Du 7 au 9 novembre 2026**
🎟️ **Réserver votre place :** https://go.alpinechain.xyz/b26-rlr-blog

## Sources techniques officielles

- Understanding Reticulum :
  https://reticulum.network/manual/understanding.html
- Building Networks :
  https://reticulum.network/manual/networks.html
- Configuring Interfaces :
  https://reticulum.network/manual/interfaces.html
- Dépôt public officiel :
  https://github.com/markqvist/Reticulum
