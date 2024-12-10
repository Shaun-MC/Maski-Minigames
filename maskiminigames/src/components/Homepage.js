import React from 'react';
import logo from '../logo.svg';
import snakeButtonImage from '../assets/snake_button.png';
import endlessRacingButtonImage from '../assets/endless_racing_button.png';
import Button from './Button';
import styles from '../styles/Styles.module.css';

/**
 * @component Homepage
 * @description Landing page for MASKI Minigames. Redirects to games.
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */
const Homepage = () => {

  return (
    <header className={styles.page}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.buttons}>
        <Button
          link="/snake"
          imageSrc={snakeButtonImage}
          altText="Play Snake"
        />
        <Button
          link="/endless-racing"
          imageSrc={endlessRacingButtonImage}
          altText="Play Endless Racing"
        />
      </div>
    </header>
  );
};

export default Homepage;
