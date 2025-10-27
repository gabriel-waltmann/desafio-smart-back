import { ProductController } from "@/controllers/ProductController";
import { Router } from "express";

export const ProductRoutes = Router();

ProductRoutes.get("/", ProductController.getAll);

ProductRoutes.post("/", ProductController.create);