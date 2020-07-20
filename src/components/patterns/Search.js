import React from 'react';
import {
  Input,
  Flex,
  Icon,
  Box,
  Button,
} from '../../components';

export default () => (
  <Box p={2} m={0} width={1} bg="bg" border="1px solid" borderColor="oline" borderRadius="round">
    <Flex justifyContent="space-between" alignItems="center">
      <Input variant="search" type="text"/>
      <Button variant="invisible">
        <Flex alignItems="center">
          <Icon name="search"/>
        </Flex>
      </Button>
    </Flex>
  </Box>
);
