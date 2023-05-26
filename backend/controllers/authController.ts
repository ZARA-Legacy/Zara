import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user?.emailConfirmed) {
      return res.status(401).json({ error: "Please confirm your email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email,
      },
      process.env.TOKEN as Secret
    );

    res.status(200).json({ token, id: user.id, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, firstname, lastname } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      return res.status(409).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      firstname: firstname,
      lastname: lastname,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: newUser.id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email,
      },
      process.env.TOKEN as Secret
    );

    res.json({ token, id: newUser.id, isAdmin: newUser.isAdmin });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const confirmEmail = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    user?.set({
      emailConfirmed: true,
    });
    await user?.save();
    res.status(200).json("email confirmed");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
