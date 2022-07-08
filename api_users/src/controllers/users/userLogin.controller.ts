import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userLoginService from "../../services/user/userLogin.service";

const userLoginController = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const token = await userLoginService({ email, password });

    return response.status(201).json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default userLoginController;
