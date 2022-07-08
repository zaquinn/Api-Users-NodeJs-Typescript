import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListService from "../../services/user/userList.service";

const userListController = async (request: Request, response: Response) => {
  try {
    const users = await userListService();

    return response.send(users);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default userListController;
