import { Router } from "express";
import { createProductController } from "../useCases/createProduct";

const productRouter = Router();

productRouter.post("/products", (req, res) =>
  createProductController.handle(req, res)
);

productRouter.get("/products", (req, res) =>
  getProductController.handle(req, res)
);

export default productRouter;
