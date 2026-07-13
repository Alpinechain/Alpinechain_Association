# Politique d’automatisation AlpineChain

Version : V1.1  
Dernière mise à jour : 2026-07-13

## Objet

Cette politique définit ce qui peut être automatisé, ce qui exige une validation humaine et ce qui ne doit jamais être exécuté automatiquement.

## Règle absolue sur les fichiers et dossiers

**Aucun fichier ni dossier ne doit jamais être supprimé, déplacé vers la corbeille ou rendu inaccessible sans validation humaine explicite préalable.**

Cette règle s’applique à Nextcloud, GitHub, aux volumes serveur, aux médias, aux exports, aux sauvegardes et à tout autre espace documentaire AlpineChain.

Une validation valable doit préciser au minimum :

- l’élément concerné ;
- l’action demandée ;
- le validateur ;
- la date ;
- la possibilité de restauration ou l’absence de retour arrière.

Une automatisation peut détecter, signaler ou proposer une suppression. Elle ne peut jamais l’exécuter seule.

## Niveaux d’automatisation

### Niveau A — Observation automatique

Autorisé sans validation préalable :

- vérifier la disponibilité d’une URL ;
- contrôler l’état d’un workflow ou d’un conteneur ;
- lire des métriques non sensibles ;
- vérifier l’âge d’une sauvegarde ;
- détecter une échéance dépassée ;
- produire un rapport technique.

Ces actions ne modifient aucune donnée métier.

### Niveau B — Organisation automatique

Autorisé avec règles documentées et possibilité de révocation :

- créer une Issue d’incident ;
- créer une Issue de revue hebdomadaire ;
- ajouter une Issue au GitHub Project ;
- appliquer des labels et statuts ;
- fermer un incident technique après retour vérifié à la normale ;
- envoyer un rappel interne non public ;
- créer des dossiers préalablement validés lorsqu’aucun contenu existant n’est supprimé, déplacé ou remplacé.

Chaque automatisation doit avoir un propriétaire et un runbook.

### Niveau C — Écriture métier contrôlée

Interdite sans validation humaine explicite au cas par cas :

- créer ou modifier un événement Pretix ;
- créer un tiers, devis ou facture dans Dolibarr ;
- importer une écriture dans Paheko ;
- modifier un produit ou une commande be-BOP ;
- téléverser ou modifier une vidéo PeerTube ;
- modifier ou remplacer un document partagé dans Nextcloud ;
- déplacer ou renommer un fichier ou dossier ;
- modifier une configuration de production.

Une automatisation peut préparer un brouillon ou une proposition, mais l’exécution doit être déclenchée ou approuvée par une personne autorisée.

### Niveau D — Action publique, financière ou irréversible

Toujours humaine :

- publier sur le site, Meetup ou un réseau social ;
- envoyer un courriel externe au nom de l’association ;
- engager une dépense, payer ou rembourser ;
- valider une facture ou une écriture comptable ;
- supprimer un fichier, dossier, donnée, compte, événement ou média ;
- vider une corbeille ou purger une sauvegarde hors politique validée ;
- modifier les DNS, domaines, droits administrateurs ou secrets ;
- parler au nom du bureau ou annoncer une décision associative.

Aucune règle automatique ne peut contourner ce niveau.

## Validation humaine

Cyrille est le validateur opérationnel actuel. Une délégation future doit être documentée dans GitHub avec :

- le périmètre exact ;
- la durée ;
- les outils concernés ;
- le niveau d’autorisation ;
- la procédure de révocation.

Le label `human-validation` indique qu’une étape humaine est requise. Il ne constitue pas en lui-même une approbation.

## Secrets et accès

- Les secrets ne sont jamais stockés dans une Issue, un fichier public ou une conversation.
- Les tokens doivent être limités au strict nécessaire.
- Chaque token possède un propriétaire, une date d’expiration et une procédure de rotation.
- Les comptes partagés sont évités ; les accès nominatifs et révocables sont préférés.
- Toute intégration automatisée possède un interrupteur d’arrêt documenté.

## Traçabilité

Toute action de niveau B ou C doit laisser une trace comprenant au minimum :

- date et heure ;
- système source ;
- action exécutée ;
- résultat ;
- lien vers le workflow, l’Issue ou le journal ;
- personne ayant validé, si nécessaire.

## Gestion des erreurs

Une automatisation doit :

1. échouer explicitement plutôt que produire une donnée douteuse ;
2. ne jamais réessayer indéfiniment une action destructive ;
3. ne jamais exécuter une suppression automatique ;
4. créer ou mettre à jour une Issue d’incident lorsque l’échec est durable ;
5. conserver assez de contexte pour diagnostiquer sans exposer de secret ;
6. permettre une reprise manuelle.

## Revue

Cette politique est revue après :

- un incident provoqué par une automatisation ;
- l’ajout d’un nouvel outil ou connecteur ;
- une délégation de droits ;
- un changement de trésorier, président ou administrateur principal ;
- au minimum une fois par an.
