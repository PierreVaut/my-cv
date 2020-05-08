import React, { useContext } from 'react';
import ResumeContext, { constants } from '../../context';
import './Footer.css';

const Footer = () => {
  const { [constants.FOOTER]: footerData } = useContext(ResumeContext);
  const { footerLink, footerText } = footerData;

  return (
    <div className="footer" data-testid="footer">
      <div className="footerText" data-testid="footer-text">{footerText}</div>
      <a href={footerLink}>{footerLink}</a>
    </div>
  );
};

export default Footer;
