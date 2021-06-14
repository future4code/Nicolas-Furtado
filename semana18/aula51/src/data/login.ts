import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../middleware/generateToken";

// verificar se os campos estão preenchidos
// verificar se existe um usuario com o email digitado
// verificar se as senhas batem
// gerar um token com base no id
// enviar o token como resposta

export default async (req: Request, res: Response) => {
  try {
    if (!req.body.email) {
      throw Error("Preencha o campo 'email'");
    }
    if (!req.body.password) {
      throw Error("Digite uma senha");
    }
    if (req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const [result] = await connection.raw(`
      SELECT * FROM to_do_list_users WHERE email = '${req.body.email}';
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
