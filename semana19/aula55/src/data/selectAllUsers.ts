import { connection } from "./connection";

export const selectAllUsers = async (): Promise<any> => {
  const [result] = await connection.raw(`
        SELECT * FROM to_do_list_users
    `);
  return result;
};
