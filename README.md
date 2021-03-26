# UrcaCar

## Introduction

Ce projet a pour but de permettre aux membres de l'URCA (personnel ou étudiant) de se déplacer facilement et à moindre coût. 

Notre équipe de développement : 
* @boud0040
* @ait-0067
* @firm0003


## Développement 

Le projet est composé de 2 grandes parties, le front et le back. Nous avons utilisé React & Symfony.  

```shell
$ composer db
```

## Mise en place  

Lancement du serveur de développement dans le répertoire API/UcAPI/ :

```shell
$ symfony serve
```

Création d'un fichier `.env.local` à partir du fichier `.env` :

```shell
cp .env .env.local
```

Puis modifiez les variables d'environnement du fichier `.env.local` selon votre environnement local.

Mise en place de la base de données :

```shell
$ composer db
```

Lancement du React dans le répertoire urcacar/

```shell
$ npm run start
```
# API

Nous avons besoin du jwt pour réaliser tout les requêtes pour avoir les informations de la base de données

## Adresse:
  - GET /api/adresses => Donne la liste d'adresse présente dans la base de données
  - GET /api/adresses/{id} => Donne l'adresse qui a l'id donnée

## Avis:
  - GET /api/avis => Donne la liste d'avis présente dans la base de données
  - GET /api/avis/{id} => Donne l'avis qui a l'id donnée
  - PUT /api/avis/{id} => Modifie l'avis qui a l'id donnée
  - DELETE /api/adresses/{id} => Supprime l'avis qui a l'id donnée
  - POST /api/adresses => Ajoute un avis avec les notes {conduite, ponctualite, comportement, emetteur} et nous renvoie l'avis créer

## Etape:
  - GET /api/etapes => Donne la liste d'étapes présente dans la base de données
  - GET /api/etapes/{id} => Donne l'étape qui a l'id donnée
  - PUT /api/etapes/{id} => Modifie l'étape qui a l'id donnée
  - DELETE /api/etapes/{id} => Supprime l'étape qui a l'id donnée
  - POST /api/etape => Ajoute un avis avec les informations suivantes :{heure, adresse, trajet} et nous renvoie l'etape créer

## Message:
  - GET /api/messages => Donne la liste de message présente dans la base de données
  - GET /api/messages/{id} => Donne le message qui a l'id donnée
  - GET /api/conversations => Donne la liste de conversations qui a l'id donnée
  - POST /api/conversation => Donne la conversation avec {envoyeur_id, destinataire_id} qui a l'id donnée
  - POST /api/messages => Ajoute un message avec les informations suivantes: {texte, date, envoyeur, destinataire} et nous renvoie le message créer

## Notification:
  - GET /api/notifications => Donne la liste de notifications présente dans la base de données
  - GET /api/notifications/{id} => Donne la notification qui a l'id donnée

## Reccurence:
  - GET /api/reccurences => Donne la liste de réccurence présente dans la base de données
  - GET /api/reccurences/{id} => Donne la récurrence qui a l'id donnée

## Reserver:
  - GET /api/reservers => Donne la liste de réservations présente dans la base de données
  - GET /api/reservers/{id} => Donne la réservation qui a l'id donnée
  - GET /api/reservation/{id} => Donne la reservation qui a l'id du trajet donné
  - PUT /api/reservers/{id} => Modifie la réservation qui a l'id donnée
  - DELETE /api/reservers/{id} => Supprime la réservation qui a l'id donnée
  - POST /api/reservers => Ajoute une réservation avec les informations suivantes :{heure, adresse, trajet} et nous renvoie la réservation créer

## Trajet:
  - GET /api/trajets => Donne la liste de trajet présente dans la base de données
  - GET /api/trajets/{id} => Donne le trajet qui a l'id donnée
  - GET /api/mesTrajets => Donne la liste de ses trajets
  - PUT /api/trajets/{id} => Modifie le trajet qui a l'id donnée
  - DELETE /api/trajets/{id} => Supprime le trajet qui a l'id donnée
  - POST /api/trajets => Ajoute un trajet avec les informations suivantes :{heure, adresse, trajet} et nous renvoie le trajets créer
  
## Utilisateur:
  - GET /api/utilisateurs => Donne la liste d'utilisateurs présente dans la base de données
  - GET /api/utilisateurs/{id} => Donne l'utilisateur trajet qui a l'id donnée
  - GET /api/utilisateur/{id} => Donne l'utilisateur avec l'id donnée
  - GET /api/utilisateur => Donne l'utilisateur connecté
  - GET /api/utilisateur/{id}/avis => Donne les avis de l'utilisateur donner via l'id
  - PUT /api/utilisateurs/{id} => Modifie l'utilisateur qui a l'id donnée

## Voiture:
  - GET /api/voitures => Donne la liste de voiture présente dans la base de données
  - GET /api/voitures/{id} => Donne la voiture qui a l'id donnée
  - PUT /api/voitures/{id} => Modifie la voiture qui a l'id donnée
  - DELETE /api/voitures/{id} => Supprime la voiture  qui a l'id donnée
  - POST /api/voitures => Ajoute une voiture avec les informations suivante :{heure, adresse, trajet} et nous renvoie la voiture créer

## Connexion:
  - /logout Déconnecte l'utilisateur
  - /login Connecte l'utilisateur et renvoie le jwt
