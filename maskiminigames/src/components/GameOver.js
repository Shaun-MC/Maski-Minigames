import React from "react";
import StartGameButton from "./StartGameButton";
import styles from '../styles/Styles.module.css';
import "../styles/GameOver.css";

/**
 * @component GameOver
 * @description Game Over Popup UI Component
 * @author Khushmeet Gobindpuri
 * @date December 2024
 */
const GameOver = ({ score, startGame }) => {
  return (
    <div className={styles.overlay}>
      <div className="game-over">
        <h1>GAME OVER!!!</h1>
        <h2>{"FINAL SCORE: " + score}</h2>
        <div className="buttons">
          <StartGameButton
            startGame={startGame}
            text={"RESTART"}
          />
          <button className="menu-button">
            <a href="/">GO BACK TO MENU</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
