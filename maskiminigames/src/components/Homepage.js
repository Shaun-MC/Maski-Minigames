import React from 'react';
import logo from '../logo.svg';
import Button from './Button.js';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <header className="homepage">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="buttons">
        <Button 
          link="https://dev.azure.com/software-engineering-studio/studio-course/_workitems/edit/12014/" // TODO: Insert link to snake game page
          altText="Play Snake"
          className="button snake-button"
        />

        <Button 
          link="https://dev.azure.com/software-engineering-studio/studio-course/_workitems/edit/12020/" // TODO: Insert link to endless racing game page
          altText="Play Endless Racing"
          className="button endless-racing-button"
        />
      </div>
    </header>
  );
};

export default Homepage;