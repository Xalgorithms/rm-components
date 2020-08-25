// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
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
          <Grid gridTemplateRows="auto" height="90vh">
            <Box>
              <Grid gridTemplateColumns="400px auto 400px" height="100%">
                <Box borderRight="1px solid #efefef">
                  <Box p={4}>
                    <Text variant="formtitle">Editor</Text>
                    <Box p={2} />
                    <Box>
                      <Text color="primary">Create Rule</Text>
                    </Box>
                    <Box marginTop={2}>
                      <Text color="textb">Create Table</Text>
                    </Box>
                  </Box>
                </Box>
                <Box p={4}  borderRight="1px solid #efefef">
                  <Box p={1} />
                  <Text>Graphics showing rule ussage will go here in the future</Text>
                </Box>
                <Box p={4} height="auto">
                  <Text variant="formtitle">My Rules</Text>
                  <Box p={2} />
                  <Card />
                  <Card />
                  <Card />
                </Box>
              </Grid>
            </Box>
          </Grid>
        </div>
      </ScrollUp>
    );
  }
}
