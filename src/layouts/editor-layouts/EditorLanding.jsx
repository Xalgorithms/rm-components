// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Text from '../../components/primitives/Text';
import EditorSection from '../../components/patterns/EditorSection';

import EditorLeft from './EditorLeft';

const fullheight = {
  minHeight: '80vh',
};

// Primary Component
export default class EditorLanding extends React.Component {
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
          {/*
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
          </Button> */}
        </Box>
        <Box p={4}>
          <div style={fullheight}>
            <Text variant="formtitle">Input→Output Table</Text>
            <EditorSection
              title="Input→Output Table"
              destination="/editor/input-output-sentences"
            />
            <Box padding={2} />
            <Text variant="formtitle">Context</Text>
            <EditorSection title="MetaData Management" destination="/editor/rule-maker-entity" />
            <EditorSection title="Qualitative Weights" destination="/editor/output-weight" />
            <EditorSection title="Input Contexts" destination="/editor/input-context" />
            <EditorSection title="Input Sources" destination="/editor/additional-data" />
            <EditorSection
              title="Input Filters"
              destination="/editor/input-applicability-filters"
            />
          </div>
        </Box>
      </Grid>
    );
  }
}
