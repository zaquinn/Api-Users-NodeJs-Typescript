import productCreateService from "../../services/product/productCreate.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IProduct } from "../../interfaces/products";

const productCreateController = async (
  request: Request,
  response: Response
) => {
  try {
    const data = request.body;
    const product: IProduct = await productCreateService(data);

    return response.status(201).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default productCreateController;
