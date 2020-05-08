import React from 'react';
import './ItemBlock.css';
import PropTypes from 'prop-types';
import Item from '../item';


const ItemBlock = ({ itemBlockType, itemBlockData }) => (
  <div className={`${itemBlockType} itemBlock`} data-testid={`item-block-${itemBlockType}`}>
    <div className="title capitalize" data-testid="title">
      {itemBlockType}
    </div>
    {itemBlockData.map((itemData) => <Item itemData={itemData} key={itemData.order} />)}
  </div>
);
ItemBlock.propTypes = {
  itemBlockType: PropTypes.string.isRequired,
  itemBlockData: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      timePeriod: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      show: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default ItemBlock;
