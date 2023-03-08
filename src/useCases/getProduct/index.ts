import { ProductRepository } from "../../repositories/productRepository";
import { GetProductController } from "./getProductController";
import { GetProductService } from "./getProductService";

const productRepository = new ProductRepository
const getProductService = new GetProductService(productRepository);
export const createProductController = new GetProductController(
    getProductService
);