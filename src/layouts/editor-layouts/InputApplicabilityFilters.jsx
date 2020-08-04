// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Addbutton from '../../components/patterns/Addbutton';
import EditorControl from '../../components/patterns/EditorControl';
import InvolvedParty from '../../components/patterns/InvolvedParty';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';
import Flex from '../../components/layout/Flex';
import Button from '../../components/primitives/Button';
import FormStandardDouble from '../../components/patterns/FormStandardDouble';

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
    const { sampleInvolvedParties } = this.state;
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <EditorControl title="Rule Name" />
          <Box p={2} />
          <SectionDescription>
            <Text variant="subtitledesc" color="purplea">
              Input Applicability Filters
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
          {sampleInvolvedParties.map((val, key) => (
            <InvolvedParty key={key} />
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
                const parties = sampleInvolvedParties;
                const last = parties[parties.length];
                parties.push(last + 1);
                this.setState({ sampleInvolvedParties: parties });
              }}
              content="Add Involved Party"
            />
          </Box>
          <Box padding={1} />
          <Box
            p={2}
            m={0}
            width={1}
            bg="bg"
            border="1px solid"
            borderColor="oline"
            borderRadius="base"
          >
            <Text variant="formtitle">Involved Product or Service</Text>
            <Box padding={1} />
            <FormStandardDouble
              name="Standard Role Name"
              description="Detail for standard role name field."
              nameTwo="Standard Industry Code"
              descriptionTwo="Detail for industry code field."
            />
          </Box>
          <Box padding={1} />
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
                const parties = sampleInvolvedParties;
                const last = parties[parties.length];
                parties.push(last + 1);
                this.setState({ sampleInvolvedParties: parties });
              }}
              content="Add Involved Party"
            />
          </Box>
          <Box padding={1} />
          <Flex justifyContent="flex-end">
            <Box />
            <Link to="/editor/">
              <Button>Done</Button>
            </Link>
          </Flex>
        </Box>
      </Grid>
    );
  }
}
