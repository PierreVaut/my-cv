/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ResumeContext from '../../context';
import './Header.css';


const Header = ({ resource }) => {
  const { [resource]: headerData } = useContext(ResumeContext);
  const {
    firstName, lastName, email, github, linkedin, image, summary,
  } = headerData;

  return headerData && (
    <div className="header" data-testid="header">
      <div className="header-text" data-testid="header-text">
        <h1>
          {`${firstName} ${lastName}`}
        </h1>
        {'Email: '}
        <a href={email}>{email}</a>

        <div>
          {`${github.description}: `}
          <a href={github.link}>{github.text}</a>
        </div>

        <div>
          {`${linkedin.description}: `}
          <a href={linkedin.link}>{linkedin.text}</a>
        </div>
        {summary && <div className="header-summary" data-testid="header-summary">{summary}</div>}


      </div>
      <div className="header-img-container" data-testid="header-img">
        <img src={image.src} alt={image.alt} className="header-img" />

      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  resource: PropTypes.string.isRequired,
};
