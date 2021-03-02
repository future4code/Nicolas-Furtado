/********************************************
 *                                           *
 * **Exercícios de interpretação de código** *
 *                                           *
 ********************************************/

// EXERCICIO 1
/*
  a. 10 e 50
  b. iria reportar nada
*/

// EXERCICIO 2
/*
  a. Darvas e Caio
  b. Amanda e Caio
*/

// EXERCICIO 3
/*
  A função cria um novo array com valores que são o dobro dos valores pares do array de parametro, a função poderia se chamar quadradoDosPares
*/

/********************************************
 *                                           *
 * **Exercícios de escrita de código**       *
 *                                           *
 ********************************************/

// EXERCICIO 4
// a.
let func = () => {
  console.log(
    "Eu sou Nicolas, tenho 18 anos, moro em Ipatinga e sou estudante."
  );
};
// b.
let func2 = (nome, idade, cidade, estudante) => {
  if (estudante) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante.`;
  } else {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante.`;
  }
};

// EXERCICIO 5
let somar = (num1, num2) => {
  return num1 + num2;
};
console.log(somar(2, 2));

let verificar = (num1, num2) => {
  if (num1 >= num2) {
    return true;
  } else {
    return false;
  }
};

let imprimir10x = (msg) => {
  for (let n = 0; n < 10; n++) {
    console.log(msg + " " + Date());
  }
};

// EXERCICIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

// a.
let tamanhaDoArray = (arr) => {
  return arr.length;
};
// b.
let souPar = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
// c.
let quantidadeDePares = (arr) => {
  let count = 0;
  for (n of arr) {
    if (n % 2 == 0) {
      count++;
    }
  }
  return count;
};
// d.
let quantidadeDePares2 = (arr) => {
  let count = 0;
  for (n of arr) {
    if (souPar(n)) {
      count++;
    }
  }
  return count;
};

/********************************************
 *                                           *
 * **DESAFIOS**                              *
 *                                           *
 ********************************************/

// EXERCICIO 1

let imprimir = (msg) => {
  console.log(msg);
};

let somar2 = (num1, num2) => {
  imprimir(num1 + num2);
};

// EXERCICIO 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

// a.
let metodo = (arr) => {
  let arrayFinal = [];

  for (let x of arr) {
    if (x % 2 === 0) {
      arrayFinal.push(x * x);
    }
  }

  return arrayFinal;
};

// b.
let souOMaior = (arr) => {
  let value = arr[0];
  for (n of arr) {
    if (value < n) {
      value = n;
    }
  }
  return value;
};

// c.
let indiceDoMaior = (arr) => {
  return arr.indexOf(souOMaior(arr));
};

// d.
let inverterArray = (arr) => {
  let arrayFinal = [];
  for (n of arr) {
    arrayFinal.unshift(n);
  }
  return arrayFinal;
}
console.log(inverterArray(numeros));