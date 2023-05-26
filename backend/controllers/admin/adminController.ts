import { Request, Response } from "express";
import User from "../../models/User";
import Product from "../../models/Product";
import  Sequelize from "sequelize"



// Users

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const updateAdmin = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { admin } = req.body;
  try {
    const user = await User.findOne({ where: { id } });

    user?.set({
      isAdmin: admin,
    });

    res.status(200).send("User is now an admin");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await User.destroy({ where: { id } });
    res.status(200).send("User deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, image, price, quantity, gender, category, description } = req.body;
    const product = await Product.create({
      name,
      image,
      price,
      quantity,
      gender,
      category,
      description,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const getOneProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({ where: { id } });
    res.status(200).json(product);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await Product.destroy({ where: { id } });
    res.status(200).send("Product deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { name, image, price, quantity, gender, category, description } = req.body;
    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.update({
      name,
      image,
      price,
      quantity,
      gender,
      category,
      description,
    });

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const searchProductByName = async (req, res) => {
  const { name } = req.query;
  try {
    const products = await Product.findAll({ where: { name: { [Sequelize.Op.like]: `%${name}%` } } });

    if (products.length === 0) {
      return res.status(404).json({ error: 'No products found' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
