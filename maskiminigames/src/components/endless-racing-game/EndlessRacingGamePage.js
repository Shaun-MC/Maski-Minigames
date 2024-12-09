import React from 'react';
import Button from '../Button.js';
import endlessRacingLogo from '../../assets/endless-racing-game/endless_racing_logo.png';
import homepageButtonImage from '../../assets/homepage_button.png';
import snakeButtonImage from '../../assets/snake_button.png';
import styles from '../../styles/PageStyles.module.css';
import GameManager from './GameManager.js'

const EndlessRacingGamePage = () => {
  document.body.style.overflow = "auto"

  return (
    <div className={styles.page}>
      <img
        src={endlessRacingLogo}
        className={styles.logo}
        alt="snakeLogo"
      />
      <div className={styles.frame}>
        <GameManager />
      </div>
      <div className={styles.buttons} style={{marginBottom: '60px'}}>
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