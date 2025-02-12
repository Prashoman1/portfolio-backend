import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import HttpStatus from "http-status";
import { ProjectService } from "./project.service";

const addProject = catchAsync(async (req, res) => {
  const user = req.user;
  const data= req.body;
  const payload = { user: user.id, ...data };
  //   console.log("payload:", payload);
  const result = await ProjectService.createProjectIntoDB(payload);
  sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: "Project added successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjectsFromDB();
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    data: result,
  });
});

// const updateSkill = catchAsync(async (req, res) => {
//   const user = req.user;
//   const id = req.params.id;
//   const { title, image } = req.body;
//   const payload = { user: user.id, title, image, id: id };
//   const result = await SkillService.updateSkillIntoDB(payload);
//   sendResponse(res, {
//     statusCode: HttpStatus.OK,
//     success: true,
//     message: "Skill updated successfully",
//     data: result,
//   });
// });

// const deleteSkill = catchAsync(async (req, res) => {
//   const user = req.user;
//   const id = req.params.id;
//   const payload = { user: user.id, id: id };
//   const result = await SkillService.deleteSkillFromDB(payload);
//   sendResponse(res, {
//     statusCode: HttpStatus.OK,
//     success: true,
//     message: "Skill deleted successfully",
//     data: result,
//   });
// });

// const getAllSkills = catchAsync(async (req, res) => {
//   const result = await SkillService.getAllSkillsFromDB();
//   sendResponse(res, {
//     statusCode: HttpStatus.OK,
//     success: true,
//     data: result,
//   });
// });

export const ProjectController = {
    addProject,
    getAllProjects
};
