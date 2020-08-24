import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  deepCopy,
  objectEmpty,
  RuleSchema,
  enforceSchemaWithTables,
  prettyJSON,
} from 'xalgo-rule-processor';
import ScrollUp from './components/ScrollUp';
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
  // SentenceConstructor,
} from '../components';

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

const emptyRule = enforceSchemaWithTables(RuleSchema, {});

/**
 * The Editor component is the parent of all editing views, and is the
 * master source of information regarding the state of the rule.
 */
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rule: deepCopy(emptyRule),
      inputSentences: [1],
      outputSentences: [1],
      sampleInvolvedParties: [1],
      active: false,
      // isOpen: 'false',
    };

    this.getRuleFromStorage = this.getRuleFromStorage.bind(this);
    this.updateRule = this.updateRule.bind(this);
    // reset delete persist
    this.resetRule = this.resetRule.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
    this.persistRuleToLocalStorage = this.persistRuleToLocalStorage.bind(this);

    //Handlers
    this.handleRuleTitleChange = this.handleRuleTitleChange.bind(this);
    this.handleRuleDescriptionChange = this.handleRuleDescriptionChange.bind(this);
  }

  componentDidMount() {
    this.getRuleFromStorage();
    console.log(prettyJSON(this.state.rule));
  }

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
        this.setState({ rule: storedRuleContent, active: true });
      }
    }
  }

  /**
   * Allows child components to update the rule, or a specific rule section.
   *
   * @param {Object} newRuleContent new content to be placed in the rule
   * @param {String} section top-level section to replace
   * @param {String} subsection second-level section to replace
   */
  updateRule(newRuleContent, section = null, subsection = null) {
    console.log(
      `Editor.jsx: Updating Rule Content:
      \nPath: ${section || ''}${subsection ? '/' : ''}${subsection || ''}
      
      ${JSON.stringify(newRuleContent, null, 2)}`
    );
    // If a subsection is defined, the section must also be defined.
    if (subsection && !section) {
      throw new Error('Must include a section if a subsection is defined.');
    } else if (section && !subsection) {
      this.setState((prevState) => {
        const updatedRule = prevState.rule;
        updatedRule[section] = newRuleContent;
        return { rule: updatedRule };
      }, this.persistRuleToLocalStorage);
    } else if (section && subsection) {
      this.setState((prevState) => {
        const updatedRule = prevState.rule;
        updatedRule[section][subsection] = newRuleContent;
        return { rule: updatedRule };
      }, this.persistRuleToLocalStorage);
    } else {
      this.setState({ rule: newRuleContent, active: true }, this.persistRuleToLocalStorage);
    }
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
    console.error('IMPLEMENT ME: deleteRule() in Editor.jsx');
  }

  persistRuleToLocalStorage() {
    console.log('Editor.jsx: Persisting rule to local storage...');
    localStorage.setItem('rulev2', prettyJSON(this.state.rule));
  }

  /**
   * =====================================================================
   * Field Input Handlers (Lots of these. Not sure how better to do this.)
   * =====================================================================
   */

  handleRuleTitleChange(event) {
    const newVal = event.target.value;
    this.setState((prevState) => {
      const ruleMod = { ...prevState.rule };
      ruleMod.metadata.rule.title = newVal || '';
      return { rule: ruleMod };
    });
  }

  handleRuleDescriptionChange(event) {
    const newVal = event.target.value;
    this.setState((prevState) => {
      const ruleMod = { ...prevState.rule };
      ruleMod.metadata.rule.description = newVal || '';
      return { rule: ruleMod };
    });
  }

  /**
   * ==================================
   * Rendering Method, end of functions
   * ==================================
   */

  render() {
    const { rule, inputSentences, outputSentences, sampleInvolvedParties, active } = this.state;

    return (
      <ScrollUp>
        <div>
          <EditorLeft
            title={rule.metadata.rule.title}
            description={rule.metadata.rule.description}
            deleteFunction={this.deleteRule}
            resetFunction={this.resetRule}
          >
            {/*
          <div style={fixpos}>
            <Box p={4} width="100%" bg="#fff">
              <Flex justifyContent="space-between" alignItems="center">
                <div>
                  <Box padding="0.2em" />
                  <Text variant="formtitle">{this.props.rule.metadata.ruleName}</Text>
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
                  <SentenceConstructor
                    content={{
                      a: 'Param A',
                      b: 'Param B',
                      c: 'Param C',
                      d: '>',
                      e: 'formula E',
                    }}
                    updateContent={(n) => {
                      console.log(n);
                    }}
                  />
                </Box>
              </Flex>
            </div>
          </div> 
          
          */}

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
                            {rowValues.map((rowValue, i) => (
                              <div style={ruleLeft} key={i}>
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
                          {blankValues.map((blankValue, i) => (
                            <div style={ruleLeft} key={i}>
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
                          {blankValues.map((blankValue, i) => (
                            <div style={ruleLeft} key={i}>
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
                            {blankValues.map((blankValue, i) => (
                              <div style={ruleLeft} key={i}>
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
                          {blankValues.map((blankValue, i) => (
                            <div style={ruleLeft} key={i}>
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
      </ScrollUp>
    );
  }
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
