import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

import sequelize from "./database/index";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
