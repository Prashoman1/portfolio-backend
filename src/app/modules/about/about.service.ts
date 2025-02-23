import { TAbout } from "./about.interface";
import { About } from "./about.model";

const addAboutIntoDB = async (payload: Partial<TAbout>) => {
  const result = await About.findOneAndUpdate(
    {
      user: payload.user,
    },
    payload,
    { new: true, upsert: true }
  );
  return result;
};

const getAboutFromDB = async () => {
  const result = await About.findOne().populate("user");
  return result;
};

export const AboutService = {
  addAboutIntoDB,
  getAboutFromDB,
};
