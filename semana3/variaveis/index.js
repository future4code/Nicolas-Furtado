/*        ---------------------------------------------------
*
*         ###### Exercícios de interpretação de código ######
*   
*         ---------------------------------------------------
*/
/*
    -- 1 --

    - O console imprime: '10';
    - O console imprime: '10, 5';

*/

/*
    -- 2 --

    - O console imprime: '10, 10, 10';

*/


/*        ---------------------------------------------
*
*         ###### Exercícios de escrita de código ######
*   
*         ---------------------------------------------
*/
//                       ###  1  ###

let nome, idade;
console.log('Tipo da variavel "nome":' + typeof(nome));
console.log('Tipo da variavel "idade":' + typeof(idade));

// O console imprimou 'undefined' porque eu não defini nenhum valor para as variaveis, então o JS não consegue atribuir um tipo.

nome = prompt('Qual seu nome?');
idade = prompt('Qual sua idade?');
console.log('Tipo da variavel "nome":' + typeof(nome));
console.log('Tipo da variavel "idade":' + typeof(idade));

// Agora o intérprete da linguagem consegue atribuir um tipo diferente de 'undefined' as variaveis a partir do valor delas.

console.log(`Olá, seu nome é ${nome} e sua idade é ${idade}`);

//                       ###  2  ###
console.log(`Pergunta 1: Qual palavra mais te define?\nResposta: ${prompt('Qual palavra mais te define?')}`);
console.log(`Pergunta 2: Qual sua maior virtude?\nResposta: ${prompt('Qual sua maior virtude?')}`);
console.log(`Pergunta 3: Qual seu maior defeito?\nResposta: ${prompt('Qual seu maior defeito?')}`);
console.log(`Pergunta 4: Resuma o que mais deseja em uma palavra.\nResposta: ${prompt('Resuma o que mais deseja em uma palavra.')}`);
console.log(`Pergunta 5: Qual seu maior medo?\nResposta: ${prompt('Qual seu maior medo?')}`);

//                       ###  3  ###
let comidas = [
    'Pizza',
    'Hamburguer',
    'Coxinha',
    'Cuca de banana',
    'Chipa de queijo'
];
console.log(comidas);
console.log(`Essas são minha comidas preferidas:\n${comidas[0]},\n${comidas[1]},\n${comidas[2]},\n${comidas[3]},\n${comidas[4]}`);
comidas[1] = prompt('Qual sua comida preferida?');
console.log(`Essas são minha comidas preferidas:\n${comidas[0]},\n${comidas[1]},\n${comidas[2]},\n${comidas[3]},\n${comidas[4]}`);

//                       ###  4  ###
let perguntas = [
    'Você já parou pra pensar como está se sentindo hoje?',
    'Fez algum exercício físico hoje?',
    'Descobriu algo novo hoje?'
];
let respostas = [
    true,
    false,
    true
]
console.log(perguntas[0]+' '+respostas[0]+'\n'+perguntas[1]+' '+respostas[1]+'\n'+perguntas[2]+' '+respostas[2]);