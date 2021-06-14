import { connection } from "./connection";

export const selectUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM to_do_list_users
        WHERE id = '${id}';
    `);

  return result[0][0];
};
