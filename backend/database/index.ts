import { Sequelize } from 'sequelize';
<<<<<<< HEAD
=======
import config from './config';

>>>>>>> 658848a (.)

export default new Sequelize(
  process.env.database as string,
  process.env.user as string,
  process.env.password as string,
  {
    dialect: "mysql",
    host: process.env.host as string,
  }
);

