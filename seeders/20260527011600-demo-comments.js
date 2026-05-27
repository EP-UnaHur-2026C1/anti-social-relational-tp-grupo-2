'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    const date2 = new Date();
    date2.setMonth(date2.getMonth() - 2);
    const date8 = new Date();
    date8.setMonth(date8.getMonth() - 8);

    await queryInterface.bulkInsert('Comments', [
      {
        id: 1,
        content: '¡Muchos éxitos en tu nuevo camino, Juan!',
        isVisible: true,
        userId: 2,
        postId: 1,
        commentedAt: now,
        createdAt: now,
        updatedAt: now
      },
      {
        id: 2,
        content: '¡Excelente receta! ¿Podrías compartir los ingredientes?',
        isVisible: true,
        userId: 4,
        postId: 2,
        commentedAt: date2,
        createdAt: date2,
        updatedAt: date2
      },
      {
        id: 3,
        content: 'A mí también me sorprendió la velocidad de esta versión.',
        isVisible: true,
        userId: 1,
        postId: 3,
        commentedAt: date8,
        createdAt: date8,
        updatedAt: date8
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
