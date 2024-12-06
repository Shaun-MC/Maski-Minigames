/**
 * @file constants.js
 * @description Houses constants for Snake Game
 * @author Khushmeet Gobindpuri
 * @date December 2024
 */

const CANVAS_SIZE = [600, 600];
const SNAKE_START = [
  [8, 7],
  [8, 8],
];
const APPLE_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
  // Arrow keys below
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right

  // W, A, S, D keys below
  87: [0, -1], // up (W)
  83: [0, 1], // down (S)
  65: [-1, 0], // left (A)
  68: [1, 0], // right (D)
};

// Only allowing WASD and Arrow keys for movement.
const ALLOWED_KEYCODES = new Set([37, 38, 39, 40, 65, 68, 83, 87]);

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  ALLOWED_KEYCODES,
};
