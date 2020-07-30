// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import SectionDescription from '../components/patterns/SectionDescription';
// rm-components
import Text from '../components/primitives/Text';

// Primary Component
export default class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDescription: 'Query the Rule Database',
    };
  }

  render() {
    const { pageDescription } = this.state;
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <SectionDescription>
            <Text variant="subtitle" color="purplea">
              {pageDescription}
            </Text>
            <Text>
              Any rule can be expressed in terms of its input conditions, and its output assertions.
              Please state each condition of this rule, and each assertion of this rule, as a simple
              factual sentence. Each sentence should be phrased in a manner that, in some particular
              circumstance, the sentence would logically be ‘true’ or ‘false’.
            </Text>
          </SectionDescription>
        </Box>
      </Grid>
    );
  }
}
