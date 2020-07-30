import React from 'react';
import { Grid, Stack, Text, Flex, Icon, Badge, Box, Button } from '../../components';

export default () => (
  <Box p={2} m={2} width={1 / 3} bg="bg" border="1px solid" borderColor="oline" borderRadius="base">
    <Flex alignItems="flex-start">
      <Text>Loi concernant la taxe sur les carburants</Text>
      <Badge>Draft</Badge>
    </Flex>
    <Box padding={2}></Box>
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
