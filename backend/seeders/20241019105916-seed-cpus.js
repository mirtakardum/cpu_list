'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const sockets = await queryInterface.sequelize.query(
      `SELECT id, name FROM sockets;`
    );

    const socketRows = sockets[0];

    // Find socket IDs by name
    const am4Socket = socketRows.find(socket => socket.name === 'AM4');
    const lga1200Socket = socketRows.find(socket => socket.name === 'LGA1200');

    await queryInterface.bulkInsert('cpus', [
      {
        brand: 'AMD',
        model: 'Ryzen 5 5600X',
        socketId: am4Socket.id,
        clockSpeed: 3.7,
        cores: 6,
        threads: 12,
        tdp: 65,
        price: 299.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: 'Intel',
        model: 'Core i7-10700K',
        socketId: lga1200Socket.id,
        clockSpeed: 3.8,
        cores: 8,
        threads: 16,
        tdp: 125,
        price: 379.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cpus', null, {});
  },
};
