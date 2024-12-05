import React from 'react';
import Button from '../Button.js';
import homepageButtonImage from '../../assets/homepage_button.png';
import snakeButtonImage from '../../assets/snake_button.png';
import styles from '../../styles/PageStyles.module.css';
import Renderer from './Renderer'

const EndlessRacingGamePage = () => {
  document.body.style.overflow = "auto"

  return (
    <div className={styles.page}>
      <div className={styles.frame}>
        <Renderer />
      </div>
      <div className={styles.buttons}>
        <Button
          link="/"
          imageSrc={homepageButtonImage}
          altText="Go Home"
        />
        <Button
          link="/snake-game"
          imageSrc={snakeButtonImage}
          altText="Play Snake"
        />
      </div>
    </div>
  )
}

export default EndlessRacingGamePage