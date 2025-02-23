import { ObjectId } from "mongoose";

export type TAbout = {
  id?: string;
  user: ObjectId;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  icons:string[];
  socials: {
    name: string;
    url: string;
  }[];
};
