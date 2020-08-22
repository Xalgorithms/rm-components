import React from 'react';

import { Text, Badge, Box, Flex, Button } from '..';
import { IEdit, ITrash } from '../icons';

const ruleLeft = {
  borderLeft: '1px solid #E7E7E7',
  padding: '1em',
};

const halfWidth = {
  width: '50%',
};

const bottomLine = {
  borderBottom: '1px solid #E7E7E7',
};

function InputOutputRow({ rowValues }) {
  return (
    <div style={bottomLine}>
      <Flex alignItems="center">
        <div style={halfWidth}>
          <Text color="textb">Input condition sentences goes here</Text>
        </div>
        <Box>
          <Flex>
            {rowValues.map((rowValue, i) => (
              <div style={ruleLeft} key={i}>
                <Badge variant={rowValue.type} key={rowValue.logic}>
                  {rowValue.logic}
                </Badge>
              </div>
            ))}
            <div style={ruleLeft} />
          </Flex>
        </Box>
        <Button variant="invisible">
          <IEdit />
        </Button>
        <Box p={1} />
        <Button variant="invisible">
          <ITrash />
        </Button>
      </Flex>
    </div>
  );
}

export default InputOutputRow;
