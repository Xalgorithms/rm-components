// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import FormStandardDropdown from '../../components/patterns/FormStandardDropdown';
import FormStandardLabel from '../../components/patterns/FormStandardLabel';
import FormStandard from '../../components/patterns/FormStandard';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import EditorLeft from './EditorLeft';

const fullheight = {
  minHeight: '80vh',
};

// Primary Component
export default class RuleMakerEntity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { currentRule } = this.state;
    return (
      <Grid gridTemplateColumns="400px auto">
        <Box p={4} borderRight="1px solid #E7E7E7">
          <EditorLeft title={this.props.rule.metadata.ruleName} />
        </Box>
        <Box p={4}>
          <div style={fullheight}>
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
            <Box padding={1} />
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
            <Box padding={1} />
            <Flex justifyContent="flex-end">
              <Box />
              <Link to="/editor/rule-manager">
                <Button>Next</Button>
              </Link>
            </Flex>
          </div>
        </Box>
      </Grid>
    );
  }
}
