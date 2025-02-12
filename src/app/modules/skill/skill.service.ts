import AppError from "../../errors/AppError";
import { TSkill } from "./skill.interface";
import { Skill } from "./skill.model";
import HttpStatus from "http-status";

const addSkillIntoDB = async (payload: TSkill) => {
  const matchSkill = await Skill.findOne({ title: payload.title });
  if (matchSkill) {
    throw new AppError(HttpStatus.BAD_REQUEST, "Skill already exists");
  }
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find().sort({ createdAt: -1 });
  return result;
}

const updateSkillIntoDB = async (payload: Partial<TSkill>) => {
  const result = await Skill.findOneAndUpdate({ _id: payload.id }, payload, {
    new: true,
  });
  return result;
};

const deleteSkillFromDB = async (payload: { id: string }) => {
  const matchSkill = await Skill.findOne({ _id: payload.id });
  if (!matchSkill) {
    throw new AppError(HttpStatus.BAD_REQUEST, "Skill not found");
  }
  const result = await Skill.findByIdAndDelete(payload.id);
  result;
};

export const SkillService = {
  addSkillIntoDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
  getAllSkillsFromDB
};
