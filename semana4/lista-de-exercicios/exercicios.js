//Exercício 1

function inverteArray(array) {
  let novoArray = [];
  array.forEach((element) => {
    novoArray.unshift(element);
  });
  return novoArray;
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  let novoArray = [];
  array.forEach((element) => {
    if (element % 2 === 0) {
      novoArray.push(element * element);
    }
  });

  return novoArray;
}

//Exercício 3

function retornaNumerosPares(array) {
  let novoArray = [];

  array.forEach((element) => {
    if (element % 2 === 0) {
      novoArray.push(element);
    }
  });

  return novoArray;
}

//Exercício 4

function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  array.forEach((element) => {
    if (element > maiorNumero) {
      maiorNumero = element;
    }
  });
  return maiorNumero;
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  return [false, false, true, true, true];
}

//Exercício 7

function retornaNNumerosPares(n) {
  let novoArray = [];
  let i = 0;
  while (novoArray.length < n) {
    if (i % 2 === 0) {
      novoArray.push(i);
    }
    i++;
  }
  return novoArray;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  } else if ((a === b && b !== c) || (b === c) & (b !== c)) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  let obj = {
    maiorNumero: 0,
    maiorDivisivelporMenor: true,
    diferenca: 0,
  };
  let menor = 0;
  if (num1 > num2) {
    obj.maiorNumero = num1;
    menor = num2;
  } else if (num2 > num1) {
    obj.maiorNumero = num2;
    menor = num1;
  }
  if (obj.maiorNumero % menor == 0) {
    obj.maiorDivisivelporMenor = true;
  } else {
    obj.maiorDivisivelporMenor = false;
  }
  obj.diferenca = obj.maiorNumero - menor;
  return obj;

}

// Exercício 10

function segundoMaiorEMenor(array) {
  let maiorEMenor = (arr) => {
    let maior = arr[0];
    let menor = arr[0];
    arr.forEach((element) => {
      if (element > maior) {
        maior = element;
      }
      if (element < menor) {
        menor = element;
      }
    });
    return { maior: maior, menor: menor };
  };
  let maiorNumero = maiorEMenor(array).maior;
  let menorNumero = maiorEMenor(array).menor;

  let novoArray = [];
  novoArray = array.filter((element) => {
    if (element < maiorNumero && element > menorNumero) {
      return true;
    }
  });
  let segundoMaiorNumero = maiorEMenor(novoArray).maior;
  let segundoMenorNumero = maiorEMenor(novoArray).menor;

  return [segundoMaiorNumero, segundoMenorNumero];
}

//Exercício 11

function ordenaArray(array) {
  let arrayDesordenado = array;
  const tamanho = array.length;

  let arrayOrdenado = [];
  let maiorEMenor = (arr) => {
    let maior = arr[0];
    let menor = arr[0];
    arr.forEach((element) => {
      if (element > maior) {
        maior = element;
      }
      if (element < menor) {
        menor = element;
      }
    });
    return { maior: maior, menor: menor };
  };

  arrayOrdenado.push(maiorEMenor(array).menor);
  arrayDesordenado.splice(array.indexOf(maiorEMenor(array).menor), 1);

  for (let i = 0; i < tamanho - 1; i++) {
    arrayOrdenado.push(maiorEMenor(arrayDesordenado).menor);
    arrayDesordenado.splice(
      arrayDesordenado.indexOf(maiorEMenor(arrayDesordenado).menor),
      1
    );
  }
  return arrayOrdenado;
}

// Exercício 12

function filmeFavorito() {
  let obj = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
	return obj;
}

// Exercício 13

function imprimeChamada() {
	
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
  // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "04/11/2019",
  },
];

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  // implemente sua lógica aqui
}
