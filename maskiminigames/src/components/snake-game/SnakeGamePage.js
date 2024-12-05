import React from "react";
import Button from "../Button.js";
import snakeLogo from "../../assets/snake-game/snake_logo.png";
import homepageButtonImage from "../../assets/homepage_button.png";
import playGameButtomImage from "../../assets/snake-game/play_snake_button.png";
import helpButtonImage from "../../assets/snake-game/help_button.png";
import styles from "../../styles/PageStyles.module.css";

/**
 * @component SnakeGamePage
 * @description Landing page for the Snake Game. Can play the game or display game instructions.
 *
 * @author Shaun Cushman
 * @date December 2024
 */
const SnakeGamePage = () => {
  return (
    <header className={styles.page}>
      <img
        src={snakeLogo}
        className={styles.logo}
        alt="snakeLogo"
      />
      <div className={styles.buttons}> 
        <Button
          link="/"
          imageSrc={homepageButtonImage}
          altText="Go Home"
        />
        <Button
          link=""
          imageSrc={playGameButtomImage}
          altText="Play Snake"
        />
        <Button
          link=""
          imageSrc={helpButtonImage}
          altText="Help"
          customStyle={styles.helpButton}
        />
      </div>
      <SnakeGame/>
    </header>
  );
};

export default SnakeGamePage;