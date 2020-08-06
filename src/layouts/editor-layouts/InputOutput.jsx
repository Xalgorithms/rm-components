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
import Flex from '../../components/layout/Flex';
import Icon from '../../components/icons/Icon';
import InputOutputRow from '../../components/patterns/InputOutputRow';
import Badge from '../../components/primitives/Badge';

const rowValue = 4;

// Primary Component
export default class InputOutput extends React.Component {

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
            <Text variant="subtitledesc" color="purplea">
              Input Output Table
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
            <Flex justifyContent="space-between">
              <Text variant="formtitle">Input Output Table</Text>
              <Button variant="invisible">
                <Flex alignItems="center">
                  <Text>Expand Table</Text>
                  <Box padding={1} />
                  <Icon name="expand" />
                </Flex>
              </Button>
            </Flex>
            <Box padding={1} />
            <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%">
              <Flex>
                <Text variant="formtitle">When</Text>
                <Box padding={1} />
                <Text>Input Contditions</Text>
              </Flex>
              <Box>
                <Badge variant="blank">A</Badge>
              </Box>
            </Grid>
            <InputOutputRow />
            <Box padding={1} />
            <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%">
              <Flex>
                <Text variant="formtitle">Then</Text>
                <Box padding={1} />
                <Text>Output Contditions</Text>
              </Flex>
              <Box>
                <Badge variant="blank">A</Badge>
              </Box>
            </Grid>
            <InputOutputRow />
            <Box padding={1} />
          </Box>
          <Box padding={1} />
          <Flex justifyContent="flex-end">
            <Box />
            <Link to="/editor/editor-landing">
              <Button>Done</Button>
            </Link>
          </Flex>
        </Box>
      </Grid>
    );
  }
}
