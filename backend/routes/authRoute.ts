import express, { Router } from "express";
import { login, signup, confirmEmail } from "../controllers/authController";

const router: Router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

router.get("/email/:id", confirmEmail);

export default router;
