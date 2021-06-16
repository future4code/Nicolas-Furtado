import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const { token, message } = await signupBusiness(
      name,
      email,
      password
    );

    res.status(200).send({ message, token });
  } catch (error) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;

    res.send({ message });
  }
};
