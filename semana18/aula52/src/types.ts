export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type authenticationData = {
  id: string;
  role: USER_ROLE;
};
