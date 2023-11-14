
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
  router.get('/salary', homeController.getSalary);
  router.post('/postnewstaff', homeController.postNewStaff);
  router.post('/postLogin', homeController.postLogin);
  router.get('/login', homeController.getLogin);
  router.get('/newAccount', homeController.getNewAccount);
  router.post('/postNewAccount', homeController.postNewAccount);
  router.get('/quit', homeController.getQuit);
  router.get('/editStaff', homeController.getEditStaff);
  router.post('/putEditStaff', homeController.putEditStaff);
  router.get('/deleteStaff', homeController.putDeleteStaff);
  router.get('/cacl-workday', homeController.getCaclWorkday);
  router.post('/luu-cong', homeController.putEditWorkDay);


  return app.use("/",router);
}

connectDB();


module.exports = initWebRoutes;
