import express from "express";
import HelpController from "../controllers/helpController";

const routeHelp = express.Router();

routeHelp.get("/help", HelpController.getAllHelp);
routeHelp.get("/one/:question", HelpController.getHelpByQuestion);
routeHelp.post("/", HelpController.createHelp);

export default routeHelp;
