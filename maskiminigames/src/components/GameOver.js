import React, { useState } from 'react';
import StartGameButton from "./StartGameButton";
import styles from '../styles/Styles.module.css';
import "../styles/GameOver.css";

/**
 * @component GameOver
 * @description Game Over Popup UI Component
 * @author Khushmeet Gobindpuri, Ayleen Piteo-Tarpy
 * @date December 2024
 */
const GameOver = ({ score, startGame }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackToMenu = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 200); // 200ms delay so users can see button press animation
  }

  if (!isVisible) return null;
  return (
    <div className={styles.overlay}>
      <div className="game-over">
        <button className="close-button" onClick={handleClose}>×</button>
        <h1>GAME OVER!!!</h1>
        <h2>{"FINAL SCORE: " + score}</h2>
        <div className="buttons">
          <StartGameButton
            startGame={startGame}
            text={"RESTART"}
          />
          <button className={styles.button} onClick={handleBackToMenu}
          >
            BACK TO MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
