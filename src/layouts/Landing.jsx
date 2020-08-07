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
        <Grid gridTemplateRows="45vh 45vh">
          <Flex alignItems="center" justifyContent="center" bg="grad">
            <Box width={4 / 7}>
              <Text variant="heading">
                A rule is a relation between what is and what ought to be.
              </Text>
              <Box p={1} />
              <Text>
                Oughtomation is a general-purpose method for anyone to publish, discover, fetch,
                scrutinize, prioritize and automate normative rules across the Internet.
              </Text>
              <Box m={1} />
              <Text color="primary">
                This mockup behaves as if you are already logged in to the system.
              </Text>
            </Box>
          </Flex>
          <Grid gridTemplateColumns="50vw 50vw">
            <Flex alignItems="center" justifyContent="center" bg="text" p={4}>
              <Search />
            </Flex>
            <Flex alignItems="center" justifyContent="center" p={4}>
              <Box>
                <Text>Assemble Rule</Text>
              </Box>
            </Flex>
          </Grid>
        </Grid>
      </ScrollUp>
    );
  }
}
