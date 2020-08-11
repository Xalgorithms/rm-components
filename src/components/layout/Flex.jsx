import styled from 'styled-components';
import { Box } from '..';

export const Flex = styled(Box)({
  display: 'flex',
});

Flex.propTypes = Box.propTypes;

export default Flex;
