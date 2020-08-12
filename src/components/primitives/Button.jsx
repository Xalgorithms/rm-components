import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { css } from '@styled-system/css';

/**
 * A button.
 */
const Button = styled.button(
  css({
    boxSizing: 'border-box',
    display: 'inline-block',
    px: 4,
    py: 2,
    textAlign: 'center',
    border: 'thin',
    color: 'primary',
    borderColor: 'primary',
    backgroundColor: 'bg',
    borderRadius: 'round',
    fontFamily: 'body',
    fontSize: 'md',
    textDecoration: 'none',
    userSelect: 'none',

    // We can't use :enabled here because it doesn't work with <a>
    '&:hover:not(:disabled), &:active:not(:disabled)': {
      color: 'primary',
      background: 'radial-gradient(371.11% 371.11% at 50% 66.67%, #FFFFFF 11.2%, #0258FF 100%)',
      cursor: 'pointer',
      boxShadow: '0px 1px 4px #ADC5F3',
    },

    '&:focus': {
      color: 'primary',
      borderColor: 'bg',
      backgroundColor: 'bg',
      // borderColor: 'accent',
    },

    '&:disabled': {
      color: 'lgrey',
      borderColor: 'oline',
      boxShadow: '0px 4px 4px #E0E0E0',
    },
  }),
  variant({
    variants: {
      primary: {
        color: 'background',
        backgroundColor: 'primary',
      },
      secondary: {
        backgroundColor: 'bg',
        boxShadow: '0px 4px 4px #ADC5F3',
      },
      wide: {
        width: '100%',
        boxShadow: '0px 4px 4px #ADC5F3',
      },
      invisible: {
        borderRadius: 'base',
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        px: 0,
        py: 0,
        '&:hover:not(:disabled), &:active:not(:disabled)': {
          background: 'none',
          cursor: 'pointer',
          boxShadow: 'none',
        },
      },
      invisiblewide: {
        borderRadius: 'base',
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        px: 0,
        py: 0,
        width: '100%',
        '&:hover:not(:disabled), &:active:not(:disabled)': {
          background: '#F9FBFE',
          cursor: 'pointer',
          boxShadow: 'none',
        },
      },
    },
  })
);

Button.propTypes = {
  /** Button label */
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: 'secondary',
};

/** @component */
export default Button;
