import React, { Component } from 'react';
import PlayerCar from './PlayerCar';
import RaceTrack from './RaceTrack';
import Racer from './Racer';
import { MAP_WIDTH, MAP_HEIGHT } from './Constants'

// Used to center all of the components that are a part of the game
const containerStyle = {
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `${MAP_HEIGHT}px`,
  width: `${MAP_WIDTH}px`,
  margin: '0 auto',
  position: 'relative',
  boxSizing: 'border-box'
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
        };

        this.accelerationInterval = 0;
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

        this.interval = setInterval(() => {
            this.accelerate();
        }, 200); 

        this.animationFrameId = requestAnimationFrame(this.update);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);

        clearInterval(this.interval);
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