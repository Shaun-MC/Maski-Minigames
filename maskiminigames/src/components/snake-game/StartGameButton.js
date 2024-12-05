import React from "react";

const StartGameButton = ({ startGame }) => {
  return (
    <button
      style={{
        all: "unset",
        marginTop: "20px",
        padding: "6px",
        borderRadius: "10px",
        background: "green",
        cursor: "pointer",
      }}
      onClick={startGame}
    >
      START GAME
    </button>
  );
};

export default StartGameButton;
