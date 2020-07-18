import React from 'react'
import PropTypes from 'prop-types'

function Dropdown ({ name, label, value, options = []}) {
  const renderOptions = () => {
    return options.map(({ value, label, disabled }, index) => (
        <option value={value} key={index}>
          {label}
        </option>
      ))
  }

  return (
        <select
          name={name}
          style={
        		{boxSizing: 'border-box',
        		display: 'block',
        		width: '100%',
        		margin: 0,
        		padding: '12px',
        		border: '1px solid #E7E7E7',
        		borderRadius: 8,
        		fontFamily: 'body',
        		fontSize: 'md',
        		color: 'text',
        		backgroundColor: 'bg',
        		// Remove red outline on required input in Firefox
        		boxShadow: 'none',}
        	}
        >
          {renderOptions()}
        </select>
  );
}

Dropdown.propTypes = {

  name: PropTypes.string.isRequired,

  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  value: PropTypes.string,

  options: PropTypes.array.isRequired,
};

export default Dropdown;
