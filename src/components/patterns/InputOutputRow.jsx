import React from 'react';

import { Grid, Text, Badge, Box } from '..';

function InputOutputRow() {
  return (
    <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%">
      <Box>
        <Text color="textb">Input condition sentences goes here</Text>
      </Box>
      <Box>
        <Badge variant="blue">T</Badge>
      </Box>
    </Grid>
  );
}

export default InputOutputRow;
