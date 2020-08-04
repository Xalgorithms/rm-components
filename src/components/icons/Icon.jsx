import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import * as iconlib from './iconlib';

const Svg = styled('svg')(
  css({
    width: '18px',
    height: '18px',
  })
);

const Icon = ({ name, paths, dimension, iconPaths = name ? iconlib[name] : paths }) => (
  <Svg>{iconPaths && iconPaths.map((pathProps, i) => <path {...pathProps} key={i} />)}</Svg>
);

/** @component */
export default Icon;
