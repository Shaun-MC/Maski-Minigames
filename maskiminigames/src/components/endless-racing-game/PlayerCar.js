import { Component } from 'react';
import playerCarImage from '../../assets/endless-racing-game/RedCar.png';
import { MAP_WIDTH, MAP_HEIGHT, IMAGE_WIDTH } from './Constants'
import CarUtils from './CarUtils'

const HORIZONTAL_SPEED = 8;
const MIN_SPEED = 0.1;
const MAX_SPEED = 50;

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

        // Define x and y in state so that we can call setState later
        this.state = {
            x: MAP_WIDTH / 2 - IMAGE_WIDTH / 2,
            y: MAP_HEIGHT / 1.5,
        }
    };

    initialize = () => {
        this.setState({
            x: MAP_WIDTH / 2 - IMAGE_WIDTH / 2,
            y: MAP_HEIGHT / 1.5,
            verticalSpeed: 1,
            horizontalSpeed: HORIZONTAL_SPEED
        });
    }

    /*
    Move commands for the player, which move them in a specific direction
    */
    moveLeft = () => {
        if (this.state.x <= this.trackEdges.leftEdge) return;
        this.setState({
            x: this.state.x - this.state.horizontalSpeed,
        });
    }

    moveRight = () => {
        if (this.state.x >= this.trackEdges.rightEdge) return;
        this.setState({
            x: this.state.x + this.state.horizontalSpeed,
        });
    }

    /*
    Accelerate or decelerate the speed of the player
    */
    accelerate = () => {
        CarUtils.accelerate(this, MAX_SPEED);
    }

    decelerate = () => {
        CarUtils.decelerate(this, MIN_SPEED);
    }

    slowdownHorizontalSpeed = () => {
        this.state.horizontalSpeed = HORIZONTAL_SPEED / 2;
    }

    resetHorizontalSpeed = () => {
        this.state.horizontalSpeed = HORIZONTAL_SPEED;
    }

    // Render out the racer
    render() {
        const { x, y } = this.state;
        return (CarUtils.renderCar(x, y, playerCarImage, "Player"));
    }
}

export default PlayerCar;