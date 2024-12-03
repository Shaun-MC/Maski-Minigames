import React from 'react';
import logo from '../logo.svg';
import snakeButtonImage from '../assets/snake_button.png';
import endlessRacingButtonImage from '../assets/endless_racing_button.png';
import '../styles/Homepage.css';

/**
 * @file Homepage.js
 * @description Landing page for MASKI Minigames. Redirects to games.
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */
const Homepage = () => {

  const redirect = (link) => {
    setTimeout(() => {
      window.location.href = link;
    }, 100); // 100ms delay 
  };

  return (
    <header className="homepage">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="buttons">
        <button
          className="button"
          onClick={() => redirect("")}
        >
          <img
            className="button-image"
            src={snakeButtonImage}
            alt="Play Snake"
          >
          </img>
        </button>

        <button
          className="button"
          onClick={() => redirect("")}
        >
          <img 
            className="button-image"
            src={endlessRacingButtonImage}
            alt="Play Endless Racing"
          >
          </img>
        </button>
      </div>
    </header>
  );
};

export default Homepage;