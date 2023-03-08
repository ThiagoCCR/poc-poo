import { Request, Response } from "express";
import { CreateProductService } from "./createProductService";

export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  handle(req: Request, res: Response): Response {
    const { name, productClass } = req.body;

    this.createProductService.execute({
      name,
      productClass,
    });

    return res.sendStatus(201);
  }
}
