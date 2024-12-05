import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./constants";

const SnakeGame = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);

  // Starting snake moving upward.
  const [direction, setDirection] = useState([0,-1]);

  const [speed, setSpeed] = useState(null);

  const [gameOver, setGameOver] = useState(false);

  const startGame = () => { 

  }

  const endGame = () => { 

  }

  const moveSnake = () => { 

  }

  const createApple = () => { 

  }

  // might want to split up checking wall 
  // collision and self-collision
  const checkCollision = () => { 

  }

  const checkAppleCollision = () => {

  }

  const gameLoop = () => {

  }

  // useEffect draws game objects on the screen
  useEffect(() => {
    // Have to get canvas context to draw on canvas
    const context = canvasRef.current.getContext("2d");

    // setTransform ensures that our game objects
    // do not scale above a given amount
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);

    // context.clearRect(0,0, window.innerWidth, window.innerHeight);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);

    // Coloring the snake
    context.fillStyle = "black";

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
  }, [snake, apple, gameOver])


  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e) }>
      <canvas
        style={{border: "1px solid black"}}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      /> 

      {/* make separate game over component. */}

      {gameOver && <div> {"GAME OVER!!!"} </div>}
      <button onClick={startGame}> START GAME </button>
    </div>
  )
}

export default SnakeGame