import React, { useState } from 'react';
import {  Box, Flex, Icon, Text } from '..';
import { Link } from '@reach/router';

EditorSection.defaultProps = {
  destination: '/',
}

function EditorSection({ title, destination }) {
  return (
    <Flex justifyContent="space-between" m={2}>
        <Flex alignItems="center">
            <Icon name="status" />
            <Box padding={1} />
            <Link to={destination}>
                <Text color="textb">{title}</Text>
            </Link>
        </Flex>
        <Box />
        <Flex alignItems="center">
            <Icon name="edit" />
        </Flex>
    </Flex>
  );
}

export default EditorSection;
