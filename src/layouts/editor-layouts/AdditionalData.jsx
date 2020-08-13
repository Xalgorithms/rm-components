// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Button from '../../components/primitives/Button';
import FormStandard from '../../components/patterns/FormStandard';
import Addbutton from '../../components/patterns/Addbutton';
import FormStandardDropdown from '../../components/patterns/FormStandardDropdown';
import Flex from '../../components/layout/Flex';
import EditorLeft from './EditorLeft';

const fullheight = {
  minHeight: '80vh',
};

// Primary Component
export default class AdditionalData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //const { currentRule } = this.state;
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <EditorLeft title={this.props.rule.metadata.ruleName} />
        </Box>
        <Box>
          <div style={fullheight}>
            <Box
              p={2}
              m={0}
              width={1}
              bg="bg"
              border="1px solid"
              borderColor="oline"
              borderRadius="base"
            >
              <FormStandard
                name="Field Name"
                description="hello world is asking the following things"
              />
              <FormStandard
                name="Target  Value"
                description="hello world is asking the following things"
              />
              <Box padding={1} />
              <Addbutton />
              <Box padding={3} />
              <FormStandardDropdown
                name="Unique Identifier"
                description="Text input description."
                nameTwo="Standard Role Name"
                descriptionTwo="Dropdown input description."
                options={[
                  { value: 'justice', label: 'Justice' },
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
              <Addbutton />
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
