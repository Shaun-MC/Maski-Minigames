import React from 'react';
import Button from '../Button.js';
import homepageButtonImage from '../../assets/homepage_button.png';

const EndlessRacingGamePage = () => {
  return (
    <div>EndlessRacingGamePage
      <Button
        link="/"
        imageSrc={homepageButtonImage}
        altText="Go Home"
      />
    </div>
  )
}

export default EndlessRacingGamePage