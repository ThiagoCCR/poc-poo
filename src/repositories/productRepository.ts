import prisma from "../db/db";
import { Product } from "../models/Product";

interface IRequest {
  name: string;
  productClass: string;
}

export class ProductRepository {
  constructor() {}

  async create({ name, productClass }: IRequest): Promise<Product> {
    const newProduct = await prisma.Products.create({
      data: {
        name,
        classId: productClass,
      },
    });

    return newProduct;
  }

  async read(): Promise<Product[]> {
    const products = await prisma.Products.findMany({});

    return products;
  }
}
