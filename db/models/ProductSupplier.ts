import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class ProductSupplier extends Model<
  InferAttributes<ProductSupplier>,
  InferCreationAttributes<ProductSupplier>
> {
  declare id: CreationOptional<number>
  declare price: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof ProductSupplier {
    ProductSupplier.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      price: {
        type: DataTypes.FLOAT,
        defaultValue: 0
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
      tableName: 'product_supplier',
      paranoid: true
    })
    
    return ProductSupplier
  }
}
