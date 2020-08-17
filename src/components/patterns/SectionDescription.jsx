import React from 'react';
import { Box } from '..';

function SectionDescription({ children }) {
  return (
    <Box m={0} width={1} borderRadius="base">
      {children}
    </Box>
  );
}

export default SectionDescription;
