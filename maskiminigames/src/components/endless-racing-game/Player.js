import React, { Component } from 'react';
import playerCarImage from './assets/RedCar.png';
import { MAP_WIDTH, MAP_HEIGHT } from './Constants'

const MIN_SPEED = 0.1;
const MAX_SPEED = 15;
const IMAGE_WIDTH = 64;
const IMAGE_HEIGHT = 112;

/**
 * @class PlayerCar
 * @description The player car that the player controls for the game.
 * 
 * @author Minh Pham
 * @date December 2024
 */
class PlayerCar extends Component {
    constructor(props) {
        super(props);

        // Set up variables
        this.width = IMAGE_WIDTH;
        this.height = IMAGE_HEIGHT;

        this.state = {
            x: MAP_WIDTH / 2 + IMAGE_WIDTH / 4,
            y: -MAP_HEIGHT / 3
        }

        // Get the edges of the track
        this.trackEdges = {
            leftEdge : this.width,
            rightEdge : MAP_WIDTH
        };

        this.verticalSpeed = 1;
        this.horizontalSpeed = 5;
    };

    /*
    Move commands for the player, which move them in a specific direction
    */
    moveLeft = () => {
        if (this.state.x <= this.trackEdges.leftEdge) return;
        this.setState({
            x: this.state.x - this.horizontalSpeed,
        });
    }

    moveRight = () => {
        if (this.state.x >= this.trackEdges.rightEdge) return;
        this.setState({
            x: this.state.x + this.horizontalSpeed,
        });
    }

    /*
    Accelerate or deaccelerate the speed of the player
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

    // Prints player's position
    printPosition = () => {
        console.log(this.state.x + " / " + this.state.y);
    }

    // Render out the player
    render() {
        const { x, y } = this.state;
        return (
            <div
                className="player"
                style={{
                    position: "relative",
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            >
                <img
                    src={playerCarImage}
                    alt="PlayerCar"
                />
            </div>
        );
    }
}

export default PlayerCar;