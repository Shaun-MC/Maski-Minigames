import React from 'react';
import Button from '../Button.js';
import homepageButtonImage from '../../assets/homepage_button.png';

const SnakeGamePage = () => {
  return (
    <div>SnakeGamePage
      <Button
        link="/"
        imageSrc={homepageButtonImage}
        altText="Go Home"
      />
    </div>
  )
}

export default SnakeGamePage;