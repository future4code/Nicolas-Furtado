import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../middleware/authenticator";
import { USER_ROLE } from "../types";

const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const authenticationData = getTokenData(req.body.token);
    if (authenticationData.role !== USER_ROLE.NORMAL) {
      throw new Error("Somente usuarios comuns podem acessar esse endpoint");
    }
    const [result] = await connection.raw(`
      SELECT name, nickname, email, role FROM to_do_list_users WHERE id = '${authenticationData.id}'
    `);
    const user = result[0];
    res.status(200).send({ profile: user });
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage || error.message });
  }
};

export default getUserProfile;
