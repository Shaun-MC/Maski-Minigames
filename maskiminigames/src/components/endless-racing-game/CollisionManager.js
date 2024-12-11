import { IMAGE_WIDTH, IMAGE_HEIGHT } from './Constants';

const buffer = 5; // buffer zone for collision detection

/**
* @class CollisionManager
* @description Manages collision detection for the Endless Racer game.
* Works specifically with the Racer and PlayerCar classes.
*
* @author Ishaan Kapil, Minh Pham
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
            x1 < x2 + IMAGE_WIDTH - buffer &&
            x1 + IMAGE_WIDTH - buffer > x2 &&
            y1 < y2 + IMAGE_HEIGHT - buffer &&
            y1 + IMAGE_HEIGHT - buffer > y2
        );
    }

    /**
     * Given two entities, returns the x difference between them if they are colliding.
     * Returns null if the entities aren't colliding.
     * @param {Object} entity1 - First entity with state containing x, y coordinates
     * @param {Object} entity2 - Second entity with state containing x, y coordinates
     * @returns null if the entities aren't colliding, or the difference in X position if they are
     */
    static checkXOffsetOfCollision(entity1, entity2) {
        if (!this.checkCollision(entity1, entity2)) return null;

        const {
            x: x1,
        } = entity1.state;

        const {
            x: x2,
        } = entity2.state;

        // Perform bounding box collision detection with buffer
        return (
            x2 - x1
        );
    }

    /**
     * Detects if the player has collided with any enemy racers
     * @param {Object} playerRef - Reference to the player
     * @param {Array} racerRefs - Array of references to enemy racers
     */
    static detectPlayerCollisions(playerRef, racerRefs) {
        if (!playerRef?.current || !racerRefs?.length) return false;
        let playerCar = playerRef.current;

        for (let racerRef of racerRefs) {
            if (!racerRef?.current) continue;
            let racerCar = racerRef.current;
            if (this.checkCollision(playerCar, racerCar)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Detects if a specific racer has collided with any other enemy racers
     * @param {Array} racerRefs - Array of references to enemy racers
     * Returns null if the racer is not colliding with other racers
     */
    static detectRacerCollisions(curRacer, racerRefs) {
        if (!racerRefs?.length) return null;

        for (let racerRef of racerRefs) {
            if (!racerRef?.current) continue;
            let racerCar = racerRef.current;
            if (curRacer == racerCar) continue;

            let xOffset = this.checkXOffsetOfCollision(curRacer, racerCar);
            if (xOffset != null) {
                return xOffset;
            }
        }

        return null;
    }
}


export default CollisionManager;
