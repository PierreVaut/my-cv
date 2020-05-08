import React, { useContext } from 'react';
import './PageBlock.css';
import PropTypes from 'prop-types';

import ResumeContext from '../../context';
import ItemBlock from '../itemBlock/ItemBlock';


const PageBlock = ({ className, pageBlockType }) => {
  const { [pageBlockType]: pageBlockData = {} } = useContext(ResumeContext);
  return (
    <div className={className} data-testid={`page-block-${pageBlockType}`}>
      {
        Object.keys(pageBlockData).map(
          (pageBlockElementKey) => (
            <ItemBlock
              itemBlockType={pageBlockElementKey}
              ItemBlockData={pageBlockData[pageBlockElementKey]}
              key={pageBlockElementKey}
            />
          ),
        )
      }

    </div>
  );
};

PageBlock.propTypes = {
  pageBlockType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PageBlock;
