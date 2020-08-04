// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import EditorControl from '../../components/patterns/EditorControl';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';
import FormStandardLabel from '../../components/patterns/FormStandardLabel';
import FormStandard from '../../components/patterns/FormStandard';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';

// Primary Component
export default class RuleManager extends React.Component {
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
            <Text variant="subtitledesc" color="purplea">
              Rule Manager, Author and Maintainer
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