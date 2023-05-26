import express, { Router } from "express";
import {
  getAllUsers,
  getOneUser,
  updateAdmin,
  deleteUser,
} from "../../controllers/admin/adminController";

import { authorize } from "../../middleware/auth";

const router: Router = express.Router();

//Users

router.get("/users/all", getAllUsers);
router.get("/users/one/:id", getOneUser);

router.put("/users/:id", updateAdmin);

router.delete("/users/:id", deleteUser);

//Products

export default router;
