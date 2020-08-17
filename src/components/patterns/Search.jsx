import React from 'react';
import { Input, Flex, Icon, Box, Button } from '..';

export default () => (
  <Box m={0} width={1} bg="bg">
    <Flex justifyContent="space-between" alignItems="center">
    <Button variant="invisible">
        <Flex alignItems="center">
          <Icon name="search" />
        </Flex>
      </Button>
      <Input variant="search" type="text" m={2}/>
    </Flex>
  </Box>
);
