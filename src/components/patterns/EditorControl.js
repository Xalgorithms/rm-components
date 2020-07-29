import React, { useState } from 'react';
import {
  Stack,
  Box,
	Button,
	Grid,
	Flex,
  Icon,
  Text,
  Link,
  Badge,
} from '../';

function EditorControl() {}
return(
  <Grid gridTemplateColumns='400px auto 170px'>
    <Flex alignItems="center">
      <Link href="/">Back</Link>
      <Box padding={1}/>
      <Text variant="sectiontitle">Name of Rule</Text>
      <Box padding={1}/>
      <Badge>Draft</Badge>
    </Flex>
    <Box/>
    <Flex alignItems="center">
      <Icon name="download"/>
      <Box padding={1}/>
      <Button>Publish</Button>
    </Flex>
  </Grid>
);
