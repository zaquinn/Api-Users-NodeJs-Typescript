import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import buyCreateService from "../../services/buy/buyCreate.service";

const buyCreateController = async (request: Request, response: Response) => {
  try {
    const { userEmail } = request;
    const buy = await buyCreateService(userEmail);
    return response.status(201).json(buy);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default buyCreateController;
