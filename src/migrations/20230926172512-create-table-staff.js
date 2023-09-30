'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Staffs', {
      id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
          },
          ho_ten: {
            type: Sequelize.STRING,
            allowNull: false
          },
          gioi_tinh: {
            type: Sequelize.STRING,
            allowNull: false
          },
          tuoi: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          phong_ban: {
            type: Sequelize.STRING,
            allowNull: false
          },
          dia_chi: {
            type: Sequelize.STRING,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
          }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Staffs');
  }
};