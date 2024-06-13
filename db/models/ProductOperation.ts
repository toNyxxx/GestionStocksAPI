import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class ProductOperation extends Model<
  InferAttributes<ProductOperation>,
  InferCreationAttributes<ProductOperation>
> {
  declare id: CreationOptional<number>
  declare comment: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof ProductOperation {
    ProductOperation.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      comment: {
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
      tableName: 'product_operation',
      paranoid: true
    })
    
    return ProductOperation
  }
}
