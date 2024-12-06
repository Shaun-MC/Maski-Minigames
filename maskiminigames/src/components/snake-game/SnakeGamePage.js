import endlessRacingButtonImage from "../../assets/endless_racing_button.png";
import homepageButtonImage from "../../assets/homepage_button.png";
import React from "react";
import Button from "../Button.js";
import SnakeGame from "./SnakeGame.js";

const SnakeGamePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding:"1rem",

      }}
    >
      <div>
        <Button 
          link="/" 
          imageSrc={homepageButtonImage} 
          altText="Go Home" 
        />
        <Button
          link="/endless-racer"
          imageSrc={endlessRacingButtonImage}
          altText="Go Home"
        />
      </div>
      <div style={{
        marginTop: "1rem",
      }}>
        <SnakeGame />
      </div>
    </div>
  );
};

export default SnakeGamePage;
