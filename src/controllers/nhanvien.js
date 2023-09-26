var express = require('express');
const router = express.Router();

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
    'allstaff',
    'root',
    '123abc!@#ABC',
    {
        host: '192.168.9.138',
        dialect: 'mysql'
    }
);


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});


const Infos = sequelize.define("Infos", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    ho_ten: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gioi_tinh: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tuoi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phong_ban: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dia_chi: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


sequelize.sync().then(() => {
    // console.log('Infos table created successfully!');
    // NhanVien.create({
    //     id: "00001",
    //     ho_ten: "Phạm Tiến Đạt",
    //     gioi_tinh: "Nam",
    //     tuoi: 29,
    //     phong_ban: "IT",
    //     dia_chi: "Quận Bình Thạnh, HCM"

    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });

    const getNhanVien = Infos.findAll();

}).catch((error) => {
    console.error('Unable to create table : ', error);
});