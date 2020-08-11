import React from 'react';
import { Stack, Dropdown, Box, IInfo, Button, Grid, Text, Flex, Modal, Infobox } from '..';

function FormDropdownDouble({
  name,
  nameTwo,
  description,
  descriptionTwo,
  label,
  labelTwo,
  value,
  valueTwo,
  options = [],
  optionsTwo = [],
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const [isOpena, setIsOpena] = React.useState(false);

  const renderOptions = () => {
    return options.map(({ value, label }, index) => (
      <option value={value} key={index}>
        {label}
      </option>
    ));
  };

  const renderOptionsTwo = () => {
    return optionsTwo.map(({ valueTwo, labelTwo }, index) => (
      <option value={valueTwo} key={index}>
        {labelTwo}
      </option>
    ));
  };

  return (
    <Stack gap={4}>
      {/* first modal */}
      <Modal isOpen={isOpen}>
        <Infobox content={description} onClick={() => setIsOpen(false)} />
      </Modal>
      {/* second modal */}
      <Modal isOpen={isOpena}>
        <Infobox content={descriptionTwo} onClick={() => setIsOpena(false)} />
      </Modal>
      <Box padding={1} />
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%">
        <Box>
          {/* first input field */}
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
        </Box>
        <Box>
          {/* second input field */}
          <Flex alignItems="center">
            <Text>{nameTwo}</Text>
            <Button variant="invisible" onClick={() => setIsOpena(true)}>
              <Flex alignItems="flex-bottom" m="4px">
                <IInfo />
              </Flex>
            </Button>
          </Flex>
          <Box padding={1} />
          <Dropdown>{renderOptionsTwo()}</Dropdown>
        </Box>
      </Grid>
    </Stack>
  );
}

export default FormDropdownDouble;
