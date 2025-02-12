import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import status from "http-status";
import bcrypt from "bcrypt";
import createToken from "../../utils/createJwtToken";
import config from "../../config";

const userInsertIntoDb = async (payload: Partial<TUser>) => {
  const matchUser = await User.findOne({ email: payload.email });
  if (matchUser) {
    throw new AppError(status.BAD_REQUEST, "User already exists");
  }
  const user = await User.create(payload);
  return user;
};

const userLogin = async (payload: Partial<TUser>) => {
  const matchUser = await User.findOne({ email: payload.email }).select(
    "+password"
  );
  if (!matchUser) {
    throw new AppError(status.BAD_REQUEST, "User not found");
  }
  const isMatch = await bcrypt.compare(
    payload?.password as string,
    matchUser?.password
  );
  if (!isMatch) {
    throw new AppError(status.UNAUTHORIZED, "Password dose not match");
  }
  const jwtPayload = {
    id: matchUser._id,
    userRole: matchUser.role as "admin" | "user",
  };
  const token = createToken(
    jwtPayload,
    config.jwt_token_secret as string,
    config.jwt_token_expire as string
  );
  const user = await User.findById(matchUser._id);
  return {
    token,
    user,
  };
};

export const UserService = {
  userInsertIntoDb,
  userLogin,
};
