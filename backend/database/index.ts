import { Sequelize } from 'sequelize';
import Product from '../models/Product';
import data from "./db"



export default new Sequelize(
  process.env.database as string,
  process.env.user as string,
  process.env.password as string,
  {
    dialect: "mysql",
    host: process.env.host as string,
  }
);


