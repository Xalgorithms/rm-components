import React from 'react';
import { Link } from '@reach/router';
import { Box, Flex, Text, Button } from '..';
import IEdit from "../icons/IEdit";

const styleNavlink = {
  fontSize: '1.05em',
  textDecoration: 'none',
  color: '#000',
};

const littlePadding = {
  padding: '2px',
}

const helpAlign = {
  marginTop: '6px',
  marginBottom: '6px',
}

EditorSection.defaultProps = {
  destination: '/',
};

function EditorSection({ title, destination }) {
  return (
    <Button variant="invisiblewide">
      <Link to={destination} style={styleNavlink}>
        <div style={helpAlign}>
          <div style={littlePadding}/>
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <Text color="primary">{title}</Text>
            </Flex>
            <Box />
            <Flex alignItems="center">
              <IEdit />
            </Flex>
          </Flex>
          <div style={littlePadding}/>
        </div>
      </Link>
    </Button>
  );
}

export default EditorSection;
