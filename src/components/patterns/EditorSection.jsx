import React from 'react';
import { Link } from '@reach/router';
import { Box, Flex, Text, Button, Icon } from '..';

const styleNavlink = {
  fontSize: '1.05em',
  textDecoration: 'none',
  color: '#000',
};

const littlePadding = {
  padding: '2px',
};

const helpAlign = {
  marginTop: '6px',
  marginBottom: '6px',
};

EditorSection.defaultProps = {
  destination: '/',
};

function EditorSection({ title, destination }) {
  return (
    <Button variant="invisiblewide">
      <Link to={destination} style={styleNavlink}>
        <div style={helpAlign}>
          <div style={littlePadding} />
          <Flex alignItems="center">
            <Icon name="edit" />
            <Box p={1}/>
            <Text>{title}</Text>
          </Flex>
          <div style={littlePadding} />
        </div>
      </Link>
    </Button>
  );
}

export default EditorSection;
