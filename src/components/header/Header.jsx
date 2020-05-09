/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import ResumeContext, { constants } from '../../context';
import './Header.css';

const Header = () => {
  const { [constants.PERSONAL_INFO]: personalInfo } = useContext(ResumeContext);
  const {
    firstName, lastName, email, github, linkedin, image,
  } = personalInfo;

  return (
    <div className="header" data-testid="header">
      <div className="header-text" data-testid="header-text">
        <h1>
          {firstName}
          {lastName}
        </h1>
        Email:
        <a href={email}>{email}</a>
        <div>
          {github.description}
          :
          <a href={github.link}>{github.text}</a>
        </div>

        <div>
          {linkedin.description}
          :
          <a href={linkedin.link}>{linkedin.text}</a>
        </div>


      </div>
      <div className="header-img" data-testId="header-img">
        <img src={image.src} alt={image.alt} />

      </div>
    </div>
  );
};

export default Header;
