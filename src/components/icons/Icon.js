import React from 'react'
import PropTypes from 'prop-types'
import * as iconlib from './iconlib'
import { variant } from 'styled-system';
import styled from 'styled-components';
import css from '@styled-system/css'

const Svg = styled('svg')(
  css({
    width: '18px',
    height: '18px',
  }),
);

const Icon = ({ name, paths, dimension, iconPaths = name ? iconlib[name] : paths}) =>
  <Svg>
    {iconPaths &&
      iconPaths.map((pathProps, i) => <path {...pathProps} key={i}/>)}
  </Svg>


/** @component */
export default Icon
