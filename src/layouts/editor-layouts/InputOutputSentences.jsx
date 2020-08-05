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
import Icon from '../../components/icons/Icon';
import Input from '../../components/primitives/Input';
import Dropdown from '../../components/primitives/Dropdown';
import Rule from '../../components/primitives/Rule';
import InputField from '../../components/patterns/InputField';
import Infobox from '../../components/patterns/Infobox';
import ITrash from '../../components/icons/ITrash';
import SentenceConstructor from '../../components/patterns/SentenceConstructor';

// style

const fillBox = {
  borderBottom: '1px solid #696969',
  minWidth: 80,
  marginLeft: 3,
  marginRight: 3,
};

const smallFillBox = {
  borderBottom: '1px solid #696969',
  minWidth: 20,
  marginLeft: 3,
  marginRight: 3,
};

// Primary Component
export default class InputOutputSentences extends React.Component {
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
            <SentenceConstructor />
            <Box padding={1} />
            <Addbutton />
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
