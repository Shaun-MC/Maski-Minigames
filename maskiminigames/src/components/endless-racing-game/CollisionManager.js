import { IMAGE_WIDTH, IMAGE_HEIGHT } from './Constants';


/**
* @class CollisionManager
* @description Manages collision detection for the Endless Racer game
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


   // Using constants for width and height instead of trying to get from entity
   const width = IMAGE_WIDTH;
   const height = IMAGE_HEIGHT;


   // buffer zone for collision detection
   const buffer = 5; 


   // Perform bounding box collision detection with buffer
   return (
     x1 < x2 + width - buffer &&
     x1 + width - buffer > x2 &&
     y1 < y2 + height - buffer &&
     y1 + height - buffer > y2
   );
 }


 /**
  * @param {Object} playerRef - Reference to the player car
  * @param {Array} racerRefs - Array of references to enemy racers
  */
 static detectCollisions(playerRef, racerRefs) {


   if (!playerRef?.current || !racerRefs?.length) return false;


   const playerCar = playerRef.current;
  


   for (let racerRef of racerRefs) {


     if (!racerRef?.current) continue;
    
     const racerCar = racerRef.current;
    
     if (this.checkCollision(playerCar, racerCar)) {
       return true;
     }
   }
  
   return false;
 }
}


export default CollisionManager;
