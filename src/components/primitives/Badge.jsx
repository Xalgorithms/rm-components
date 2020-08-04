import styled from 'styled-components';
import { variant } from 'styled-system';
import { css } from '@styled-system/css';

const Badge = styled.div(
  css({
    boxSizing: 'border-box',
    display: 'inline-block',
    px: 2,
    py: 1,
    textAlign: 'center',
    border: 'none',
    color: 'drafta',
    backgroundColor: 'draftb',
    borderRadius: 'base',
    fontFamily: 'body',
    fontSize: 'md',
    textDecoration: 'none',
  }),
  variant({
    variants: {
      blue: {
        color: 'bg',
        backgroundColor: 'primary',
      },
      lightblue: {
        color: 'primary',
        backgroundColor: 'midblue',
      },
      grayblue: {
        color: 'primary',
        backgroundColor: 'greyblue',
      },
      suggestion: {
        color: 'purplea',
        backgroundColor: 'grad',
        padding: 2,
      },
    },
  })
);

/** @component */
export default Badge;
