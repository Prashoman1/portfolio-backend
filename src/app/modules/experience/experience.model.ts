import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema = new Schema<TExperience>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    companyName: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true, default: null },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const Experience = model<TExperience>("Experience", experienceSchema);
