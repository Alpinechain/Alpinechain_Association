# Revue hebdomadaire d’exploitation AlpineChain

Durée cible : 30 minutes  
Responsable de clôture : Cyrille  
Source de vérité : GitHub Project et Issues

## 1. Disponibilité des services

- [ ] Vérifier le dernier run `Public Service Monitoring`.
- [ ] Traiter toute Issue `[INCIDENT] Services publics AlpineChain indisponibles`.
- [ ] Vérifier les erreurs visibles dans les applications critiques.

## 2. Sauvegardes

- [ ] Vérifier la date du dernier succès de `alpinechain-backup.service`.
- [ ] Vérifier que le dépôt Restic hors serveur est accessible.
- [ ] Vérifier l’absence d’erreur dans le dernier journal de sauvegarde.
- [ ] Vérifier la date du dernier `restic check`.
- [ ] Vérifier la date du dernier test de restauration.

## 3. Capacité et maintenance

- [ ] Vérifier l’usage disque du serveur et des volumes Podman.
- [ ] Vérifier les conteneurs arrêtés ou dégradés.
- [ ] Vérifier les timers systemd : stack, sauvegarde et mise à jour mensuelle.
- [ ] Examiner les mises à jour ou vulnérabilités nécessitant une fenêtre de maintenance.
- [ ] Confirmer que Pretix reste gelé tant que l’add-on SBP n’est pas validé.

## 4. Control Center

- [ ] Examiner les éléments P0 et P1.
- [ ] Examiner les colonnes `En attente` et `À valider`.
- [ ] Attribuer un responsable et une échéance aux actions prioritaires.
- [ ] Fermer ou requalifier les Issues devenues obsolètes.

## 5. Événements et B-Only

- [ ] Vérifier les jalons à 21 jours et 14 jours.
- [ ] Vérifier l’état de la billetterie et les décisions attendues.
- [ ] Vérifier les huit chantiers B-Only dans la vue dédiée.
- [ ] Vérifier que les publications prévues ont une validation humaine.

## 6. Accès et sécurité

- [ ] Vérifier les accès à révoquer ou déléguer.
- [ ] Vérifier les tokens ou certificats arrivant à expiration.
- [ ] Vérifier qu’aucun secret ou fichier sensible n’a été ajouté à GitHub.
- [ ] Vérifier les changements DNS, administrateurs ou droits critiques.

## 7. Décisions et compte-rendu

- [ ] Documenter les décisions prises dans les Issues concernées.
- [ ] Créer les nouvelles Issues nécessaires.
- [ ] Mettre à jour `dashboard/NOW.md`.
- [ ] Renseigner les incidents, risques et améliorations.
- [ ] Fermer l’Issue de revue lorsque toutes les actions ont été distribuées.

## Résumé à renseigner

```text
Services : OK / incident(s)
Dernière sauvegarde : YYYY-MM-DD HH:MM
Dernier test de restauration : YYYY-MM-DD
Disque serveur : XX %
Incidents ouverts : N
P0 / P1 ouverts : N / N
Décisions requises :
Actions principales de la semaine :
```
