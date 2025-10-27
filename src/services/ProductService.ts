import ProductModel, * as Types from '@/db/models/ProductModel';

export class ProductService {
  static async create (payload: Types.ProductInput): Promise<Types.ProductOuput>  {
    return await ProductModel.create(payload);
  }
}