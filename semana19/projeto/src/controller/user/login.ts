import { Request, Response } from "express";
import { loginBusiness } from "../../business/user/loginBusiness";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { message, token } = await loginBusiness(email, password);

    res.status(200).send({ message, token });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
