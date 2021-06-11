import { Request, Response } from "express";
import connection from "../connection";

const getProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const token = req.body.token as string;
    if (!token) {
      throw new Error("Não autorizado!");
    }
    if (!id) {
      throw new Error("Preencha o campo 'id'");
    }
    const [result] = await connection.raw(`
      SELECT id, name, email FROM cookenu_users WHERE id = '${id}';
    `);
    if (!result.length) {
      throw new Error("Nenhum usuário com esse id");
    }
    const user = result[0];
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage || error.message });
  }
};

export default getProfile;
