import "reflect-metadata";
import "@shared/container";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "@shared/infra/typeorm";
import { AppError } from "@shared/errors/AppError";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, nex: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
