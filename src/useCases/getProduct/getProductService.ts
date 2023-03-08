import { Product } from "../../models/Product";
import { ProductRepository } from "../../repositories/productRepository";

export class GetProductService {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const productList: Product[] = await this.productRepository.read();

    return productList;
  }
}
