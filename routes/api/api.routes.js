/*
Imports
*/
    //Node
    const express = require('express');
    const router = express.Router();
//

/*
Configuration
*/

class ApiRouterClass{
    routes(){
            router.get('/register', ( req, res ) => {
                res.json('register');
            });

            router.get('/login', ( req, res ) => {
                res.json('login');
            });
    }  
        init(){
            this.routes();
            return router
        };
}
//

/*
Export
*/

//
module.exports = ApiRouterClass;