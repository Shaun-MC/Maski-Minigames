import { IMAGE_WIDTH, IMAGE_HEIGHT } from './Constants';

const width = IMAGE_WIDTH;
const height = IMAGE_HEIGHT;
const buffer = 5; // buffer zone for collision detection

/**
* @class CollisionManager
* @description Manages collision detection for the Endless Racer game.
* Works specifically with the Racer and PlayerCar classes.
*
* @author Ishaan Kapil
* @date December 2024
*/
class CollisionManager {
    /**
     * @param {Object} entity1 - First entity with state containing x, y coordinates
     * @param {Object} entity2 - Second entity with state containing x, y coordinates
     */
    static checkCollision(entity1, entity2) {
        if (!entity1?.state || !entity2?.state) return false;

        const {
            x: x1,
            y: y1
        } = entity1.state;

        const {
            x: x2,
            y: y2
        } = entity2.state;

        // Perform bounding box collision detection with buffer
        return (
            x1 < x2 + width - buffer &&
            x1 + width - buffer > x2 &&
            y1 < y2 + height - buffer &&
            y1 + height - buffer > y2
        );
    }


    /**
     * Detects if a specific car has collided with any enemy racers
     * @param {Object} carRef - Reference to a specific car
     * @param {Array} racerRefs - Array of references to enemy racers
     */
    static detectCollisions(carRef, racerRefs) {
        if (!carRef?.current || !racerRefs?.length) return false;
        let playerCar = carRef.current;

        for (let racerRef of racerRefs) {
            if (!racerRef?.current) continue;
            let racerCar = racerRef.current;
            if (this.checkCollision(playerCar, racerCar)) {
                return true;
            }
        }

        return false;
    }
}


export default CollisionManager;
