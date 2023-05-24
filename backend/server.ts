import * as dotenv from "dotenv"
dotenv.config()

import express, { Express } from "express"
import cors from "cors"
import morgan from "morgan"
import authRoute from "./routes/authRoute"
import routerP from "./routes/products"
import cartRoute from "./routes/cartRout"
import Product from "./models/Product"
import data from "./database/db"

import sequelize from "./database/index"

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/auth", authRoute);
app.use("/products", routerP)
app.use("/cart", cartRoute)

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000")
  });
}).then(() => {
  async function insertDummyData() {
    try {
      // Iterate over the data array
      for (const product of data) {
        const { name, image, price, quantity, gender, category, description } = product;
  
        // Check if a similar entry already exists
        const existingProduct = await Product.findOne({
          where: {
            name,
            gender,
            category,
          },
        });
  
        if (!existingProduct) {
          // No similar entry found, proceed with insertion
          await Product.create({
            name,
            image,
            price,
            quantity,
            gender,
            category,
            description,
          });
          console.log('Product inserted successfully');
        } else {
          console.log('Similar entry already exists');
        }
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  
  // Call the function to insert dummy data
  insertDummyData();
})
