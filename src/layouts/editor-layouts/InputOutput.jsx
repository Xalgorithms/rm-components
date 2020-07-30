// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import SectionDescription from '../../components/patterns/SectionDescription';
import InvolvedParty from '../../components/patterns/InvolvedParty';
import Addbutton from '../../components/patterns/Addbutton';
import Text from '../../components/primitives/Text';

// Primary Component
export default class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Box bg="#F9FBFE">
          <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
            <Box>
              <SectionDescription>
                <Text variant="heading">Input Output</Text>
                Any rule can be expressed in terms of its input conditions, and its output
                assertions. Please state each condition of this rule, and each assertion of this
                rule, as a simple factual sentence. Each sentence should be phrased in a manner
                that, in some particular circumstance, the sentence would logically be ‘true’ or
                ‘false’.
              </SectionDescription>
            </Box>
            <Box>
              <InvolvedParty />
              <Box
                p={2}
                m={0}
                width={1}
                bg="bg"
                border="1px solid"
                borderColor="oline"
                borderRadius="base"
              >
                <Addbutton />
              </Box>
              <Box padding={3} />
              <InvolvedParty />
              <Box
                p={2}
                m={0}
                width={1}
                bg="bg"
                border="1px solid"
                borderColor="oline"
                borderRadius="base"
              >
                <Addbutton />
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    );
  }
}
