const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
let result = 0;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "div":
    result = num1 / num2;
    break;
  case "mul":
    result = num1 * num2;
    break;

  default:
    break;
}

console.log(`O resultado da operação foi ${result}`)