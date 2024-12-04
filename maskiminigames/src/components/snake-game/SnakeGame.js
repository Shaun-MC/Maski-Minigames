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

  useEffect(() => { 

  }, [snake, apple, gameOver])


  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e) }>
      <canvas
        style={{border: "1px solid black"}}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      /> 
      {gameOver && <div> {"GAME OVER!!!"} </div>}
      <button onClick={startGame}> </button>
    </div>
  )
}

export default SnakeGame