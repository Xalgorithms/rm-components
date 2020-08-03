import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Box, Flex, Icon, Text } from '..';

const styleNavlink = {
  fontSize: '1.05em',
  textDecoration: 'none',
  color: '#000',
};

EditorSection.defaultProps = {
  destination: '/',
};

function EditorSection({ title, destination }) {
  return (
    <Link to={destination} style={styleNavlink}>
      <Flex justifyContent="space-between" m={2}>
        <Flex alignItems="center">
          <Icon name="status" />
          <Box padding={1} />
          <Text color="textb">{title}</Text>
        </Flex>
        <Box />
        <Flex alignItems="center">
          <Icon name="edit" />
        </Flex>
      </Flex>
    </Link>
  );
}

export default EditorSection;
