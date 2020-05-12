import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ResumeContext from '../../context';
import './DownloadButton.css';

const DownloadButton = ({ resource }) => {
  const { [resource]: data } = useContext(ResumeContext);
  const {
    text: buttonText,
    icon: buttonIcon,
    link: buttonLink,
  } = data;

  return (
    <div className={resource} data-testid={resource}>
      <div className={`${resource}-container`}>
        <img src={buttonIcon} className={`${resource}-icon`} alt={`${resource}-icon}`} />
        <a href={buttonLink} className={`${resource}-link`} target="_blank" rel="noopener noreferrer" download>{buttonText}</a>
      </div>
    </div>
  );
};

DownloadButton.propTypes = {
  resource: PropTypes.string.isRequired,
};

export default DownloadButton;
