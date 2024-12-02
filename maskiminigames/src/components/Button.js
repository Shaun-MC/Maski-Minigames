import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ link, altText, customStyle }) => {
    const defaultStyle = {
      display: 'inline-block',
      width: '100px',
      height: '50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      cursor: 'pointer',
      ...customStyle, // Merge with custom styles passed as props
    };
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={defaultStyle} aria-label={altText}>
            {/* No <img> tag; the image is handled as a background */}
        </a>
    );
};

// Define prop types
Button.propTypes = {
    link: PropTypes.string.isRequired, // Link is still required
    altText: PropTypes.string,         // Accessibility text
    customStyle: PropTypes.object,     // Optional style overrides
};

export default Button;
