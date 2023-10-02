import db from "../models/index";
import bcrypt from 'bcrypt';
let hashPassword = require('./encryptPassword');

let createNewStaff = async (staff) => {

    return new Promise(async(resolve, reject) => {

        try{
            await db.Staff.create({

                id: staff.id,
                ho_ten: staff.ho_ten,
                gioi_tinh: staff.gioi_tinh,
                tuoi: staff.tuoi,
                phong_ban: staff.phong_ban,
                dia_chi: staff.dia_chi
                
            })

            resolve('Thêm nhân viên mới thành công!')

        } catch(e){
            reject(e);
        }
    }
    )
}


let createAccount = async (account) => {

    return new Promise(async(resolve, reject) => {
        
        try{
            let hashPass = await hashPassword(account.password);
            await db.Account.create({

                id: account.id,
                username: account.username,
                password: hashPass
                
            })

            resolve('Thêm tài khoản thành công!')

        } catch(e){
            reject(e);
        }
    }
    )
}


let loginToHome = async (account) => {

    return new Promise(async(resolve, reject) => {

        
        try{

            //let hashPass = await hashPassword(account.password);
           let user = await db.Account.findOne({

                //where: { username: account.username, password: hashPass}
                where: { username: account.username }
            
            })
            let compare = bcrypt.compareSync(account.password, user.password);

            if (compare == true) {
            
                resolve('1')
            }else {
                resolve('2')       
            }     

        } catch(e){
            reject(e);
        }
    }
    )
}

module.exports = {
    createNewStaff: createNewStaff,
    loginToHome: loginToHome,
    createAccount: createAccount
}