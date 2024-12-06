import React from "react";
import Button from "../Button.js";
import eracingLogo from "../../assets/snake-game/snake_logo.png";
import homepageButtonImage from "../../assets/homepage_button.png";
import playGameButtonImage from "../../assets/snake-game/play_snake_button.png";
import helpButtonImage from "../../assets/snake-game/help_button.png";
import styles from "../../styles/PageStyles.module.css";

/**
 * @component EndlessRacingPage
 * @description Landing page for the Racing Game. Can play the game or display game instructions.
 *
 * @author Shaun Cushman
 * @date December 2024
 */
const RacingGamePage = () => {
    return (
      <header className={styles.page}>
        <img
          src={eracingLogo}
          className={styles.logo}
          alt="eracingLogo"
        />
        <div className={styles.buttons}> 
          <Button
            link="/"
            imageSrc={homepageButtonImage}
            altText="Go Home"
          />
          <Button
            link=""
            imageSrc={helpButtonImage}
            altText="Help"
            customStyle={styles.helpButton}
          />
        </div>
        <div>
            
        </div>
      </header>
    );
  };
  
  export default RacingGamePage;
  