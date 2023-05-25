import express, { Router } from "express";
import {
  getAllUsers,
  getOneUser,
  makeAdmin,
  deleteUser,
} from "../../controllers/admin/adminController";

const router: Router = express.Router();

//Users

router.get("/users/all", getAllUsers);
router.get("/users/one/:id", getOneUser);

router.put("/users/:id", makeAdmin);

router.delete("/users/:id", deleteUser);

//Products

export default router;
