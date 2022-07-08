import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userUpdatePasswordService from "../../services/user/userUpdatePassword.service";

const userUpdatePasswordController = async (
  request: Request,
  response: Response
) => {
  try {
    const email = request.userEmail;

    const { password } = request.body;

    if (!password) {
      throw new Error("No password given");
    }

    const user = await userUpdatePasswordService(email, password);

    return response.status(201).json({ message: "Password updated" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default userUpdatePasswordController;
