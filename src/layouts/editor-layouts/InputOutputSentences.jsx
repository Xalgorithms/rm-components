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
import FormStandard from '../../components/patterns/FormStandard';
import Addbutton from '../../components/patterns/Addbutton';
import FormStandardDropdown from '../../components/patterns/FormStandardDropdown';
import Flex from '../../components/layout/Flex';
import Icon from '../../components/icons/Icon';
import Input from '../../components/primitives/Input';
import Dropdown from '../../components/primitives/Dropdown';
import Rule from '../../components/primitives/Rule';

// style
const textareaStyle = {
  width: '100%',
  resize: 'none',
  outline: 'none',
  border: 'none',
  height: '80px',
  fontFamily: 'Public Sans, sans-serif',
  fontSize: '1rem',
  color: '#696969',
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
            <Text variant="formtitle">Inputs</Text>
            <Box padding={1} />
            <Box>
              <Flex justifyContent="space-between">
                <Text>A</Text>
                <Button variant="invisible">
                  <Icon name="trash" />
                </Button>
              </Flex>
              <Box padding={1} />
              <Text>Inputs</Text>
              <Box padding={1} />
              <Flex alignItems="center">
                <Text>The</Text>
                <Box padding={1} />
                <Box>
                  <Input />
                </Box>
                <Box padding={1} />
                <Box>
                  <Input />
                </Box>
              </Flex>
              <Box padding={1} />
              <Flex alignItems="center">
                <Text>Of the</Text>
                <Box padding={1} />
                <Box>
                  <Input />
                </Box>
                <Box padding={1} />
                <Box>
                  <Dropdown>
                    <option>≥</option>
                    <option>=</option>
                  </Dropdown>
                </Box>
              </Flex>
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
                <textarea style={textareaStyle} >
                    Adjective, Arithmetic expression, or Boolean Number
                </textarea>
                <Rule/>
                <Flex alignItems="center">
                    <Text color="primary">
                        Sum        
                    </Text>
                    <Box padding={1} />
                    <Text color="primary">
                        Filter        
                    </Text>
                    <Box padding={1} />
                    <Text color="primary">
                        Source      
                    </Text>
                </Flex>
              </Box>
            </Box>
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
            <Addbutton />
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
