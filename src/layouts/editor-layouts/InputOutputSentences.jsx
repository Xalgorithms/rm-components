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
import Addbutton from '../../components/patterns/Addbutton';
import Flex from '../../components/layout/Flex';
import SentenceConstructor from '../../components/patterns/SentenceConstructor';

// style

// Primary Component
export default class InputOutputSentences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSentences: [1],
    };

    // Bind functions
    // this.toggleLoggedin = this.toggleLoggedin.bind(this);
  }

  render() {
    const { inputSentences } = this.state;
    //const { currentRule } = this.state;
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <EditorControl title="Rule Name" />
          <Box p={2} />
          <SectionDescription>
            <Text variant="subtitledesc" color="purplea">
              Input Output Sentences
            </Text>
            <Text color="purplea">
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
            <Text variant="formtitle">Inputs</Text>
            <Box padding={1} />
            {inputSentences.map((val, key) => (
              <Box key={key}>
                <SentenceConstructor />
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
            <SentenceConstructor />
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
        </Box>
      </Grid>
    );
  }
}
