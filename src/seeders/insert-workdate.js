'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Workdays', [{
    workdate_id: "0000520231005",
    id: "00005",
    date: "2023/10/05",
    work_status: "1",
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};