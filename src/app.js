import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/mainRoute";
require('dotenv').config();

let path = require('path');

const connectDB = require('./controllers/connectDB');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
viewEngine(app);
initWebRoutes(app);


app.use(express.json());

//app.use('/', indexRouter);

let port = process.env.PORT || 3001;


app.listen(port, () => {
  console.log(`App listening at port:${port}`)
})

//module.exports = app;