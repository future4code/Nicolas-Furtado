export type authenticationData = {
  id: string;
};

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type signupDTO = {
  message: string;
  token: string;
};

export type loginDTO = {
  message: string;
  token: string;
};