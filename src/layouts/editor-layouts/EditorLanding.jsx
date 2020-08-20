// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Text from '../../components/primitives/Text';
import EditorSection from '../../components/patterns/EditorSection';
import Flex from '../../components/layout/Flex';
import Badge from '../../components/primitives/Badge';
import Addbutton from '../../components/patterns/Addbutton';
import InputOutputRow from '../../components/patterns/InputOutputRow';

import EditorLeft from './EditorLeft';

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

const saveButton = {
  position: 'fixed',
  right: '0',
  top: '110px',
  padding: '2em',
}

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

const holdTop = {
  position: 'sticky',
  top: '110px',
};

// Primary Component
export default class EditorLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSentences: [1],
      outputSentences: [1],
      isOpen: 'false',
    };
  }

  render() {
    const { inputSentences, outputSentences } = this.state;
    return (
      <div>
        <div style={saveButton}>
          <Flex>
            <Text color="publish">Publish</Text>
            <Box p={1}/>
            <Text color="primary">Save and Exit</Text>
          </Flex>
        </div>
        <EditorLeft>
          <Box p={4}>
            <div style={fullheight}>
              <EditorSection title="Input→Output Table" />
              <Box>
                <div>
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
                      <InputOutputRow rowValues={rowValues} />
                    </Box>
                  ))}
                  <Flex alignItems="center">
                    <div style={halfWidth}>
                      <Addbutton
                        onClick={() => {
                          const parties = inputSentences;
                          const last = parties[parties.length];
                          parties.push(last + 1);
                          this.setState({ inputSentences: parties });
                        }}
                      />
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
                      <InputOutputRow rowValues={rowValues} />
                    </Box>
                  ))}
                  <Flex alignItems="center">
                    <div style={halfWidth}>
                      <Addbutton
                        onClick={() => {
                          const parties = outputSentences;
                          const last = parties[parties.length];
                          parties.push(last + 1);
                          this.setState({ outputSentences: parties });
                        }}
                      />
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
                    <text>modal</text>
                  </Flex>
                </div>
              </Box>
              <Box padding={2} />
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
        </EditorLeft> 
      </div>
    );
  }
}
