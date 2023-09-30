
import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let connectDB = require('../controllers/connectDB');


/* GET home page. */
let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/departments', homeController.getDepartment);
  router.get('/newstaff', homeController.getNewStaff);
  router.get('/staffmanage', homeController.getStaffManage);
  router.post('/postnewstaff', homeController.postNewStaff);


  return app.use("/",router);
}

connectDB();


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
