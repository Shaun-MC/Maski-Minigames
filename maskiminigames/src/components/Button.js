import React from 'react';
import PropTypes from 'prop-types';

/**
 * @file Button.js
 * @description Serves as a button that redirects to any link
 * 
 * @author Ayleen Piteo-Tarpy
 * @date December 2024
 */
const Button = ({ link, altText, className }) => {
  return (
      <a
        className={className}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={altText}
      >
        {}
      </a>
    );
};

// Define prop types
Button.propTypes = {
    link: PropTypes.string.isRequired,            // Link to redirect
    altText: PropTypes.string,                    // Accessibility text
    className: PropTypes.string.isRequired        // CSS class name
};

export default Button;
