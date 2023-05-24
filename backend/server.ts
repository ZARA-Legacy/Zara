import * as dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import authRoute from "./routes/authRoute";
import emailRoute from "./routes/emailRoute";
import routerP from "./routes/products";
import cartRoute from "./routes/cartRout";
import Product from "./models/Product";
import data from "./database/db";

import sequelize from "./database/index";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/auth", authRoute);
app.use("/products", routerP);
app.use("/cart", cartRoute);
app.use("/api", emailRoute);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});

// Call the function to insert dummy data
