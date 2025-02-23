import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import HttpStatus from "http-status";
import { AboutService } from "./about.service";


const addAbout = catchAsync(async (req, res) => {
  const user = req.user;
  const data = req.body;
  const payload = { user: user.id, ...data };
   
  const result = await AboutService.addAboutIntoDB(payload);
  sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: "About Updated successfully",
    data: result,
  });
});

const getAbout = catchAsync(async (req, res) => {
    const result = await AboutService.getAboutFromDB();
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "About fetched successfully",
        data: result,
    });
    });







export const AboutController = {
    addAbout,
    getAbout
};
