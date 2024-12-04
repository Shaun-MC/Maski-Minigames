/**
 * @class RaceTrack
 * @description The track that the player travels on during the game.
 * 
 * @author Minh Pham
 * @date December 2024
 */
const RaceTrack = ({ width, height }) => {
    const raceTrackStyle = {
        width: `${width}px`,
        height: `${window.innerHeight}px`,
        backgroundColor: `#717874`,
    };

    return <div style={raceTrackStyle}></div>
}

export default RaceTrack;