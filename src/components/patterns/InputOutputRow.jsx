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

function InputOutputRow({ rowData, rule, updateRule, editRow, index, inputCondition }) {
  return (
    <div style={bottomLine}>
      <Flex alignItems="center">
        <div style={halfWidth}>
          <Text color="textb">Input condition sentences goes here</Text>
        </div>
        <Box>
          <Flex>
            {rowData.cases.map((rowValue, i) => {
              let variant = 'grayblue';
              if (rowValue.value.toLowerCase() === 't') {
                variant = 'blue';
              } else if (rowValue.value.toLowerCase() === 'f') {
                variant = 'lightblue';
              }

              return (
                <div style={ruleLeft} key={i}>
                  <Badge variant={variant}>{rowValue.value || 'B'}</Badge>
                </div>
              );
            })}
            <div style={ruleLeft} />
          </Flex>
        </Box>
        <Button
          variant="invisible"
          onClick={() => {
            alert('Editing row...');
            if (inputCondition) {
              console.log(`Editing input condition ${index}...`);
            } else {
              console.log(`Editing output assertion ${index}...`);
            }
          }}
        >
          <IEdit />
        </Button>
        <Box p={1} />
        <Button
          variant="invisible"
          onClick={() => {
            alert('Deleting Row');
            if (inputCondition) {
              console.log('Removing input condition...');
            } else {
              console.log('Removing output assertion...');
            }
          }}
        >
          <ITrash />
        </Button>
      </Flex>
    </div>
  );
}

export default InputOutputRow;
