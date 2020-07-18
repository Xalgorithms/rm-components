import React from 'react'
import PropTypes from 'prop-types'
import * as iconlib from './iconlib'

const Icon = ({ name, paths, viewBox, ariaHidden = true}) => {
  const iconPaths = name ? iconlib[name] : paths

  return (
    <svg
    viewBox={`0 0 ${viewBox} ${viewBox}`}
    aria-hidden={ariaHidden}
    style={
      {
      width: 32,
      height: 32,
      }
    }
    >
      {iconPaths &&
        iconPaths.map((pathProps, i) => <path {...pathProps} key={i} />)}
    </svg>
  )
}


export default Icon;
