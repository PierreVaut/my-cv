import React from 'react';
import './PageBlock.css';
import PropTypes from 'prop-types';


const PageBlock = ({ className }) => (
  <div className={className} data-testid={`page-block-${className}`}>toto</div>
);

PageBlock.propTypes = {
  className: PropTypes.string.isRequired,
};

export default PageBlock;
