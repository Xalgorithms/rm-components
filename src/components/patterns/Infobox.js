import React from 'react';
import {
	Text,
  Grid,
  Icon,
  Box,
  Button,
  Flex,
} from '../../components';

function Infobox({ children }) {

  function handleClick() {
    console.log('this is:', this);
  }

  return(
    <Box p={2} m={0} width={1} bg="bluebg" border="1px solid" borderColor="primary" borderRadius="base">
      <Grid gridTemplateColumns='24px auto 24px'>
        <Icon name="info"/>
        <Text color="primary" as="infobox">
          {children}
        </Text>
        <Flex alignItems="flex-start">
          <Button variant="invisible" onClick={handleClick()}>
              <Icon name="ex"/>
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Infobox;
