import React from 'react';
import Button from '../Button.js';
import homepageButtonImage from '../../assets/homepage_button.png';
import Renderer from './Renderer'

const EndlessRacingGamePage = () => {
  document.body.style.overflow = "hidden"

  return (
    <div>
      <div style={{ float: 'right' }}>
        <Button
          link="/"
          imageSrc={homepageButtonImage}
          altText="Go Home"
        />
      </div>

      <div><Renderer /></div>
    </div>
  )
}

export default EndlessRacingGamePage