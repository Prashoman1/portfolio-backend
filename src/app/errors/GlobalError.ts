
import { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";

export const globalErrorHandler = (err: Error, _req: Request, res: Response, next: NextFunction): void => {

    let statusCode = 500;
    let message = "Internal Server Error";
    let stack = err.stack;
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
        stack
    })
    next()
}