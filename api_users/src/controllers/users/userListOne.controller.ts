import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";

const userListOneController = async (request: Request, response: Response) => {
  try {
    const user = await userListOneService({
      authorization: request.headers.authorization,
    });

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
