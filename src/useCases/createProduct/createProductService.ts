import { Product } from "../../models/Product";
import { ProductRepository } from "../../repositories/productRepository";

interface IRequest {
  name: string;
  productClass: string;
}

export class CreateProductService {
  constructor(private createProductRepository: ProductRepository) {}

  async execute({ name, productClass }: IRequest): Promise<Product> {
    const newProduct: Product = await this.createProductRepository.create({
      name,
      productClass,
    });

    return newProduct;
  }
}
