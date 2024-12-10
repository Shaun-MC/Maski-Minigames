import React from "react";
import styles from '../styles/Styles.module.css';

/**
 * @component StartGameButton
 * @description Custom button for starting a game. 
 * @author Khushmeet Gobindpuri
 * @date December 2024
 */
const StartGameButton = ({ startGame, text}) => {
  const delayStart = () => {
    setTimeout(() => {
      startGame();
    }, 200); // 200ms delay so users can see button press animation
  }
  return (
    <button
      className={styles.button}
      onClick={delayStart}
    >
      {text}
    </button>
  );
};

export default StartGameButton;
