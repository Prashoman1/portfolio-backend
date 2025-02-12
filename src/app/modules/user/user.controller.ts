import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import HttpStatus from "http-status";

const userRegistration = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const data = await UserService.userInsertIntoDb(user);
  sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: "User registered successfully",
    data: data,
  });
});

const userLogin = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const data = await UserService.userLogin(user);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: data?.user,
    token: data.token,
  });
});


export const UserController ={
    userRegistration,
    userLogin
}