describe('GuessGame Class', () => {
    it('it attaches a constructor method to the GuessGame Class', () => {
        expect(typeof GuessGame.constructor).toBe('function');
    });
    
    it('constructor should generate random number between 1 to 100 if no number given', () => {
        const game = new GuessGame();
        const number = game.secretNumber
        let isBetween = (number >= 0) && (number <= 100) 
        expect(isBetween).toBe(true);
    });

    it('the instance has `secretNumber`, `remainingGuesses`, `numbersGuessed`, and `gameState` properties', () => {
        const game = new GuessGame(46);
        expect(game.secretNumber).toEqual(46);
        expect(game.remainingGuesses).toBe(5);
        expect(game.numbersGuessed).toEqual([]);
        expect(game.gameState).toEqual('playing');
    });

    describe('submitGuess method', () => {
        it('is a prototype method', () => {
            const game = new GuessGame();
            expect(game.hasOwnProperty('submitGuess')).toBe(false);
        });
        it('should add a guess', () => {
            const game = new GuessGame();
            game.submitGuess(99)
            expect(game.numbersGuessed).toEqual([99]);
        });
    });

    describe('resetGame method', () => {
        it('is a prototype method', () => {
            const game = new GuessGame();
            expect(game.hasOwnProperty('resetGame')).toBe(false);
        });
        it('should reset the numbersGuessed, remainingGuesses and gameState', () => {
            const game = new GuessGame(10);
            game.submitGuess(99)
            game.submitGuess(93)
            game.submitGuess(92)
            game.submitGuess(91)
            game.submitGuess(90)
            expect(game.gameState).toEqual('lost');
            expect(game.remainingGuesses).toBe(0);
            expect(game.numbersGuessed).toEqual([99, 93, 92, 91, 90]);
            game.resetGame()
            expect(game.gameState).toEqual('playing');
            expect(game.remainingGuesses).toBe(5);
            expect(game.numbersGuessed).toEqual([]);

        });
    });

    describe('computeGameState', () => {
        it('is a prototype method', () => {
            const game = new GuessGame();
            expect(game.hasOwnProperty('computeGameState')).toBe(false);
        });
    });

    describe('computeGameMessage', () => {
        it('is a prototype method', () => {
            const game = new GuessGame();
            expect(game.hasOwnProperty('computeGameMessage')).toBe(false);
        });
    });

    

    
});
