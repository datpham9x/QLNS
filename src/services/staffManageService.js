import db from "../models/index";
import bcrypt from 'bcrypt';
let hashPassword = require('./encryptPassword');

let createNewStaff = async (staff) => {

    return new Promise(async (resolve, reject) => {

        try {
            await db.Staff.create({

                id: staff.id,
                ho_ten: staff.ho_ten,
                gioi_tinh: staff.gioi_tinh,
                tuoi: staff.tuoi,
                phong_ban: staff.phong_ban,
                dia_chi: staff.dia_chi

            })

           let allStaffs = await db.Staff.findAll();
            resolve(allStaffs)

        } catch (e) {
            reject(e);
        }
    }
    )
}


let createAccount = async (account) => {

    return new Promise(async (resolve, reject) => {

        try {
            let hashPass = await hashPassword(account.password);
            await db.Account.create({

                id: account.id,
                username: account.username,
                password: hashPass

            })

            resolve('Thêm tài khoản thành công!')

        } catch (e) {
            reject(e);
        }
    }
    )
}


let loginToHome = async (account) => {

    return new Promise(async (resolve, reject) => {


        try {

            let user = await db.Account.findOne({

                where: { username: account.username }

            })
            let compare = bcrypt.compareSync(account.password, user.password);

            if (compare == true) {

                resolve('1')
            } else {
                resolve('2')
            }

        } catch (e) {
            reject(e);
        }
    }
    )
}

let findOneStaff = (userID) => {
    return new Promise(async (resolve, reject) => {

        try {

            let staff = await db.Staff.findOne({
                where: { id: userID }
            })
            resolve(staff)

        } catch (e) {
            reject(e)
        }

    })
}


let updateStaff = (staff) => {

    return new Promise(async (reslove, reject) => {
        try {

            let staffUpdate = await db.Staff.findOne({
                where: { id: staff.id }
            })

            if (staff) {

                staffUpdate.id = staff.id;
                staffUpdate.ho_ten = staff.ho_ten;
                staffUpdate.gioi_tinh = staff.gioi_tinh;
                staffUpdate.tuoi = staff.tuoi;
                staffUpdate.phong_ban = staff.phong_ban;
                staffUpdate.dia_chi = staff.dia_chi;

                await staffUpdate.save();

                let allStaffs = await db.Staff.findAll();
                reslove(allStaffs)
            } else {
                reslove()
            }
        } catch (e) {
            reject(e)
        }
    })

}

let deleteStaff = (userID) => {

    return new Promise(async (reslove, reject) => {
        try {

            let staffDelete = await db.Staff.findOne({
                where: { id: userID }
            })

            if (staffDelete) {   

                await staffDelete.destroy();

                let allStaffs = await db.Staff.findAll();
                reslove(allStaffs)
            } else {
                reslove()
            }
        } catch (e) {
            reject(e)
        }
    })

}

module.exports = {
    createNewStaff: createNewStaff,
    loginToHome: loginToHome,
    createAccount: createAccount,
    findOneStaff: findOneStaff,
    updateStaff: updateStaff,
    deleteStaff: deleteStaff
}