import React from 'react';
import { Stack, Box, FormStandardDouble, FormStandard, Text } from '..';

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
          <Text variant="formtitle">Standard Role Name</Text>
            <Box padding={1} />
          <FormStandard
            name="Standard Industry Name"
            description="hello world is asking the following things"
          />
          <Box padding={1} />
          <FormStandardDouble
            name="ISIC Industry Code"
            description="Detail for standard role name field."
            nameTwo="ISIC Industry Name "
            descriptionTwo="Detail for industry code field."
          />
        </Box>
        <Box padding={1} />
      </Stack>
    );
  }
}
