import React from "react";
import styles from '../styles/Styles.module.css';

/**
 * @component StartGameButton
 * @description Custom button for starting a game. 
 * @author Khushmeet Gobindpuri
 * @date December 2024
 */
const StartGameButton = ({ startGame, text}) => {return (
    <button
      className={styles.button}
      onClick={startGame}
    >
      {text}
    </button>
  );
};

export default StartGameButton;
