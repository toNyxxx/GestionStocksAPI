import type { Sequelize, Model } from 'sequelize'
import { Department } from './Department'
import { Product } from './Product'
import { OperationType } from './OperationType'
import { Group } from './Group'
import { Manufacturer } from './Manufacturer'
import { Supplier } from './Supplier'
import { ProductOperation } from './ProductOperation'
import { ProductRequest } from './ProductRequest'
import { RequestState } from './RequestState'
import { ProductRequestState } from './ProductRequestState'
import { ProductGroup } from './ProductGroup'
import { ProductSupplier } from './ProductSupplier'
import { Equipment } from './Equipment'
import { Category } from './Category'
import { EquipmentCategory } from './EquipmentCategory'

export {
  Department,
  Product,
  OperationType,
  Group,
  Manufacturer,
  Supplier,
  ProductOperation,
  ProductRequest,
  RequestState,
  ProductRequestState,
  ProductGroup,
  ProductSupplier,
  Equipment,
  Category,
  EquipmentCategory
}

export function initModels(sequelize: Sequelize) {
  Department.initModel(sequelize)
  Product.initModel(sequelize)
  OperationType.initModel(sequelize)
  Group.initModel(sequelize)
  Manufacturer.initModel(sequelize)
  Supplier.initModel(sequelize)
  ProductOperation.initModel(sequelize)
  ProductRequest.initModel(sequelize)
  RequestState.initModel(sequelize)
  ProductRequestState.initModel(sequelize)
  ProductGroup.initModel(sequelize)
  ProductSupplier.initModel(sequelize)
  Equipment.initModel(sequelize)
  Category.initModel(sequelize)
  EquipmentCategory.initModel(sequelize)

  Product.belongsToMany(Group, {
    as: 'groups',
    through: ProductGroup,
    foreignKey: 'product_id',
    otherKey: 'product_id',
    onDelete: 'CASCADE'
  })
  Product.belongsToMany(Supplier, {
    as: 'suppliers',
    through: ProductSupplier,
    foreignKey: 'product_id',
    otherKey: 'supplier_id',
    onDelete: 'CASCADE'
  })
  Product.belongsToMany(Equipment, {
    as: 'equipments',
    through: 'product_equipment',
    foreignKey: 'product_id',
    otherKey: 'equipment_id',
    onDelete: 'CASCADE'
  })
  Group.belongsToMany(Product, {
    as: 'products',
    through: ProductGroup,
    foreignKey: 'group_id',
    otherKey: 'group_id',
    onDelete: 'CASCADE'
  })
  Manufacturer.hasMany(Product, {
    as: 'products',
    foreignKey: 'manufacturer_id'
  })
  Supplier.belongsToMany(Product, {
    as: 'products',
    through: ProductSupplier,
    foreignKey: 'supplier_id',
    otherKey: 'supplier_id',
    onDelete: 'CASCADE'
  })
  ProductRequest.belongsTo(Department, {
    as: 'department',
    foreignKey: 'department_id'
  })
  ProductRequest.belongsTo(Product, {
    as: 'product',
    foreignKey: 'product_id'
  })
  ProductRequest.belongsToMany(RequestState, {
    as: 'requestStates',
    through: ProductRequestState,
    foreignKey: 'product_request_id',
    otherKey: 'product_request_id',
    onDelete: 'CASCADE'
  })
  ProductRequest.belongsTo(ProductOperation, {
    as: 'productOperation',
    foreignKey: 'product_operation_id'
  })
  RequestState.belongsToMany(ProductRequest, {
    as: 'productRequests',
    through: ProductRequestState,
    foreignKey: 'request_state_id',
    otherKey: 'request_state_id',
    onDelete: 'CASCADE'
  })
  Equipment.belongsToMany(Category, {
    as: 'categories',
    through: EquipmentCategory,
    foreignKey: 'equipment_id',
    otherKey: 'equipment_id',
    onDelete: 'CASCADE'
  })
  Equipment.belongsTo(Manufacturer, {
    as: 'manufacturer',
    foreignKey: 'manufacturer_id'
  })
  Category.belongsToMany(Equipment, {
    as: 'equipments',
    through: EquipmentCategory,
    foreignKey: 'category_id',
    otherKey: 'category_id',
    onDelete: 'CASCADE'
  })

  return {
    Department,
    Product,
    OperationType,
    Group,
    Manufacturer,
    Supplier,
    ProductOperation,
    ProductRequest,
    RequestState,
    ProductRequestState,
    ProductGroup,
    ProductSupplier,
    Equipment,
    Category,
    EquipmentCategory
  }
}
