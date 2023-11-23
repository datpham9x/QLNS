const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
    'allstaff',
    'root',
    '123abc!@#ABC',
    {
        host: 'datpham94.ddns.net',
        dialect: 'mysql'
    }
);

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

module.exports = connectDB;
