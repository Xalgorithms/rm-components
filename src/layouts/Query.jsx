// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import Card from '../components/patterns/Card';
// rm-components
import ScrollUp from './components/ScrollUp';
import Search from '../components/patterns/Search';
import Rule from '../components/primitives/Rule';
import Flex from '../components/layout/Flex';

// Primary Component
export default class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDescription: 'Query the Rule Database',
    };
  }

  render() {
    //const { pageDescription } = this.state;
    return (
      <ScrollUp>
        <Box m={4}>
          <Flex>
            <Search />
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
