import React from 'react';
import { Stack, Box, Button, Text, Flex, Modal, Infobox, IInfo, InputField } from '..';

function FormTextArea({ name, description, value, onChange, onBlur, placeholder }) {
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
      <InputField value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
    </Stack>
  );
}

export default FormTextArea;
