import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDB = async (project: TProject): Promise<TProject> => {
  const result = await Project.create(project);
  return result;
};

const getAllProjectsFromDB = async (): Promise<TProject[]> => {
  const result = await Project.find().populate("techStack").sort({ serial: 1 });
  return result;
};


export const ProjectService = {
    createProjectIntoDB,
    getAllProjectsFromDB
}