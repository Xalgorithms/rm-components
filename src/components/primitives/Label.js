import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	Icon,
	Flex,
	Button,
} from '../';

function Label({ children, htmlFor, required = false }) {
	return (
		<Flex alignItems="center">
			<Text as="label" aria-required={required} htmlFor={htmlFor}>
				{children}
			</Text>
			{required && (
				<Button variant="invisible">
					<Flex alignItems="center">
						<Icon name="info"/>
					</Flex>
				</Button>
			)}
		</Flex>
	);
}

Label.propTypes = {
	/** Whether the label should be marked as required */
	required: PropTypes.bool,
	htmlFor: PropTypes.string,
	children: PropTypes.node,
};

export default Label;
