import React from 'react';
import './ItemBlock.css';
import PropTypes from 'prop-types';
import Item from '../item';


const ItemBlock = ({ itemBlockType, ItemBlockData }) => (
  <div className={itemBlockType} data-testid={`item-block-${itemBlockType}`}>
    <div className="title capitalize" data-testid="title">
      {itemBlockType}
    </div>
    {JSON.stringify(ItemBlockData)}
  </div>
);
ItemBlock.propTypes = {
  itemBlockType: PropTypes.string.isRequired,
  ItemBlockData: PropTypes.arrayOf(
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
