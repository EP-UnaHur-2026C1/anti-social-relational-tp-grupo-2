'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostImages', [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1519869325930-281384150729',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PostImages', null, {});
  }
};
