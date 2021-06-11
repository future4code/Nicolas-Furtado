import { Request, Response } from "express";
import moment from "moment";
import connection from "../connection";


const getRecipe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const token = req.body.token;
    if (!token) {
      throw Error("Preencha o campo 'token'");
    }
    if(!id){
      throw new Error("Preencha o campo 'id'");
    }
    const [result] = await connection.raw(`
      SELECT * FROM cookenu_recipes WHERE id = '${id}';
    `);
    if(!result.length){
      throw new Error("Receita não encontrada");
    }
    let recipe = result[0];
    recipe.createAt = moment(recipe.createAt).format('DD/MM/YYYY');    
    res.status(200).send({recipe});
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage || error.message });
  }
};

export default getRecipe;
