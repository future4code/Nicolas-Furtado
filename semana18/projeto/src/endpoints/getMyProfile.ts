// Importar as coisas FEITO
// Criar a base da requisição  FEITO
// Exportar como default FEITO
// Trycatch FEITO
// Automatizar envio de erros FEITO

// Verificar se o usuario ta logado FEITO
// Pegar as informações do token (nome, email, id) FEITO
// enviar informações

// ATUALIZACAO
// pegar user com o id do token no banco
// enviar

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
