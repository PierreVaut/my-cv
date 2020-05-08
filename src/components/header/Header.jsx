import React, { useContext } from 'react';
import ResumeContext from '../../context';
import './Header.css';

const Header = () => {
  const { personalInfo } = useContext(ResumeContext);
  const {
    firstName, lastName, email, github, linkedin,
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
    </div>
  );
};

export default Header;
