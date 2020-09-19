import React from 'react';
import { toast } from 'react-toastify';
import {
  deepCopy,
  objectEmpty,
  generateNewRule,
  addNewCase,
  addNewInputCondition,
  addNewOutputAssertion,
  prettyJSON,
  // RuleSchema,
} from 'xalgo-rule-processor';
import EditorLeft from './editor-layouts/EditorLeft';
import ColumnLabel from '../components/patterns/ColumnLabel';
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
  FormStandardDouble,
  InvolvedParty,
  SentenceEditor,
  Icon,
  FormDropdownDouble,
} from '../components';

import TwoFieldModule from '../components/patterns/TwoFieldModule';

import RuleNameSection from './components/RuleNameSection';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const fullheight = {
  minHeight: '80vh',
  minWidth: '500px',
  maxWidth: '800px',
  // overflowX:
};

const overflowTable = {
  width: '100%',
  overflowX: 'scroll',
};

const ruleLeft = {
  borderLeft: '1px solid #E7E7E7',
  padding: '1em',
};

const ruleLeftalt = {
  borderLeft: '1px solid #E7E7E7',
  padding: '0.75em',
};

const halfWidth = {
  minWidth: '400px',
};

const bottomLine = {
  borderBottom: '1px solid #E7E7E7',
};

