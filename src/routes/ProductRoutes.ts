import { ProductController } from "@/controllers/ProductController";
import { Router } from "express";

export const ProductRoutes = Router();

ProductRoutes.get("/", ProductController.getAll);

ProductRoutes.post("/", ProductController.create);

ProductRoutes.get("/:id", ProductController.getById);

ProductRoutes.put("/:id", ProductController.update);

ProductRoutes.delete("/:id", ProductController.destroy);
