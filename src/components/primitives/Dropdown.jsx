import styled from 'styled-components';
import { css } from '@styled-system/css';

const Dropdown = styled.select(
  css({
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
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
