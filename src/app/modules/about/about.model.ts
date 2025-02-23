import { model, Schema } from "mongoose";
import { TAbout } from "./about.interface";

const aboutSchema = new Schema<TAbout>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    image: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    icons: { type: [String], required: true },
    socials: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
export const About = model<TAbout>("About", aboutSchema);
