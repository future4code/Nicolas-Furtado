const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♥️", "♣️", "♦️", "♠️"];

let player = {
   hand: [],
   points: 0,
};
let computer = {
   hand: [],
   points: 0,
};

const Calcular = (i) => {
   let points = 0;
   if(i == "A"){
      points += 11;
   }else if(i == "J" || i == "K" || i == "Q"){
      points += 10;
   }else {
      points += Number(i);
   }
   return points;
}

const Jogar = () => {
   // Sorteando
   for(let i = 0; i < 2; i++){
      player.hand.push(cards[Math.floor(Math.random() * 13)]);
      computer.hand.push(cards[Math.floor(Math.random() * 13)]);
   }

   // Calculando
   for(i of player.hand){
      player.points += Calcular(i);
   }
   for(i of computer.hand){
      computer.points += Calcular(i);
   }

   // Exibindo resultado
   console.log(`Jogador: ${player.hand[0]+suits[Math.floor(Math.random() * 4)]} + ${player.hand[1]+suits[Math.floor(Math.random() * 4)]} = ${player.points} pontos`);
   console.log(`Computador: ${computer.hand[0]+suits[Math.floor(Math.random() * 4)]} + ${computer.hand[1]+suits[Math.floor(Math.random() * 4)]} = ${computer.points} pontos`);


   // Verificando resultado
   if(computer.points > player.points){
      console.log("O computador ganhou!");
   }else if (player.points > computer.points){
      console.log("O player ganhou!");
   }else {
      console.log("Empate!");
   }
}

while(confirm("Iniciar uma nova rodada?")){
   player.hand = [];
   player.points = 0;
   computer.hand = [];
   computer.points = 0;
   Jogar();
}
console.log("O jogo acabou!");