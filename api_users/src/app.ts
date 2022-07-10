import express, { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appError";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());

appRoutes(app);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(3000);
