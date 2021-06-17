import { deleteUserById } from "../data/deleteUserById";
import { selectUserById } from "../data/selectUserById";
import { user } from "../models/user";

const deleteUserBusiness = async (id: string): Promise<any> => {
  
  const user: user = await selectUserById(id);
  if (!user) {
    throw new Error("Usuário não encontrado!");
  }
  deleteUserById(id);
}

export default deleteUserBusiness;