const rowWidth = {
  width: '60px',
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
const emptyRule = generateNewRule();

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
    this.addCase = this.addCase.bind(this);
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
    let newRuleContent = content;
    console.log(
      `Editor.jsx: Updating Rule Content:
      \nContent:\n${prettyJSON(newRuleContent)}`
    );

    if (newRuleContent.input_conditions.length === 0) {
      newRuleContent = addNewInputCondition(newRuleContent);
    }

    if (newRuleContent.output_assertions.length === 0) {
      newRuleContent = addNewOutputAssertion(newRuleContent);
    }
    // Perform checks on rule to ensure content is good.
    if (newRuleContent.input_conditions[0].cases[0].case === '') {
      console.log('Adding a case to the cases.');
      newRuleContent.input_conditions[0].cases[0].case = alphabet.charAt(0);
    }

    // Finally, save.
    this.setState({ active: false, rule: newRuleContent }, () => {
      console.log('Editor.jsx: Updated content from local storage.');
      this.setState({ active: true, modalOpen: false }, () => {
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

  addCase() {
    this.updateRule(addNewCase(this.state.rule));
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
              <Box p={4} bg="#fff">
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
                    width="620px"
                    bg="bg"
                    border="1px solid"
                    borderColor="oline"
                    borderRadius="base"
                  >
                    <SentenceEditor
                      rule={rule}
                      index={modalEditingIndex}
                      active={active}
                      modalEditingInput={modalEditingInput}
                      updateRule={this.updateRule}
                    />
                  </Box>
                </Flex>
              </div>
            </div>
          ) : null}

          <Box p={4}>
            <div style={fullheight}>
              {/* Rule Name */}

              <RuleNameSection rule={rule} updateRule={this.updateRule} active={active} />

              {/* Metadata Management */}
              <Box>
                <div>
                  <FormStandardDropdown
                    name="Rule Version"
                    description="Each rule author or maintainer is responsible for version management based on the 'Semver' industry convention."
                    placeholder="1.0.0"
                    nameTwo="Xalgo Version"
                    descriptionTwo="Which version of Interlibr and Xalgo is this rule expression designed to operate with?"
                    options={[{ value: 'last stable', label: 'Last Stable' }]}
                  />
                  <Box padding={1} />
                  <FormStandardDropdown
                    name="Rule URL"
                    description="Please supply a Web link directly to documentation about this rule."
                    placeholder="www.your.organization.org"
                    nameTwo="Rule Criticality"
                    descriptionTwo="Choose: experimental, in effect or archived"
                    options={[
                      { value: 'experimental', label: 'Experimental' },
                      { value: 'in effect', label: 'in effect' },
                      { value: 'archived', label: 'archived' },
                    ]}
                  />
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">{/* the modal button will go here */}</Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Managment, Authorship and Maintainence */}

              <Box>
                <div>
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

              {/* Input sources */}

              <Text variant="heading">Input: Sources</Text>
              <Box padding={1} />
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

              {/* Input Contexts */}

              <Text variant="heading">Input: Contexts</Text>

              <Box>
                <div>
                  <Box padding={1} />
                  <TwoFieldModule
                    title="Jurisdictions"
                    fielda="Country Jurisdiction"
                    descriptiona="Detail Lorem Ipsum"
                    fieldb="Sub-Country Jurisdiction"
                    descriptionb="Detail Lorem Ipsum"
                  />
                  <Box
                    p={2}
                    m={0}
                    width={1}
                    bg="bg"
                    border="1px solid"
                    borderColor="oline"
                    borderRadius="base"
                  >
                    <Addbutton onClick={() => { }} content="Add Jurisdiction" />
                  </Box>
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
                      { value: 'UTC−12:00', label: 'UTC−12:00' },
                      { value: 'UTC−11:00', label: 'UTC−11:00' },
                      { value: 'UTC−10:00', label: 'UTC−10:00' },
                      { value: 'UTC−09:30', label: 'UTC−09:30' },
                      { value: 'UTC−09:00', label: 'UTC−09:00' },
                      { value: 'UTC−08:00', label: 'UTC−08:00' },
                      { value: 'UTC−07:00', label: 'UTC−07:00' },
                      { value: 'UTC−06:00', label: 'UTC−06:00' },
                      { value: 'UTC−05:00', label: 'UTC−05:00' },
                      { value: 'UTC−04:00', label: 'UTC−04:00' },
                      { value: 'UTC−03:30', label: 'UTC−03:30' },
                      { value: 'UTC−03:00', label: 'UTC−03:00' },
                      { value: 'UTC−02:00', label: 'UTC−02:00' },
                      { value: 'UTC−01:00', label: 'UTC−01:00' },
                      { value: 'UTC±00:00', label: 'UTC±00:00' },
                      { value: 'UTC+01:00', label: 'UTC+01:00' },
                      { value: 'UTC+02:00', label: 'UTC+02:00' },
                      { value: 'UTC+03:00', label: 'UTC+03:00' },
                      { value: 'UTC+03:30', label: 'UTC+03:30' },
                      { value: 'UTC+04:00', label: 'UTC+04:00' },
                      { value: 'UTC+04:30', label: 'UTC+04:30' },
                      { value: 'UTC+05:00', label: 'UTC+05:00' },
                      { value: 'UTC+05:30', label: 'UTC+05:30' },
                      { value: 'UTC+05:45', label: 'UTC+05:45' },
                      { value: 'UTC+06:00', label: 'UTC+06:00' },
                      { value: 'UTC+06:30', label: 'UTC+06:30' },
                      { value: 'UTC+07:00', label: 'UTC+07:00' },
                      { value: 'UTC+08:00', label: 'UTC+08:00' },
                      { value: 'UTC+08:45', label: 'UTC+08:45' },
                      { value: 'UTC+09:00', label: 'UTC+09:00' },
                      { value: 'UTC+09:30', label: 'UTC+09:30' },
                      { value: 'UTC+10:00', label: 'UTC+10:00' },
                      { value: 'UTC+10:30', label: 'UTC+10:30' },
                      { value: 'UTC+11:00', label: 'UTC+11:00' },
                      { value: 'UTC+12:00', label: 'UTC+12:00' },
                      { value: 'UTC+12:45', label: 'UTC+12:45' },
                      { value: 'UTC+13:00', label: 'UTC+13:00' },
                      { value: 'UTC+14:00', label: 'UTC+14:00' },
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

              {/* Input filters */}

              <Text variant="heading">Input: Filters</Text>
              <Box padding={1} />
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
                  <TwoFieldModule
                    title="Involved Product or Service"
                    fielda="UNSPSC Product or Service Name"
                    descriptiona="Detail Lorem Ipsum"
                    fieldb="UNSPSC Product or Service Code"
                    descriptionb="Detail Lorem Ipsum"
                  />
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
              <Box padding={2} />

              {/* Input Output Table */}

              <Text variant="heading">Input Tables</Text>
              <Box>
                <div style={overflowTable}>
                  <div style={bottomLine}>
                    <Flex alignItems="center">
                      <div style={halfWidth}>
                        <Flex>
                          <Text variant="formtitle">When</Text>
                          <Box padding={1} />
                          <Text>Input Conditions</Text>
                        </Flex>
                      </div>
                      <Box>
                        <Flex>
                          {/* Input Conditions/Output Assertions Case Headings */}
                          {rule.input_conditions[0].cases.map((rowValue, i) => {
                            return (
                              <div style={ruleLeft} key={i}>
                                <Button
                                  variant="invisible"
                                  onClick={() => {
                                    toast('Unimplemented.');
                                  }}
                                >
                                  <ColumnLabel rowLabel={rowValue.case || '?'} />
                                </Button>
                              </div>
                            );
                          })}
                          <div style={ruleLeftalt} />
                        </Flex>
                      </Box>
                      <div style={rowWidth}>
                        <Button variant="invisible" onClick={this.addCase}>
                          <Icon
                            name="additional"
                            fill="#345FF9"
                            size={32}
                            viewbox_x={32}
                            viewbox_y={32}
                          />
                        </Button>
                      </div>
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
                    <div style={rowWidth} />
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

              {/* output purpose */}

              <Text variant="heading">Output Purpose</Text>
              <Box>
                <div>
                  <FormDropdownDouble
                    name="Who has responsibility for conformance?"
                    description="Who has responsibility for conformance?"
                    options={[
                      { value: 'rule-maker', label: 'rule-maker' },
                      { value: 'rule-taker', label: 'rule-taker' },
                      { value: 'third-party', label: 'third-party' },
                    ]}
                    nameTwo="What is the primary verb?"
                    descriptionTwo="What is the primary normative (deontic; modal) verb?"
                    optionsTwo={[
                      { valueTwo: 'must', labelTwo: 'must' },
                      { valueTwo: 'may', labelTwo: 'may' },
                      { valueTwo: 'should', labelTwo: 'should' },
                    ]}
                  />
                  <Box padding={1} />
                  <FormDropdownDouble
                    name="What is the nature of the primary verb"
                    description="Is the primary modal verb stated in the affirmative; negative or as a question?"
                    options={[
                      { value: 'affirmative', label: 'affirmative' },
                      { value: 'negative', label: 'negative' },
                      { value: 'interrogative', label: 'interrogative' },
                    ]}
                    nameTwo="What is the primary action verb?"
                    descriptionTwo="What is the primary action verb?"
                    optionsTwo={[
                      { valueTwo: 'be', labelTwo: 'be' },
                      { valueTwo: 'do', labelTwo: 'do' },
                      { valueTwo: 'have', labelTwo: 'have' },
                    ]}
                  />
                  <Box padding={1} />
                  <FormDropdownDouble
                    name="What is the type of philosophical rationale?"
                    description="What is the principal type of philosophical rationale for this rule?"
                    options={[
                      { value: 'logical', label: 'logical' },
                      { value: 'practical', label: 'practical' },
                      { value: 'ethical', label: 'ethical' },
                    ]}
                    nameTwo="What is the nature of this rule?"
                    descriptionTwo="Is this a directly implemented rule, a desription of a rule to be conformed with, or an empirical 
                    fact about a rule?"
                    optionsTwo={[
                      { valueTwo: 'imperative', labelTwo: 'imperative' },
                      { valueTwo: 'declarative', labelTwo: 'declarative' },
                      { valueTwo: 'empirical', labelTwo: 'empirical' },
                    ]}
                  />
                  <Box padding={1} />
                  <Flex justifyContent="flex-end">{/* the modal button will go here */}</Flex>
                </div>
              </Box>
              <Box padding={2} />

              {/* Quantative wieghts */}
              <Text variant="heading">Output: Qualitative Weights</Text>

              <Box>
                <div>
                  <FormDropdown
                    name="Select the rule group that most applies."
                    description="hello world is asking the following things"
                    options={[
                      {
                        value: 'Informal Custom or Preference',
                        label: 'Informal Custom or Preference',
                      },
                      {
                        value: 'Formal Custom Without Legal Standing',
                        label: 'Formal Custom Without Legal Standing',
                      },
                      {
                        value: 'Guideline, Instruction, or Policy',
                        label: 'Guideline, Instruction, or Policy',
                      },
                      { value: 'Code of Conduct', label: 'Code of Conduct' },
                      { value: 'Regulation or Directive', label: 'Regulation or Directive' },
                      { value: 'Common Law or Case Law', label: 'Common Law or Case Law' },
                      { value: 'Statute or Legislation', label: 'Statute or Legislation' },
                      { value: 'International Law', label: 'International Law' },
                      { value: 'Operational Patern', label: 'Operational Patern' },
                    ]}
                  />
                  <Box padding={2} />
                  <FormSlider
                    name="Character of this Obligation"
                    description="lorem ipsum"
                    labela="Basic Coherence"
                    labelb="Strongly Beneficial"
                    labelc="Absolutely Essential"
                  />
                  <Box padding={2} />
                  <FormSlider
                    name="Enforcement Measures in Place"
                    description="lorem ipsum"
                    labela="Minor Penalties"
                    labelb="Significant Penalties"
                    labelc="Major Penalties"
                  />
                  <Box padding={2} />
                  <FormSlider
                    name="Consequences of Non-Conformance "
                    description="lorem ipsum"
                    labela="Preference Only"
                    labelb="Significant Effects"
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
