// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import InputOutputRow from '../../components/patterns/InputOutputRow';
import Badge from '../../components/primitives/Badge';
import EditorLeft from './EditorLeft';
import Addbutton from '../../components/patterns/Addbutton';

const fullheight = {
  minHeight: '80vh',
};

const ruleLeft = {
  borderLeft: '1px solid #E7E7E7',
  padding: '1em',
};

const halfWidth = {
  width: '50%',
};

const bottomLine = {
  borderBottom: '1px solid #E7E7E7',
};

const rowValues = [
  { logic: 'A', type: 'blank' },
  { logic: 'B', type: 'blank' },
  { logic: 'C', type: 'blank' },
];

const blankValues = [
  { logic: 'A', type: 'invisible' },
  { logic: 'B', type: 'invisible' },
  { logic: 'C', type: 'invisible' },
];

// Primary Component
export default class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSentences: [1],
      outputSentences: [1],
    };
  }

  render() {
    const { inputSentences, outputSentences } = this.state;
    return (
      <div>
        <Grid gridTemplateColumns="400px auto">
          <Box p={4} borderRight="1px solid #E7E7E7">
            <EditorLeft title={this.props.rule.metadata.ruleName} />
          </Box>
          <Box p={4}>
            <div style={fullheight}>
              <div style={bottomLine}>
                <Flex alignItems="center">
                  <div style={halfWidth}>
                    <Flex>
                      <Text variant="formtitle">When</Text>
                      <Box padding={1} />
                      <Text>Input Contditions</Text>
                    </Flex>
                  </div>
                  <Box>
                    <Flex>
                      {rowValues.map((rowValue) => (
                        <div style={ruleLeft}>
                          <Badge variant={rowValue.type} key={rowValue.logic}>
                            {rowValue.logic}
                          </Badge>
                        </div>
                      ))}
                      <div style={ruleLeft} />
                    </Flex>
                  </Box>
                </Flex>
              </div>
              {inputSentences.map((val, key) => (
                  <Box key={key}>
                    <InputOutputRow rowValues={rowValues}/>
                  </Box>
                ))}
              <Flex alignItems="center">
                <div style={halfWidth}>
                  <Addbutton onClick={() => {
                    const parties = inputSentences;
                    const last = parties[parties.length];
                    parties.push(last + 1);
                    this.setState({ inputSentences: parties });
                  }}/>
                </div>
                <Box>
                  <Flex>
                    {blankValues.map((blankValue) => (
                      <div style={ruleLeft}>
                        <Badge variant={blankValue.type} key={blankValue.logic}>
                          {blankValue.logic}
                        </Badge>
                      </div>
                    ))}
                    <div style={ruleLeft} />
                  </Flex>
                </Box>
              </Flex>
              <Flex alignItems="center">
                <div style={halfWidth} />
                <Box>
                  <Flex>
                    {blankValues.map((blankValue) => (
                      <div style={ruleLeft}>
                        <Badge variant={blankValue.type} key={blankValue.logic}>
                          {blankValue.logic}
                        </Badge>
                      </div>
                    ))}
                    <div style={ruleLeft} />
                  </Flex>
                </Box>
              </Flex>
              <div style={bottomLine}>
                <Flex alignItems="center">
                  <div style={halfWidth}>
                    <Flex>
                      <Text variant="formtitle">Then</Text>
                      <Box padding={1} />
                      <Text>Output Contditions</Text>
                    </Flex>
                  </div>
                  <Box>
                    <Flex>
                      {blankValues.map((blankValue) => (
                        <div style={ruleLeft}>
                          <Badge variant={blankValue.type} key={blankValue.logic}>
                            {blankValue.logic}
                          </Badge>
                        </div>
                      ))}
                      <div style={ruleLeft} />
                    </Flex>
                  </Box>
                </Flex>
              </div>
              {outputSentences.map((val, key) => (
                  <Box key={key}>
                    <InputOutputRow rowValues={rowValues}/>
                  </Box>
                ))}
              <Flex alignItems="center">
                <div style={halfWidth}>
                  <Addbutton onClick={() => {
                    const parties = outputSentences;
                    const last = parties[parties.length];
                    parties.push(last + 1);
                    this.setState({ outputSentences: parties });
                  }}/>
                </div>
                <Box>
                  <Flex>
                    {blankValues.map((blankValue) => (
                      <div style={ruleLeft}>
                        <Badge variant={blankValue.type} key={blankValue.logic}>
                          {blankValue.logic}
                        </Badge>
                      </div>
                    ))}
                    <div style={ruleLeft} />
                  </Flex>
                </Box>
              </Flex>
              <Box padding={1} />
              <Box padding={1} />
              <Flex justifyContent="flex-end">
                <Box />
                <Link to="/editor/editor-landing">
                  <Button>Done</Button>
                </Link>
              </Flex>
            </div>
          </Box>
        </Grid>
      </div>
    );
  }
}
