/*
Imports
*/
    //=> Use.env
    require('dotenv').config();
    const express = require('express'); //Gestion du serveur
    const path = require('path'); //Gestion du dossier client
    const bodyParser = require ('body-parser'); //recupére donnée dans requetes
    const ejs = require('ejs'); //Gestion du moteur de rendu
    const router = require('./routes/front/front.routes');

    //Inner
    const mainRouter = require('./routes/main.router');
//

/*
Configuration
*/
    const server = express();
    const port = process.env.PORT;

    class ServerClass {

        init(){
            // Config du dossier client
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //Config du moteur de rendu
            server.set('view engine', 'ejs');

            //configurer les routes
            server.use('/api', apiRouter);
            server.use('/', frontRouter);

            //lancer le serveur
            this.launch();
        }

        launch(){
            server.listen(port, ()=> {
                console.log(`Server is active on port ${port}`);
            });
        }

    }
//

/*
Démarrer le serveur
*/  
    new ServerClass().launch();
//