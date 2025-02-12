import express from "express";

import auth from "../../middleware/auth";
import { SkillController } from "./skill.controller";



const route = express.Router();

route.post("/add", auth("admin"), SkillController.addSkill);
route.put("/update/:id", auth("admin"), SkillController.updateSkill);
route.delete("/delete/:id", auth("admin"), SkillController.deleteSkill);
route.get("/all", SkillController.getAllSkills);



export const SkillRoute = route;
