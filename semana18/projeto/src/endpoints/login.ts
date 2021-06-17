import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../middleware/authenticator";
import { compareHash } from "../middleware/hashManager";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw Error("Preencha os campos 'email' e 'password'");
    }
    const [result] = await connection.raw(`
    SELECT id, email, password FROM cookenu_users WHERE email = '${email}'`);
    if (result.length === 0) {
      throw Error("Não existe user com esse email");
    }
    const user = result[0];
    if (compareHash(password, user.password) === false) {
      throw Error("Senha incorreta");
    }
    const token = generateToken({ id: user.id });
    res.status(200).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage || error.message });
  }
};

export default login;
