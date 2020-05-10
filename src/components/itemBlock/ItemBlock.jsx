import React from 'react';
import './ItemBlock.css';
import PropTypes from 'prop-types';
import Item from '../item';


const ItemBlock = ({ itemBlockType, itemBlockData: { items, logo } }) => (
  <div className={`${itemBlockType} itemBlock`} data-testid={`item-block-${itemBlockType}`}>
    {logo && <div className="item-block-image"><img src={logo} alt={itemBlockType} /></div>}
    <div className="item-block-title capitalize" data-testid="title">
      {itemBlockType}
    </div>
    {items.map((itemData) => <Item itemData={itemData} key={itemData.order} />)}
  </div>
);
ItemBlock.propTypes = {
  itemBlockType: PropTypes.string.isRequired,
  itemBlockData: PropTypes.shape({
    logo: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number.isRequired,
        timePeriod: PropTypes.string,
        title: PropTypes.string.isRequired,
        place: PropTypes.string,
        show: PropTypes.bool.isRequired,
      }),
    ).isRequired,
  }).isRequired,

};

export default ItemBlock;
