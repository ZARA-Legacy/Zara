import { Request, Response } from 'express';
import Cart from '../models/Cart';
import Product from '../models/Product';

const allCarts = async (req: Request, res: Response) => {
  try {
    const carts = await Cart.findAll();
    res.json(carts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const cartForUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  console.log(userId);

  try {
    const carts = await Cart.findAll({
      where: {
        user_id: userId,
      },
    });
     let products: any = []
    for (let i = 0; i < carts.length; i++) {
      products.push(await Product.findOne({where: {id: carts[i].products_id}}))
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const toCart = async (req: Request, res: Response) => {
  const { user_id, products_id } = req.body;

  try {
    await Cart.create({
      user_id,
      products_id,
    });
    res.json({ message: 'Product successfully added to your cart' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

const remove = async (req: Request, res: Response) => {
  const{ user_id, products_id } = req.params;

  try {
    await Cart.destroy({
      where: {
        user_id, products_id
      },
    });
    res.json('Deleted');
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const removeCartOfUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);

  try {
    await Cart.destroy({
      where: {
        user_id: userId,
      },
    });
    res.json('Deleted');
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  allCarts,
  cartForUser,
  toCart,
  remove,
  removeCartOfUser,
};
