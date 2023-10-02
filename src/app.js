import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/mainRoute";
import session from "express-session";
require('dotenv').config();

//const connectDB = require('./controllers/connectDB');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
viewEngine(app);

app.use(session({
  secret: 'abcdefg',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

initWebRoutes(app);

//
app.use(session({
  secret: 'abcdefg',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));


app.use(express.json());


let port = process.env.PORT || 3001;


app.listen(port, () => {
  console.log(`App listening at port:${port}`)
})

//module.exports = app;