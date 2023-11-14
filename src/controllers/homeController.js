import db from "../models/index";
import staffManageService from "../services/staffManageService"
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 



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
        // const dataSubset = db.Staff.slice(startIndex, endIndex); // Subset of data for the current page

        return res.render('departments', { dsphongban, currentPage: page });

    } catch (e) {
        console.log(e)
    }

}

let getStaffManage = async (req, res) => {
    try {
        if (req.session.logged) {
            let staff = await db.Staff.findAll();
            return res.render('staffmanage', { staff: staff });
        } else {
            req.session.back = "staffmanage";
            res.redirect('login');
        }

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
        let allStaffs = await staffManageService.createNewStaff(req.body);

        return res.render('staffmanage', {staff: allStaffs});
    } catch (e) {
        console.log(e)
    }
}

let getLogin = (req, res) => {
    let noti = null;
    try {
        return res.render('login', { noti: noti });
    } catch (e) {
        console.log(e)
    }
}

let postLogin = async (req, res) => {
    let noti = null;

    try {
        let message = await staffManageService.loginToHome(req.body);
        console.log(message);
        if (message == 1) {
            var session = req.session;
            session.logged = true;
            session.username = req.body.username;
            if (session.back) {
                console.log(session.back);
                res.redirect(session.back);
            }
            else {
                res.redirect("/");
            }   
        } else {
            noti = "Username hoặc Password không đúng!";
            return res.render('login', { noti: noti });
        }
    } catch (e) {
        console.log(e)
    }
}

let getNewAccount = (req, res) => {
    try {
        return res.render('newAccount');
    } catch (e) {
        console.log(e)
    }

}


let postNewAccount = async (req, res) => {
    try {
        let message = await staffManageService.createAccount(req.body);
        console.log(message);
        return res.send('Thêm tài khoản thành công');
    } catch (e) {
        console.log(e)
    }
}

let getQuit = (req, res) => {
    req.session.destroy();
    res.redirect('login');
}


let getEditStaff = async (req, res) => {
    let userID = req.query.id;
    try {
        console.log(userID)
        let staff = await staffManageService.findOneStaff(userID);
        console.log(staff);
        return res.render('editStaff', { staff: staff });
    } catch (e) {
        console.log(e)
    }
}

let putEditStaff = async (req, res) => {

    try {
        let staff = req.body;
        let allStaffs = await staffManageService.updateStaff(staff);
        return res.render('staffmanage', { staff: allStaffs });
    } catch (e) {
        console.log(e)

    }

}


let putDeleteStaff = async (req, res) => {

    try {
        let userID = req.query.id;
        console.log(userID)
        let allStaffs = await staffManageService.deleteStaff(userID);
        return res.render('staffmanage', { staff: allStaffs });
    } catch (e) {
        console.log(e)

    }

}


let getSalary = async (req, res) => {


    return res.render('salary')
}



/*Hàm tính số ngày trong tháng javascript*/
const get_day_of_month = (year, month) => {
    return new Date(year, month, 0).getDate();
};

let getCaclWorkday = async (req, res) => {

    let selectedMonth = req.query.month;
    let selectedYear = req.query.year;
    let selectID = req.query.manhanvien;

    let daysInMonth = get_day_of_month(selectedYear, selectedMonth)

    // Lấy danh sách ngày công cho nhân viên từ cơ sở dữ liệu dựa trên tháng và năm đã chọn
    let ngayCong = await db.Workday.findAll({
        where: {
            id: selectID,
            [Op.and]: [
              Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('date')), selectedMonth),
              Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('date')), selectedYear)
            ]
          }   
    });

    let count_workday = await db.Workday.count({
        where: {
            id: selectID,
            [Op.and]: [
              Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('date')), selectedMonth),
              Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('date')), selectedYear)
            ]
          }   
    });
    
    let Staff = await db.Staff.findOne({
        where: {
            id: selectID
          }   
    });
    
     let salary = count_workday * 475000
    
    return res.render('cacl-workday', { ngayCong: ngayCong, 
        selectedMonth: selectedMonth, 
        selectedYear: selectedYear, salary: salary, 
        count_workday: count_workday, selectID: selectID, 
        Staff: Staff,
        daysInMonth: daysInMonth
    });
}


let putEditWorkDay = async (req, res) => {

    try {
        let days = req.body;

        console.log(days);
        // let allStaffs = await staffManageService.updateStaff(staff);
        // return res.render('staffmanage', { staff: allStaffs });
    } catch (e) {
        console.log(e)

    }

}
module.exports = {
    getHomePage: getHomePage,
    getDepartment: getDepartment,
    getNewStaff: getNewStaff,
    getStaffManage: getStaffManage,
    postNewStaff: postNewStaff,
    getLogin: getLogin,
    postLogin: postLogin,
    getNewAccount: getNewAccount,
    postNewAccount: postNewAccount,
    getQuit: getQuit,
    getEditStaff: getEditStaff,
    putEditStaff: putEditStaff,
    putDeleteStaff: putDeleteStaff,
    getSalary: getSalary,
    getCaclWorkday: getCaclWorkday,
    putEditWorkDay: putEditWorkDay
}