'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        id: 1,
        name: 'programacion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'cocina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'tecnologia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'viajes',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
