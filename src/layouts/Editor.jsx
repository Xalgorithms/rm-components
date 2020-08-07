// libraries
import React from 'react';
import { Router } from '@reach/router';
import { toast } from 'react-toastify';

// pages
import EditorLanding from './editor-layouts/EditorLanding';
import InputOutput from './editor-layouts/InputOutput';
import InputApplicabilityFilters from './editor-layouts/InputApplicabilityFilters';
import RuleMakerEntity from './editor-layouts/RuleMakerEntity';
import RuleManager from './editor-layouts/RuleManager';
import OutputWeight from './editor-layouts/OutputWeight';
import InputContext from './editor-layouts/InputContext';
import AdditionalData from './editor-layouts/AdditionalData';
import InputOutputSentences from './editor-layouts/InputOutputSentences';
import ScrollUp from './components/ScrollUp';
import RuleName from './editor-layouts/RuleName';

// rm-components

const emptyRule = {
  metadata: {
    ruleName: '',
    ruleDescription: '',
  },
};

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function objectEmpty(obj) {
  const type = typeof obj;
  if (!obj) return true; // If null, return true;
  if (type !== 'object') return true; // If not an object, it's 'empty'.
  return Object.keys(obj).length === 0;
}

/**
 * The Editor component is the parent of all editing views, and is the
 * master source of information regarding the state of the rule.
 */
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: true,
      rule: deepCopy(emptyRule),
    };

    this.updateRule = this.updateRule.bind(this);
    this.resetRule = this.resetRule.bind(this);
    this.getRuleFromStorage = this.getRuleFromStorage.bind(this);
  }

  componentDidMount() {
    this.getRuleFromStorage();
  }

  getRuleFromStorage() {
    console.log('Editor.jsx: Getting rule from storage...');

    const storedRule = localStorage.getItem('rule');
    const storedRuleContent = JSON.parse(storedRule);
    const storedRuleEmpty = objectEmpty(storedRuleContent);

    console.log(`Editor.jsx: Local stored rule is \n\n${storedRule}`);

    if (!this.state.rule.metadata.ruleName) {
      console.log('Editor.jsx: There is currently no rule stored in STATE.');
      if (!storedRuleEmpty && storedRuleContent.metadata.ruleName) {
        console.log('Editor.jsx: There is rule content in local storage, loading into State...');
        this.setState({ rule: storedRuleContent }, () => {
          console.log('Editor.jsx: Navigating to the editor landing...');
          this.props.navigate('/editor/editor-landing');
        });
      } else {
        console.log('Editor.jsx: There is no rule content in local storage, starting a new rule.');
        this.props.navigate('/editor');
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
      this.setState({ rule: newRuleContent }, this.persistRuleToLocalStorage);
    }
  }

  resetRule() {
    toast.warning('Rule reset');
    this.updateRule(deepCopy(emptyRule));
    this.props.navigate('/editor');
  }

  persistRuleToLocalStorage() {
    console.log('Editor.jsx: Persisting rule to local storage...');
    localStorage.setItem('rule', JSON.stringify(this.state.rule, null, 2));
  }

  render() {
    const { rule } = this.state;

    return (
      <ScrollUp>
        <Router primary={false}>
          {/* Redirect to the editor page if the rule is partially complete. */}
          <RuleName path="/" rule={rule} updateRule={this.updateRule} />
          <EditorLanding
            path="/editor-landing"
            rule={rule}
            resetRule={this.resetRule}
            updateRule={this.updateRule}
          />
          <InputOutput path="/input-output" rule={rule} updateRule={this.updateRule} />
          <InputApplicabilityFilters
            path="/input-applicability-filters"
            rule={rule}
            updateRule={this.updateRule}
          />
          <RuleMakerEntity path="/rule-maker-entity" rule={rule} updateRule={this.updateRule} />
          <RuleManager path="rule-manager" rule={rule} updateRule={this.updateRule} />
          <OutputWeight path="output-weight" rule={rule} updateRule={this.updateRule} />
          <InputContext path="input-context" rule={rule} updateRule={this.updateRule} />
          <AdditionalData path="additional-data" rule={rule} updateRule={this.updateRule} />
          <InputOutputSentences
            path="input-output-sentences"
            rule={rule}
            updateRule={this.updateRule}
          />
        </Router>
      </ScrollUp>
    );
  }
}
