import React, { useContext } from 'react';
import './PageBlock.css';


const PageBlock = ({ className }) => (
  <div className={className} data-testid={`page-block-${className}`}>toto</div>
);

export default PageBlock;
