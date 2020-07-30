// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import EditorControl from '../../components/patterns/EditorControl';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';
import EditorSection from '../../components/patterns/EditorSection';

// Primary Component
export default class EditorLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <Box
            p={2}
            m={0}
            width={1}
            bg="bg"
            border="1px solid"
            borderColor="oline"
            borderRadius="base"
          >
            <Text variant="formtitle">Input→Output Table</Text>
            <hr />
            <EditorSection title="Input→Output Table" />
          </Box>
          <Box padding={2} />
          <Box
            p={2}
            m={0}
            width={1}
            bg="bg"
            border="1px solid"
            borderColor="oline"
            borderRadius="base"
          >
            <Text variant="formtitle">Context</Text>
            <hr />
            <EditorSection title="MetaData Management" />
            <hr />
            <EditorSection title="Qualitative Weights" />
            <hr />
            <EditorSection title="Input Sources" />
            <hr />
            <EditorSection title="Input Contexts" />
            <hr />
            <EditorSection title="Input Filters" />
          </Box>
        </Box>
      </Grid>
    );
  }
}
