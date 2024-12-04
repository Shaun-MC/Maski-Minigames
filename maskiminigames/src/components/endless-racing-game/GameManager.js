/**
 * @class GameManager
 * @description Manages the overall game state for Endless Racing game
 * 
 * @author Minh Pham
 * @date December 2024
 */
class GameManager {
    static victoryMessage = `You got a score of ${this.score}`;

    constructor(isRunning, score)
    {
        this.isRunning = false;
        this.score = 0;
    }

    startGame()
    {
        score = 0;
        isRunning = true;
    }

    stopGame()
    {
        console.log(victoryMessage);
        isRunning = false;
    }

    updateGameState()
    {
        timer++;
    }
}