import { Request, Response } from "express";
import  Help  from "../models/helpModel";

const HelpController = {
  getAllHelp: async (req: Request, res: Response) => {
    try {
      const help = await Help.findAll();
      res.json(help);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getHelpByQuestion: async (req: Request, res: Response) => {
    try {
      const helpQuestion = await Help.findOne({ where: { question: req.params.question } });
      if (!helpQuestion) {
        return res.status(404).json({ error: "Question not found" });
      }
      res.json(helpQuestion);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createHelp: async (req: Request, res: Response) => {
    const { question, answer } = req.body;

    try {
      const newHelp = await Help.create({ question, answer });
      res.json(newHelp);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default HelpController;
