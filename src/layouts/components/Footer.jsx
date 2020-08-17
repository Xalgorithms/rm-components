// libraries
import React from 'react';

// rm-components
import Text from '../../components/primitives/Text';
import Flex from '../../components/layout/Flex';
import Icon from '../../components/icons/Icon';
import Grid from '../../components/layout/Grid';
import Box from '../../components/layout/Box';

// Primary Component
export default class Footer extends React.Component {
  render() {
    return (
      <Box p={4} bg="text">
        <Box p={2} bg="greyblue" borderRadius="base">
          <Flex>
            <Icon name="info" />
            <Text>Prototype</Text>
          </Flex>
        </Box>
        <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" />
      </Box>
    );
  }
}
