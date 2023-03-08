import { Request, Response } from "express";
import { GetProductService } from "./getProductService";

export class GetProductController {
  constructor(private createProductService: GetProductService) {}

  handle(req: Request, res: Response): Response {
    const products = this.createProductService.execute();

    return res.status(201).send(products);
  }
}
