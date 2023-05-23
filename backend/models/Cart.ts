import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index';

class Cart extends Model {
  id!: number;
  user_id!: number;
  product_id!: number;
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
    product_id: {
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
