// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Addbutton from '../../components/patterns/Addbutton';
import EditorControl from '../../components/patterns/EditorControl';
import InvolvedParty from '../../components/patterns/InvolvedParty';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';

// Primary Component
export default class InputApplicabilityFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleInvolvedParties: [1, 2],
    };

    // Bind functions
    // this.toggleLoggedin = this.toggleLoggedin.bind(this);
  }

  render() {
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <EditorControl title="Rule Name" />
          <Box p={2} />
          <SectionDescription>
            <Text variant="subtitle" color="purplea">
              Rule Maker Dashboard
            </Text>
            <Text>
              Any rule can be expressed in terms of its input conditions, and its output assertions.
              Please state each condition of this rule, and each assertion of this rule, as a simple
              factual sentence. Each sentence should be phrased in a manner that, in some particular
              circumstance, the sentence would logically be ‘true’ or ‘false’.
            </Text>
          </SectionDescription>
        </Box>
        <Box>
          {this.state.sampleInvolvedParties.map((val, index) => (
            <InvolvedParty key={index} />
          ))}
          <Box
            p={2}
            m={0}
            width={1}
            bg="bg"
            border="1px solid"
            borderColor="oline"
            borderRadius="base"
          >
            <Addbutton
              onClick={() => {
                const parties = this.state.sampleInvolvedParties;
                const last = parties[parties.length];
                parties.push(last + 1);
                this.setState({ sampleInvolvedParties: parties });
              }}
              content={'Add Involved Party'}
            />
          </Box>
          <Box padding={3} />
        </Box>
      </Grid>
    );
  }
}
