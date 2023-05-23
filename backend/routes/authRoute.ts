import express, { Router } from "express";
import { login, signup } from "../controllers/authController";

const router: Router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

export default router;
