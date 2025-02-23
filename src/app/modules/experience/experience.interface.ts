import { ObjectId } from "mongoose";

export type TExperience = {
  id?: string;
  user: ObjectId;
  companyLogo:string;
  companyName: string;
  position: string;
  start_date: Date;
  end_date: Date;
  description: string;
};
