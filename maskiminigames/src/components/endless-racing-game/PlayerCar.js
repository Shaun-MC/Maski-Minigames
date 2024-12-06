import { Component } from 'react';
import playerCarImage from '../../assets/endless-racing-game/RedCar.png';
import { MAP_WIDTH, MAP_HEIGHT, IMAGE_WIDTH } from './Constants'
import CarUtils from './CarUtils'

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
        CarUtils.initialize(this);

        this.state = {
            x: MAP_WIDTH / 2 - IMAGE_WIDTH / 2,
            y: MAP_HEIGHT / 2
        }

        this.verticalSpeed = 1;
        this.horizontalSpeed = 8;
        this.minSpeed = 0.1;
        this.maxSpeed = 50;
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
        CarUtils.accelerate(this, this.maxSpeed);
    }

    deaccelerate = () => {
        CarUtils.deaccelerate(this, this.minSpeed);
    }

    slowdownHorizontalSpeed = () => {
        this.horizontalSpeed = 4;
    }

    resetHorizontalSpeed = () => {
        this.horizontalSpeed = 8;
    }

    // Render out the racer
    render() {
        const { x, y } = this.state;
        return (CarUtils.renderCar(x, y, playerCarImage, "Player"));
    }
}

export default PlayerCar;