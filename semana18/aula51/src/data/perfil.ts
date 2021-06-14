import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../middleware/generateToken";
import * as jwt from "jsonwebtoken";

const getData = (token: string): object => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};


export default async (req: Request, res: Response) => {
  try {
    const authorization = req.headers.authorization as string; 
    if (!req.body.email) {
      throw Error("Preencha o campo 'email'");
    }
    if (!req.body.password) {
      throw Error("Digite uma senha");
    }
    if (req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    const id = getData(authorization);

    const [result] = await connection.raw(`
      SELECT * FROM to_do_list_users WHERE id = '${id}';
    `);
    if (result.length === 0) {
      throw Error("Não existe user com esse email, vai se cadastrar vai! :V");
    }
    const user = result[0];
    if (user.password !== req.body.password) {
      throw Error("Senha incorreta ou invalida, tanto faz");
    }
    const token = generateToken(user.id);
    res.status(200).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
