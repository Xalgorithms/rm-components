import React, { useState } from 'react';
import {
  Box,
  Text,
} from '../';

function SectionDescription( {children} ) {
  return(
    <Box p={2} m={0} width={1} bg="grad" borderRadius="base">
      <Text color="purplea">
        {children}
      </Text>
    </Box>
  );
}

export default SectionDescription;
