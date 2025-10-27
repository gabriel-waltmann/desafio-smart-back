import { Router } from 'express';
import { ProductRoutes } from '@/routes/ProductRoutes';

export const Routes = Router();

Routes.use('/product', ProductRoutes);
  