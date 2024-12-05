import React from "react";
import Button from "../Button";

const GameOver = ({ score, startGame }) => {
  return (
    <>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "30px",
          fontWeight: "bold",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      >
        <h1
          style={{
            color: "red",
          }}
        >
          {"GAME OVER!!!" }
          <div style={{
            color:"black"
          }}> {"FINAL SCORE: " + score}</div>
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
            RESTART GAME
          </button>
          <button
            style={{
              all: "unset",
              marginTop: "20px",
              padding: "6px",
              borderRadius: "10px",
              background: "orange",
            }}
            onClick={startGame}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              GO BACK TO MENU
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default GameOver;
