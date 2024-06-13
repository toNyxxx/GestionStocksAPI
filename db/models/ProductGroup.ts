import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class ProductGroup extends Model<
  InferAttributes<ProductGroup>,
  InferCreationAttributes<ProductGroup>
> {
  declare id: CreationOptional<number>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof ProductGroup {
    ProductGroup.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
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
      tableName: 'product_group',
      paranoid: true
    })
    
    return ProductGroup
  }
}
