import React, { Component } from 'react';
import PlayerCar from './Player';
import RaceTrack from './RaceTrack';
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
    }

    // Renders out the game
    render() {
        return (
            <div className="game-container"
                style={containerStyle}>
                <PlayerCar
                    ref={this.playerRef} />
                <RaceTrack width={MAP_WIDTH} height={MAP_HEIGHT} />
            </div>
        );
    }
}

export default Renderer;