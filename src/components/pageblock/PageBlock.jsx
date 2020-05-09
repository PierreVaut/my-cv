import React, { useContext } from 'react';
import './PageBlock.css';
import PropTypes from 'prop-types';

import ResumeContext from '../../context';
import ItemBlock from '../itemBlock/ItemBlock';


const PageBlock = ({ className, resource }) => {
  const { [resource]: pageBlockData = {} } = useContext(ResumeContext);
  console.log(pageBlockData);
  return (
    <div className={className} data-testid={`page-block-${resource}`}>
      {
        Object.keys(pageBlockData).map(
          (pageBlockElementKey) => (
            <ItemBlock
              itemBlockType={pageBlockElementKey}
              itemBlockData={pageBlockData[pageBlockElementKey]}
              key={pageBlockElementKey}
            />
          ),
        )
      }

    </div>
  );
};

PageBlock.propTypes = {
  resource: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PageBlock;
