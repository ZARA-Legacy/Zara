import express, { Router } from "express";

const router: Router = express.Router();

//Users

router.get("/users/all");
router.get("/users/one/:id");

router.put("/users/:id");

router.delete("/users/:id");

//Products

export default router;
