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

      const product = await ProductService.create(props);

      if (!product) {
        throw new Error('Internal server error');
      }

      return res.status(201).json({ product });
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

  static async getById (req: Request, res: Response): Promise<Response> {
    try {
      const id = +req.params.id;

      if (!id) {
        throw new Error('Product id is required!');
      }

      const product = await ProductService.getById(id);

      if (!product) {
        throw new Error('Product not found!');
      }

      return res.status(200).json({ product });
    } catch (error: any) {
      console.error({ params: req.body, error });

      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  static async update (req: Request, res: Response): Promise<Response> {
    try {  
      const id = +req.params.id;

      if (!id) {
        throw new Error('Product id is required!');
      }

      const product = await ProductService.getById(id);

      if (!product) {
        throw new Error('Product not found!');
      }

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

      const updatedProduct = await ProductService.update(id, props);

      if (!product) {
        throw new Error('Internal server error');
      }

      return res.status(201).json({ product: updatedProduct });
    } catch (error: any) {
      console.error({ params: req.body, error });

      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  static async destroy (req: Request, res: Response): Promise<Response> {
    try {  
      const id = +req.params.id;

      if (!id) {
        throw new Error('Product id is required!');
      }

      await ProductService.destroy(id);

      return res.status(200).json({ message: 'Product deleted' });
    } catch (error: any) {
      console.error({ params: req.body, error });

      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }
}