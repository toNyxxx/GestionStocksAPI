const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('product', {
      fields: ['manufacturer_id'],
      type: 'foreign key',
      name: 'product_manufacturer_id_fkey',
      references: {
        table: 'manufacturer',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_request', {
      fields: ['department_id'],
      type: 'foreign key',
      name: 'product_request_department_id_fkey',
      references: {
        table: 'departments',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_request', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'product_request_product_id_fkey',
      references: {
        table: 'product',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_request', {
      fields: ['product_operation_id'],
      type: 'foreign key',
      name: 'product_request_product_operation_id_fkey',
      references: {
        table: 'product_operation',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_request_state', {
      fields: ['product_request_id'],
      type: 'foreign key',
      name: 'product_request_state_product_request_id_fkey',
      references: {
        table: 'product_request',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_request_state', {
      fields: ['request_state_id'],
      type: 'foreign key',
      name: 'product_request_state_request_state_id_fkey',
      references: {
        table: 'request_state',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_group', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'product_group_product_id_fkey',
      references: {
        table: 'product',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_group', {
      fields: ['group_id'],
      type: 'foreign key',
      name: 'product_group_group_id_fkey',
      references: {
        table: 'group',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_supplier', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'product_supplier_product_id_fkey',
      references: {
        table: 'product',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_supplier', {
      fields: ['supplier_id'],
      type: 'foreign key',
      name: 'product_supplier_supplier_id_fkey',
      references: {
        table: 'supplier',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('equipment', {
      fields: ['manufacturer_id'],
      type: 'foreign key',
      name: 'equipment_manufacturer_id_fkey',
      references: {
        table: 'manufacturer',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('equipment_category', {
      fields: ['equipment_id'],
      type: 'foreign key',
      name: 'equipment_category_equipment_id_fkey',
      references: {
        table: 'equipment',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('equipment_category', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'equipment_category_category_id_fkey',
      references: {
        table: 'category',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_equipment', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'product_equipment_product_id_fkey',
      references: {
        table: 'product',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('product_equipment', {
      fields: ['equipment_id'],
      type: 'foreign key',
      name: 'product_equipment_equipment_id_fkey',
      references: {
        table: 'equipment',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('product', 'product_manufacturer_id_fkey')
    await queryInterface.removeConstraint('product_request', 'product_request_department_id_fkey')
    await queryInterface.removeConstraint('product_request', 'product_request_product_id_fkey')
    await queryInterface.removeConstraint('product_request', 'product_request_product_operation_id_fkey')
    await queryInterface.removeConstraint('product_request_state', 'product_request_state_product_request_id_fkey')
    await queryInterface.removeConstraint('product_request_state', 'product_request_state_request_state_id_fkey')
    await queryInterface.removeConstraint('product_group', 'product_group_product_id_fkey')
    await queryInterface.removeConstraint('product_group', 'product_group_group_id_fkey')
    await queryInterface.removeConstraint('product_supplier', 'product_supplier_product_id_fkey')
    await queryInterface.removeConstraint('product_supplier', 'product_supplier_supplier_id_fkey')
    await queryInterface.removeConstraint('equipment', 'equipment_manufacturer_id_fkey')
    await queryInterface.removeConstraint('equipment_category', 'equipment_category_equipment_id_fkey')
    await queryInterface.removeConstraint('equipment_category', 'equipment_category_category_id_fkey')
    await queryInterface.removeConstraint('product_equipment', 'product_equipment_product_id_fkey')
    await queryInterface.removeConstraint('product_equipment', 'product_equipment_equipment_id_fkey')
  }
};