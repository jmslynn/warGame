class Card {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  describe() {
    return `card: ${this.name}, worth ${value} points`;
  }
}//end card class

class Deck {
  // create individual cards into a deck array
  constructor() {
    this.cards = [];
  }
  shuffle() {
    return this.cards.sort(() => Math.random() - 0.5);
  }
  deal() {
    return this.cards.pop();
  }
  showDeck() {
    for (i = 0; i < this.cards.length; i++) {
      console.log(cards[i]);
    }
  }

  get sizeOfDeck() {
    return this.cards.length;
  }

  createDeck() {
    const suits = ['diamonds', 'hearts', 'spades', 'clubs'];
    const numbers = ['Ace', 'Two', 'Three', 'Four', 'Five',
      'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Jack', 'Queen', 'King']

    for (let suit of suits) {
      for (let i = 0; i < numbers.length; i++) {
        let cardName = numbers[i] + ' of ' + suit;
        let cardValue = i;
        this.cards.push(new Card(cardName, cardValue + 1));
      }
    }
  }
}//end deck class

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }
  showHand() {
    return this.hand;
  }

  get sizeOfHand() {
    return this.hand.length;
  }

  playCard() {
    return this.hand.pop();
  }

} //end player class

//begin play
let playerOne = new Player('Sigrid');
let playerTwo = new Player('Sven');
let theDeck = new Deck();
theDeck.createDeck();
theDeck.shuffle();
//console.log(theDeck.cards);

console.log(`${playerOne.name} and ${playerTwo.name} say hei!`);

//deal cards
let deckSize = theDeck.cards.length;
//console.log(deckSize);

for (let i = 0; i < deckSize; i += 2) {
  playerOne.hand.push(theDeck.deal());
  playerTwo.hand.push(theDeck.deal());
}
// console.log(playerOne.showHand());
// console.log(playerTwo.showHand());

playGame();
function playGame() {
  console.log('Begin play');
  let winner = '';
  for (let i = 0; i < 26; i++) {
    //console.log(`player1: ${playerOne.hand[i].value}`);
    if (playerOne.hand[i].value > playerTwo.hand[i].value) {
      winner = `${playerOne.name} wins`;
      playerOne.score += 1;
    } else if (playerOne.hand[i].value < playerTwo.hand[i].value) {
      winner = `${playerTwo.name} wins`;
      playerTwo.score += 1;
    } else {
      winner = 'tie';
    }
    console.log(`${playerOne.hand[i].name} vs ${playerTwo.hand[i].name}: ${winner}`)
  }

  //print score if else
  console.log(`${playerOne.name}: ${playerOne.score}`);
  console.log(`${playerTwo.name}: ${playerTwo.score}`);
  if (playerOne.score > playerTwo.score) {
    console.log(`${playerOne.name} wins the match!`);
  } else if (playerTwo.score > playerOne.score) {
    console.log(`${playerTwo.name} wins the match!`);
  } else if (playerOne.score === playerTwo.score) { console.log('the match is a draw!') }
  console.log('Thanks for playing!');
}
