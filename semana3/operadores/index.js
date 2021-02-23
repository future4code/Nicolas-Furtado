/*
*
*
*          ---- Exercícios de interpretação de código ----
*
*
*/

/*          1

a. false
b. false
c. true
d. boolean

            2

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/

/*
*
*
*          ---- Exercícios de escrita de código ----
*
*
*/

//          1

let user_age = prompt("Qual a sua idade?");
let friend_age = prompt("Qual do seu/sua melhor amig@?");
user_age = Number(user_age);
friend_age = Number(friend_age);

console.log("Sua idade é maior que a do seu/sua melhor amig@? " + (user_age > friend_age));
console.log("A diferença de idade é " + (user_age - friend_age));

//          2

let even_number = prompt("Escreva um número par");
console.log(even_number%2);

// O números pares sempre resultam em resto 0, já numeros impares deixam resto.

//          3

let lista_de_tarefas = [];
alert("Escreva 3 tarefas para hoje");
lista_de_tarefas.push(prompt("Tarefa 1"));
lista_de_tarefas.push(prompt("Tarefa 2"));
lista_de_tarefas.push(prompt("Tarefa 3"));
console.log(lista_de_tarefas);
let tarefa_finalizada = Number(prompt("Digite o número de uma tarefa realizada"));
lista_de_tarefas.splice(tarefa_finalizada-1,1);
console.log(lista_de_tarefas);

//          4

let nome = prompt("Qual seu nome?");
let email = prompt("Qual seu email?");
alert(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);