import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../types";

dotenv.config();

export const generateToken = (payload: authenticationData): string => {
  return jwt.sign(payload, process.env.TK_PASSWORD as string, {
    expiresIn: process.env.TK_EXPIRE_TIME,
  });
};

export const getTokenData = (token: string): authenticationData => {
  const result: authenticationData = jwt.verify(
    token,
    process.env.TK_PASSWORD as string
  ) as authenticationData;
  return result;
};
