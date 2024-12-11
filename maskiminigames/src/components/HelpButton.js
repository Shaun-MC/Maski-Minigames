import React, { useState } from 'react';
import helpButtonImage from "../assets/help_button.png";
import Instructions from './Instructions';
import '../styles/HelpButton.css';

/**
 * @component HelpButton
 * @description A button component with a press animation that displays given
 * instructions.
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */
const HelpButton = ({ instructions }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const displayInstructions = () => {
    setShowInstructions(true);
  };

  const closeInstructions = () => {
    setShowInstructions(false);
  };

  return (
    <>
      <button className="help-button" onClick={displayInstructions}>
        <img className="help-button-image" src={helpButtonImage} alt="Help" />
      </button>
      {showInstructions && (
        <Instructions content={instructions} onClose={closeInstructions} />
      )}
    </>
  );
};

export default HelpButton;
