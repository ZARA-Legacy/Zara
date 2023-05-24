import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index';

class Cart extends Model {
  id!: number;
  user_id!: number;
  products_id!: number;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'cart',
    tableName: 'cart',
  }
);

export default Cart;
