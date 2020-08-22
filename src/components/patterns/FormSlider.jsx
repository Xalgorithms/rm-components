import React from 'react';
import { Input, Stack, Box, Button, Text, Flex, Modal, Infobox } from '..';
import { IInfo } from '../icons';

function FormSlider({ name, description, labela, labelb, labelc }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Stack gap={4}>
      <Modal isOpen={isOpen}>
        <Infobox content={description} onClick={() => setIsOpen(false)} />
      </Modal>
      <Box padding={1} />
      <Flex alignItems="center">
        <Text>{name}</Text>
        <Button variant="invisible" onClick={() => setIsOpen(true)}>
          <Flex alignItems="flex-bottom" m="4px">
            <IInfo />
          </Flex>
        </Button>
      </Flex>
      <Box padding={1} />
      <Flex justifyContent="space-between">
        <Text>{labela}</Text>
        <Text>{labelb}</Text>
        <Text>{labelc}</Text>
      </Flex>
      <Box padding={1} />
      <Input variant="secondary" type="range" />
    </Stack>
  );
}

export default FormSlider;
