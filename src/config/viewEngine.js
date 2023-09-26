import express from "express"
let path = require('path');
let configViewEngine = (app) =>{
    app.set('views', './src/views');
    app.set('view engine', 'ejs');
    app.use(express.static('./src/public'));
}

module.exports = configViewEngine;