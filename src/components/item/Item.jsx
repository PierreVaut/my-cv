import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ itemData }) => {
  const {
    title, place, timePeriod, show,
  } = itemData;
  return show && (
    <div
      className="item"
      data-testid={`item-${title}`}
    >
      {timePeriod && <div className="timePeriod">{timePeriod}</div>}
      <div className="item-title">{title}</div>
      {place && <div className="place">{place}</div>}
    </div>
  );
};

Item.propTypes = {
  itemData:
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      timePeriod: PropTypes.string,
      title: PropTypes.string.isRequired,
      place: PropTypes.string,
      show: PropTypes.bool.isRequired,
      description: PropTypes.string,
    }).isRequired,
};

export default Item;
