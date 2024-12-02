import React from 'react';
import logo from '../logo.svg';
import Button from './Button.js';
import snakeButton from '../assets/snake_button.png';
import endlessRacingButton from '../assets/endless_racing_button.png';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <header className="homepage">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="buttons">
        <Button 
          link="link_to_snake_game" // TODO: Insert link to snake game page
          altText="Play Snake"
          customStyle={{
            display: 'inline-block',
            width: '300px',
            height: '205px',
            backgroundImage: `url(${snakeButton})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />

        <Button 
          link="link_to_endless_racing_game" // TODO: Insert link to endless racing game page
          altText="Play Endless Racing"
          customStyle={{
            display: 'inline-block',
            width: '300px',
            height: '205px',
            backgroundImage: `url(${endlessRacingButton})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </header>
  );
};

export default Homepage;