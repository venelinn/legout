import React from 'react'
import PropTypes from 'prop-types'

const icons = {
  close: {
    shape: (
      <path  d="M45.9 49.5l41.8 41.8 3.6-3.5-41.9-41.9L91.3 4.1 87.7.5 45.9 42.4 4 .5.5 4.1l41.8 41.8L.5 87.8 4 91.3l41.9-41.8z"></path>
    )
  },
  plus: {
    shape: (
      <path d="M37.5 18H22V2.5h-4V18H2.5v4H18v15.5h4V22h15.5z"></path>
    )
  },
  facebook: {
    shape: (
      <path d="m291 40c2 0 3 0 3 0l42 0-1 48-41 0c-23 0-22 20-22 20l0 76 80 0-11 48-70 0 0 240-48 0 0-240-63 0 0-48 63 0 0-75c0-65 54-69 68-69z m45 0z m-45-32c-12 0-34 2-55 15-21 12-45 37-45 86l0 43-31 0c-9 0-17 3-23 9-6 6-9 14-9 23l0 48c0 18 14 32 32 32l31 0 0 208c0 17 15 32 32 32l48 0c18 0 32-15 32-32l0-208 38 0c14 0 27-10 31-23l11-48c3-10 1-20-5-28-6-8-15-13-26-13l-48 0 0-32 31 0c18 0 32-14 32-32l1-46c0 0 0-1 0-2 0-17-15-32-32-32l-41 0c-1 0-2 0-4 0z"/>
    )
  },
  twitter: {
    shape: (
      <path d="m342 79c27 0 50 11 67 29 21-5 41-12 59-22-7 21-22 38-41 49 19-2 37-7 53-14-12 18-28 34-46 46 0 4 0 8 0 12 0 118-92 254-261 254-52 0-100-15-141-40 7 0 14 1 22 1 43 0 83-14 114-38-40-1-74-27-86-62 6 1 11 1 17 1 9 0 17-1 25-3-42-8-74-44-74-87l0-1c12 6 26 10 42 11-25-16-41-44-41-75 0-16 4-31 12-44 45 54 113 89 190 93-2-7-3-14-3-20 0-50 41-90 92-90z m138 42z m-138-74c-63 0-115 46-123 106-51-11-98-38-131-78-7-7-16-11-25-11-1 0-2 0-2 0-11 1-20 6-25 15-12 19-17 40-17 61 0 15 2 29 7 42-5 6-8 14-8 22l0 1c0 31 12 60 33 82-1 5-1 11 1 17 7 21 20 40 36 54-11 3-22 4-34 4-7 0-13-1-18-1-2 0-3 0-4 0-14 0-26 8-30 21-5 14 0 30 13 38 47 29 102 45 158 45 182 0 291-143 293-282 15-12 28-27 40-43 4-5 6-12 6-19 0-11-5-20-14-26 4-12 0-26-10-34-6-5-13-7-20-7-6 0-11 1-16 4-11 6-22 11-34 15-22-17-48-26-76-26z"/>
    )
  },
}

const SVG = ({ icon }) => {
  return (
    <svg viewBox="0 0 512 512">
      {icons[icon].shape}
    </svg>
  )
}

SVG.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
}

export default SVG
