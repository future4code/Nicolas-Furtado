import { selectAllUsers } from "../data/selectAllUsers";

const getAllUsersBusiness = async (): Promise<any> => {
  const users = selectAllUsers();
  return users;
}

export default getAllUsersBusiness;