import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { css } from '@styled-system/css';


/**
 * A basic input field.
 */
const Input = styled.input(
	css({
		boxSizing: 'border-box',
		display: 'block',
		width: '100%',
		margin: 0,
		padding: '12px',
		border: 'thin',
		borderColor: 'oline',
		borderRadius: 'base',
		fontFamily: 'body',
		fontSize: 'md',
		color: 'text',
		backgroundColor: 'bg',
		// Remove red outline on required input in Firefox
		boxShadow: 'none',

		'&::placeholder': {
			color: 'secondary',
		},

		'&:focus': {
			outline: 0,
			borderColor: 'primary',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},
	}),
	variant({
		variants: {
			primary: {

			},
			secondary: {
				WebkitAppearance: 'none',
				width: '100%',
				border: 'none',
				height: 3,
				padding: 0,
				background: '#DBEAFF',
				'&::-webkit-slider-thumb': {
		      WebkitAppearance: 'none',
		      appearance: 'none',
		      width: 11,
		      height: 11,
					borderRadius: 30,
		      background: '#204EF0',
		      cursor: 'pointer',
		    },
		    '&::MoxRangeThumb': {
		      WebkitAppearance: 'none',
		      appearance: 'none',
		      width: 50,
		      height: 50,
		      background: '#4CAF50',
		      cursor: 'pointer',
				},
			},
		},
		})
);

Input.propTypes = {
	/** Button label */
	children: PropTypes.node,
};


Input.defaultProps = {
	variant: 'primary',
};

/** @component */
export default Input;
