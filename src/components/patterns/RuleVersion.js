import React, { useState } from 'react';
import {
  Stack,
  Box,
  Button,
  Grid,
  Flex,
  FormStandardDropdown,
  FormStandardLabel,
  FormStandard,
} from '..';

export default () => (
  <Box bg="#F9FBFE" p={4}>
    <Stack gap={4}>
      <Box p={2} m={0} width={1} bg="bg" border="1px solid" borderColor="oline" borderRadius="base">
        <FormStandardDropdown
          name="Rule Version"
          description="hello world is asking the following things"
          nameTwo="Xalgo Version"
          descriptionTwo="hello world is asking the following things"
          options={[
            { value: 'last stable', label: 'Last Stable' },
            { value: 'peace', label: 'Peace' },
            { value: 'no justice', label: 'No Justice' },
            { value: 'no peace', label: 'No Peace' },
          ]}
        />
        <Box padding={1} />
        <FormStandardDropdown
          name="Rule URL"
          description="hello world is asking the following things"
          nameTwo="Rule Criticality"
          descriptionTwo="hello world is asking the following things"
          options={[
            { value: 'experimental', label: 'Experimental' },
            { value: 'peace', label: 'Peace' },
            { value: 'no justice', label: 'No Justice' },
            { value: 'no peace', label: 'No Peace' },
          ]}
        />
      </Box>
      <Box padding={1} />
      <Box p={2} m={0} width={1} bg="bg" border="1px solid" borderColor="oline" borderRadius="base">
        <FormStandardLabel
          name="RuleMaker Entity Name"
          description="hello world is asking the following things"
          nameTwo="RuleMaker ID"
          descriptionTwo="hello world is asking the following things"
          value="Vqp4nv8eGprI"
        />
        <Box padding={1} />
        <FormStandard
          name="RuleMaker URL"
          description="hello world is asking the following things"
        />
      </Box>
      <Box padding={1} />
      <Grid gridTemplateColumns="auto 160px">
        <Box />
        <Button>Next</Button>
      </Grid>
    </Stack>
  </Box>
);
