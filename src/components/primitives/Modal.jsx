/// use this space to style a div witha boolean for display property
import React from 'react';
import PropTypes from 'prop-types';

function Modal({ children, isOpen = false }) {
  return <div>{isOpen && <div>{children}</div>}</div>;
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
};

export default Modal;
