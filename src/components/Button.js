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
		py: 3,
		textAlign: 'center',
		border: 'thin',
		color: 'primary',
		borderColor: 'bg',
		backgroundColor: 'bg',
		borderRadius: 'round',
		fontFamily: 'body',
		fontSize: 'md',
		textDecoration: 'none',
		userSelect: 'none',

		// We can't use :enabled here because it doesn't work with <a>
		'&:hover:not(:disabled), &:active:not(:disabled)': {
			color: 'primary',
			borderColor: 'bg',
			backgroundColor: 'bg',
			cursor: 'pointer',
		},

		'&:focus': {
			color: 'primary',
			borderColor: 'bg',
			backgroundColor: 'bg',
			//borderColor: 'accent',
		},

		'&:disabled': {
			color: 'lgrey',
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
