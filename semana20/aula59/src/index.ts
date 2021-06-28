export type user = {
  name: string;
  balance: number;
};

export const performPurchase = (user: user, value: number): (user | undefined) => {
  if (user.balance >= value) {
    const newBalance: number = user.balance - value;
    const newUser: user = {
      name: user.name,
      balance: newBalance,
    };
    return newUser;
  }
  return undefined;
};
