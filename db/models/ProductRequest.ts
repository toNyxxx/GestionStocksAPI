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
import type { Department } from './Department'
import type { Product } from './Product'
import type { ProductOperation } from './ProductOperation'
import type { RequestState } from './RequestState'

type ProductRequestAssociations = 'department' | 'product' | 'requestStates' | 'productOperation'

export class ProductRequest extends Model<
  InferAttributes<ProductRequest, {omit: ProductRequestAssociations}>,
  InferCreationAttributes<ProductRequest, {omit: ProductRequestAssociations}>
> {
  declare id: CreationOptional<number>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>

  // ProductRequest belongsTo Department
  declare department?: NonAttribute<Department>
  declare getDepartment: BelongsToGetAssociationMixin<Department>
  declare setDepartment: BelongsToSetAssociationMixin<Department, number>
  declare createDepartment: BelongsToCreateAssociationMixin<Department>
  
  // ProductRequest belongsTo Product
  declare product?: NonAttribute<Product>
  declare getProduct: BelongsToGetAssociationMixin<Product>
  declare setProduct: BelongsToSetAssociationMixin<Product, number>
  declare createProduct: BelongsToCreateAssociationMixin<Product>
  
  // ProductRequest belongsToMany RequestState
  declare requestStates?: NonAttribute<RequestState[]>
  declare getRequestStates: BelongsToManyGetAssociationsMixin<RequestState>
  declare setRequestStates: BelongsToManySetAssociationsMixin<RequestState, number>
  declare addRequestState: BelongsToManyAddAssociationMixin<RequestState, number>
  declare addRequestStates: BelongsToManyAddAssociationsMixin<RequestState, number>
  declare createRequestState: BelongsToManyCreateAssociationMixin<RequestState>
  declare removeRequestState: BelongsToManyRemoveAssociationMixin<RequestState, number>
  declare removeRequestStates: BelongsToManyRemoveAssociationsMixin<RequestState, number>
  declare hasRequestState: BelongsToManyHasAssociationMixin<RequestState, number>
  declare hasRequestStates: BelongsToManyHasAssociationsMixin<RequestState, number>
  declare countRequestStates: BelongsToManyCountAssociationsMixin
  
  // ProductRequest belongsTo ProductOperation
  declare productOperation?: NonAttribute<ProductOperation>
  declare getProductOperation: BelongsToGetAssociationMixin<ProductOperation>
  declare setProductOperation: BelongsToSetAssociationMixin<ProductOperation, number>
  declare createProductOperation: BelongsToCreateAssociationMixin<ProductOperation>
  
  declare static associations: {
    department: Association<ProductRequest, Department>,
    product: Association<ProductRequest, Product>,
    requestStates: Association<ProductRequest, RequestState>,
    productOperation: Association<ProductRequest, ProductOperation>
  }

  static initModel(sequelize: Sequelize): typeof ProductRequest {
    ProductRequest.init({
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
      tableName: 'product_request',
      paranoid: true
    })
    
    return ProductRequest
  }
}
