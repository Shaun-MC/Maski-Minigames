import React from "react";

/**
 * @component StartGameButton
 * @description Custom button for starting a game. 
 * @author Khushmeet Gobindpuri
 * @date December 2024
 */
const StartGameButton = ({ startGame, text}) => {
  return (
    <button
      style={{
        all: "unset",
        marginTop: "20px",
        padding: "10px",
        borderRadius: "10px",
        background: "green",
        cursor: "pointer",
        color:"white",
      }}
      onClick={startGame}
    >
      {text}
    </button>
  );
};

export default StartGameButton;
