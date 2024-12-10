import React from 'react';
import GamePage from "../GamePage.js";
import endlessRacingLogo from '../../assets/endless-racing-game/endless_racing_logo.png';
import homepageButtonImage from '../../assets/homepage_button.png';
import snakeButtonImage from '../../assets/snake_button.png';
import GameManager from './EndlessRacingGameManager.js'

/**
 * @component EndlessRacingGamePage
 * @description Displays the endless racing game
 * 
 * @author Minh Pham, Ayleen Piteo-Tarpy
 * @date December 2024
 */
const EndlessRacingGamePage = () => {
  const game = {
    name: "Endless Racing",
    logo: endlessRacingLogo,
    component: <GameManager />
  };

  const navigationButtons = [
    { link: "/", imageSrc: homepageButtonImage, altText: "Go Home" },
    { link: "/snake", imageSrc: snakeButtonImage, altText: "Play Snake" }
  ];

  return <GamePage game={game} navigationButtons={navigationButtons} />;
};

export default EndlessRacingGamePage;