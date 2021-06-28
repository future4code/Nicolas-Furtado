import { user } from "../../model/user/userModel";
import { connection } from "../connection";

export const getUser = async (email: string): Promise<user> => {
  try {
    let message = "Sucess!";
    const queryResult: any = await connection("labook_users")
      .select("*")
      .where({ email });

    if (!queryResult[0]) {
      message = "Invalid credentials";
      throw new Error(message);
    }

    const user: user = {
      id: queryResult[0].id,
      name: queryResult[0].name,
      email: queryResult[0].email,
      password: queryResult[0].password,
    };
    return user;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
