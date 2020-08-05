import React from 'react';
import { Box, Text, Flex, Button, Dropdown, Input, Infobox, Modal } from '..';
import ITrash from '../icons/ITrash';
import IEdit from '../icons/IEdit';
import IEx from '../icons/IEx';
import InputField from './InputField';
import Rule from '../primitives/Rule';

// style

const fillBox = {
    borderBottom: '1px solid #696969',
    minWidth: 80,
    marginLeft: 4,
    marginRight: 4,
  };

  const fillBoxBlue = {
    borderBottom: '1px solid #204EF0',
    minWidth: 80,
    marginLeft: 4,
    marginRight: 4,
  };
  
  
  const smallFillBox = {
    borderBottom: '1px solid #696969',
    minWidth: 20,
    marginLeft: 4,
    marginRight: 4,
  };

function SentenceConstructor() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box>
      <Box>
        <Flex justifyContent="space-between">
          <Flex>
            <Text color="primary">A</Text>
            <Box padding={1} />
            <Text>The</Text>
            <div style={fillBoxBlue} ><Text color="primary">Input</Text></div>
            <div style={fillBox} />
            <Text>of the</Text>
            <div style={fillBox} />
            <Text>is</Text>
            <div style={smallFillBox} />
            <div style={fillBox} />
          </Flex>
          <Flex>
            <Modal isOpen={isOpen}>
              <Button variant="invisible" onClick={() => setIsOpen(false)}>
                <IEx />
              </Button>
            </Modal>
            <Modal isOpen={!isOpen}>
              <Button variant="invisible" onClick={() => setIsOpen(true)}>
                <IEdit />
              </Button>
            </Modal>
            <Box p={1}/>
            <Button variant="invisible">
              <ITrash />
            </Button>
          </Flex>
        </Flex>
        <Modal isOpen={isOpen}>
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
        </Modal>
      </Box>
    </Box>
  );
}

export default SentenceConstructor;
