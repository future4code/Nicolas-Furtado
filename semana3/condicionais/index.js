/*
 *
 *
 *   Exercícios de interpretação
 *
 *
 */

//          ------ 1 ------
/*
    O código verifica se o número digitado pelo usuário é par ou impar, caso seja par o código exibe "Passou no teste"
    caso seja impar o código exibe "Não passou no teste"
*/

//          ------ 2 ------
/*
    a. O programa atualiza a variavel preço de acordo com a fruta escolhida pelo usuário
    b. "O preço da fruta Maça R$2.25"
    c. "O preço da fruta Pêra R$5"
*/

//          ------ 3 ------
/*
    a. A primeira linha está declarando uma variavel número e definindo seu valor com o returno do método Prompt() convertido em Number
    b. Caso fosse 10, o console exibiria "Esse número passou no teste" "Essa mensagem é secreta!!!"
       Caso fosse -10, o console exibiria um erro, já que não encontrou a variavel 'mensagem'
    c. Hávera um erro caso o número digitado não seja maior que 0, já que a variavel 'mensagem' foi declarada apenas no escopo do if
*/

/*
 *
 *
 *   Exercícios de escrita
 *
 *
 */

//          ------ 4 ------
let idade = Number(prompt("Qual a sua idade?"));
let mensagem;
if (idade >= 18) {
  mensagem = "Você pode dirigir";
} else {
  mensagem = "Você não pode dirigir";
}
console.log(mensagem);

//          ------ 5 ------
let turno = prompt("Em qual turno você estuda? M(matutino), V(vespertino), N(noturno)");
if(turno == "M"){
    mensagem = "Bom dia!";
}else if(turno == "V"){
    mensagem = "Boa tarde!";
}else if(turno == "N"){
    mensagem = "Boa noite!";
}else{
    mensagem = "Turno inválido";
}
console.log(mensagem);

//          ------ 6 ------
switch (turno) {
    case "M":
        mensagem = "Bom dia!";
        break;
    case "V":
        mensagem = "Boa tarde!";
        break;
    case "N":
        mensagem = "Boa noite!";
        break;
    default:
        mensagem = "Turno inválido";
        break;
}
console.log(mensagem);

//          ------ 7 ------
let genero = prompt("Qual gênero você pretende assistir? Fantasia, Ação, Aventura, Romance ?");
let preco = Number(prompt("Qual o preço do ingresso?"));

if(genero == "Fantasia" && preco < 15){
    mensagem = "Bom filme!";
}else {
    mensagem = "Escolha outro filme :(";
}
console.log(mensagem);