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

        this.speed = 5;
        this.width = playerCarImage.width * 0.4;
        this.height = playerCarImage.height * 0.4;
        this.isMoving = false;
    };

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

    printPosition = () => {
        console.log(this.state.x + " / " + this.state.y);
    }

    startMoving = () => {
        this.setState({ isMoving: true });
    };

    stopMoving = () => {
        this.setState({ isMoving: false });
    };

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