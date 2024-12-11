import React from "react";
import GamePage from "../GamePage.js";
import snakeLogo from "../../assets/snake-game/snake_logo.png";
import homepageButtonImage from "../../assets/homepage_button.png";
import endlessRacingButtonImage from "../../assets/endless_racing_button.png";
import SnakeGame from "./SnakeGameManager.js";

/**
 * @component SnakeGamePage
 * @description Landing page for the Snake Game. Can play the game or display game instructions.
 *
 * @author Shaun Cushman
 * @date December 2024
 */
const SnakeGamePage = () => {
  const game = {
    name: "Snake",
    logo: snakeLogo,
    component: <SnakeGame />
  };

  const navigationButtons = [
    { link: "/", imageSrc: homepageButtonImage, altText: "Go Home" },
    { link: "/endless-racing", imageSrc: endlessRacingButtonImage, altText: "Play Snake" }
  ];

  return <GamePage game={game} navigationButtons={navigationButtons} />;
};

export default SnakeGamePage;
