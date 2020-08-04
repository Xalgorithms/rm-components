// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import EditorControl from '../../components/patterns/EditorControl';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';
import FormDropdownDouble from '../../components/patterns/FormDropdownDouble';
import FormStandardDouble from '../../components/patterns/FormStandardDouble';
import FormDropdown from '../../components/patterns/FormDropdown';
import Flex from '../../components/layout/Flex';

// Primary Component
export default class InputContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    {/*const { currentRule } = this.state;*/}
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <EditorControl title="Rule Name" />
          <Box p={2} />
          <SectionDescription>
            <Text variant="subtitledesc" color="purplea">
              Input Context
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
            <FormDropdownDouble
              name="Country Jurisdiction"
              description="hello world is asking the following things"
              options={[
                { value: 'justice', label: 'Justice' },
                { value: 'peace', label: 'Peace' },
                { value: 'no justice', label: 'No Justice' },
                { value: 'no peace', label: 'No Peace' },
              ]}
              nameTwo="Sub-Country Jurisdiction"
              descriptionTwo="hello world is asking the following things"
              optionsTwo={[
                { valueTwo: 'justice', labelTwo: 'Justice' },
                { valueTwo: 'peace', labelTwo: 'Peace' },
                { valueTwo: 'no justice', labelTwo: 'No Justice' },
                { valueTwo: 'no peace', labelTwo: 'No Peace' },
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
            <FormStandardDouble
              name="Start Date and Time "
              description="hello world is asking the following things"
              nameTwo="End Date and Time"
              descriptionTwo="hello world is asking the following things"
            />
            <Box padding={1} />
            <FormDropdown
              name="Time Zone"
              description="hello world is asking the following things"
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
            <FormDropdownDouble
              name="Country Jurisdiction"
              description="hello world is asking the following things"
              options={[
                { value: 'justice', label: 'Justice' },
                { value: 'peace', label: 'Peace' },
                { value: 'no justice', label: 'No Justice' },
                { value: 'no peace', label: 'No Peace' },
              ]}
              nameTwo="Sub-Country Jurisdiction"
              descriptionTwo="hello world is asking the following things"
              optionsTwo={[
                { valueTwo: 'justice', labelTwo: 'Justice' },
                { valueTwo: 'peace', labelTwo: 'Peace' },
                { valueTwo: 'no justice', labelTwo: 'No Justice' },
                { valueTwo: 'no peace', labelTwo: 'No Peace' },
              ]}
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