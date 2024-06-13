const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_equipment', {
      productId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'product_id',
        primaryKey: true
      },
      equipmentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'equipment_id',
        primaryKey: true
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_equipment');
  },
};