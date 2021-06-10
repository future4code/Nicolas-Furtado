import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../middleware/authenticator";
import generateId from "../middleware/generateId";
import { generateHash } from "../middleware/hashManager";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw Error("Preencha os campos 'name', 'email', 'password'");
    }
    const id = generateId();
    const hash = generateHash(password);
    await connection.raw(`
    INSERT INTO cookenu_users (id, name, email, password)
    VALUES(
    '${id}',
    '${name}',
    '${email}',
    '${hash}'
    );    
    `);
    const token = generateToken({id});
    res.status(200).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage || error.message });
  }
};

export default createUser;
