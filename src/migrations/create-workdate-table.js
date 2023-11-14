'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Workdays', {

        workdate_id: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          id: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
          },
          work_status: {
            type: Sequelize.TINYINT,
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
    await queryInterface.dropTable('Workdays');
  }
};