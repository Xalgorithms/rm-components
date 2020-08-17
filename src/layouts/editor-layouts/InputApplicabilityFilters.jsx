// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Addbutton from '../../components/patterns/Addbutton';
import InvolvedParty from '../../components/patterns/InvolvedParty';
import Text from '../../components/primitives/Text';
import Flex from '../../components/layout/Flex';
import Button from '../../components/primitives/Button';
import FormStandardDouble from '../../components/patterns/FormStandardDouble';
import EditorLeft from './EditorLeft';

const fullheight = {
  minHeight: '80vh',
};

// Primary Component
export default class InputApplicabilityFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleInvolvedParties: [1],
    };

    // Bind functions
    // this.toggleLoggedin = this.toggleLoggedin.bind(this);
  }

  render() {
    const { sampleInvolvedParties } = this.state;
    return (
      <Grid gridTemplateColumns="400px auto">
        <Box p={4} borderRight="1px solid #E7E7E7">
          <EditorLeft title={this.props.rule.metadata.ruleName} />
        </Box>
        <Box p={4}>
          <div style={fullheight}> 
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
              <Link to="/editor/editor-landing">
                <Button>Done</Button>
              </Link>
            </Flex>
          </div>
        </Box>
      </Grid>
    );
  }
}
