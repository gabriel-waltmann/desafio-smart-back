import { ProductController } from "@/controllers/ProductController";
import { Router } from "express";

export const ProductRoutes = Router();

ProductRoutes.get("/", ProductController.getAll);
ProductRoutes.get("/:id", ProductController.getById);

ProductRoutes.post("/", ProductController.create);