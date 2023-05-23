import { Request, Response } from 'express';
import Cart from '../models/Cart';

const allCarts = async (req: Request, res: Response) => {
  try {
    const result = await Cart.getAllCarts();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

const cartForUser = async (req: Request, res: Response) => {
  try {
    const results = await Cart.getCartsOfUser(req.params.id);
    res.json(results);
  } catch (err) {
    res.json(err);
  }
};

const toCart = async (req: Request, res: Response) => {
  try {
    const { user_id, product_id } = req.body;
    await Cart.addCart(user_id, product_id);
    res.json({ message: 'Product successfully added to your cart' });
  } catch (err) {
    res.json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    await Cart.removeCart(req.params.id);
    res.json('Deleted');
  } catch (err) {
    res.json(err);
  }
};

const removeCartOfUser = async (req: Request, res: Response) => {
  try {
    await Cart.removeByUser(Number(req.params.id));
    res.json('Deleted');
  } catch (err) {
    res.json(err);
  }
};

export default {
  allCarts,
  cartForUser,
  toCart,
  remove,
  removeCartOfUser
};
