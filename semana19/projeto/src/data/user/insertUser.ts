import { user } from "../../model/user/userModel";
import { connection } from "../connection";

export const insertUser = async (user: user) => {
  try {
    await connection("labook_users").insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};