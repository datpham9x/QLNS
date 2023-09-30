import db from "../models/index";
import staffManageService from "../services/staffManageService"


let getHomePage = async (req, res) => {

    try {

        return res.render('index');

    } catch (e) {
        console.log(e)
    }

}


let getDepartment = async (req, res) => {

    try {

      //  let data = await db.Staff.findAll();

  const dsphongban = {};
  const infos = await db.Staff.findAll();

  infos.forEach(function (nhanvien) {

    const phong_ban = nhanvien.phong_ban;

    if (!dsphongban[phong_ban]) {
      dsphongban[phong_ban] = {
        pb: [],
        namCount: 0,
        nuCount: 0,
        pbCount: 0,
      };
    }
    dsphongban[phong_ban].pb.push(nhanvien);

    if (nhanvien.gioi_tinh === 'Nam') {
      dsphongban[phong_ban].namCount++;
    } else if (nhanvien.gioi_tinh === 'Nữ') {
      dsphongban[phong_ban].nuCount++;
    }
    dsphongban[phong_ban].pbCount = dsphongban[phong_ban].namCount + dsphongban[phong_ban].nuCount;

  });

  const page = parseInt(req.query.page) || 1; // Get the current page from the query parameter (default to 1 if not provided)
    // const itemsPerPage = 2;
    // const startIndex = (page - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const dataSubset = infos.slice(startIndex, endIndex); // Subset of data for the current page

        return res.render('departments', {dsphongban, currentPage: page});

    } catch (e) {
        console.log(e)
    }

}

let getStaffManage = async (req, res) => {
    try {
        let staff = await db.Staff.findAll();
        return res.render('staffmanage', { staff: staff });
    } catch (e) {
        console.log(e)
    }
}

let getNewStaff = async (req, res) => {
    try {
        return res.render('newstaff');
    } catch (e) {
        console.log(e)
    }
}

let postNewStaff = async (req, res) => {
    try {
        let message = await staffManageService.createNewStaff(req.body);
        console.log(message);
        return res.send('Thêm nhân viên mới thành công');
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getHomePage: getHomePage,
    getDepartment: getDepartment,
    getNewStaff: getNewStaff,
    getStaffManage: getStaffManage,
    postNewStaff: postNewStaff
}