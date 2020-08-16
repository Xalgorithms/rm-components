// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import FormStandardLabel from '../../components/patterns/FormStandardLabel';
import FormStandard from '../../components/patterns/FormStandard';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import EditorLeft from './EditorLeft';

const fullheight = {
  minHeight: '80vh',
};

// Primary Component
export default class RuleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { currentRule } = this.state;
    return (
      <Grid gridTemplateColumns="25% 75%">
        <Box p={4} bg="draftb">
          <EditorLeft title={this.props.rule.metadata.ruleName} />
        </Box>
        <Box p={4}>
          <div style={fullheight}>
            <FormStandardLabel
              name="Rule Manager Name"
              description="hello world is asking the following things"
              nameTwo="Rule Manager ID"
              descriptionTwo="hello world is asking the following things"
              value="Vqp4nv8eGprI"
            />
            <Box padding={1} />
            <FormStandard
              name="Rule Manager Email"
              description="hello world is asking the following things"
            />
            <Box padding={1} />
            <FormStandardLabel
              name="Rule Author Name"
              description="hello world is asking the following things"
              nameTwo="Rule Author ID"
              descriptionTwo="hello world is asking the following things"
              value="Vqp4nv8eGprI"
            />
            <Box padding={1} />
            <FormStandard
              name="Rule Author Email"
              description="hello world is asking the following things"
            />
            <Box padding={1} />
            <FormStandardLabel
              name="Rule Maintainer Name"
              description="hello world is asking the following things"
              nameTwo="Rule Maintainer ID"
              descriptionTwo="hello world is asking the following things"
              value="Vqp4nv8eGprI"
            />
            <Box padding={1} />
            <FormStandard
              name="Rule Maintainer Email"
              description="hello world is asking the following things"
            />
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
