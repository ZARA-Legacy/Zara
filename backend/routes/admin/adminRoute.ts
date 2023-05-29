import express, { Router } from "express";
import {
  getAllUsers,
  updateAdmin,
  deleteUser,
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  searchProductByName,
} from "../../controllers/admin/adminController";

import { authorize } from "../../middleware/auth";

const router: Router = express.Router();

//Users

router.get("/users/all/:isAdmin", authorize, getAllUsers);

router.put("/users/:id/:isAdmin", authorize, updateAdmin);

router.delete("/users/:id/:isAdmin", authorize, deleteUser);
//Products

router.get("/products/all", getAllProducts);
router.get("/products/one/:id", getOneProduct);
router.get("/products/:name", searchProductByName);
router.post("/products/add", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

export default router;
