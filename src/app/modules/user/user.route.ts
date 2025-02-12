import express, { NextFunction, Request, Response } from "express";
import { validationMiddleware } from "../../middleware/Validation.Middleware";
import { UserValidation } from "./user.validation";
import { UserController } from "./user.controller";
import auth from "../../middleware/auth";



const route = express.Router();

route.post("/register", auth("admin"), validationMiddleware(UserValidation.UserRegisterValidation), UserController.userRegistration);
route.post("/login", validationMiddleware(UserValidation.UserLoginValidation), UserController.userLogin);

export const UserRoute = route;
