import { Request, Response } from "express";
import { userInfo } from "os";
import connection from "../connection";
import { generateToken } from "../middleware/authenticator";
import { generateId } from "../middleware/generateId";
import getAddress from "../middleware/getAddress";
import { generateHash } from "../middleware/hashManager";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, nickname, role, cep, number, complement } =
      req.body;
    if (
      !name ||
      !email ||
      !nickname ||
      !password ||
      !role ||
      !cep ||
      !number ||
      !complement
    ) {
      throw new Error(
        "Preencha os campos 'name', 'email', 'nickname', 'password', 'role', 'cep', 'number', 'complement'"
      );
    }
    if (role !== "NORMAL" && role !== "ADMIN") {
      throw new Error("O campo role deve ser 'NORMAL' ou 'ADMIN'");
    }
    const id = generateId();
    await connection.raw(`
      INSERT INTO to_do_list_users(id, name, email, nickname, role, password)
      VALUES
        (
          '${id}',
          '${name}',
          '${email}',
          '${nickname}',
          '${role}',
          '${generateHash(password)}'
        );
    `);
    const address = await getAddress(cep);
    await connection.raw(`
      INSERT INTO to_do_list_adresses(user_id, cep, street, state, complement, neighborhood, city, number)
      VALUES
        (
          '${id}',
          '${cep}',
          '${address?.street}',
          '${address?.state}',
          '${complement}',
          '${address?.neighborhood}',
          '${address?.city}',
          '${number}'
        );
    `);

    const token = generateToken({ id, role });
    res.status(200).send({ message: "Cadastrado com sucesso!", token });
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage || error.message });
  }
};

export default createUser;
