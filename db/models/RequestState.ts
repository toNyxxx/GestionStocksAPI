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
import type { ProductRequest } from './ProductRequest'

type RequestStateAssociations = 'productRequests'

export class RequestState extends Model<
  InferAttributes<RequestState, {omit: RequestStateAssociations}>,
  InferCreationAttributes<RequestState, {omit: RequestStateAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // RequestState belongsToMany ProductRequest
  declare productRequests?: NonAttribute<ProductRequest[]>
  declare getProductRequests: BelongsToManyGetAssociationsMixin<ProductRequest>
  declare setProductRequests: BelongsToManySetAssociationsMixin<ProductRequest, number>
  declare addProductRequest: BelongsToManyAddAssociationMixin<ProductRequest, number>
  declare addProductRequests: BelongsToManyAddAssociationsMixin<ProductRequest, number>
  declare createProductRequest: BelongsToManyCreateAssociationMixin<ProductRequest>
  declare removeProductRequest: BelongsToManyRemoveAssociationMixin<ProductRequest, number>
  declare removeProductRequests: BelongsToManyRemoveAssociationsMixin<ProductRequest, number>
  declare hasProductRequest: BelongsToManyHasAssociationMixin<ProductRequest, number>
  declare hasProductRequests: BelongsToManyHasAssociationsMixin<ProductRequest, number>
  declare countProductRequests: BelongsToManyCountAssociationsMixin
  
  declare static associations: {
    productRequests: Association<RequestState, ProductRequest>
  }

  static initModel(sequelize: Sequelize): typeof RequestState {
    RequestState.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
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
      tableName: 'request_state',
      paranoid: true
    })
    
    return RequestState
  }
}
