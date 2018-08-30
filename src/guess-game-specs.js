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
    });

    describe('computeGameState', () => {
        it('is a prototype method', () => {
            const game = new GuessGame();
            expect(game.hasOwnProperty('computeGameState')).toBe(false);
        });
    });

    

    
});
