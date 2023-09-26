
import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let connectDB = require('../controllers/connectDB');


/* GET home page. */
let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/departments', homeController.getDepartment);


  return app.use("/",router);
}

connectDB();

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize(
//   'allstaff',
//   'root',
//   '123abc!@#ABC',
//   {
//     host: '192.168.9.138',
//     dialect: 'mysql'
//   }
// );


// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database: ', error);
// });

// const Infos = sequelize.define("Infos", {
//   id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     primaryKey: true,
//   },
//   ho_ten: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   gioi_tinh: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   tuoi: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   phong_ban: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   dia_chi: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });


// sequelize.sync().then(() => {
//   console.log('Infos table created successfully!');
//   Infos.create({
//     id: "00004",
//     ho_ten: "Nguyễn Thị Lài",
//     gioi_tinh: "Nữ",
//     tuoi: 29,
//     phong_ban: "Kế Toán",
//     dia_chi: "Quận 7, HCM"

//   }).then(res => {
//     console.log(res)
//   }).catch((error) => {
//     console.error('Failed to create a new record : ', error);
//   });


// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });




// router.get('/departments', async (req, res) => {

//   const dsphongban = {};
//   const infos = await Infos.findAll();

//   infos.forEach(function (nhanvien) {

//     const phong_ban = nhanvien.phong_ban;

//     if (!dsphongban[phong_ban]) {
//       dsphongban[phong_ban] = {
//         pb: [],
//         namCount: 0,
//         nuCount: 0,
//         pbCount: 0,
//       };
//     }
//     dsphongban[phong_ban].pb.push(nhanvien);

//     if (nhanvien.gioi_tinh === 'Nam') {
//       dsphongban[phong_ban].namCount++;
//     } else if (nhanvien.gioi_tinh === 'Nữ') {
//       dsphongban[phong_ban].nuCount++;
//     }
//     dsphongban[phong_ban].pbCount = dsphongban[phong_ban].namCount + dsphongban[phong_ban].nuCount;

//   });
//   res.render('departments', { dsphongban });
// });


// router.get('/test', async (req, res) => {
//   const dsphongban = {};
//   const infos = await Infos.findAll();

//   infos.forEach(function (nhanvien) {

//     const phong_ban = nhanvien.phong_ban;

//     if (!dsphongban[phong_ban]) {
//       dsphongban[phong_ban] = {
//         pb: [],
//         namCount: 0,
//         nuCount: 0,
//         pbCount: 0,
//       };
//     }
//     dsphongban[phong_ban].pb.push(nhanvien);

//     if (nhanvien.gioi_tinh === 'Nam') {
//       dsphongban[phong_ban].namCount++;
//     } else if (nhanvien.gioi_tinh === 'Nữ') {
//       dsphongban[phong_ban].nuCount++;
//     }
//     dsphongban[phong_ban].pbCount = dsphongban[phong_ban].namCount + dsphongban[phong_ban].nuCount;

//   });

//   const page = parseInt(req.query.page) || 1; // Get the current page from the query parameter (default to 1 if not provided)
    //const itemsPerPage = 2;
    //const startIndex = (page - 1) * itemsPerPage;
    //const endIndex = startIndex + itemsPerPage;
    //const dataSubset = infos.slice(startIndex, endIndex); // Subset of data for the current page

//   res.render('test', { dsphongban, currentPage: page});
// });


module.exports = initWebRoutes;
