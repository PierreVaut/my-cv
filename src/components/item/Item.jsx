import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemData }) => <div>{JSON.stringify(itemData)}</div>;

Item.propTypes = {
  itemData:
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      timePeriod: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      show: PropTypes.bool.isRequired,
    }).isRequired,
};

export default Item;
