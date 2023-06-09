import { Request, Response, NextFunction } from "express";

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdmin } = JSON.parse(req.params.isAdmin);
  try {
    if (isAdmin) next();
    else res.status(401).send("Unauthorized");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {}