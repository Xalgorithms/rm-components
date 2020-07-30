import styled from 'styled-components';
import { css } from '@styled-system/css';

const Rule = styled.hr(
    css({
        borderTop: '1px solid #E7E7E7',
        borderBottom: '0px',
        margin: 2,
        px: 0,
        py: 0,
    })
);

/** @component */
export default Rule;