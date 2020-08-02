// rm-components
import Text from '../../components/primitives/Text';
import Flex from '../../components/layout/Flex';
import Icon from '../../components/icons/Icon';
import Grid from '../../components/layout/Grid';
import Box from '../../components/layout/Box'
// libraries
import React from 'react';
import { Link } from '@reach/router';

// styles
const styleHold = {
  position: 'fixed',
  background: '#fff',
  width: '100%',
  top: 0,
}

const styleNavbar = {
  display: 'flex',
};

const styleNavlink = {
  fontSize: '1.05em',
  paddingRight: '2em',
  textDecoration: 'none',
  color: '#000',
};

// Primary Component
export default class Footer extends React.Component {
  render() {
    return (
      <Box p={4} bg="text">
          <Box
            p={2}
            bg="draftc"
            borderRadius="base"
          >
            <Flex>
              <Icon name="info"/>
              <Text>
                    Prototype
              </Text>
            </Flex>
          </Box>
          <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" >

          </Grid>
      </Box>
    );
  }
}