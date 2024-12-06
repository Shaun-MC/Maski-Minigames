/**
 * @file Constants
 * @description Contains a list of constants that are used between multiple classes
 * within the game.
 * 
 * @author Minh Pham
 * @date December 2024
 */
export const MAP_WIDTH = Math.min(window.innerWidth * 0.9, 600); // 90% of viewport width, capped at 600px
export const MAP_HEIGHT = Math.min(window.innerHeight * 0.9, 900); // 90% of viewport height, capped at 900px
export const IMAGE_WIDTH = MAP_WIDTH / 10; // Relative to MAP_WIDTH
export const IMAGE_HEIGHT = MAP_HEIGHT / 8; // Relative to MAP_HEIGHT