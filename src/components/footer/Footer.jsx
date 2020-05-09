import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ResumeContext from '../../context';
import './Footer.css';

const Footer = ({ resource }) => {
  const { [resource]: footerData } = useContext(ResumeContext);
  const { footerLink, footerText } = footerData;

  return (
    <div className="footer" data-testid="footer">
      <div className="footerText" data-testid="footer-text">{footerText}</div>
      <a href={footerLink}>{footerLink}</a>
    </div>
  );
};

Footer.propTypes = {
  resource: PropTypes.string.isRequired,
};

export default Footer;
