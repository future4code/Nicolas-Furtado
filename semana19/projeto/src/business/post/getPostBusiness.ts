import { selectPost } from "../../data/post/selectPost";

export const getPostBusiness = async (id: string): Promise<object> => {
  let message = "Sucess!";

  if (!id) {
    throw new Error("Preencha os campo 'id'");
  }

  const post = selectPost(id);

  return { message, post };
};
