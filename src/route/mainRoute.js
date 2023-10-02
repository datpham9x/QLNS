
import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let connectDB = require('../controllers/connectDB');


/* GET home page. */
let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/index', homeController.getHomePage);
  router.get('/departments', homeController.getDepartment);
  router.get('/newstaff', homeController.getNewStaff);
  router.get('/staffmanage', homeController.getStaffManage);
  router.post('/postnewstaff', homeController.postNewStaff);
  router.post('/postLogin', homeController.postLogin);
  router.get('/login', homeController.getLogin);
  router.get('/newAccount', homeController.getNewAccount);
  router.post('/postNewAccount', homeController.postNewAccount);
  router.get('/quit', homeController.getQuit);


  return app.use("/",router);
}

connectDB();


module.exports = initWebRoutes;
