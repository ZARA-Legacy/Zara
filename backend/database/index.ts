import { Sequelize } from "sequelize";

export default new Sequelize("database", "username", "password", {
  dialect: "mysql",
  host: "localhost",
});
