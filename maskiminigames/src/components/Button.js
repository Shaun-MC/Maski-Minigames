import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

/**
 * @component Button
 * @description A button component with a press animation that redirects
 * to a given link
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */
const Button = ({ link, imageSrc, altText }) => {
  const redirect = () => {
    setTimeout(() => {
      window.location.href = link;
    }, 100); // 100ms delay so users can see button press animation
  };

  return (
    <button className="button" onClick={() => redirect()}>
      <img className="button-image" src={imageSrc} alt={altText} />
    </button>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Button;
