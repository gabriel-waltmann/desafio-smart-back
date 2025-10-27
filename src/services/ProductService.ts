import ProductModel, * as Types from '@/db/models/ProductModel';
import { WhereOptions } from 'sequelize';
import { ProductEntity } from '@/entities/ProductEntity';
import { Order, Op } from 'sequelize';

export class ProductService {
  static async create (payload: Types.ProductInput): Promise<Types.ProductOuput>  {
    return await ProductModel.create(payload);
  }

  static async getAll (payload: Types.ProductPaginationAttributes): Promise<{ products: Types.ProductOuput[] }> {
    let where: WhereOptions = {};

    if (payload.name) {
      where = { name: { [Op.match]: payload.name } } as WhereOptions;
    }

    if (payload.category) {
      where = { category: { [Op.match]: payload.category } } as WhereOptions;
    }

    if (payload.minPrice && payload.maxPrice) {
      where = { price: { [Op.between]: [payload.minPrice, payload.maxPrice] } } as WhereOptions;
    }

    const products = await ProductModel.findAll({ where });

    return ({ products });
  }

  static async getById (id: number): Promise<Types.ProductOuput> {
    const product = await ProductModel.findByPk(id);

    if (!product) throw new Error("Product not found")

    return product ?? null;
  }

  static async update (id: number, payload: Types.ProductInput): Promise<Types.ProductOuput>  {
    const product = await ProductModel.findByPk(id);

    if (!product) throw new Error("Product not found")

    await product.update(payload);

    return product;
  }

  static async destroy (id: number): Promise<void> {
    const product = await ProductModel.findByPk(id);

    if (!product) throw new Error("Product not found")

    await product.destroy();
  }
}