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

const hold = {
  zIndex: '5',
};

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
          <Grid gridTemplateColumns="400px auto 400px">
            <Box borderRight="1px solid #efefef">
              <Box p={4}>
                <Text variant="formtitle">Welcome to the Dashboard</Text>
                <Box p={1} />
                <Text>Lorem Ipsum</Text>
              </Box>
            </Box>
            <Box paddingLeft={4} paddingTop={4} height="80vh">
              <Card />
              <Card />
              <Card />
            </Box>
            <Box>
              <Box m={4} p={2} bg="midblue" borderRadius="base">
                <Flex alignItems="center" justifyContent="center">
                  <Box height="15vh" />
                  <Box>
                    <Text color="primary">Create Rule</Text>
                  </Box>
                </Flex>
              </Box>
              <Box m={4} p={2} bg="primary" borderRadius="base">
                <Flex alignItems="center" justifyContent="center">
                  <Box height="15vh" />
                  <Box>
                    <Text color="#fff">Create Control Table</Text>
                  </Box>
                </Flex>
              </Box>
              <Box m={4} p={2} borderRadius="base" border="1px solid" borderColor="oline">
                <Flex alignItems="center" justifyContent="center">
                  <Box height="30vh" />
                  <Box>
                    <Text color="primary">Upload Table</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Grid>
        </div>
      </ScrollUp>
    );
  }
}
