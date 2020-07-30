///use this space to style a div witha boolean for display property
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from '@styled-system/css';

function AltModal({ children, isOpena = false }) {
  return <div>{isOpena && <div>{children}</div>}</div>;
}

AltModal.propTypes = {
  isOpen: PropTypes.bool,
};

export default AltModal;
