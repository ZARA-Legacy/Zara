import express from 'express'
import controller from '../controllers/products'

const routerP = express.Router()

routerP.get("/women", controller.getGenderWomen)
routerP.get("/men", controller.getGenderMen)
routerP.get("/products", controller.getAllProduct)
routerP.get("/:gender/:category", controller.getProductByCategory)
routerP.put("/:id", controller.updateOneProduct)
routerP.get("/search/:name", controller.search)

export default routerP
