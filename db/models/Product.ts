import {
  Association,
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyHasAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Equipment } from './Equipment'
import type { Group } from './Group'
import type { Supplier } from './Supplier'

type ProductAssociations = 'groups' | 'suppliers' | 'equipments'

export class Product extends Model<
  InferAttributes<Product, {omit: ProductAssociations}>,
  InferCreationAttributes<Product, {omit: ProductAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare barcode: string | null
  declare glpiRef: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // Product belongsToMany Group
  declare groups?: NonAttribute<Group[]>
  declare getGroups: BelongsToManyGetAssociationsMixin<Group>
  declare setGroups: BelongsToManySetAssociationsMixin<Group, number>
  declare addGroup: BelongsToManyAddAssociationMixin<Group, number>
  declare addGroups: BelongsToManyAddAssociationsMixin<Group, number>
  declare createGroup: BelongsToManyCreateAssociationMixin<Group>
  declare removeGroup: BelongsToManyRemoveAssociationMixin<Group, number>
  declare removeGroups: BelongsToManyRemoveAssociationsMixin<Group, number>
  declare hasGroup: BelongsToManyHasAssociationMixin<Group, number>
  declare hasGroups: BelongsToManyHasAssociationsMixin<Group, number>
  declare countGroups: BelongsToManyCountAssociationsMixin
  
  // Product belongsToMany Supplier
  declare suppliers?: NonAttribute<Supplier[]>
  declare getSuppliers: BelongsToManyGetAssociationsMixin<Supplier>
  declare setSuppliers: BelongsToManySetAssociationsMixin<Supplier, number>
  declare addSupplier: BelongsToManyAddAssociationMixin<Supplier, number>
  declare addSuppliers: BelongsToManyAddAssociationsMixin<Supplier, number>
  declare createSupplier: BelongsToManyCreateAssociationMixin<Supplier>
  declare removeSupplier: BelongsToManyRemoveAssociationMixin<Supplier, number>
  declare removeSuppliers: BelongsToManyRemoveAssociationsMixin<Supplier, number>
  declare hasSupplier: BelongsToManyHasAssociationMixin<Supplier, number>
  declare hasSuppliers: BelongsToManyHasAssociationsMixin<Supplier, number>
  declare countSuppliers: BelongsToManyCountAssociationsMixin
  
  // Product belongsToMany Equipment
  declare equipments?: NonAttribute<Equipment[]>
  declare getEquipments: BelongsToManyGetAssociationsMixin<Equipment>
  declare setEquipments: BelongsToManySetAssociationsMixin<Equipment, number>
  declare addEquipment: BelongsToManyAddAssociationMixin<Equipment, number>
  declare addEquipments: BelongsToManyAddAssociationsMixin<Equipment, number>
  declare createEquipment: BelongsToManyCreateAssociationMixin<Equipment>
  declare removeEquipment: BelongsToManyRemoveAssociationMixin<Equipment, number>
  declare removeEquipments: BelongsToManyRemoveAssociationsMixin<Equipment, number>
  declare hasEquipment: BelongsToManyHasAssociationMixin<Equipment, number>
  declare hasEquipments: BelongsToManyHasAssociationsMixin<Equipment, number>
  declare countEquipments: BelongsToManyCountAssociationsMixin
  
  declare static associations: {
    groups: Association<Product, Group>,
    suppliers: Association<Product, Supplier>,
    equipments: Association<Product, Equipment>
  }

  static initModel(sequelize: Sequelize): typeof Product {
    Product.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      barcode: {
        type: DataTypes.STRING
      },
      glpiRef: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'product',
      paranoid: true
    })
    
    return Product
  }
}
