import db from "../models/index";


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

module.exports = {
    createNewStaff: createNewStaff
}