'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        nickname: 'juan_perez',
        name: 'Juan Pérez',
        email: 'juan.perez@email.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nickname: 'maria_gomez',
        name: 'María Gómez',
        email: 'maria.gomez@email.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nickname: 'carlos_dev',
        name: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@email.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        nickname: 'ana_travels',
        name: 'Ana Martínez',
        email: 'ana.martinez@email.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
