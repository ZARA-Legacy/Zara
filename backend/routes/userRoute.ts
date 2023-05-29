import express from "express";
import { getOneUser } from "../controllers/userController";

const router = express.Router();

router.get("/one/:id/", getOneUser);
router.put("/one/:question");
router.put("/");

export default router;
