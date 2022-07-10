import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import cartDelProdService from "../../services/cart/cartDelProd.service";

const cartDelProdController = async (request: Request, response: Response) => {
  try {
    const { product_id } = request.params;
    const { userEmail } = request;

    const cartDel = cartDelProdService(userEmail, product_id);

    return response.sendStatus(204);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default cartDelProdController;
