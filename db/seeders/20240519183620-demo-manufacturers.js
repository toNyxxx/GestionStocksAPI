'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Manufacturer', [
      { "name": "HP", "created_at": new Date(), "updated_at": new Date() },
      { "name": "EPSON", "created_at": new Date(), "updated_at": new Date() },
      { "name": "SAMSUNG", "created_at": new Date(), "updated_at": new Date() },
      { "name": "BROTHER", "created_at": new Date(), "updated_at": new Date() },
      { "name": "LEXMARK", "created_at": new Date(), "updated_at": new Date() },
      { "name": "CANON", "created_at": new Date(), "updated_at": new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Manufacturer', null, {});
  }
};
