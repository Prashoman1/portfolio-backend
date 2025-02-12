import express from "express";
import auth from "../../middleware/auth";
import { ExperienceController } from "./experience.controller";

const route = express.Router();
route.post("/add", auth("admin"), ExperienceController.addExperience);
route.put("/update/:id", auth("admin"), ExperienceController.updateExperience);

route.get("/all", ExperienceController.getAllExperiences);
route.get("/:id", auth("admin"), ExperienceController.getSingleExperience);

route.delete("/delete/:id", auth("admin"), ExperienceController.deleteExperience);

export const ExperienceRoute = route;
