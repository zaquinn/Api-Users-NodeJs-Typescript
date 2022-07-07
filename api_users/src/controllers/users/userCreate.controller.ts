import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (request: Request, response: Response) => {
  try {
    const { name, email, password } = request.newUser;

    const newUser = await userCreateService({ name, email, password });

    return response.status(201).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userCreateController;
