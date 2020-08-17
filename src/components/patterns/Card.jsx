import React from 'react';
import { Text, Flex, Icon, Box, Button } from '..';

export default function Card() {
  return (
    <Box
      p={2}
      bg="bg"
      border="1px solid"
      borderColor="oline"
      borderRadius="base"
      marginBottom={4}
    >
      <Flex alignItems="flex-start">
        <Text>Loi concernant la taxe sur les carburants</Text>
      </Flex>
      <Box padding={2} />
      <Flex justifyContent="space-between">
        <Button variant="invisible">
          <Flex alignItems="center">
            <Icon name="download" />
            <Text color="primary">Download</Text>
          </Flex>
        </Button>
        <Button variant="invisible">
          <Text color="primary">Edit Rule</Text>
        </Button>
      </Flex>
    </Box>
  );
}
