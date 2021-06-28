import { insertUser } from "../../data/user/insertUser";
import { hash } from "../../middleware/hashManager";
import { generateId } from "../../middleware/idGenerator";
import { generateToken } from "../../middleware/tokenManager";
import { signupDTO } from "../../model/user/userModel";

export const signupBusiness = async (
  name: string,
  email: string,
  password: string
): Promise<signupDTO> => {
  let message = "Sucess!";
  if (!name || !email || !password) {
    message = '"name", "email" and "password" must be provided';
    throw new Error(message);
  }

  const id: string = generateId();

  const cypherPassword = await hash(password);

  insertUser({ id, name, email, password });

  const token: string = generateToken({ id });
  return { message, token };
};
