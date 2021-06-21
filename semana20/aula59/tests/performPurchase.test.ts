import { user, performPurchase } from "../src/index";

describe("Testando a função performPurchase", () => {
  test("Testing balance greater than value", () => {
    const user1: user = {
      name: "Janis",
      balance: 905,
    };
    const result = performPurchase(user1, 350);

    expect(result).toEqual({
      name: "Janis",
      balance: 555
    });
  });

  test("Testing balance equal value", () => {
    const user1: user = {
      name: "Emily",
      balance: 350,
    };
    const result = performPurchase(user1, 350);

    expect(result).toEqual({
      name: "Emily",
      balance: 0
    });
  });


  test("Test balance less than value", () => {
    const user1: user = {
      name: "Nicolas",
      balance: 250,
    };
    const result = performPurchase(user1, 350);

    expect(result).toBe(undefined);
  });
});
