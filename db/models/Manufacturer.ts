import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Product } from './Product'

type ManufacturerAssociations = 'products'

export class Manufacturer extends Model<
  InferAttributes<Manufacturer, {omit: ManufacturerAssociations}>,
  InferCreationAttributes<Manufacturer, {omit: ManufacturerAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // Manufacturer hasMany Product (as Products)
  declare products?: NonAttribute<Product[]>
  declare getProducts: HasManyGetAssociationsMixin<Product>
  declare setProducts: HasManySetAssociationsMixin<Product, number>
  declare addProduct: HasManyAddAssociationMixin<Product, number>
  declare addProducts: HasManyAddAssociationsMixin<Product, number>
  declare createProduct: HasManyCreateAssociationMixin<Product>
  declare removeProduct: HasManyRemoveAssociationMixin<Product, number>
  declare removeProducts: HasManyRemoveAssociationsMixin<Product, number>
  declare hasProduct: HasManyHasAssociationMixin<Product, number>
  declare hasProducts: HasManyHasAssociationsMixin<Product, number>
  declare countProducts: HasManyCountAssociationsMixin
  
  declare static associations: {
    products: Association<Manufacturer, Product>
  }

  static initModel(sequelize: Sequelize): typeof Manufacturer {
    Manufacturer.init({
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
      tableName: 'manufacturer',
      paranoid: true
    })
    
    return Manufacturer
  }
}
