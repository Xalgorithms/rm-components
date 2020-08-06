import React from 'react';

import { Grid, Text, Badge, Box, Flex } from '..';

const rowValues = [{ logic: 'T', type: 'blue', }, { logic: 'F', type: 'lightblue', }, { logic: 'B', type: 'grayblue', }];

function InputOutputRow() {
  return (
    <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%">
      <Box>
        <Text color="textb">Input condition sentences goes here</Text>
      </Box>
      <Box>
        <Flex>
          {rowValues.map((rowValue) => (
            <Badge variant={rowValue.type} key={rowValue.logic}>
              {rowValue.logic}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Grid>
  );
}

export default InputOutputRow;
