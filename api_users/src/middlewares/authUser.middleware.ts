import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const token = request.headers.authorization;

    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      (error: any, decoded: any) => {
        request.userEmail = decoded.email;
        next();
      }
    );
  } catch (error) {
    return response.status(401).json({ message: "Invalid Token" });
  }
};
