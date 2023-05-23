import { DataTypes } from 'sequelize';
import sequelize from '../database/index';
const Cart = sequelize.define('cart', {
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
});

const getAllCarts = () => {
  return Cart.findAll();
};

const getCartsOfUser = (user_id) => {
  return Cart.findAll({
    where: {
      user_id: user_id,
    },
  });
};

const addCart = (user_id, product_id) => {
  return Cart.create({
    user_id: user_id,
    product_id: product_id,
  });
};

const removeCart = (product_id) => {
  return Cart.destroy({
    where: {
      product_id: product_id,
    },
  });
};

const removeByUser = (user_id) => {
  return Cart.destroy({
    where: {
      user_id: user_id,
    },
  });
};

export default {
  getAllCarts,
  getCartsOfUser,
  removeCart,
  addCart,
  removeByUser,
};
