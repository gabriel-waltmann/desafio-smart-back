import ProductModel, * as Types from '@/db/models/ProductModel';

export class ProductService {
  static async create (payload: Types.ProductInput): Promise<Types.ProductOuput>  {
    return await ProductModel.create(payload);
  }

  static async getAll (): Promise<{ products: Types.ProductOuput[] }> {
    const products = await ProductModel.findAll();

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