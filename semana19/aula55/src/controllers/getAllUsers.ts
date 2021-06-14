import { Request, Response } from "express";
import getAllUsersBusiness from "../business/getAllUsersBusiness";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = getAllUsersBusiness();

    res.send({ users });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
