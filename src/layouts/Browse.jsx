// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import Search from '../components/patterns/Search';
import Card from '../components/patterns/Card';
import Rule from '../components/primitives/Rule';
import Flex from '../components/layout/Flex';
// rm-components
import Text from '../components/primitives/Text';
import ScrollUp from './components/ScrollUp';

// Primary Component
export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDescription: 'Browse Rules',
    };
  }

  render() {
    return (
      <ScrollUp>
        <Box m={4}>
          <Flex>
            <Text color="primary">Upload Table</Text>
          </Flex>
        </Box>
        <Rule />
        <Grid height="80vh" gridTemplateColumns="400px auto">
          <Box borderRight="1px solid #efefef">
            <Box p={4}>
              <Card />
              <Card />
              <Card />
            </Box>
          </Box>
        </Grid>
      </ScrollUp>
    );
  }
}
