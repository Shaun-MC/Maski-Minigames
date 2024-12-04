import React, { Component } from 'react';
import blackCarImage from './assets/BlackCar.png';
import blueCarImage from './assets/BlueCar.png';
import greenCarImage from './assets/GreenCar.png';
import pinkCarImage from './assets/PinkCar.png';
import { MAP_WIDTH, MAP_HEIGHT, IMAGE_HEIGHT } from './Constants'
import CarUtils from './CarUtils'

const RACE_CAR_IMAGES = [
    blackCarImage,
    blueCarImage,
    greenCarImage,
    pinkCarImage
]

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
        this.setRandomSpeeds();

        this.state = {
            x: this.randomNumberInRange(this.trackEdges.leftEdge, this.trackEdges.rightEdge),
            y: -MAP_HEIGHT + IMAGE_HEIGHT // Bottom of the screen
        }

        // Set image to a random colored car
        this.imageIndex = this.randomNumberInRange(0, RACE_CAR_IMAGES.length - 1);
        this.raceCarImage = RACE_CAR_IMAGES[this.imageIndex];

        // Begin constant updates
        this.animationFrameId = requestAnimationFrame(this.update);
        this.minSpeed = -30;
        this.maxSpeed = 30;
    };

    setRandomSpeeds = () => {
        this.verticalSpeed = this.randomNumberInRange(-1, -3);
        this.horizontalSpeed = this.randomNumberInRange(-0.1, 0.1);
    }

    // Adds random color and modifies speed somewhat
    // Additionally modifies the horizontal position of the car
    randomizeCarState = () => {
        this.verticalSpeed = this.verticalSpeed + this.randomNumberInRange(-2, 2);
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
            x: this.state.x - this.horizontalSpeed,
            y: this.state.y - this.verticalSpeed,
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
            this.horizontalSpeed = -this.horizontalSpeed;
            this.setState({
                x: this.state.x - this.horizontalSpeed,
            });
        }

        this.animationFrameId = requestAnimationFrame(this.update);
    }

    // Render out the racer
    render() {
        const { x, y } = this.state;
        return (CarUtils.renderCar(x, y, this.raceCarImage));
    }
}

export default Racer;