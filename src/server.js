const express = require('express');
const nunjucks = require('nunjucks');

class App {
    constructor(){
        this.express = express();
        this.isDev = process.env.NODE_ENV != 'production'
        this.middlewares();
        this.views();
        this.routes();
    }

    middlewares(){
        this.express.use(express.urlencoded({ extended: false}))
    }

    views(){


    }

    routes(){


    }
}