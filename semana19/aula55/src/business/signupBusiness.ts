import { hash } from "../services/hashManager";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { userData } from "../models/user";

export const signupBusiness = async (userData: userData): Promise<string> => {
  if (
    !userData.name ||
    !userData.nickname ||
    !userData.email ||
    !userData.password ||
    !userData.role
  ) {
    throw new Error(
      'Preencha os campos "name","nickname", "email" e "password"'
    );
  }

  const id: string = generateId();

  const cypherPassword = await hash(userData.password);

  await insertUser({
    id,
    name: userData.name,
    nickname: userData.nickname,
    email: userData.email,
    password: cypherPassword,
    role: userData.role,
  });

  const token: string = generateToken({
    id,
    role: userData.role,
  });
  return token;
};
