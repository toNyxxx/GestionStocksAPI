'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Departments', [
      {
        name: 'DSI',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ressources humaines',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Affaires scolaires',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Finances',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jeunesse et sports',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Protocole',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Departments', null, {});
  }
};
