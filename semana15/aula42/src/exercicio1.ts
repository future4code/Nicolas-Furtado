/*
  a. O transpilador acusa erro se eu tentar atribuir number a uma string.
  b. Podemos usar o union type
*/
const minhaString: string = "nicolas";
const meuNumero: number = 18;
type pessoa = { nome: string; idade: number; corFavorita: string };
enum cores {
  SECRECT = 'nenhuma, todas',
  AZUL = 'azul',
  PRETO = 'preto',
}
const nicolas: pessoa = {
  nome: "nicolas",
  idade: 18,
  corFavorita: cores.PRETO,
};
const janis: pessoa = {
  nome: "janis",
  idade: 23,
  corFavorita: cores.AZUL,
};
const buda: pessoa = {
  nome: " ",
  idade: Infinity,
  corFavorita: cores.SECRECT,
};

/*
  a. O transpilador acusa erro se eu tentar atribuir number a uma string.
  b. Podemos usar o union type
*/
