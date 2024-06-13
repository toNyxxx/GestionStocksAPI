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
import type { Product } from './Product'

type SupplierAssociations = 'products'

export class Supplier extends Model<
  InferAttributes<Supplier, {omit: SupplierAssociations}>,
  InferCreationAttributes<Supplier, {omit: SupplierAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // Supplier belongsToMany Product
  declare products?: NonAttribute<Product[]>
  declare getProducts: BelongsToManyGetAssociationsMixin<Product>
  declare setProducts: BelongsToManySetAssociationsMixin<Product, number>
  declare addProduct: BelongsToManyAddAssociationMixin<Product, number>
  declare addProducts: BelongsToManyAddAssociationsMixin<Product, number>
  declare createProduct: BelongsToManyCreateAssociationMixin<Product>
  declare removeProduct: BelongsToManyRemoveAssociationMixin<Product, number>
  declare removeProducts: BelongsToManyRemoveAssociationsMixin<Product, number>
  declare hasProduct: BelongsToManyHasAssociationMixin<Product, number>
  declare hasProducts: BelongsToManyHasAssociationsMixin<Product, number>
  declare countProducts: BelongsToManyCountAssociationsMixin
  
  declare static associations: {
    products: Association<Supplier, Product>
  }

  static initModel(sequelize: Sequelize): typeof Supplier {
    Supplier.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
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
      tableName: 'supplier',
      paranoid: true
    })
    
    return Supplier
  }
}
