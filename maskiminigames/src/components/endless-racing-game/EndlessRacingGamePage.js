import React from 'react';
import Button from '../Button.js';
import homepageButtonImage from '../../assets/homepage_button.png';
import endlessRacingButtonImage from '../../assets/endless_racing_button.png';
import styles from '../../styles/PageStyles.module.css';
import Renderer from './Renderer'

const EndlessRacingGamePage = () => {
  document.body.style.overflow = "auto"

  return (
    <div className={styles.page}>
      <div><Renderer /></div>
      <div className = {styles.buttons}>
        <Button
          link="/"
          imageSrc={homepageButtonImage}
          altText="Go Home"
        />
        <Button
          link="/endless-racer"
          imageSrc={endlessRacingButtonImage}
          altText="Play Endless Racing"
        />
      </div>
    </div>
  )
}

export default EndlessRacingGamePage