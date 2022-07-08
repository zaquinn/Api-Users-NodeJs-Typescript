import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListOneService from "../../services/user/userListOne.service";

const userListOneController = async (request: Request, response: Response) => {
  try {
    const email = request.userEmail;

    const user = await userListOneService(email);

    return response.status(200).send(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default userListOneController;
