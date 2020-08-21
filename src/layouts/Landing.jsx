// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';

// components
import ScrollUp from './components/ScrollUp';

// rm-components
import Text from '../components/primitives/Text';
import Flex from '../components/layout/Flex';
import Search from '../components/patterns/Search';

// Primary Component
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollUp>
        <Grid height="80vh" gridTemplateColumns="400px auto">
          <Box borderRight="1px solid #efefef">
            <Box p={4}>
              <Text variant="formtitle">
                Introducing XRADS
              </Text>
              <Box p={1}/>
              <Text color="primary">
                This mockup behaves as if you are already logged in to the system.
              </Text>
            </Box>
          </Box>
          <Flex alignItems="center" justifyContent="center">
            <Box width="460px">
              <Text variant="heading">
                Solving the Problem of Rules.
              </Text>
              <Box p={1} />
              <Box border="1px solid" borderColor="oline" borderRadius="round" p={2}>
                <Search />
              </Box>
              <Box p={1} />
              <Text>Assemble Rule</Text>
            </Box>
          </Flex>
        </Grid>
      </ScrollUp>
    );
  }
}
