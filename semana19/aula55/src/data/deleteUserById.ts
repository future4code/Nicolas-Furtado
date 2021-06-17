import { connection } from "./connection";

export const deleteUserById = async (id: string): Promise<any> => {
  await connection.raw(`
        DELETE FROM to_do_list_users WHERE id = '${id}'; 
    `);
};
