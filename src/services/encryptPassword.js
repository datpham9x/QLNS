import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);


let hashPassword = async (password) => {

    return new Promise(async (resolve, reject) => {

        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)

        } catch (e) {
            reject(e);
        }
    }
    )
}

module.exports = hashPassword;
