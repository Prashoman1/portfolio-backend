import { z } from "zod";

const UserRegisterValidation = z.object({
  body: z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
  }),
});

const UserLoginValidation = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255),
  }),
});

export const UserValidation = {
  UserRegisterValidation,
  UserLoginValidation,
};
