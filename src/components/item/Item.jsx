import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

const Item = ({ itemData }) => {
  const { title, place, timePeriod, show, description } = itemData
  return (
    show && (
      <div data-testid={`item-${title}`}>
        <div className="item-title">
          {place && <span className="place">{`${place} - `}</span>}
          <span className="position-title">{title}</span>
        </div>
        {timePeriod && <div className="timePeriod">{timePeriod}</div>}
        {description &&
          description.map((descriptionItem) => (
            <div className="description" key={descriptionItem}>
              {descriptionItem}
            </div>
          ))}
      </div>
    )
  )
}

Item.propTypes = {
  itemData: PropTypes.shape({
    order: PropTypes.number.isRequired,
    timePeriod: PropTypes.string,
    title: PropTypes.string.isRequired,
    place: PropTypes.string,
    show: PropTypes.bool.isRequired,
    description: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default Item
