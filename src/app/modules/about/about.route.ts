import express from "express";
import auth from "../../middleware/auth";
import { AboutController } from "./about.controller";

const route = express.Router();

route.post("/create", auth("admin"), AboutController.addAbout);
route.get("/get",  AboutController.getAbout);

export const AboutRoutes = route;
