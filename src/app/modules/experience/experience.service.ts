import AppError from "../../errors/AppError";
import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";
import HttpStatus from "http-status";


const createExperienceIntoDB = async (payload: TExperience)=>{
    const result = await Experience.create(payload);
    return result;
}
const getAllExperiencesFromDB = async ()=>{
    const result = await Experience.find().sort({createdAt: -1});
    return result;
}

const updateExperienceIntoDB = async (payload: Partial<TExperience>)=>{
    const matchExperience = await Experience.findOne({_id: payload.id});
    if(!matchExperience){
        throw new AppError(HttpStatus.BAD_REQUEST, "Experience not found");
    }
    const result = await Experience.findOneAndUpdate({_id: payload.id}, payload, {new: true});
    return result;
}

const deleteExperienceFromDB = async (payload: {id: string})=>{
    const matchExperience = await Experience.findOne({_id: payload.id});
    if(!matchExperience){
        throw new AppError(HttpStatus.BAD_REQUEST, "Experience not found");
    }
    const result = await Experience.findByIdAndDelete(payload.id);
    return result;
}

const getExperienceByIdFromDB = async (payload: {id: string})=>{
    const result = await Experience.findOne({_id: payload.id});
    if(!result){
        throw new AppError(HttpStatus.BAD_REQUEST, "Experience not found");
    }
    return result;
}


export const ExperienceService = {
    createExperienceIntoDB,
    updateExperienceIntoDB,
    deleteExperienceFromDB,
    getAllExperiencesFromDB,
    getExperienceByIdFromDB
}