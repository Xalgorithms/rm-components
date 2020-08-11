import React from 'react';
import { Stack, Dropdown, Box, Button, Text, Flex, Modal, Infobox, IInfo } from '..';

function FormDropdown({ name, description, label, value, options = [] }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const renderOptions = () => {
    return options.map(({ value, label, disabled }, index) => (
      <option value={value} key={index}>
        {label}
      </option>
    ));
  };

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
      <Dropdown>{renderOptions()}</Dropdown>
    </Stack>
  );
}

export default FormDropdown;
