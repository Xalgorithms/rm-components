import React from 'react';
import { Text, Box, Button, Flex, IEx, IInfo } from '..';

function Infobox(props) {
  const { content } = props;

  return (
    <Box p={2} m={0} width={1} bg="bluebg" borderRadius="base">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <IInfo />
          <Box p={1} />
          <Text color="primary">{content}</Text>
        </Flex>
        <Flex alignItems="center">
          <Button variant="invisible" onClick={props.onClick}>
            <IEx />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Infobox;
