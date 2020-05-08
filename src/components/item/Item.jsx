import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemData }) => {
  const {
    title, place, timePeriod, show,
  } = itemData;
  return show && (
    <div
      className="item"
      data-testid={`item-${title}`}
    >
      <div className="timePeriod">{timePeriod}</div>
      <div className="title">{title}</div>
      <div className="place">{place}</div>
    </div>
  );
};

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
