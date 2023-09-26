'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init({
    id: {type: DataTypes.STRING, primaryKey: true},
    ho_ten: DataTypes.STRING,
    gioi_tinh: DataTypes.STRING,
    tuoi: DataTypes.INTEGER,
    phong_ban: DataTypes.STRING,
    dia_chi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};


