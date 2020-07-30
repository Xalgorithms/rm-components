import React, { useState } from 'react';
import { Stack, Box, Button, Grid, Flex, Icon, Text, Link } from '..';

function EditorSection({ title }) {
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <Icon name="status" />
        <Box padding={1} />
        <Text variant="body">{title}</Text>
      </Flex>
      <Box />
      <Flex alignItems="center">
        <Icon name="edit" />
      </Flex>
    </Flex>
  );
}

export default EditorSection;
