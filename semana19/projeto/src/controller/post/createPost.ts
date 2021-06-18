import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { photo, description, type } = req.body;

    const token: string = req.headers.authorization as string;

    let message = await createPostBusiness(photo, description, type, token);

    res.status(201).send({ message });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
