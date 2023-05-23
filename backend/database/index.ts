import { Sequelize } from 'sequelize';
import config from './config';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'mysql',
  host: config.host,
});

export default sequelize;
