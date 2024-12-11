import React from 'react';
import Button from "./Button";
import styles from "../styles/Styles.module.css";

/**
 * @component GamePage
 * @description Displays a page with a given game and graphics
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */
const GamePage = ({ game, navigationButtons }) => {
  document.body.style.overflow = "auto";

  return (
    <div className={styles.page}>
      <img src={game.logo} className={styles.logo} alt={`${game.name}Logo`} />
      <div className={styles.frame}>{game.component}</div>
      <div className={styles.buttons} style={{ marginBottom: "60px" }}>
        {navigationButtons.map((button, index) => (
          <Button
            key={index}
            link={button.link}
            imageSrc={button.imageSrc}
            altText={button.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
