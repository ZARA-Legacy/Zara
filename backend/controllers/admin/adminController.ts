import { Request, Response } from "express";
import User from "../../models/User";

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

export const makeAdmin = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id } });

    user?.set({
      isAdmin: true,
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
