import { post } from "../../model/post/postModel";
import { connection } from "../connection";

export const insertPost = async (post: post) => {
  try {
    await connection("labook_posts").insert({
      ...post
    });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};