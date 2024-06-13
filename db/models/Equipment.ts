import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
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
import type { Category } from './Category'
import type { Manufacturer } from './Manufacturer'

type EquipmentAssociations = 'categories' | 'manufacturer'

export class Equipment extends Model<
  InferAttributes<Equipment, {omit: EquipmentAssociations}>,
  InferCreationAttributes<Equipment, {omit: EquipmentAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // Equipment belongsToMany Category
  declare categories?: NonAttribute<Category[]>
  declare getCategories: BelongsToManyGetAssociationsMixin<Category>
  declare setCategories: BelongsToManySetAssociationsMixin<Category, number>
  declare addCategory: BelongsToManyAddAssociationMixin<Category, number>
  declare addCategories: BelongsToManyAddAssociationsMixin<Category, number>
  declare createCategory: BelongsToManyCreateAssociationMixin<Category>
  declare removeCategory: BelongsToManyRemoveAssociationMixin<Category, number>
  declare removeCategories: BelongsToManyRemoveAssociationsMixin<Category, number>
  declare hasCategory: BelongsToManyHasAssociationMixin<Category, number>
  declare hasCategories: BelongsToManyHasAssociationsMixin<Category, number>
  declare countCategories: BelongsToManyCountAssociationsMixin
  
  // Equipment belongsTo Manufacturer
  declare manufacturer?: NonAttribute<Manufacturer>
  declare getManufacturer: BelongsToGetAssociationMixin<Manufacturer>
  declare setManufacturer: BelongsToSetAssociationMixin<Manufacturer, number>
  declare createManufacturer: BelongsToCreateAssociationMixin<Manufacturer>
  
  declare static associations: {
    categories: Association<Equipment, Category>,
    manufacturer: Association<Equipment, Manufacturer>
  }

  static initModel(sequelize: Sequelize): typeof Equipment {
    Equipment.init({
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
      tableName: 'equipment',
      paranoid: true
    })
    
    return Equipment
  }
}
