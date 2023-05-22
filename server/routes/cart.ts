import express from "express"
import controller from "../controller/cart"

const routerC = express.Router()

routerC.get("/:id",controller.getCart)
routerC.delete("/delete/:prod/:user",controller.deleteCart)
routerC.post("/add",controller.addCart)
export default routerC