'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workday.init({
    workdate_id: {type: DataTypes.STRING, primaryKey: true},
    id: DataTypes.STRING,
    date: DataTypes.STRING,
    work_status: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Workday',
  });
  return Workday;
};


