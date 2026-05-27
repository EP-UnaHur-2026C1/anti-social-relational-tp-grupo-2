'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        description: '¡Hola a todos! Acabo de empezar mi primer trabajo como desarrollador web. Muy emocionado por lo que viene.',
        userId: 1,
        publicatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        description: 'Hoy preparé una tarta de manzana casera. Quedó deliciosa 🍏🥧',
        userId: 2,
        publicatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        description: 'Probando la nueva versión de Node.js. El rendimiento ha mejorado muchísimo.',
        userId: 3,
        publicatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        description: 'Hermosa tarde en Bariloche, disfrutando de los paisajes del sur 🏔️',
        userId: 4,
        publicatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
