export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type authenticationData = {
  id: string;
  role: USER_ROLE;
};

export type userAddress = {
  street: string
  neighborhood: string
  city: string
  state: string
}