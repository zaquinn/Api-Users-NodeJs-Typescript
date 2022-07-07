import { Request, Response } from "express";
import userListService from "../../services/user/userList.service";

const userListController = async (request: Request, response: Response) => {
  try {
    const users = await userListService();

    return response.send(users);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userListController;
