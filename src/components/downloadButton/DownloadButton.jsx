import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ResumeContext from '../../context'
import './DownloadButton.css'

const DownloadButton = ({ resource }) => {
  const {
    [resource]: {
      text: buttonText,
      icon: buttonIcon,
      link: buttonLink,
    },
  } = useContext(ResumeContext)

  return (
    <div className={resource} data-testid={resource}>
      <a className={`${resource}-container`} data-testid={`${resource}-container`} href={buttonLink} target="_blank" rel="noopener noreferrer" download>
        <img src={buttonIcon} className={`${resource}-icon`} alt={`${resource}-icon}`} />
        <div className={`${resource}-link`}>{buttonText}</div>
      </a>
    </div>
  )
}

DownloadButton.propTypes = {
  resource: PropTypes.string.isRequired,
}

export default DownloadButton
