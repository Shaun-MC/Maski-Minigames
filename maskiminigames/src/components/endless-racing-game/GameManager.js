import React, { useState, useRef, useEffect } from "react";

/**
 * @class GameManager
 * @description Manages the overall game state for Endless Racing game
 * 
 * @author Minh Pham
 * @date December 2024
 */
const GameManager = () => {
    const [score, setScore] = useState(0);
    const [running, setIsGameRunning] = useState(false);

    const startGame = () =>
    {
        setScore(0);
        setIsGameRunning(true);
    }

    const stopGame = () =>
    {
        setIsGameRunning(false);
    }
}