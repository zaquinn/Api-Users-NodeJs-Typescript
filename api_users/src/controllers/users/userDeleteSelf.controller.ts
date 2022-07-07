import { Request, Response } from "express";
import userDeleteSelfService from "../../services/user/userDeleteSelf.service";

const userDeleteSelfController = async (
  request: Request,
  response: Response
) => {
  try {
    const email = request.userEmail;

    const user = await userDeleteSelfService(email);

    return response.status(200).json({ message: "User deleted with success!" });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userDeleteSelfController;
