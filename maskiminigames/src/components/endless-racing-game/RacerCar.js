import { Component } from "react";
import blackCarImage from "../../assets/endless-racing-game/BlackCar.png";
import blueCarImage from "../../assets/endless-racing-game/BlueCar.png";
import greenCarImage from "../../assets/endless-racing-game/GreenCar.png";
import pinkCarImage from "../../assets/endless-racing-game/PinkCar.png";
import { MAP_HEIGHT, IMAGE_HEIGHT } from "./Constants";
import CarUtils from "./CarUtils";
import CollisionManager from "./CollisionManager";

const RACE_CAR_IMAGES = [
  blackCarImage,
  blueCarImage,
  greenCarImage,
  pinkCarImage,
];

// Define constants for racer
const INITIAL_MIN_VERT_SPEED = -3;
const INITIAL_MAX_VERT_SPEED = -6;
const INITIAL_MIN_HORZ_SPEED = -1.1;
const INITIAL_MAX_HORZ_SPEED = 1.1;
const INITIAL_MIN_OFFSET = 50;
const INITIAL_MAX_OFFSET = MAP_HEIGHT / 1.2;
const VERTICAL_SPEED_VARIANCE = 0.5;
const HORIZONTAL_SPEED_VARIANCE = 0.05;
const LOSS_IN_VELOCITY_UPON_COLLISION = 0.9;
const MIN_SPEED = -50;
const MAX_SPEED = 50;

/**
 * @class Racer
 * @description A racer car that travels along the road alongside the player.
 * If the racer crashes into the player, the game ends.
 *
 * @author Minh Pham, Ishaan Kapil
 * @date December 2024
 */
class RacerCar extends Component {
  constructor(props) {
    super(props);
    CarUtils.initialize(this);
    this.state = {
      y: -MAP_HEIGHT, // Move off the screen for now
    };
  }

  initialize = () => {
    CarUtils.initialize(this);
    var randomVerticalOffset = this.randomNumberInRange(
      INITIAL_MIN_OFFSET,
      INITIAL_MAX_OFFSET
    );
    this.setState({
      x: this.randomNumberInRange(
        this.trackEdges.leftEdge,
        this.trackEdges.rightEdge
      ),
      y: -IMAGE_HEIGHT - randomVerticalOffset, // Add slight offset to add variance to car positions
      verticalSpeed: this.randomNumberInRange(
        INITIAL_MIN_VERT_SPEED,
        INITIAL_MAX_VERT_SPEED
      ),
      horizontalSpeed: this.randomNumberInRange(
        INITIAL_MIN_HORZ_SPEED,
        INITIAL_MAX_HORZ_SPEED
      ),
    });

    // Set image to a random colored car
    this.imageIndex = this.randomNumberInRange(0, RACE_CAR_IMAGES.length - 1);
    this.raceCarImage = RACE_CAR_IMAGES[this.imageIndex];

    // Begin constant updates
    this.animationFrameId = requestAnimationFrame(this.update);
  };

  // Adds random color and modifies speed somewhat
  // Additionally modifies the horizontal position of the car
  randomizeCarState = () => {
    this.setState({
      verticalSpeed:
        this.state.verticalSpeed +
        this.randomNumberInRange(
          -VERTICAL_SPEED_VARIANCE,
          VERTICAL_SPEED_VARIANCE
        ),
      horizontalSpeed:
        this.state.horizontalSpeed +
        this.randomNumberInRange(
          -HORIZONTAL_SPEED_VARIANCE,
          HORIZONTAL_SPEED_VARIANCE
        ),
    });

    this.imageIndex = this.randomNumberInRange(0, RACE_CAR_IMAGES.length - 1);
    this.raceCarImage = RACE_CAR_IMAGES[this.imageIndex];
  };

  /*
    Accelerate or decelerate the speed of the player
    */
  accelerate = () => {
    CarUtils.accelerate(this, MAX_SPEED);
  };

  decelerate = () => {
    CarUtils.decelerate(this, MIN_SPEED);
  };

  /*
    Check for collision with track edges or other racers
    */
  collisionCheck = (racerRefs) => {
    // Check if racer was hit
    let xOffset = CollisionManager.detectRacerCollisions(this, racerRefs);
    if (xOffset != null) {
      // Move the two colliding cars away from one another
      this.setState({ x: this.state.x - xOffset / 16 });

      // Based on position from other car, make horizontal velocity negative/positive
      if (xOffset < 0) {
        this.setState({
          horizontalSpeed:
            -Math.abs(this.state.horizontalSpeed) *
            LOSS_IN_VELOCITY_UPON_COLLISION,
        });
      } else {
        this.setState({
          horizontalSpeed:
            Math.abs(this.state.horizontalSpeed) *
            LOSS_IN_VELOCITY_UPON_COLLISION,
        });
      }
    }

    // Check if edge was hit
    if (
      this.state.x <= this.trackEdges.leftEdge ||
      this.state.x >= this.trackEdges.rightEdge
    ) {
      // Bounce off the edge of the track
      this.setState({
        x: this.state.x + this.state.horizontalSpeed,
        horizontalSpeed: 0 - this.state.horizontalSpeed,
      });
    }
  };

  // Generates a random number between a given min and max
  randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /*
    Accelerate or decelerate the speed of a racer
    */
  accelerate = () => {
    CarUtils.accelerate(this, MAX_SPEED);
  };

  decelerate = () => {
    CarUtils.decelerate(this, MIN_SPEED);
  };

  update = () => {
    // Apply speed update
    this.setState({
      x: this.state.x - this.state.horizontalSpeed,
      y: this.state.y - this.state.verticalSpeed,
    });

    // Check if track was crossed
    if (this.state.y < -MAP_HEIGHT) {
      this.setState({
        x: this.randomNumberInRange(
          this.trackEdges.leftEdge,
          this.trackEdges.rightEdge
        ),
        y: MAP_HEIGHT,
      });
      this.randomizeCarState();
    } else if (this.state.y > MAP_HEIGHT) {
      this.setState({
        x: this.randomNumberInRange(
          this.trackEdges.leftEdge,
          this.trackEdges.rightEdge
        ),
        y: -MAP_HEIGHT + IMAGE_HEIGHT,
      });
      this.randomizeCarState();

      // Increments score upon pass
      if (this.props.onCarPassed) {
        this.props.onCarPassed();
      }
    }
  };

  // Render out the racer
  render() {
    const { x, y } = this.state;
    return CarUtils.renderCar(x, y, this.raceCarImage, "Racer");
  }
}

export default RacerCar;
