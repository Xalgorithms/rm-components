// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
//import SentenceConstructor from '../../components/patterns/SentenceConstructor';
import EditorLeft from './EditorLeft';
import { Box, Grid, Text, Input, Flex, Button, Addbutton } from '../../components';

// style
const fullheight = {
  minHeight: '80vh',
};

// Primary Component
export default class InputOutputSentences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSentences: [1],
      verb: '',
    };
    this.handleVerbChange = this.handleVerbChange.bind(this);
  }

  handleVerbChange(event) {
    this.setState({ verb: event.target.value });
    if (this.state.verb) {
      const meta = this.props.rule.metadata;
      this.props.updateRule(meta, 'metadata');
    }
  }

  render() {
    const { inputSentences } = this.state;
    //const { currentRule } = this.state;
    return (
      <Grid gridTemplateColumns="25% 75%">
        <Box p={4} bg="draftb">
          <EditorLeft title={this.props.rule.metadata.ruleName} />
        </Box>
        <Box p={4}>
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
              <Text variant="formtitle">Inputs</Text>
              <Box padding={1} />
              <Text>{this.props.rule.metadata.ruleVerb}</Text>
              <Input onChange={this.handleVerbChange} />
              {inputSentences.map((val, key) => (
                <Box key={key}>
                  {/*<SentenceConstructor />*/}
                  <Box padding={1} />
                </Box>
              ))}
              <Box padding={1} />
              <Addbutton
                onClick={() => {
                  const parties = inputSentences;
                  const last = parties[parties.length];
                  parties.push(last + 1);
                  this.setState({ inputSentences: parties });
                }}
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
              <Text variant="formtitle">Outputs</Text>
              <Box padding={1} />
              {/*<SentenceConstructor />*/}
              <Box padding={1} />
              <Addbutton />
            </Box>
            <Box padding={1} />
            <Flex justifyContent="flex-end">
              <Box />
              <Link to="/editor/input-output">
                <Button>Done</Button>
              </Link>
            </Flex>
          </div>
        </Box>
      </Grid>
    );
  }
}
