import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  deepCopy,
  objectEmpty,
  RuleSchema,
  generateNewRule,
  addNewCase,
  addNewInputCondition,
  addNewOutputAssertion,
  prettyJSON,
} from 'xalgo-rule-processor';
import EditorLeft from './editor-layouts/EditorLeft';
import {
  Box,
  Text,
  Flex,
  Badge,
  Button,
  Addbutton,
  InputOutputRow,
  FormStandard,
  FormSlider,
  FormStandardDropdown,
  FormStandardLabel,
  FormDropdown,
  FormDropdownDouble,
  FormStandardDouble,
  InvolvedParty,
  SentenceEditor,
  // SentenceConstructor,
} from '../components';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const fullheight = {
  minHeight: '80vh',
  width: '50vw',
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

const fixpos = {
  position: 'sticky',
  top: '88px',
  width: '100%',
};

const modalhold = {
  position: 'sticky',
  height: '90vh',
  background: 'rgba(255, 255, 255, .8)',
  marginBottom: '-90vh',
};

// This empty rule is the schema without any __descriptions.
// Temporarily start with three cases.
const emptyRule = addNewOutputAssertion(
  addNewInputCondition(addNewInputCondition(addNewCase(addNewCase(generateNewRule()))))
);

/**
 * ================
 * The Editor Class
 * ================
 *
 * The Editor component is the parent of all editing views, and is the
 * master source of information regarding the state of the rule.
 */
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rule: deepCopy(emptyRule),
      sampleInvolvedParties: [1],
      active: false,
      modalOpen: false,
      modalEditingInput: false,
      modalEditingAssertions: false,
      modalEditingIndex: 0,
    };

    this.getRuleFromStorage = this.getRuleFromStorage.bind(this);
    this.updateRule = this.updateRule.bind(this);
    // reset delete persist
    this.resetRule = this.resetRule.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
    this.persistRuleToLocalStorage = this.persistRuleToLocalStorage.bind(this);

    // Sentence editing
    this.editSentence = this.editSentence.bind(this);
    this.editInputCondition = this.editInputCondition.bind(this);
    this.editOutputAssertion = this.editOutputAssertion.bind(this);
  }

  componentDidMount() {
    this.getRuleFromStorage();
  }

  /**
   * ==============================================
   * Class Functions, mostly for editing rule state
   * ==============================================
   */

  getRuleFromStorage() {
    console.log('Editor.jsx: Getting rule from storage...');

    const storedRule = localStorage.getItem('rulev2');
    const storedRuleContent = JSON.parse(storedRule);
    const storedRuleEmpty = objectEmpty(storedRuleContent);

    console.log(`Editor.jsx: Local stored rule is \n\n${storedRule}`);

    if (!this.state.rule.metadata.rule.title) {
      console.log('Editor.jsx: There is currently no rule stored in STATE.');
      if (!storedRuleEmpty && storedRuleContent.metadata.rule.title) {
        console.log('Editor.jsx: There is rule content in local storage, loading into State...');
        this.updateRule(storedRuleContent);
      }
    }
  }

  updateRule(content) {
    const newRuleContent = content;
    console.log(
      `Editor.jsx: Updating Rule Content:
      \nContent:\n${prettyJSON(newRuleContent)}`
    );
    // Perform checks on rule to ensure content is good.
    if (newRuleContent.input_conditions[0].cases[0].case === '') {
      console.log('Adding a case to the cases.');
      newRuleContent.input_conditions[0].cases[0].case = alphabet.charAt(0);
    }

    // Finally, save.
    this.setState({ active: false, rule: newRuleContent }, () => {
      console.log('Editor.jsx: Updated content from local storage.');
      this.setState({ active: true }, () => {
        this.persistRuleToLocalStorage();
      });
    });
  }

  resetRule() {
    toast.warning('Rule reset');
    this.updateRule(deepCopy(emptyRule));
    this.props.navigate('/editor');
  }

  deleteRule() {
    toast.warning('Rule Delete');
    this.updateRule(deepCopy(emptyRule));
    this.props.navigate('/dashboard');
    console.error("This is a toy editor, you're not deleting anything.");
  }

  persistRuleToLocalStorage() {
    console.log('Editor.jsx: Persisting rule to local storage...');
    localStorage.setItem('rulev2', prettyJSON(this.state.rule));
  }

  /**
   * ===========================
   * Functions for Editing Cases
   * ===========================
   */

  editInputCondition(key) {
    this.editSentence(key, true);
  }

  editOutputAssertion(key) {
    this.editSentence(key, false);
  }

  editSentence(key, inputConditions = false) {
    this.setState({
      modalOpen: true,
      modalEditingInput: inputConditions,
      modalEditingIndex: key,
    });
  }

  /**
   * ==================================
   * Rendering Method, end of functions
   * ==================================
   *
   * I've tried to move as many parts of this as possible into functional
   * components, which are included after this class. Those which could not
   * should be moved in the future.
   */

  render() {
    const {
      rule,
      sampleInvolvedParties,
      active,
      modalOpen,
      modalEditingIndex,
      modalEditingInput,
    } = this.state;

    // Set up editing modal.
    let sentence = {};
    if (modalEditingInput) {
      sentence = rule.input_conditions[modalEditingIndex];
    } else {
      sentence = rule.output_assertions[modalEditingIndex];
    }

    return (
      <div>
        <EditorLeft
          title={rule.metadata.rule.title}
          description={rule.metadata.rule.description}
          deleteFunction={this.deleteRule}
          resetFunction={this.resetRule}
        >
          {/* Modal used by input/output tables. */}
          {modalOpen ? (
            <div style={fixpos}>
              <Box p={4} width="100%" bg="#fff">
                <Flex justifyContent="space-between" alignItems="center">
                  <div>
                    <Box padding="0.2em" />
                    <Text variant="formtitle">{rule.metadata.rule.name}</Text>
                  </div>
                  <Flex>
                    <Text color="publish">Publish</Text>
                    <Box p={1} />
                    <Text color="primary">Save and Exit</Text>
                  </Flex>
                </Flex>
              </Box>
              <div style={modalhold}>
                <Flex alignItems="center" justifyContent="center">
                  <Box height="70vh" />
                  <Box
                    p={2}
                    m={0}
                    width="600px"
                    bg="bg"
                    border="1px solid"
                    borderColor="oline"
                    borderRadius="base"
                  >
                    {modalEditingInput ? (
                      <Text variant="heading">Modify Input Condition</Text>
                    ) : (
                      <Text variant="heading">Modify Output Assertion</Text>
                    )}
                    <Box padding={2} />
                    <SentenceEditor
                      participle={sentence.participle}
                      attribute={sentence.attribute}
                      subject={sentence.subject}
                      operation={sentence.operation}
                      value={sentence.value}
                      index={modalEditingIndex}
                      modalEditingInput={modalEditingInput}
                      updateRule={this.updateRule}
                    />
                    <Box padding={2} />
                    <Text>Raw JSON data:</Text>
                    <Box padding={1} />
                    {modalEditingInput ? (
                      <Text>{prettyJSON(rule.input_conditions[modalEditingIndex])}</Text>
                    ) : (
                      <Text>{prettyJSON(rule.output_assertions[modalEditingIndex])}</Text>
                    )}
                    <Box padding={2} />
                    <Button
                      onClick={() => {
                        this.setState((prevState) => {
                          const updatedRule = prevState.rule;
                          // Add extra stuff to updatedRule here.
                          return { rule: updatedRule, modalOpen: false };
                        });
                      }}
                    >
                      Save and Close
                    </Button>
                  </Box>
                </Flex>
              </div>
            </div>
          ) : null}

          <Box p={4}>
            <div style={fullheight}>
              {/* Rule Name */}

              <RuleNameSection rule={rule} updateRule={this.updateRule} active={active} />

              {/* Input Output Table */}

              <Text variant="heading">Input Tables</Text>
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
                          {/* Input Conditions/Output Assertions Case Headings */}
                          {rule.input_conditions[0].cases.map((rowValue, i) => {
                            return (
                              <div style={ruleLeft} key={i}>
                                <Badge variant="blank">{rowValue.case || '?'}</Badge>
                              </div>
                            );
                          })}
                          <div style={ruleLeft} />
                        </Flex>
                      </Box>
                    </Flex>
                  </div>

                  {/* Input Conditions Data */}
                  {rule.input_conditions.map((val, key) => (
                    <Box key={key}>
                      <InputOutputRow
                        rowData={val}
                        rule={rule}
                        updateRule={this.updateRule}
                        editRow={this.editInputCondition}
                        index={key}
                        inputCondition
                      />
                    </Box>
                  ))}

                  <Flex alignItems="center">
                    <div style={halfWidth}>
                      <Addbutton
                        onClick={() => {
                          /* This function must add a new Input Condition */
                          this.updateRule(addNewInputCondition(rule));
                        }}
                      />
                    </div>
                    <BlankRows rule={rule} />
                  </Flex>
                  <Flex alignItems="center">
                    <div style={halfWidth} />
                    <BlankRows rule={rule} />
                  </Flex>
                  <div style={bottomLine}>
                    <Flex alignItems="center">
                      <div style={halfWidth}>
                        <Flex>
                          <Text variant="formtitle">Then</Text>
                          <Box padding={1} />
                          <Text>Output Assertions</Text>
                        </Flex>
                      </div>
                      <BlankRows rule={rule} />
                    </Flex>
                  </div>
                  {rule.output_assertions.map((val, key) => (
                    <Box key={key}>
                      <InputOutputRow
                        rowData={val}
                        rule={rule}
                        updateRule={this.updateRule}
                        editRow={this.editOutputAssertion}
                        index={key}
                        inputCondition={false}
                      />
                    </Box>
                  ))}
                  <Flex alignItems="center">
                    <div style={halfWidth}>
                      <Addbutton
                        onClick={() => {
                          /* Must add a new output assertion. */
                          this.updateRule(addNewOutputAssertion(rule));
                        }}
                      />
                    </div>
                    <BlankRows rule={rule} />
                  </Flex>
                  <Box padding={1} />
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">{/* the modal button will go here */}</Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Metadata Management */}

              <Text variant="heading">Metadata Management</Text>

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

              <Text variant="heading">Managment, Authorship &amp; Maintainence</Text>

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
              <Text variant="heading">Qualitative Weights</Text>

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

              <Text variant="heading">Input Contexts</Text>

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

              <Text variant="heading">Input Sources</Text>

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

              <Text variant="heading">Input Filters</Text>

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

function BlankRows({ rule }) {
  return (
    <Box>
      <Flex>
        {rule.input_conditions[0].cases.map((rowValue, i) => (
          <div style={ruleLeft} key={i}>
            <Badge variant="invisible">X</Badge>
          </div>
        ))}
        <div style={ruleLeft} />
      </Flex>
    </Box>
  );
}

function RuleNameSection({ rule, updateRule, active }) {
  // 0. Fill out the section name.
  const sectionName = 'Rule Information';
  const [modified, setModified] = useState(false);

  // 1. Set a state for each element that must be filled.
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Don't touch this.
  if (active && !modified) {
    console.log(`${sectionName} section is being edited.`);

    // 2. Ensure each field is set according to the current rule state.
    if (title !== rule.metadata.rule.title) setTitle(rule.metadata.rule.title);
    if (desc !== rule.metadata.rule.description) setDesc(rule.metadata.rule.description);
  }

  // 3. Return a rendering of the component.
  return (
    <Box>
      <Box padding={2} />
      <Text variant="heading">{sectionName}</Text>
      <Box>
        <FormStandard
          name="Rule Title"
          description={RuleSchema.metadata.rule.__title}
          placeholder={RuleSchema.metadata.rule.title}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setModified(true);
          }}
        />
        <Box m={1} />
        <FormStandard
          name="Rule Description"
          description={RuleSchema.metadata.rule.__description}
          placeholder={RuleSchema.metadata.rule.description}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            setModified(true);
          }}
        />
        <Box padding={2} />

        {/* SAVE BUTTON */}
        {/* 4. In the save method, update the rule state. */}
        <Button
          disabled={!modified}
          onClick={() => {
            const ruleCopy = deepCopy(rule);

            // Modify all necessary fields in the rule.
            ruleCopy.metadata.rule.title = title;
            ruleCopy.metadata.rule.description = desc;

            // Call the updateRule function with the new content.
            updateRule(ruleCopy);

            // Cleanup and notifications.
            toast(`Saved ${sectionName}`);
            setModified(false);
          }}
        >
          {`Save ${sectionName}`}
        </Button>
        <Box padding={4} />
      </Box>
    </Box>
  );
}
