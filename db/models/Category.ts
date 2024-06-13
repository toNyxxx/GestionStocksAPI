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

type CategoryAssociations = 'equipments'

export class Category extends Model<
  InferAttributes<Category, {omit: CategoryAssociations}>,
  InferCreationAttributes<Category, {omit: CategoryAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // Category belongsToMany Equipment
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
    equipments: Association<Category, Equipment>
  }

  static initModel(sequelize: Sequelize): typeof Category {
    Category.init({
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
      tableName: 'category',
      paranoid: true
    })
    
    return Category
  }
}
