import React, { useState } from "react";
import {
  Label,
  Input,
  Stack,
  Dropdown,
  Infobox,
  Box,
  Icon,
  Button,
  Grid,
  Text,
  Flex,
  Modal,
} from "../";

function FormStandardDouble(props) {
  // Extract some props.
  const { name, nameTwo, description, descriptionTwo } = props;

  // Use state for information boxes.
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpena, setIsOpena] = React.useState(false);

  return (
    <Stack gap={4}>
      {/*first modal*/}
      <Modal isOpen={isOpen}>
        <Infobox content={description} onClick={() => setIsOpen(false)} />
      </Modal>
      {/*second modal*/}
      <Modal isOpen={isOpena}>
        <Infobox content={descriptionTwo} onClick={() => setIsOpena(false)} />
      </Modal>
      <Box padding={1} />
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%">
        <Box>
          {/*first input field*/}
          <Flex alignItems="center">
            <Text>{name}</Text>
            <Button
              variant="invisible"
              onClick={() => {
                setIsOpen(true);
                setIsOpena(false);
              }}
            >
              <Flex alignItems="center">
                <Icon name="info" />
              </Flex>
            </Button>
          </Flex>
          <Box padding={1} />
          <Input onChange={props.onChangeInputA} />
        </Box>
        <Box>
          {/*second input field*/}
          <Flex alignItems="center">
            <Text>{nameTwo}</Text>
            <Button
              variant="invisible"
              onClick={() => {
                setIsOpena(true);
                setIsOpen(false);
              }}
            >
              <Flex alignItems="center">
                <Icon name="info" />
              </Flex>
            </Button>
          </Flex>
          <Box padding={1} />
          <Input onChange={props.onChangeInputB} />
        </Box>
      </Grid>
    </Stack>
  );
}

export default FormStandardDouble;
