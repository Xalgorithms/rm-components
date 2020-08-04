import React from 'react';
import { Input, Stack, Box, Button, Text, Flex, Modal, Infobox } from '..';
import IInfo from '../icons/IInfo';

function FormStandard({ name, description }) {
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
      <Input />
    </Stack>
  );
}

export default FormStandard;
