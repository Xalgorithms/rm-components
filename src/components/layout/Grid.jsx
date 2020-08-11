import styled from 'styled-components';
import { Box } from '..';

export const Grid = styled(Box)({
  display: 'grid',
});

Grid.propTypes = Box.propTypes;

export default Grid;
