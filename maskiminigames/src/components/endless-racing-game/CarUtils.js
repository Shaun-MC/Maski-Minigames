import { MAP_WIDTH, IMAGE_HEIGHT, IMAGE_WIDTH } from './Constants'
import React from 'react';

const ACCELERATION_INTERVAL = 0.05;

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
    renderCar: (x, y, raceCarImage, alt) => (
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
                alt={alt}
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
    Accelerate or decelerate the speed of a car
    */
    accelerate(instance, maxSpeed) {
        if (instance.state.verticalSpeed < maxSpeed) {
            instance.setState({
                verticalSpeed: instance.state.verticalSpeed + ACCELERATION_INTERVAL
            })
        }
    },

    decelerate(instance, minSpeed) {
        if (instance.state.verticalSpeed > minSpeed) {
            instance.setState({
                verticalSpeed: instance.state.verticalSpeed - ACCELERATION_INTERVAL
            })
        }
    },
}

export default CarUtils;