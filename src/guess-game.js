class GuessGame {
    constructor(number) {
        this.secretNumber = number || undefined;
        this.numbersGuessed = []
        this.remainingGuesses = 5
        this.gameState = 'playing';
    }
    submitGuess(guess) {}
    computeGameState() {}
}

class Game {}

Game.prototype.setupGuessEvents();
Game.prototype.start();
