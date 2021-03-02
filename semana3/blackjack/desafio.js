const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const suits = ["♥️", "♣️", "♦️", "♠️"];

let player = {
  hand: [],
  points: 0,
  cards: [],
};
let computer = {
  hand: [],
  points: 0,
  cards: [],
};

const Calcular = (i) => {
  let points = 0;
  if (i == "A") {
    points += 11;
  } else if (i == "J" || i == "K" || i == "Q") {
    points += 10;
  } else {
    points += Number(i);
  }
  return points;
};

const Sortear = (vezes, sortear_player, sortear_computer) => {
  // Sorteando
  do {
    for (let i = 0; i < vezes; i++) {
      if (sortear_player) {
        player.hand.push(cards[Math.floor(Math.random() * 13)]);
      }
      if (sortear_computer) {
        computer.hand.push(cards[Math.floor(Math.random() * 13)]);
      }
    }
  } while (
    (player.hand[0] == "A" && player.hand[1] == "A") ||
    (computer.hand[0] == "A" && computer.hand[1] == "A")
  );

  // Calculando
  for (let i = 0; i < vezes; i++) {
    if (sortear_player) {
      player.points += Calcular(player.hand[player.hand.length - 1 - i]);
    }
  }
  for (let i = 0; i < vezes; i++) {
    if (sortear_computer) {
      computer.points += Calcular(computer.hand[computer.hand.length - 1 - i]);
    }
  }

  // Sorteando naipes
  for (let i = 0; i < vezes; i++) {
    if (sortear_player) {
      player.cards.push(
        player.hand[player.hand.length - 1 - i] +
          suits[Math.floor(Math.random() * 4)]
      );
    }
  }
  for (let i = 0; i < vezes; i++) {
    if (sortear_computer) {
      computer.cards.push(
        computer.hand[computer.hand.length - 1 - i] +
          suits[Math.floor(Math.random() * 4)]
      );
    }
  }
};

const Jogar = () => {
  Sortear(2, true, true);
  while (
    confirm(
      `Suas cartas são ${player.cards}. A carta revelada do computador é ${computer.cards[0]}.` +
        "\n" + // \n faz pular a linha
        "Deseja comprar mais uma carta?"
    )
  ) {
    Sortear(1, true);
  }

  // Exibindo resultado
  console.log(`Jogador: ${player.cards} = ${player.points} pontos`);
  console.log(`Computador: ${computer.cards} = ${computer.points} pontos`);

  // Verificando resultado
  if (computer.points > player.points) {
    console.log("O computador ganhou!");
  } else if (player.points > computer.points) {
    console.log("O player ganhou!");
  } else {
    console.log("Empate!");
  }
};

while (confirm("Iniciar uma nova rodada?")) {
  player.hand = [];
  player.points = 0;
  player.cards = [];
  computer.hand = [];
  computer.points = 0;
  computer.cards = [];
  Jogar();
}
console.log("O jogo acabou!");
