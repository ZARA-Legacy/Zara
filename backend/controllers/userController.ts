import { Request, Response } from "express";
import User from "../models/User";

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

export const updatePassword = async (req: Request, res: Response) => {
    
};
