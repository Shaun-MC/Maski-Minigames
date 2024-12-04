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