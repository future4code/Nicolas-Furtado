type data = {
  maior: number,
  menor: number,
  media: number
}

function obterEstatisticas(numeros : number[]): data {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };
  
  return estatisticas;
}


console.log(obterEstatisticas([1,2.3,5,4,7,20,10]))