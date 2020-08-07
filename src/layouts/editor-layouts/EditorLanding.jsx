// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import EditorControl from '../../components/patterns/EditorControl';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';
import EditorSection from '../../components/patterns/EditorSection';
import Button from '../../components/primitives/Button';

// Primary Component
export default class EditorLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /*const { currentRule } = this.state;*/
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <EditorControl title={this.props.rule.metadata.ruleName} />
          <Box p={2} />
          <Text>{this.props.rule.metadata.ruleDescription}</Text>
          <Box p={2} />
          <SectionDescription>
            <Text variant="subtitledesc" color="purplea">
              Rule Maker Dashboard
            </Text>
            <Text>
              Any rule can be expressed in terms of its input conditions, and its output assertions.
              Please state each condition of this rule, and each assertion of this rule, as a simple
              factual sentence. Each sentence should be phrased in a manner that, in some particular
              circumstance, the sentence would logically be ‘true’ or ‘false’.
            </Text>
          </SectionDescription>
          <Box p={2} />
          <Button variant="wide" onClick={this.props.resetRule}>
            Reset Rule
          </Button>
        </Box>
        <Box>
          <Box
            m={0}
            width={1}
            bg="bg"
            border="1px solid"
            borderColor="oline"
            borderRadius="base"
            p={2}
          >
            <Text variant="formtitle">Input→Output Table</Text>
            <Button variant="invisiblewide">
              <EditorSection
                title="Input→Output Table"
                destination="/editor/input-output-sentences"
              />
            </Button>
          </Box>
          <Box padding={2} />
          <Box
            m={0}
            width={1}
            bg="bg"
            border="1px solid"
            borderColor="oline"
            borderRadius="base"
            p={2}
          >
            <Text variant="formtitle">Context</Text>
            <EditorSection title="MetaData Management" destination="/editor/rule-maker-entity" />
            <EditorSection title="Qualitative Weights" destination="/editor/output-weight" />
            <EditorSection title="Input Contexts" destination="/editor/input-context" />
            <EditorSection
              title="Input Sources"
              destination="/editor/input-applicability-filters"
            />
            <EditorSection title="Input Filters" destination="/editor/additional-data" />
          </Box>
        </Box>
      </Grid>
    );
  }
}
