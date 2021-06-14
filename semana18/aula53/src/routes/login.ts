import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../middleware/authenticator";
import { compareHash } from "../middleware/hashManager";

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Preencha os campos 'email' e 'password'");
    }
    const [result] = await connection.raw(`
      SELECT * FROM to_do_list_users WHERE email = '${email}';
    `);
    const user = result[0];
    if (!user) {
      throw new Error("Email não cadastrado!");
    }
    if(!compareHash(password,user.password)){
      throw new Error("Senha incorreta!");
    }
    const token = generateToken({ id: user.id, role: user.role });
    res.status(200).send({ message: "Logado com sucesso!", token: token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default login;
