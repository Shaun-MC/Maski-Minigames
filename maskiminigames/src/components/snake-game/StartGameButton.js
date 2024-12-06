import React from "react";

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
