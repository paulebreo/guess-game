const getRandomInt = (min, max) =>  Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min))) + min

class GuessGame {
    constructor(number) {
      this.secretNumber = number || getRandomInt(1, 100);
      this.numbersGuessed = [];
      this.remainingGuesses = 5;
      this.gameState = 'playing';
    }
    submitGuess(guess) {}
    resetGame() {
      
    }
    computeGameState() {}

}

class Game {}

// Game.prototype.setupGuessEvents();
// Game.prototype.start();
