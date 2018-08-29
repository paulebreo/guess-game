class GuessGame {
    constructor() {
        this.secretNumber = undefined;
        this.gameState = 'playing';
    }
    submitGuess(guess) {}
    computeGameState() {}
}

class Game {}

Game.prototype.setupGuessEvents();
Game.prototype.start();
