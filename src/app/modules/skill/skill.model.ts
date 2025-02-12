import { model, Schema } from "mongoose";

import { TSkill } from "./skill.interface";


const skillSchema = new Schema<TSkill>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const Skill = model<TSkill>("Skill", skillSchema);
