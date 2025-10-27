import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import { ProductEntity } from '@/entities/ProductEntity'


export interface ProductPaginationAttributes {
  name?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}
export interface ProductInput extends Optional<ProductEntity, 'id'> {}
export interface ProductOuput extends Required<ProductEntity> {}

class ProductModel extends Model<ProductEntity, ProductInput> implements ProductEntity {
  public id!: number
  public name!: string
  public price!: number
  public category!: string
  public estoque!: number
  public discount!: number

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

ProductModel.init({
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  price: {
    allowNull: false,
    type: DataTypes.FLOAT
  },

  category: {
    allowNull: true,
    type: DataTypes.STRING
  },

  estoque: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },

  discount: {
    defaultValue: 0,
    allowNull: false,
    type: DataTypes.FLOAT
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },

  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },

  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default ProductModel