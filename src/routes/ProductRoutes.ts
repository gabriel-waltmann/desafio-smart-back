import { ProductController } from "@/controllers/ProductController";
import { Router } from "express";

export const ProductRoutes = Router();

ProductRoutes.post("/", ProductController.create)