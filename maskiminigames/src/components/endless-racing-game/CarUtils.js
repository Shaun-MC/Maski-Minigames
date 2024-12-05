import { MAP_WIDTH, IMAGE_HEIGHT, IMAGE_WIDTH } from './Constants'
import React from 'react';

/**
 * @class CarUtils
 * @description Contains common functions used between both the player and
 * enemy racers.
 * 
 * @author Minh Pham
 * @date December 2024
 */
export const CarUtils = {
    /*
    Render out a car, given a position and the image being used
    */
    renderCar: (x, y, raceCarImage) => (
        <div
            className="racer"
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
            }}
        >
            <img
                src={raceCarImage}
                alt="Racer"
            />
        </div>
    ),

    /*
    Sets up common variables of a race car
    */
    initialize(instance) {
      // Set up variables
      instance.width = IMAGE_WIDTH;
      instance.height = IMAGE_HEIGHT;
  
      instance.trackEdges = {
          leftEdge: 0,
          rightEdge: MAP_WIDTH - instance.width
      };
    },

    /*
    Accelerate or deaccelerate the speed of a car
    */
    accelerate(instance, maxSpeed) {
        if (instance.verticalSpeed < maxSpeed) {
            instance.verticalSpeed += 0.05;
        }
    },

    deaccelerate(instance, minSpeed) {
        if (instance.verticalSpeed > minSpeed) {
            instance.verticalSpeed -= 0.05;
        }
    },
}

export default CarUtils;