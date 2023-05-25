import { Request, Response } from "express"
import Model from "../models/Product"
import  Sequelize from "sequelize"
const controller = {
  getGenderWomen: function (req: Request, res: Response) {
    Model.findAll({ where: { gender: "women" } })
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
  getGenderMen: function (req: Request, res: Response) {
    Model.findAll({ where: { gender: "men" } })
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
  getAllProduct: function (req: Request, res: Response) {
    Model.findAll()
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
  updateOneProduct: function (req: Request, res: Response) {
    const id = req.params.id
    const update = req.body
    Model.update(update, { where: { id: id } })
      .then((result) => {
        if (result[0] === 0) {
          res.status(404).json({ message: "Product not found" })
        } else {
          res.status(200).json({ message: "Product updated successfully" })
        }
      })
      .catch((err) => res.status(500).send(err))
  },
  search: async (req:Request, res: Response)=>{
    const {name} = req.params;
    try {
      const products = await Model.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: name,
          },
        },
      });
  
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }

  }
}

export default controller 
