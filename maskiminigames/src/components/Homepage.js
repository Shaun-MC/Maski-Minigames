import React from 'react';
import logo from '../logo.svg';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <header className="homepage">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Homepage;