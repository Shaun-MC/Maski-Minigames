import React, { Component } from 'react';
import playerCarImage from './assets/RedCar.png';

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
        this.state = {
            x: 0,
            y: 0
        }

        this.isKeyPressed = {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false,
        };

        this.speed = 5;
        this.width = playerCarImage.width * 0.4;
        this.height = playerCarImage.height * 0.4;
        this.isMoving = false;
    };

    /*
    Move commands for the player, which move them in a specific direction
    */
    moveLeft = () => {
        this.setState({
            x: this.state.x - this.speed,
        });
    }

    moveRight = () => {
        this.setState({
            x: this.state.x + this.speed,
        });
    }

    moveUp = () => {
        this.setState({
            y: this.state.y - this.speed,
        });
    }

    moveDown = () => {
        this.setState({
            y: this.state.y + this.speed,
        });
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

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);

        this.animationFrameId = requestAnimationFrame(this.update); // Start the animation loop
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {
        console.log(`Pressed key ${event.key}`)
        this.isKeyPressed[event.key] = true; // Keep track of keys that are pressed
        this.printPosition();
    };

    handleKeyUp = (event) => {
        console.log(`Stopped pressing key ${event.key}`)
        this.isKeyPressed[event.key] = false; // Allow movement again once the key is released
    };

    update = () => {
        if (this.isKeyPressed['ArrowLeft']) {
            this.moveLeft(); // Call Player's moveLeft method
        }
        if (this.isKeyPressed['ArrowRight']) {
            this.moveRight(); // Call Player's moveRight method
        }
        if (this.isKeyPressed['ArrowUp']) {
            this.moveUp(); // Call Player's moveUp method
        }
        if (this.isKeyPressed['ArrowDown']) {
            this.moveDown(); // Call Player's moveDown method
        }

        this.animationFrameId = requestAnimationFrame(this.update); // Start the animation loop
    }

    render() {
        const { x, y } = this.state;
        return (
            <div
                className="player"
                style={{
                    position: "absolute",
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