import { Sequelize } from "sequelize";
import config from "./config"


export default new Sequelize("zara", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

