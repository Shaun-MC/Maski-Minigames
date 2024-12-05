import React, { Component } from 'react';
import PlayerCar from './PlayerCar';
import RaceTrack from './RaceTrack';
import Racer from './Racer';
import { MAP_WIDTH, MAP_HEIGHT } from './Constants'

// Used to center all of the components that are a part of the game
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
};

/**
 * @class Renderer
 * @description Handles rendering all of the objects in the game.
 * 
 * @author Minh Pham
 * @date December 2024
 */
class Renderer extends Component {
    constructor(props) {
        super(props);

        // Currently an unused reference but may be used later
        this.playerRef = React.createRef();
        this.racerRefs = [];

        this.isKeyPressed = {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false,
        };
    }

    createRacerRef = (index) => {
        if (!this.racerRefs[index]) {
            this.racerRefs[index] = React.createRef();
        }
        return this.racerRefs[index];
    };

    accelerate = () => {
        this.racerRefs.forEach((racerRef) => racerRef.current.deaccelerate());
        this.playerRef.current.accelerate();
    };

    deaccelerate = () => {
        this.racerRefs.forEach((racerRef) => racerRef.current.accelerate());
        this.playerRef.current.deaccelerate();
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
    };

    handleKeyUp = (event) => {
        console.log(`Stopped pressing key ${event.key}`)
        this.isKeyPressed[event.key] = false;
    };

    update = () => {
        if (this.isKeyPressed['ArrowLeft']) {
            this.playerRef.current.moveLeft();
        }
        if (this.isKeyPressed['ArrowRight']) {
            this.playerRef.current.moveRight();
        }
        if (this.isKeyPressed['ArrowUp']) {
            this.accelerate();
        }
        if (this.isKeyPressed['ArrowDown']) {
            this.deaccelerate();
        }

        this.animationFrameId = requestAnimationFrame(this.update);
    }

    // Renders out the game
    render() {
        return (
            <div className="game-container"
                style={containerStyle}>
                <div>
                    <PlayerCar
                        ref={this.playerRef} />
                    {[...Array(5)].map((_, index) => (<Racer key={index} ref={this.createRacerRef(index)} />))}
                </div>
                <RaceTrack width={MAP_WIDTH} height={MAP_HEIGHT} />
            </div>

        );
    }
}

export default Renderer;