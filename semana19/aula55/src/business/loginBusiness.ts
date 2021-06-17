import { selectUserByEmail } from "../data/selectUserByEmail";
import { user } from "../models/user";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";

const loginBusiness = async (email: string, password: string): Promise<string> => {
  if (!email || !password) {
    throw new Error("'email' e 'senha' são obrigatórios");
  }
  const user: user = await selectUserByEmail(email);

  if (!user) {
    throw new Error("Usuário não encontrado!");
  }
  const passwordIsCorrect: boolean = await compare(password, user.password);

  if (!passwordIsCorrect) {
    throw new Error("Senha incorreta!");
  }

  const token: string = generateToken({
    id: user.id,
    role: user.role,
  });
  return token;
};

export default loginBusiness;