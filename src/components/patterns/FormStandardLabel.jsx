import React from 'react';
import { Input, Stack, Infobox, Box, IInfo, Button, Grid, Text, Flex, Modal } from '..';

function FormStandardLabel({ name, nameTwo, description, descriptionTwo, value }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const [isOpena, setIsOpena] = React.useState(false);

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
          <Input />
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
          <Box padding={1}>
            <Text>{value}</Text>
          </Box>
        </Box>
      </Grid>
    </Stack>
  );
}

export default FormStandardLabel;
