// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import Icon from '../../components/icons/Icon';
import InputOutputRow from '../../components/patterns/InputOutputRow';
import Badge from '../../components/primitives/Badge';
import EditorLeft from './EditorLeft';

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
          <EditorLeft title={this.props.rule.metadata.ruleName} />
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
