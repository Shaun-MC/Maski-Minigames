import { Component } from 'react';
import blackCarImage from '../../assets/endless-racing-game/BlackCar.png';
import blueCarImage from '../../assets/endless-racing-game/BlueCar.png';
import greenCarImage from '../../assets/endless-racing-game/GreenCar.png';
import pinkCarImage from '../../assets/endless-racing-game/PinkCar.png';
import { MAP_HEIGHT, IMAGE_HEIGHT } from './Constants'
import CarUtils from './CarUtils'

const RACE_CAR_IMAGES = [
    blackCarImage,
    blueCarImage,
    greenCarImage,
    pinkCarImage
]

const INITIAL_MIN_VERT_SPEED = -3;
const INITIAL_MAX_VERT_SPEED = -0.1;
const INITIAL_MIN_HORZ_SPEED = -1.1;
const INITIAL_MAX_HORZ_SPEED = 1.1;
const INITIAL_MIN_OFFSET = 10;
const INITIAL_MAX_OFFSET = 30;
const VERTICAL_SPEED_VARIANCE = 0.5; 
const HORIZONTAL_SPEED_VARIANCE = 0.05; 

/**
 * @class Racer
 * @description A racer car that travels along the road alongside the player.
 * If the racer crashes into the player, the game ends.
 * 
 * @author Minh Pham
 * @date December 2024
 */
class Racer extends Component {
    constructor(props) {
        super(props);
        CarUtils.initialize(this);

        this.initialize();
        this.minSpeed = -50;
        this.maxSpeed = 50;
    };

    initialize = () => {
        CarUtils.initialize(this);
        var randomVerticalOffset = this.randomNumberInRange(INITIAL_MIN_OFFSET, INITIAL_MAX_OFFSET);
        this.state = ({
            x: this.randomNumberInRange(this.trackEdges.leftEdge, this.trackEdges.rightEdge),
            y: -IMAGE_HEIGHT - randomVerticalOffset, // Add slight offset to add variance to car positions
            verticalSpeed: this.randomNumberInRange(INITIAL_MIN_VERT_SPEED, INITIAL_MAX_VERT_SPEED),
            horizontalSpeed: this.randomNumberInRange(INITIAL_MIN_HORZ_SPEED, INITIAL_MAX_HORZ_SPEED)
        });

        // Set image to a random colored car
        this.imageIndex = this.randomNumberInRange(0, RACE_CAR_IMAGES.length - 1);
        this.raceCarImage = RACE_CAR_IMAGES[this.imageIndex];

        // Begin constant updates
        this.animationFrameId = requestAnimationFrame(this.update);
        
    }

    // Adds random color and modifies speed somewhat
    // Additionally modifies the horizontal position of the car
    randomizeCarState = () => {
        this.setState({
            verticalSpeed: this.state.verticalSpeed + this.randomNumberInRange(-VERTICAL_SPEED_VARIANCE, VERTICAL_SPEED_VARIANCE),
            horizontalSpeed: this.state.horizontalSpeed + this.randomNumberInRange(-HORIZONTAL_SPEED_VARIANCE, HORIZONTAL_SPEED_VARIANCE),
        });

        this.imageIndex = this.randomNumberInRange(0, RACE_CAR_IMAGES.length - 1);
        this.raceCarImage = RACE_CAR_IMAGES[this.imageIndex];
    }

    /*
    Accelerate or deaccelerate the speed of the player
    */
    accelerate = () => {
        CarUtils.accelerate(this, this.maxSpeed);
    }

    deaccelerate = () => {
        CarUtils.deaccelerate(this, this.minSpeed);
    }

    // Generates a random number between a given min and max
    randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
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
                x: this.randomNumberInRange(this.trackEdges.leftEdge, this.trackEdges.rightEdge),
                y: MAP_HEIGHT,
            });
            this.randomizeCarState();
        }
        else if (this.state.y > MAP_HEIGHT)
        {
            this.setState({
                x: this.randomNumberInRange(this.trackEdges.leftEdge, this.trackEdges.rightEdge),
                y: -MAP_HEIGHT + IMAGE_HEIGHT,
            });
            this.randomizeCarState();
        }

        // Check if edge was hit
        if (this.state.x <= this.trackEdges.leftEdge || this.state.x >= this.trackEdges.rightEdge)
        {
            // Bounce off the edge of the track
            this.setState({
                x: this.state.x + this.state.horizontalSpeed,
                horizontalSpeed: 0 - this.state.horizontalSpeed
            });
        }
    }

    // Render out the racer
    render() {
        const { x, y } = this.state;
        return (CarUtils.renderCar(x, y, this.raceCarImage, "Racer"));
    }
}

export default Racer;