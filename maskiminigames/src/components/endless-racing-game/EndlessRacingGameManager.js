import React, { Component } from "react";
import PlayerCar from "./PlayerCar";
import RacerCar from "./RacerCar";
import CollisionManager from "./CollisionManager";
import StartGameButton from "../StartGameButton";
import HelpButton from "../HelpButton";
import InstructionsText from "./InstructionsText";
import GameOver from "../GameOver";
import { MAP_WIDTH, MAP_HEIGHT } from "./Constants";

// Used to center all of the components that are a part of the game
const containerStyle = {
  overflow: "hidden",
  backgroundColor: `#717874`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: `${MAP_HEIGHT}px`,
  width: `${MAP_WIDTH}px`,
  margin: "0 auto",
  position: "relative",
  boxSizing: "border-box",
};

const scoreStyle = {
  position: "absolute",
  top: "5px",
  fontFamily: "monospace",
  fontSize: "30px",
  textAlign: "center",
  color: "#1bd0d3",
  zIndex: 1000,
};

const ACCELERATION_INTERVAL = 300;

/**
 * @class EndlessRacingGameManager
 * @description Handles all of the game systems for EndlessRacingGame.
 *
 * @author Minh Pham, Ishaan Kapil
 * @date December 2024
 */
class EndlessRacingGameManager extends Component {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
    this.racerRefs = [];

    this.isKeyPressed = {
      ArrowLeft: false,
      ArrowRight: false,
      Shift: false,
      a: false,
      d: false,
    };

    this.state = {
      score: 0,
      gameRunning: false,
      gameOver: false,
    };
  }

  /**
   * Begins the game by initializing all the necessary variables.
   */
  startGame = () => {
    console.log("Starting the game!");

    // Reset all variables
    this.isKeyPressed = {
      ArrowLeft: false,
      ArrowRight: false,
      Shift: false,
      a: false,
      d: false,
    };

    // Reset position of player and enemy racers
    this.racerRefs.forEach((racerRef) => racerRef.current.initialize());
    this.playerRef?.current.initialize();
    this.animationFrameId = requestAnimationFrame(this.update);

    this.interval = setInterval(() => {
      this.accelerateGame();
    }, ACCELERATION_INTERVAL);

    this.setState({
      score: 0,
      gameOver: false,
      gameRunning: true,
    });
  };

  handleCarPassed = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  createRacerRef = (index) => {
    if (!this.racerRefs[index]) {
      this.racerRefs[index] = React.createRef();
    }
    return this.racerRefs[index];
  };

  accelerateGame = () => {
    // We decelerate the racer cars to make the player car appear faster
    this.racerRefs.forEach((racerRef) => racerRef.current.decelerate());

    // Accelerate player car
    this.playerRef.current.accelerate();
  };

  decelerateGame = () => {
    this.racerRefs.forEach((racerRef) => racerRef.current.accelerate());
    this.playerRef.current.decelerate();
  };

  // Setup keypress event listeners to handle movement
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);

    clearInterval(this.interval);
  }

  // Mark key as being pressed down
  handleKeyDown = (event) => {
    // handleKeyDown handles holding key presses in an odd manner,
    // so I instead created a bool to check against, rather than the key
    // itself.
    if (this.isKeyPressed[event.key] != null) {
      event.preventDefault();
      console.log(`Pressed key ${event.key}`);
      this.isKeyPressed[event.key] = true;
    }
  };

  handleKeyUp = (event) => {
    if (this.isKeyPressed[event.key] != null) {
      console.log(`Stopped pressing key ${event.key}`);
      this.isKeyPressed[event.key] = false;
    }
  };

  update = () => {
    // Exit if game is already over
    if (!this.state.gameRunning) {
      return;
    }

    // Process movement first
    if (this.isKeyPressed["ArrowLeft"] || this.isKeyPressed["a"]) {
      this.playerRef.current?.moveLeft();
    }
    if (this.isKeyPressed["ArrowRight"] || this.isKeyPressed["d"]) {
      this.playerRef.current?.moveRight();
    }

    // Update enemy movement
    this.racerRefs.forEach((racerRef) => racerRef.current.update());

    // Slowdown if pressing shift
    if (this.isKeyPressed["Shift"]) {
      this.playerRef.current?.slowdownHorizontalSpeed();
    } else {
      this.playerRef.current?.resetHorizontalSpeed();
    }

    // Check for collisions
    if (
      CollisionManager.detectPlayerCollisions(this.playerRef, this.racerRefs)
    ) {
      this.setState({
        gameOver: true,
        gameRunning: false,
      });
      cancelAnimationFrame(this.animationFrameId);
      clearInterval(this.interval);
      return;
    }

    this.racerRefs.forEach((racerRef) =>
      racerRef.current.collisionCheck(this.racerRefs)
    );
    // Request next frame only if game isn't over
    if (!this.state.gameOver) {
      this.animationFrameId = requestAnimationFrame(this.update);
    }
  };

  // Renders out the game
  render() {
    return (
      <div style={containerStyle}>
        <div style={scoreStyle}>
          {"Cars Passed: " + Math.floor(this.state.score)}
        </div>
        {this.state.gameOver && (
          <GameOver
            score={Math.floor(this.state.score)}
            startGame={this.startGame}
          />
        )}
        {!this.state.gameRunning && (
          <StartGameButton startGame={this.startGame} text={"START GAME"} />
        )}
        {<HelpButton instructions={InstructionsText} />}
        <PlayerCar ref={this.playerRef} />
        {[...Array(5)].map((_, index) => (
          <RacerCar
            key={index}
            ref={this.createRacerRef(index)}
            onCarPassed={this.handleCarPassed}
          />
        ))}
      </div>
    );
  }
}

export default EndlessRacingGameManager;
