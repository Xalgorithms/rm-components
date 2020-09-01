import React from 'react';
import { Stack, Box, FormStandardDouble, Text } from '..';

export function TwoFieldModule({ title, fielda, descriptiona, fieldb, descriptionb }) {
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
          <Text variant="formtitle">{title}</Text>
            <Box padding={1} />
          <FormStandardDouble
            name={fielda}
            description={descriptiona}
            nameTwo={fieldb}
            descriptionTwo={descriptionb}
          />
        </Box>
        <Box padding={1} />
      </Stack>
    );
}

export default TwoFieldModule;
