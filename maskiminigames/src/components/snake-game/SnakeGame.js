import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  ALLOWED_KEYCODES
} from "./constants";
import "../snake-game/SnakeGame.css"

const SnakeGame = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [score, setScore] = useState(0);

  // Starting snake moving upward.
  const [direction, setDirection] = useState([0,-1]);

  const [speed, setSpeed] = useState(null);

  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
        window.addEventListener('keydown', moveSnake);
        // window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', moveSnake);
            // window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);


  const startGame = () => { 
    setScore(0);
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDirection([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  }

  const endGame = () => { 
    setSpeed(null);
    setGameOver(true);
  }

  // could put moveSnake in own class.
  const moveSnake = (event) => { 
    const { keyCode } = event;

    if (validateInput(keyCode)) { 
      event.preventDefault();
    }

    if (validateInput(keyCode)) { 
      console.log("Valid input");
      setDirection(DIRECTIONS[keyCode]);
    } 
    return;
  }

  const validateInput = (keyCode) => { 
    if (ALLOWED_KEYCODES.has(keyCode)) { 
      return true;
    } 
    return false; 
  }

  const createApple = () => { 
    // create apple with random coords 
    return [0, 1].map((i) =>
      Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))
    );
  }

  const checkWallCollision = (piece, currentSnake = snake) => { 
    // check for wall collision

    return (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    );
  }

  // Check if snake has collided with itself
  const checkSelfCollision = (piece, currentSnake = snake) => { 
    // check if head of the snake has
    // collided with some part of its body
    return currentSnake.some(segment => piece[0] === segment[0] && piece[1] === segment[1]);
  }

  const checkAppleCollision = (newSnake = snake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) { 
      let newApple = createApple();
      setScore(score + 1);

      // Create an apple (eventually) that doesn't collide with our snake
      while (checkWallCollision(newApple, newSnake) || checkSelfCollision(newApple, newSnake)) { 
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false; 
  }

  const gameLoop = () => {
    /* 
    Making deep copy of existing snake
    as mutating state directly is not 
    good practice in React.
    */
    const snakeCopy = snake.map(segment => [...segment]);
    
    // getting x and y coordinate of snake head
    const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];

    // The following two lines are what create
    // the snake "crawling" look
    snakeCopy.unshift(newSnakeHead);

    // Check for wall collision
    if (checkWallCollision(newSnakeHead)) { 
      endGame();
    }

    // Check for self-collision
    if (checkSelfCollision(newSnakeHead)) { 
      endGame();
    }

    if (!checkAppleCollision(snakeCopy)) { 
      snakeCopy.pop();
    }

    setSnake(snakeCopy);

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
  }, [snake, apple, gameOver])

  
  useInterval(() => gameLoop(), speed);


  return (
    <div id="SnakeGameContainer" role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e) } style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
      <div style={{
        fontFamily:"monospace",
        fontSize: "30px",

      }}> {"Current Score: " + score}  </div>
      <canvas
        style={{border: "1px solid black"}}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      /> 

      {/* make separate game over component. */}

      {gameOver && <div> {"GAME OVER!!!"} </div>}
      <button 
      style={{
        all: 'unset',
        border: "1px solid black",
        marginTop: '20px'
        
      }}
      onClick={startGame}> START GAME </button>
    </div>
  )
}

export default SnakeGame