import { Request, Response } from "express";
import connection from "../connection";
import moment from "moment";
import generateId from "../middleware/generateId";

const createRecipe = async (req: Request, res: Response) => {
  try {
    const { token, title, description } = req.body;
    if (!token) {
      throw Error("Preencha o campo 'token'");
    }
    if (!title || !description) {
      throw Error("Preencha os campos 'title' e 'description'");
    }
    const id = generateId();
    const date = moment().format("YYYY-MM-DD");

    await connection.raw(`
    INSERT INTO cookenu_recipes (id, title, description, createAt)
    VALUES(
      "${id}",
      "${title}",
      "${description}",
      "${date}"
    );
    `);
    const recipe = {
      id,
      title,
      description,
      createAt: date,
    };
    res.status(200).send({ recipe });
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage || error.message });
  }
};

export default createRecipe;
