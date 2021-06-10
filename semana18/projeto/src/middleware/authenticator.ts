import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../types";

dotenv.config();

export const generateToken = (payload: authenticationData): string => {
  return jwt.sign(payload, "meuapp" as string, {
    expiresIn: "1y",
  });
};

export const getTokenData = (token: string): authenticationData => {
  const result: authenticationData = jwt.verify(
    token,
    "meuapp"
  ) as authenticationData;
  return result;
};
