import { ProductRepository } from "../../repositories/productRepository";
import { CreateProductController } from "./createProductController";
import { CreateProductService } from "./createProductService";

const productRepository = new ProductRepository
const createProductService = new CreateProductService(productRepository);
export const createProductController = new CreateProductController(
    createProductService
);