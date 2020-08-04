import React from 'react';
import { Box, Text, Flex, Button, Dropdown, Input, Infobox } from '..';
import ITrash from '../icons/ITrash';
import InputField from './InputField';
import Rule from '../primitives/Rule';

// style

const fillBox = {
    borderBottom: '1px solid #696969',
    minWidth: 80,
    marginLeft: 3,
    marginRight: 3,
  };
  
  const smallFillBox = {
    borderBottom: '1px solid #696969',
    minWidth: 20,
    marginLeft: 3,
    marginRight: 3,
  };

function SentenceConstructor() {
  return (
    <Box>
      <Box>
        <Flex justifyContent="space-between">
          <Flex>
            <Text color="primary">A</Text>
            <Box padding={1} />
            <Text>The</Text>
            <div style={fillBox} />
            <div style={fillBox} />
            <Text>of the</Text>
            <div style={fillBox} />
            <Text>is</Text>
            <div style={smallFillBox} />
            <div style={fillBox} />
          </Flex>
          <Button variant="invisible">
            <ITrash />
          </Button>
        </Flex>
        <Box padding={1} />
        <Infobox content="lorem ipsum" />
        <Box padding={1} />
        <Flex alignItems="center">
          <Text>The</Text>
          <Box padding={1} />
          <Box>
            <Input />
          </Box>
          <Box padding={1} />
          <Box>
            <Input />
          </Box>
        </Flex>
        <Box padding={1} />
        <Flex alignItems="center">
          <Text>Of the</Text>
          <Box padding={1} />
          <Box>
            <Input />
          </Box>
          <Box padding={1} />
          <Box>
            <Dropdown>
              <option>≥</option>
              <option>=</option>
            </Dropdown>
          </Box>
        </Flex>
        <Box padding={1} />
        <InputField message="Adjective, Arithmetic expression, or Boolean Number">
          <Rule />
          <Flex alignItems="center">
            <Text color="primary">Sum</Text>
            <Box padding={1} />
            <Text color="primary">Filter</Text>
            <Box padding={1} />
            <Text color="primary">Source</Text>
          </Flex>
        </InputField>
      </Box>
    </Box>
  );
}

export default SentenceConstructor;
