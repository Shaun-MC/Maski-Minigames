import React, { Component } from 'react';
import blackCarImage from './assets/BlackCar.png';
import blueCarImage from './assets/BlueCar.png';
import greenCarImage from './assets/GreenCar.png';
import pinkCarImage from './assets/PinkCar.png';
import { MAP_WIDTH, MAP_HEIGHT } from './Constants'

const MIN_SPEED = -30;
const MAX_SPEED = 30;
const IMAGE_WIDTH = 64;
const IMAGE_HEIGHT = 112;
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

        // Set up variables
        this.width = IMAGE_WIDTH;
        this.height = IMAGE_HEIGHT;

        this.setRandomSpeeds();

        // Get the edges of the track
        this.trackEdges = {
            leftEdge : this.width,
            rightEdge : MAP_WIDTH
        };

        this.state = {
            x: this.randomNumberInRange(this.trackEdges.leftEdge, this.trackEdges.rightEdge),
            y: MAP_HEIGHT // Bottom of the screen
        }

        // Set image to a random colored car
        this.imageIndex = this.randomNumberInRange(0, RACE_CAR_IMAGES.length - 1);
        this.raceCarImage = RACE_CAR_IMAGES[this.imageIndex];

        // Begin constant updates
        this.animationFrameId = requestAnimationFrame(this.update);
    };

    setRandomSpeeds = () => {
        this.verticalSpeed = this.randomNumberInRange(2, 12);
        this.horizontalSpeed = this.randomNumberInRange(-3, 3);
    }

    randomizePositionAndCarColor = () => {
        this.verticalSpeed = this.verticalSpeed + this.randomNumberInRange(-2, 2);
        this.horizontalSpeed = this.horizontalSpeed + this.randomNumberInRange(-1, 1);
        this.imageIndex = this.randomNumberInRange(0, RACE_CAR_IMAGES.length - 1);
        this.raceCarImage = RACE_CAR_IMAGES[this.imageIndex];

        this.state = {
            x: this.randomNumberInRange(this.trackEdges.leftEdge, this.trackEdges.rightEdge)
        }
    }

    randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    /*
    Accelerate or deaccelerate the speed of a racer
    */
    accelerate = () => {
        if (this.verticalSpeed < MAX_SPEED) {
            this.verticalSpeed += 0.05;
        }
    }

    deaccelerate = () => {
        if (this.verticalSpeed > MIN_SPEED) {
            this.verticalSpeed -= 0.05;
        }
    }

    update = () => {
        this.setState({
            x: this.state.x - this.horizontalSpeed,
            y: this.state.y - this.verticalSpeed,
        });

        // Check if track was crossed
        if (this.state.y < -MAP_HEIGHT) {
            this.setState({
                y: MAP_HEIGHT,
            });
            this.randomizePositionAndCarColor();
        }
        else if (this.state.y > MAP_HEIGHT)
        {
            this.setState({
                y: -MAP_HEIGHT + IMAGE_HEIGHT,
            });
            this.randomizePositionAndCarColor();
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

    // Render out the player
    render() {
        const { x, y } = this.state;
        return (
            <div
                className="racer"
                style={{
                    position: "relative",
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            >
                <img
                    src={this.raceCarImage}
                    alt="Racer"
                />
            </div>
        );
    }
}

export default Racer;