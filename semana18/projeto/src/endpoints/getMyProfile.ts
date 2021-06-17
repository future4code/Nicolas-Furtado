import { Response, Request } from "express";
import { getTokenData } from "../middleware/authenticator";
import connection from "../connection";

const getMyProfile = async (req: Request, res: Response) => {
  try {
    if (!req.body.token) {
      throw Error("Preencha o campo 'token'");
    }
    const authenticationData = getTokenData(req.body.token);
    const [result] = await connection.raw(`
      SELECT id, name, email FROM cookenu_users WHERE id = '${authenticationData.id}'
    `);
    const user = result[0];
    res.status(200).send({ user });
  } catch (error) {
    if (error.message === "invalid signature") {
      res.status(500).send({ message: "Token inválido" });
    }
    res.status(500).send({ message: error.message });
  }
};

export default getMyProfile;
