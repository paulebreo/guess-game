const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min))) + min;

class GuessGame {
    constructor(number) {
        this.secretNumber = number || getRandomInt(1, 100);
        this.numbersGuessed = [];
        this.remainingGuesses = 5;
        this.gameState = 'playing';
    }
    submitGuess(guess) {
        this.numbersGuessed.push(guess);
        this.remainingGuesses--;
        this.computeGameState();
    }
    resetGame() {
        this.secretNumber = getRandomInt(1, 100);
        this.numbersGuessed = [];
        this.remainingGuesses = 5;
        this.gameState = 'playing';
    }
    computeGameState() {
        if (this.remainingGuesses > 0) {
            if (this.numbersGuessed.includes(this.secretNumber)) {
              this.gameState = 'won'              
            }
        } else if (this.remainingGuesses < 1) {
            this.gameState = 'lost'
        } else {
            this.gameState = 'playing'
        }
    }
}

class Game {}

// Game.prototype.setupGuessEvents();
// Game.prototype.start();
