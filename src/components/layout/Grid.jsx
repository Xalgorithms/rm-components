import styled from 'styled-components';
import { Box } from '..';

const Grid = styled(Box)({
  display: 'grid',
});

Grid.propTypes = Box.propTypes;

export default Grid;
