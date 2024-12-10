import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  ALLOWED_KEYCODES,
} from "./constants";
import GameOver from "../GameOver";
import StartGameButton from "../StartGameButton";
import HelpButton from "../HelpButton";
import InstructionsText from "./InstructionsText";

/**
 * @component SnakeGameManager
 * @description Houses game logic for Snake Game.
 * @author Khushmeet Gobindpuri
 * @date December 2024
 */
const SnakeGameManager = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [score, setScore] = useState(0);

  
  /*
   Starting the game with the snake moving upward.
  */
  const [direction, setDirection] = useState(DIRECTIONS[38]);

  const [speed, setSpeed] = useState(null);

  const [gameOver, setGameOver] = useState(false);

  /*
    useEffect for listening for user keyboard input.
  */
  useEffect(() => {
    window.addEventListener("keydown", moveSnake);
    return () => {
      window.removeEventListener("keydown", moveSnake);
    };
  }, []);

  /*
    Resets Game Elements to an initial ("fresh") state
  */
  const startGame = () => {
    setScore(0);
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDirection([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  /*
    Used to stop game when collision is detected.
  */
  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  /*
    Moves snake in new direction. 
  */
  const moveSnake = (event) => {
    const { keyCode } = event;

    if (validateInput(keyCode)) {
      event.preventDefault();
    }

    if (validateInput(keyCode)) {
      setDirection(DIRECTIONS[keyCode]);
    }
    return;
  };

  /*
    Validates user input to only allow
    arrow keys and W,A,S,D.
  */
  const validateInput = (keyCode) => {
    if (ALLOWED_KEYCODES.has(keyCode)) {
      return true;
    }
    return false;
  };

  /*
    Creates an apple at random coordinates.
  */
  const createApple = () => {
    // create apple with random coords
    return [0, 1].map((i) =>
      Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))
    );
  };

  /**
   * Detects if the player snake has collided with a wall.
   * @param {Object} piece - Player Snake's head
   * @param {Object} currentSnake - Player Snake's whole body.
   */
  const checkWallCollision = (piece, currentSnake = snake) => {
    return (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    );
  };

  /**
   * Detects if the player snake has collided with itself.
   * @param {Object} piece - Player Snake's head
   * @param {Array} currentSnake - Player Snake's whole body.
   */
  const checkSelfCollision = (piece, currentSnake = snake) => {
    return currentSnake.some(
      (segment) => piece[0] === segment[0] && piece[1] === segment[1]
    );
  };

  /**
   * Detects if the player snake has collided with an apple.
   * @param {Object} newSnake - Player Snake's whole body.
   */
  const checkAppleCollision = (newSnake = snake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      setScore(score + 1);

      // Create an apple (eventually) that doesn't collide with our snake
      while (
        checkWallCollision(newApple, newSnake) ||
        checkSelfCollision(newApple, newSnake)
      ) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  /*
   * Function to control overall game state.
   */
  const gameLoop = () => {
    // Making deep copy of existing snake
    // as mutating state directly is not
    // good practice in React.
    const snakeCopy = snake.map((segment) => [...segment]);

    // getting x and y coordinate of snake head
    const newSnakeHead = [
      snakeCopy[0][0] + direction[0],
      snakeCopy[0][1] + direction[1],
    ];

    snakeCopy.unshift(newSnakeHead);

    // Check for wall collision
    if (checkWallCollision(newSnakeHead)) {
      endGame();
    }

    // Check for self-collision
    if (checkSelfCollision(newSnakeHead)) {
      endGame();
    }
    
    // check if player snake has collided with an apple
    if (!checkAppleCollision(snakeCopy)) {
      snakeCopy.pop();
    }

    setSnake(snakeCopy);
  };

  /*
   * Redraws game canvas whenever snake, 
    apple, or gameOver state changes. 
  */
  useEffect(() => {
    // Have to get canvas context to draw on canvas
    const context = canvasRef.current.getContext("2d");

    // setTransform ensures that our game objects
    // do not scale above a given amount
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);

    // context.clearRect(0,0, window.innerWidth, window.innerHeight);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);

    // Coloring the snake
    context.fillStyle = "blue";

    /*
    args to fillRect()
      ==> x,y: current position of each segment of snake
      ==> 1,1: coloring 1x1 pixel
    */
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));

    // Coloring the apple
    context.fillStyle = "red";

    /*
    args to fillRect()
      ==> x,y: current position of apple
      ==> 1,1: coloring 1x1 pixel
    */
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  /**
   * Reruns gameLoop function at an interval determined by speed parameter.
   * @param {function} gameLoop - Function to control overall game state.
   * @param {integer} speed - Constant to specify the rate at which gameLoop function is repeated.
   */
  useInterval(() => gameLoop(), speed);

  /**
   * Styled Snake Game Page.
   */
  return (
    <div>
      <div
        role="button"
        tabIndex="0"
        onKeyDown={(e) => moveSnake(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "30px",
            }}
          >
            {" "}
            {"Current Score: " + score}{" "}
          </div>
          <canvas
            style={{ border: "1px solid black" }}
            ref={canvasRef}
            width={`${CANVAS_SIZE[0]}px`}
            height={`${CANVAS_SIZE[1]}px`}
          />

          {gameOver && <GameOver score={score} startGame={startGame} />}
          <StartGameButton startGame={startGame} text={"START GAME"} />
          <HelpButton instructions={InstructionsText} />
        </div>
      </div>
    </div>
  );
};

export default SnakeGameManager;
