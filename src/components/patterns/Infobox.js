import React from "react";
import { Text, Grid, Icon, Box, Button, Flex } from "../../components";

function Infobox(props) {
  const { content, open } = props;

  function handleClick() {
    console.log(`Opened InfoBox with content ${content}`);
  }

  return (
    <Box
      p={2}
      m={0}
      width={1}
      bg="bluebg"
      border="1px solid"
      borderColor="primary"
      borderRadius="base"
    >
      <Grid gridTemplateColumns="24px auto 24px">
        <Icon name="info" />
        <Text color="primary">{content}</Text>
        <Flex alignItems="flex-start">
          <Button variant="invisible" onClick={props.onClick}>
            <Icon name="ex" />
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Infobox;
