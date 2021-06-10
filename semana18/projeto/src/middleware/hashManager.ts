import { genSaltSync, hashSync, compareSync } from "bcryptjs";
export const generateHash = (plainText: string): string => {
  const salt: string = genSaltSync(12);
  const hash: string = hashSync(plainText, salt);
  return hash;
};

export const compareHash = (plainText: string, hash: string): boolean => {
  return compareSync(plainText, hash);
};

