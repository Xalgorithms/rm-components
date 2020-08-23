import styled from 'styled-components';
import { css } from '@styled-system/css';
import PropTypes from 'prop-types';

export const Dropdown = styled.select(
  css({
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    minWidth: '20px',
    margin: 0,
    padding: '12px',
    border: '1px solid #E7E7E7',
    borderRadius: 8,
    fontFamily: 'Public Sans, sans-serif',
    fontSize: 'md',
    color: 'textb',
    backgroundColor: 'bg',
    // Remove red outline on required input in Firefox
    boxShadow: 'none',
    overflow: 'hidden',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none' /* Remove default arrow */,
    background: 'url(/assets/icons/dropdown.svg) no-repeat right center',
    '&:focus': {
      outline: 0,
      borderColor: 'primary',
    },
  })
);

export default Dropdown;

Dropdown.propTypes = {
  /** Button label */
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
};
