import { Sequelize } from "sequelize";

export default new Sequelize("zara", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

