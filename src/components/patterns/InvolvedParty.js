import React, { useState } from "react";
import {
  Stack,
  Box,
  Button,
  Grid,
  Flex,
  FormStandardDouble,
  FormStandard,
} from "../";

export default class InvolvedParty extends React.Component {
  render() {
    return (
      <Stack gap={4}>
        <Box
          p={2}
          m={0}
          width={1}
          bg="bg"
          border="1px solid"
          borderColor="oline"
          borderRadius="base"
        >
          <FormStandardDouble
            name="Standard Role Name"
            description="hello world is asking the following things"
            nameTwo="Standard Industry Code"
            descriptionTwo="hello world is asking the following things"
          />
          <Box padding={1} />
          <FormStandard
            name="Standard Industry Name"
            description="hello world is asking the following things"
          />
        </Box>
        <Box padding={1} />
      </Stack>
    );
  }
}
