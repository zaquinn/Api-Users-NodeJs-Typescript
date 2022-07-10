import cartAddProdService from "../../services/cart/cartAddProd.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

const cartAddProdController = async (request: Request, response: Response) => {
  try {
    const { userEmail } = request;
    const { product_id } = request.body;

    const cartAdd = await cartAddProdService(product_id, userEmail);

    response.json(cartAdd);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default cartAddProdController;
