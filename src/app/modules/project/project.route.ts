import express from "express";
import auth from "../../middleware/auth";
import { ProjectController } from "./project.controller";



const route = express.Router();

route.post("/add", auth("admin"), ProjectController.addProject);
route.get("/all", ProjectController.getAllProjects);




export const ProjectRoute = route;
