import { v4 } from "uuid";

const generateId = (): string => {
  return v4();
};

export default generateId;
