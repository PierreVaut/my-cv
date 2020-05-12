import React from 'react';
import './ItemBlock.css';
import PropTypes from 'prop-types';
import Item from '../item';

import { sortAsc as defaultSort } from '../../utils';


const ItemBlock = ({
  itemBlockType,
  itemBlockData: {
    items, logo, sortFunc = defaultSort,
  } = {},
}) => (
  <div
    className={`${itemBlockType} itemBlock`}
    data-testid={`item-block-${itemBlockType}`}
  >
    {logo && <img className="item-block-image" data-testid="item-block-image" src={logo} alt={itemBlockType} />}
    <div className="item-block-title capitalize" data-testid="title">
      {itemBlockType}
    </div>
    {items.sort(sortFunc).map((itemData) => <Item itemData={itemData} key={itemData.order} />)}
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
        sortFunc: PropTypes.func,
      }),
    ).isRequired,
  }).isRequired,

};

export default ItemBlock;
