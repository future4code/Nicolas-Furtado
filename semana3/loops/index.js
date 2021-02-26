//  *****************************************
//  **Exercícios de interpretação de código**
//  *****************************************

//      1
/*
    O código incrementa a variavel valor com o 'for' até esta chegar ao valor 5;
*/
//      2
/*
   a. O código exibe os números da lista maiores que 18 em sequência.
      18
      19
      21
      23
      25
      27
      30
    b. O for... of... não seria o suficiente para acessar o indice de cada elemento do array, 
       eu poderia usar o array.length ou for... in...
*/
//      DESAFIO
/*
    O código exibiria "0" na primeira execução do while, "00" na segunda, e assim sucessivamente até inteirar 4 execuções;
*/

//  *****************************************
//  *****Exercícios de escrita de código*****
//  *****************************************

let array_original = [4, 8, 15, 16, 23, 42, 108];

//      A
for (let n of array_original) {
  console.log(n);
}

//      B
for (let n of array_original) {
  console.log(n / 10);
}

//      C
let array_novo = [];
for (let n of array_original) {
  if (n % 2 == 0) {
    array_novo.push(n);
  }
}
console.log(array_novo);

//      D
for (let n in array_original) {
  console.log(`O elemento do índex ${n} é ${array_original[n]}`);
}

//      E
let num_max = array_original[0];
let num_min = array_original[0];
for (let value of array_original) {
  if (value < num_min) {
    num_min = value;
  }
  if (value > num_max) {
    num_max = value;
  }
}
console.log(`O maior número é ${num_max} e o menor número é ${num_min}`);

//  *****************************************
//  *****            Desafio            *****
//  *****************************************

console.log("Iniciando o jogo");
let random_number = Math.random() * 100;
random_number = Math.floor(random_number);
let tentativas = 0;
let resposta;
while (resposta != random_number) {
  if (tentativas > 0) {
    console.log("Errou!");
    if (resposta < random_number) {
      console.log("O número é maior");
    } else if (resposta > random_number) {
      console.log("O número é menor");
    }
  }
  tentativas++;
  resposta = Number(prompt("Digite um número"));
}
console.log("Você acertou!! O número de tentativas foi:" + tentativas);
