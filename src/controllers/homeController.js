import db from "../models/index";


let getHomePage = async (req, res) =>{

    try{

        return res.render('index');

    } catch(e){
        console.log(e)
    }

}


let getDepartment = async(req, res) =>{

    try{

        let data = await db.Staff.findAll();

        return res.render('departments');

    } catch(e){
        console.log(e)
    }

}


module.exports = {
    getHomePage: getHomePage,
    getDepartment:getDepartment
}