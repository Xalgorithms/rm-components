import React from 'react';
import {
	Grid,
	Stack,
	Text,
  Flex,
  Icon,
  Label,
  Box,
} from '../../components';

export default () => (
  <Box p={2} m={2} width={1 / 3} bg="bg" border="1px solid" borderColor="oline" borderRadius="base">
    <Stack as="form" gap={4}>
      <Flex alignItems='flex-start'>
        <Text>
          Loi concernant la taxe sur les carburants
        </Text>
        <Label>Draft</Label>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex>
          <Icon name="trash"/>
          <Text color="primary">
            Download
          </Text>
        </Flex>
        <Text color="primary">
          Edit Rule
        </Text>
      </Flex>
    </Stack>
  </Box>
);
