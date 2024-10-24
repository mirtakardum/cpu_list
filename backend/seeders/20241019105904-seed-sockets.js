'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sockets', [
      {
        name: 'AM4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'LGA1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('sockets', null, {});
  },
};
