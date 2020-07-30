///use this space to style a div witha boolean for display property
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from '@styled-system/css';

function Modal({ children, isOpen = false }) {
  return <div>{isOpen && <div>{children}</div>}</div>;
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
};

export default Modal;
