import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";


const projectSchema = new Schema<TProject>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    techStack: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    live_url: { type: String , default: null},
    frontend_repo_url: { type: String , default: null},
    backend_repo_url: { type: String , default: null},
    images: [{ type: String, required: true }],
    serial: { type: Number, required: true , default: 0},
  },
  {
    timestamps: true,
  }
);
export const Project = model<TProject>("Project", projectSchema);
