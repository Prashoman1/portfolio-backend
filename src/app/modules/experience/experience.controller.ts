import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import HttpStatus from "http-status";
import { ExperienceService } from "./experience.service";

const addExperience = catchAsync(async (req, res) => {
  const user = req.user;
  const data = req.body;
  const payload = { user: user.id, ...data };
   
  const result = await ExperienceService.createExperienceIntoDB(payload);
  sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: "Experience added successfully",
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const user = req.user;
  const id = req.params.id;
  const data = req.body;
  const payload = { user: user.id, id: id, ...data };
  const result = await ExperienceService.updateExperienceIntoDB(payload);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Experience updated successfully",
    data: result,
  });
});

const getAllExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceService.getAllExperiencesFromDB();
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    data: result,
  });
});

const getSingleExperience = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ExperienceService.getExperienceByIdFromDB({ id });
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ExperienceService.deleteExperienceFromDB({ id });
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Experience deleted successfully",
    data: result,
  });
});

export const ExperienceController = {
    addExperience,
    updateExperience,
    getAllExperiences,
    getSingleExperience,
    deleteExperience
};
