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
        width: '34px',
      },
      lightblue: {
        color: 'primary',
        backgroundColor: 'midblue',
        width: '34px',
      },
      grayblue: {
        color: 'primary',
        backgroundColor: 'greyblue',
        width: '34px',
      },
      form: {
        color: 'textb',
        borderColor: 'oline',
        backgroundColor: 'bg',
        width: '34px',
      },
      blank: {
        backgroundColor: 'bg',
        color: 'textb',
        border: 'none',
        width: '34px',
      },
      invisible: {
        backgroundColor: 'bg',
        color: 'bg',
        border: 'none',
        width: '34px',
        height: '46px',
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
