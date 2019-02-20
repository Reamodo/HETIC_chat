# HETIC_chat

Mise en place d'une application de chat (chatbot)

## CONFIGURATION DE BASE
- Initialiser le dossier serveur (npm init)
- Créer un fichier pour le serveur
- Importer les composants express, body-parser, dotenv, ejs, mongoose, path, nodemon (permet de relancer le serveur) (npm i -s ...)
- Configurer le fichier serveur :
    - créer une constante pour les imports (attention à dotenv)
    - créer une constante pour le serveur (utilisation de la fonction express())
    - configurer les composants
    - Lancer le serveur

## CONFIGURATION DES VUES CLIENTS
- Définir le moteur de rendu en __ejs__
- Définir un dossier "__www__" comme étant le __dossier client__
- Créer un fichier "__index.ejs__" dans le dossier "__www__"
- Créer un router front
    - créer les routes Homepage
    - créer le route register
    - créer la route login
    - créer la route chat

## Création de l'API
- Créer un fichier de routes pour l'api (cf. font.routes)
- Créer une route "/register"
- Créer une route "/login"

## Création des formulaires register/login
- Le formulaire d'inscription contient
    - email
    - pseudo
    - password (x2)
    - CGU

- Le formulaire de connexion contient :
    - email
    - password

## Configuration des vues client
- Définir le moteur de rendu en ejs
- Définir une dossier "www" comme étant le dossier client
- Créer un fichier "index.ejs" dans le dossier "www"
- Créer un router front
    - Créer la routes Homepage
    - Créer la route register
    - Créer la route login
    - Créer la route chat