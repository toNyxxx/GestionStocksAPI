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

type GroupAssociations = 'products'

export class Group extends Model<
  InferAttributes<Group, {omit: GroupAssociations}>,
  InferCreationAttributes<Group, {omit: GroupAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare threshold: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // Group belongsToMany Product
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
    products: Association<Group, Product>
  }

  static initModel(sequelize: Sequelize): typeof Group {
    Group.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      threshold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2
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
      tableName: 'group',
      paranoid: true
    })
    
    return Group
  }
}
