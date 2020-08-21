// libraries
import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Text from '../../components/primitives/Text';
import EditorSection from '../../components/patterns/EditorSection';
import Flex from '../../components/layout/Flex';
import Badge from '../../components/primitives/Badge';
import Addbutton from '../../components/patterns/Addbutton';
import InputOutputRow from '../../components/patterns/InputOutputRow';
import FormStandard from '../../components/patterns/FormStandard';
import FormStandardDropdown from '../../components/patterns/FormStandardDropdown';
import FormStandardLabel from '../../components/patterns/FormStandardLabel';
import FormSlider from '../../components/patterns/FormSlider';
import FormDropdown from '../../components/patterns/FormDropdown';
import FormDropdownDouble from '../../components/patterns/FormDropdownDouble';
import FormStandardDouble from '../../components/patterns/FormStandardDouble';
import InvolvedParty from '../../components/patterns/InvolvedParty';

import EditorLeft from './EditorLeft';

const fullheight = {
  minHeight: '80vh',
  minWidth: '50vw',
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
  top: '111px',
  paddingTop: '2em',
  paddingLeft: '2em',
  paddingRight: '2em',
  background: '#fff',
  zIndex: '1',
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
export default class EditorLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSentences: [1],
      outputSentences: [1],
      sampleInvolvedParties: [1],
      isOpen: 'false',
    };
  }

  render() {
    const { inputSentences, outputSentences, sampleInvolvedParties } = this.state;
    return (
      <div>
        <div style={saveButton}>
          {/* save and exit controlss */}

          <Flex>
            <Text color="publish">Publish</Text>
            <Box p={1} />
            <Text color="primary">Save and Exit</Text>
          </Flex>
        </div>
        <EditorLeft>
          {/* Input Output Table */}

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
                  <Flex justifyContent="flex-end">{/* the modal button will go here */}</Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Metadata Management */}

              <EditorSection title="MetaData Management" destination="/editor/rule-maker-entity" />

              <Box>
                <div>
                  <FormStandardDropdown
                    name="Rule Version"
                    description="hello world is asking the following things"
                    nameTwo="Xalgo Version"
                    descriptionTwo="hello world is asking the following things"
                    options={[
                      { value: 'last stable', label: 'Last Stable' },
                      { value: 'peace', label: 'Peace' },
                      { value: 'no justice', label: 'No Justice' },
                      { value: 'no peace', label: 'No Peace' },
                    ]}
                  />
                  <Box padding={1} />
                  <FormStandardDropdown
                    name="Rule URL"
                    description="hello world is asking the following things"
                    nameTwo="Rule Criticality"
                    descriptionTwo="hello world is asking the following things"
                    options={[
                      { value: 'experimental', label: 'Experimental' },
                      { value: 'peace', label: 'Peace' },
                      { value: 'no justice', label: 'No Justice' },
                      { value: 'no peace', label: 'No Peace' },
                    ]}
                  />
                  <Box padding={1} />
                  <FormStandardLabel
                    name="RuleMaker Entity Name"
                    description="hello world is asking the following things"
                    nameTwo="RuleMaker ID"
                    descriptionTwo="hello world is asking the following things"
                    value="Vqp4nv8eGprI"
                  />
                  <Box padding={1} />
                  <FormStandard
                    name="RuleMaker URL"
                    description="hello world is asking the following things"
                  />
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">{/* the modal button will go here */}</Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Managment, Authorship and Maintainence */}

              <EditorSection
                title="Managment, Authorship & Maintainence"
                destination="/editor/rule-maker-entity"
              />

              <Box>
                <div>
                  <FormStandardLabel
                    name="Rule Manager Name"
                    description="hello world is asking the following things"
                    nameTwo="Rule Manager ID"
                    descriptionTwo="hello world is asking the following things"
                    value="Vqp4nv8eGprI"
                  />
                  <Box padding={1} />
                  <FormStandard
                    name="Rule Manager Email"
                    description="hello world is asking the following things"
                  />
                  <Box padding={1} />
                  <FormStandardLabel
                    name="Rule Author Name"
                    description="hello world is asking the following things"
                    nameTwo="Rule Author ID"
                    descriptionTwo="hello world is asking the following things"
                    value="Vqp4nv8eGprI"
                  />
                  <Box padding={1} />
                  <FormStandard
                    name="Rule Author Email"
                    description="hello world is asking the following things"
                  />
                  <Box padding={1} />
                  <FormStandardLabel
                    name="Rule Maintainer Name"
                    description="hello world is asking the following things"
                    nameTwo="Rule Maintainer ID"
                    descriptionTwo="hello world is asking the following things"
                    value="Vqp4nv8eGprI"
                  />
                  <Box padding={1} />
                  <FormStandard
                    name="Rule Maintainer Email"
                    description="hello world is asking the following things"
                  />
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">
                    <Box />
                    {/* the modal button will go here */}
                  </Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Quantative wieghts */}

              <EditorSection title="Qualitative Weights" destination="/editor/output-weight" />

              <Box>
                <div>
                  <FormDropdown
                    name="Select the rule category that most applies."
                    description="hello world is asking the following things"
                    options={[
                      { value: 'justice', label: 'Justice' },
                      { value: 'peace', label: 'Peace' },
                      { value: 'no justice', label: 'No Justice' },
                      { value: 'no peace', label: 'No Peace' },
                    ]}
                  />
                  <Box padding={2} />
                  <FormSlider
                    name="Character of this Obligation"
                    description="lorem ipsum"
                    labela="Quality or Fairness"
                    labelb="Strongly Beneficial"
                    labelc="Absolutely Essential"
                  />
                  <Box padding={2} />
                  <FormSlider
                    name="Enforcement Measures in Place"
                    description="lorem ipsum"
                    labela="here Are No or Minor Penalties"
                    labelb="There Are Significant Penalties"
                    labelc="There Are Major Penalties"
                  />
                  <Box padding={2} />
                  <FormSlider
                    name="Consequences of Non-Conformance "
                    description="lorem ipsum"
                    labela="Inconsequential"
                    labelb="Moderate Effects"
                    labelc="Enormous Impacts"
                  />
                  <Box p={1} />
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">
                    <Box />
                    {/* the modal button will go here */}
                  </Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Input Contexts */}

              <EditorSection title="Input Contexts" destination="/editor/input-context" />

              <Box>
                <div>
                  <FormDropdownDouble
                    name="Country Jurisdiction"
                    description="hello world is asking the following things"
                    options={[
                      { value: 'justice', label: 'Justice' },
                      { value: 'peace', label: 'Peace' },
                      { value: 'no justice', label: 'No Justice' },
                      { value: 'no peace', label: 'No Peace' },
                    ]}
                    nameTwo="Sub-Country Jurisdiction"
                    descriptionTwo="hello world is asking the following things"
                    optionsTwo={[
                      { valueTwo: 'justice', labelTwo: 'Justice' },
                      { valueTwo: 'peace', labelTwo: 'Peace' },
                      { valueTwo: 'no justice', labelTwo: 'No Justice' },
                      { valueTwo: 'no peace', labelTwo: 'No Peace' },
                    ]}
                  />
                  <Box padding={1} />
                  <FormStandardDouble
                    name="Start Date and Time "
                    description="hello world is asking the following things"
                    nameTwo="End Date and Time"
                    descriptionTwo="hello world is asking the following things"
                  />
                  <Box padding={1} />
                  <FormDropdown
                    name="Time Zone"
                    description="hello world is asking the following things"
                    options={[
                      { value: 'justice', label: 'Justice' },
                      { value: 'peace', label: 'Peace' },
                      { value: 'no justice', label: 'No Justice' },
                      { value: 'no peace', label: 'No Peace' },
                    ]}
                  />
                  <Box padding={1} />
                  <FormDropdownDouble
                    name="Country Jurisdiction"
                    description="hello world is asking the following things"
                    options={[
                      { value: 'justice', label: 'Justice' },
                      { value: 'peace', label: 'Peace' },
                      { value: 'no justice', label: 'No Justice' },
                      { value: 'no peace', label: 'No Peace' },
                    ]}
                    nameTwo="Sub-Country Jurisdiction"
                    descriptionTwo="hello world is asking the following things"
                    optionsTwo={[
                      { valueTwo: 'justice', labelTwo: 'Justice' },
                      { valueTwo: 'peace', labelTwo: 'Peace' },
                      { valueTwo: 'no justice', labelTwo: 'No Justice' },
                      { valueTwo: 'no peace', labelTwo: 'No Peace' },
                    ]}
                  />
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">
                    <Box />
                    {/* the modal button will go here */}
                  </Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Input sources */}

              <EditorSection title="Input Sources" destination="/editor/additional-data" />

              <Box>
                <div>
                  <Box
                    p={2}
                    m={0}
                    width={1}
                    bg="bg"
                    border="1px solid"
                    borderColor="oline"
                    borderRadius="base"
                  >
                    <FormStandard
                      name="Field Name"
                      description="hello world is asking the following things"
                    />
                    <FormStandard
                      name="Target  Value"
                      description="hello world is asking the following things"
                    />
                    <Box padding={1} />
                    <Addbutton />
                    <Box padding={3} />
                    <FormStandardDropdown
                      name="Unique Identifier"
                      description="Text input description."
                      nameTwo="Standard Role Name"
                      descriptionTwo="Dropdown input description."
                      options={[
                        { value: 'justice', label: 'Justice' },
                        { value: 'peace', label: 'Peace' },
                        { value: 'no justice', label: 'No Justice' },
                        { value: 'no peace', label: 'No Peace' },
                      ]}
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
                    <Addbutton />
                  </Box>
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">
                    <Box />
                    {/* the modal button will go here */}
                  </Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Input filters */}

              <EditorSection
                title="Input Filters"
                destination="/editor/input-applicability-filters"
              />
              <Box>
                <div>
                  {sampleInvolvedParties.map((val, key) => (
                    <InvolvedParty key={key} />
                  ))}
                  <Box
                    p={2}
                    m={0}
                    width={1}
                    bg="bg"
                    border="1px solid"
                    borderColor="oline"
                    borderRadius="base"
                  >
                    <Addbutton
                      onClick={() => {
                        const parties = sampleInvolvedParties;
                        const last = parties[parties.length];
                        parties.push(last + 1);
                        this.setState({ sampleInvolvedParties: parties });
                      }}
                      content="Add Involved Party"
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
                    <Text variant="formtitle">Involved Product or Service</Text>
                    <Box padding={1} />
                    <FormStandardDouble
                      name="Standard Role Name"
                      description="Detail for standard role name field."
                      nameTwo="Standard Industry Code"
                      descriptionTwo="Detail for industry code field."
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
                    <Addbutton
                      onClick={() => {
                        const parties = sampleInvolvedParties;
                        const last = parties[parties.length];
                        parties.push(last + 1);
                        this.setState({ sampleInvolvedParties: parties });
                      }}
                      content="Add Involved Party"
                    />
                  </Box>
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">
                    <Box />
                    {/* the modal button will go here */}
                  </Flex>
                </div>
              </Box>
            </div>
          </Box>
        </EditorLeft>
      </div>
    );
  }
}
