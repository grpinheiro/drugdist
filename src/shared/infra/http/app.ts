import "reflect-metadata";
import "@shared/container";
import "dotenv/config";
import express from "express";

import "@shared/infra/typeorm";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

export { app };
