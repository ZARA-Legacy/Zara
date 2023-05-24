import express, { Router } from "express";
import { sendEmail } from "../controllers/emails/sendEmail";

const router: Router = express.Router();

router.post("/email", sendEmail);

export default router;
