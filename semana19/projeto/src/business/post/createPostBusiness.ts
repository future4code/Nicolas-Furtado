import { insertPost } from "../../data/post/insertPost";
import { generateId } from "../../middleware/idGenerator";
import { getTokenData } from "../../middleware/tokenManager";
import { POST_TYPES } from "../../model/post/postModel";
import { authenticationData } from "../../model/user/userModel";
import moment from "moment";

//string to data moment("22/07/2002", "DD/MM/YYYY").format('YYYY-MM-DD');
//data to string moment("2002-07-22").format('DD/MM/YYYY');

export const createPostBusiness = async (
  photo: string,
  description: string,
  type: POST_TYPES,
  token: string
): Promise<string> => {
  let message = "Sucess!";

  if (!photo || !description || !type || !token) {
    throw new Error(
      "Preencha os campos 'photo', 'description', 'type', 'token'"
    );
  }
  if(type !== POST_TYPES.EVENT && type !== POST_TYPES.NORMAL){
    throw new Error("O type deve ser 'normal' ou 'event'");
  }
  const tokenData: authenticationData = getTokenData(token);

  const id: string = generateId();
  await insertPost({
    id,
    photo,
    description,
    type,
    createdAt: moment().format("YYYY-MM-DD"),
    authorId: tokenData.id,
  });

  return message;
};
