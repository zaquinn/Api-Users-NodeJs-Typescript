import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";

const userListOneController = async (request: Request, response: Response) => {
  try {
    const email = request.userEmail;

    const user = await userListOneService(email);

    return response.status(200).send(user);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userListOneController;
