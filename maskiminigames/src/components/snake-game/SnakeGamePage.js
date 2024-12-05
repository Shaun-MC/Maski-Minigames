import React from 'react';
import Button from '../Button.js';
import homepageButtonImage from '../../assets/homepage_button.png';
import SnakeGame from './SnakeGame.js';

const SnakeGamePage = () => {
  return (
    <div>
      <Button
        link="/"
        imageSrc={homepageButtonImage}
        altText="Go Home"
      />
      <SnakeGame/>
    </div>
  )
}

export default SnakeGamePage;