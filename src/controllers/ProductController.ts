import { Request, Response } from 'express';
import * as Types from '@/db/models/ProductModel';
import { ProductService } from '@/services/ProductService';

export class ProductController {
  static async create (req: Request, res: Response): Promise<Response> {
    try {  
      if (!req.body.name) {
        throw new Error('Name is required!');
      }

      if (!req.body.price) {
        throw new Error('Price is required!');
      }

      if (!req.body.category) {
        throw new Error('Category is required!');
      }

      if (!req.body.estoque) {
        throw new Error('Estoque is required!');
      }

      if (!req.body.discount) {
        throw new Error('Discount is required!');
      }

      const props: Types.ProductInput = {
        name: req.body.name,
        price: Number.parseFloat(req.body.price),
        category: req.body.category,
        estoque: Number.parseInt(req.body.estoque),
        discount: Number.parseFloat(req.body.discount)
      };

      const finance = await ProductService.create(props);

      if (!finance) {
        throw new Error('Internal server error');
      }

      return res.status(201).json({ finance });
    } catch (error: any) {
      console.error({ params: req.body, error });

      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  static async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const products = await ProductService.getAll();

      return res.status(200).json(products);
    } catch (error: any) {
      console.error({ params: req.body, error });

      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }
}