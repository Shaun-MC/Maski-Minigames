import React from 'react';
import logo from '../logo.svg';
import snakeButtonImage from '../assets/snake_button.png';
import endlessRacingButtonImage from '../assets/endless_racing_button.png';
import Button from './Button';
import '../styles/Homepage.css';

/**
 * @component Homepage
 * @description Landing page for MASKI Minigames. Redirects to games.
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */
const Homepage = () => {

  return (
    <header className="homepage">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="buttons">
        <Button
          link=""
          imageSrc={snakeButtonImage} 
          altText="Play Snake"
        />
        <Button
          link=""
          imageSrc={endlessRacingButtonImage} 
          altText="Play Endless Racing"
        />
      </div>
    </header>
  );
};

export default Homepage;
