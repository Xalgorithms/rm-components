// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import EditorControl from '../../components/patterns/EditorControl';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';
import FormStandardDropdown from '../../components/patterns/FormStandardDropdown';
import FormStandardLabel from '../../components/patterns/FormStandardLabel';
import FormStandard from '../../components/patterns/FormStandard';
import Button from '../../components/primitives/Button';
import { Link } from '@reach/router';

// Primary Component
export default class RuleMakerEntity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentRule } = this.state;
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
        <Box
          p={2}
          m={0}
          width={1}
          bg="bg"
          border="1px solid"
          borderColor="oline"
          borderRadius="base"
        >
          <FormStandardDropdown
            name="Rule Version"
            description="hello world is asking the following things"
            nameTwo="Xalgo Version"
            descriptionTwo="hello world is asking the following things"
            options={[
              { value: 'last stable', label: 'Last Stable' },
              { value: 'peace', label: 'Peace' },
              { value: 'no justice', label: 'No Justice' },
              { value: 'no peace', label: 'No Peace' },
            ]}
          />
          <Box padding={1} />
          <FormStandardDropdown
            name="Rule URL"
            description="hello world is asking the following things"
            nameTwo="Rule Criticality"
            descriptionTwo="hello world is asking the following things"
            options={[
              { value: 'experimental', label: 'Experimental' },
              { value: 'peace', label: 'Peace' },
              { value: 'no justice', label: 'No Justice' },
              { value: 'no peace', label: 'No Peace' },
            ]}
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
            <FormStandardLabel
                name="RuleMaker Entity Name"
                description="hello world is asking the following things"
                nameTwo="RuleMaker ID"
                descriptionTwo="hello world is asking the following things"
                value="Vqp4nv8eGprI"
            />
            <Box padding={1} />
            <FormStandard
                name="RuleMaker URL"
                description="hello world is asking the following things"
            />
            </Box>
            <Box padding={1} />
            <Grid gridTemplateColumns="auto 160px">
            <Box />
            <Link to="/editor/rule-manager">
                <Button>Next</Button>
            </Link>
            </Grid>
        </Box>
      </Grid>
    );
  }
}
