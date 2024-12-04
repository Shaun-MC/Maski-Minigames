import React, { Component } from 'react';
import PlayerCar from './Player';

/**
 * @class Renderer
 * @description Renders the game onto a screen.
 * 
 * @author Minh Pham
 * @date December 2024
 */
class Renderer extends Component {
    constructor(props) {
        super(props);
        this.playerRef = React.createRef(); // Reference to the Player instance
        this.isKeyPressed = {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false,
        };
    }

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
        this.playerRef.current.printPosition();
    };

    handleKeyUp = (event) => {
        console.log(`Stopped pressing key ${event.key}`)
        this.isKeyPressed[event.key] = false; // Allow movement again once the key is released
    };

    update = () => {
        if (this.isKeyPressed['ArrowLeft']) {
            this.playerRef.current.moveLeft(); // Call Player's moveLeft method
        }
        if (this.isKeyPressed['ArrowRight']) {
            this.playerRef.current.moveRight(); // Call Player's moveRight method
        }
        if (this.isKeyPressed['ArrowUp']) {
            this.playerRef.current.moveUp(); // Call Player's moveUp method
        }
        if (this.isKeyPressed['ArrowDown']) {
            this.playerRef.current.moveDown(); // Call Player's moveDown method
        }
        this.animationFrameId = requestAnimationFrame(this.update); // Start the animation loop
    }

    render() {
        return (
            <div className="game-container">
                <PlayerCar
                    ref={this.playerRef} />
            </div>
        );
    }
}

export default Renderer;