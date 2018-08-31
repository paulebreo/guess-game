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
        it('should give a win game state when guessed correctly', () => {
            const game = new GuessGame(10);
            game.submitGuess(10)
            expect(game.remainingGuesses).toBe(4);
            expect(game.numbersGuessed).toEqual([10]);
            expect(game.gameState).toEqual('won');
        });
    });

    describe('computeGameMessage', () => {
        it('is a prototype method', () => {
            const game = new GuessGame();
            expect(game.hasOwnProperty('computeGameMessage')).toBe(false);
        });
        it('should give a tooHigh message', () => {
            const game = new GuessGame(5);
            game.submitGuess(8)
            const message = game.computeGameMessage()
            expect(message).toBe('tooHigh');

        });
        it('should give a tooLow message', () => {
            const game = new GuessGame(5);
            game.submitGuess(2)
            const message = game.computeGameMessage()
            expect(message).toBe('tooLow');
        });
        it('should give a guessedAlready message', () => {
            const game = new GuessGame(5);
            game.submitGuess(2)
            const message = game.computeGameMessage()
            expect(message).toBe('guessedAlready');
        });
        it('should give a invalidGuess message', () => {
            const game = new GuessGame(5);
            game.submitGuess(2)
            const message = game.computeGameMessage()
            expect(message).toBe('invalidGuess');
        });
    });

    

    
});
