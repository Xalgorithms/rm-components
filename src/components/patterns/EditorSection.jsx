import React from 'react';
import { Link } from '@reach/router';
import { Box, Flex, Icon, Text } from '..';
import IEdit from "../icons/IEdit";

const styleNavlink = {
  fontSize: '1.05em',
  textDecoration: 'none',
  color: '#000',
};

const littlePadding = {
  padding: '2px',
}

EditorSection.defaultProps = {
  destination: '/',
};

function EditorSection({ title, destination }) {
  return (
    <Link to={destination} style={styleNavlink}>
      <Box>
        <div style={littlePadding}/>
        <Flex justifyContent="space-between" m={2}>
          <Flex alignItems="center">
            <Icon name="status" />
            <Box padding={1} />
            <Text color="textb">{title}</Text>
          </Flex>
          <Box />
          <Flex alignItems="center">
            <IEdit />
          </Flex>
        </Flex>
        <div style={littlePadding}/>
      </Box>
    </Link>
  );
}

export default EditorSection;
