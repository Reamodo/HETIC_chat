/*
Imports
*/
    //=> Use.env
    require('dotenv').config();
    const express = require('express'); //Gestion du serveur
    const path = require('path'); //Gestion du dossier client
    const bodyParser = require ('body-parser'); //recupére donnée dans requetes
    const ejs = require('ejs'); //Gestion du moteur de rendu
//

/*
Configuration
*/
    const server = express();
    const port = process.env.PORT;
//

/*
Démarrer le serveur
*/
    server.listen(port, ()=> {
        console.log(`Server is active on port ${port}`);
    });
//