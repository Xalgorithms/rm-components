import styled from 'styled-components';
import { css } from '@styled-system/css';

const Rule = styled.hr(
    css({
        borderTop: '1px solid #E7E7E7',
        borderBottom: '0px',
        padding: '0px',
        margin:'0px',
    })
);

/** @component */
export default Rule;