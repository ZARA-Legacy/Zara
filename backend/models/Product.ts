import { DataTypes  } from 'sequelize'
import sequelize from '../database/index'

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.FLOAT,
  quantity: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  category: DataTypes.STRING,
  description: DataTypes.STRING,
});
export default Product;
