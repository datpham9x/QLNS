'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Staffs', [{
    id: "00005",
    ho_ten: "Nguyễn Thị Nụ",
    gioi_tinh: "Nữ",
    tuoi: 29,
    phong_ban: "Kế Toán",
    dia_chi: "Quận 7, HCM",
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
