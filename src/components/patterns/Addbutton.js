import React from 'react';
import {
  Flex,
  Icon,
  Button,
  Text,
  Box,
} from '../../components';

export default () => (
  <Button variant="invisible">
    <Flex alignItems="center" justifyContent="flex-start">
      <Box width="32px">
        <img src="/assets/icons/i-additional-big.svg"/>
      </Box>
      <Box width="120px" p={1}>
        <Text color="primary">
          New Output
        </Text>
      </Box>
    </Flex>
  </Button>
);
