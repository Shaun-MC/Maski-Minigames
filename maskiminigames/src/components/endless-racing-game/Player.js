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

        console.log("Dimensions: " + this.width + " | " + this.height);

        this.state = {
            x: MAP_WIDTH / 2 + IMAGE_WIDTH / 4,
            y: 0
        }

        this.isKeyPressed = {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false,
        };

        // Get the edges of the track
        this.trackEdges = {
            leftEdge : this.width,
            rightEdge : MAP_WIDTH
        };

        this.verticalSpeed = 1;
        this.horizontalSpeed = 5;
        
        this.isMoving = false;
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

    // Currently unused
    startMoving = () => {
        this.setState({ isMoving: true });
    };

    stopMoving = () => {
        this.setState({ isMoving: false });
    };

    // Setup keypress event listeners to handle movement
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);

        this.animationFrameId = requestAnimationFrame(this.update);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    // Mark key as being pressed down
    handleKeyDown = (event) => {
        // handleKeyDown handles holding key presses in an odd manner,
        // so I instead created a bool to check against, rather than the key
        // itself.
        console.log(`Pressed key ${event.key}`)
        this.isKeyPressed[event.key] = true;
        this.printPosition();
    };

    handleKeyUp = (event) => {
        console.log(`Stopped pressing key ${event.key}`)
        this.isKeyPressed[event.key] = false;
    };

    update = () => {
        if (this.isKeyPressed['ArrowLeft']) {
            this.moveLeft();
        }
        if (this.isKeyPressed['ArrowRight']) {
            this.moveRight();
        }
        if (this.isKeyPressed['ArrowUp']) {
            this.accelerate();
        }
        if (this.isKeyPressed['ArrowDown']) {
            this.deaccelerate();
        }

        this.animationFrameId = requestAnimationFrame(this.update);
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