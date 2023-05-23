import { DataTypes  } from 'sequelize'
import connection from '../database/index'
const Model = connection.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes .STRING
  }
})
export default Model