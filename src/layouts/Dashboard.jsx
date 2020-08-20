// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import Flex from '../components/layout/Flex';
import Search from '../components/patterns/Search';
import Rule from '../components/primitives/Rule';
import Card from '../components/patterns/Card';
// rm-components
import Text from '../components/primitives/Text';
import ScrollUp from './components/ScrollUp';
import { zIndex } from 'styled-system';

const hold = {
  zIndex: '10',
}

// Primary Component
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDescription: 'Rule Maker Dashboard',
    };
  }

  render() {
    return (
      <ScrollUp>
        <div style={hold}>
          <Box m={4}>
            <Flex>
              <Search />
            </Flex>
          </Box>
          <Rule />
          <Grid gridTemplateColumns="auto 400px">
            <Box>
              <Box p={4} height="26vh">
                <Text>Create Rule</Text>
              </Box>
              <Box p={4} borderTop="1px solid #E7E7E7" height="26vh">
              <Text>Create Control Table</Text>
              </Box>
              <Box p={4} borderTop="1px solid #E7E7E7" height="26vh">
              </Box>
            </Box>
            <Box p={4} borderLeft="1px solid #E7E7E7" height="80vh">
              <Card />
              <Card />
              <Card />
            </Box>
          </Grid>
        </div>
      </ScrollUp>
    );
  }
}
