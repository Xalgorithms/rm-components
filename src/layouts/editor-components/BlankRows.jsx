import React from 'react';
import { Box, Flex, Badge } from '../../components';

export default function BlankRows({ rule, ruleLeft }) {
  return (
    <Box>
      <Flex>
        {rule.input_conditions[0].cases.map((rowValue, i) => (
          <div style={ruleLeft} key={i}>
            <Badge variant="invisible">X</Badge>
          </div>
        ))}
        <div style={ruleLeft} />
      </Flex>
    </Box>
  );
}
