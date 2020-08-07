// libraries
import React from 'react';
import { Router, Redirect } from '@reach/router';
import { prettifyJSON } from 'xalgo-rule-processor';

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

/**
 * The Editor component is the parent of all editing views, and is the
 * master source of information regarding the state of the rule.
 */
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: true,
      rule: {
        metadata: {
          ruleName: 'Quebec Gas Tax',
          ruleDescription: 'Yada yada yada',
        },
      },
    };

    this.updateRule = this.updateRule.bind(this);
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
      `Updating Rule Content:
      \nPath: ${section} ${subsection}\n\n${JSON.stringify(newRuleContent, null, 2)}`
    );
    // If a subsection is defined, the section must also be defined.
    if (subsection && !section) {
      throw new Error('Must include a section if a subsection is defined.');
    } else if (section && !subsection) {
      this.setState((prevState) => {
        const updatedRule = prevState.rule;
        updatedRule[section] = newRuleContent;
        return { rule: updatedRule };
      });
    } else if (section && subsection) {
      this.setState((prevState) => {
        const updatedRule = prevState.rule;
        updatedRule[section][subsection] = newRuleContent;
        return { rule: updatedRule };
      });
    } else {
      this.setState({ rule: newRuleContent });
    }
  }

  render() {
    const { rule } = this.state;

    return (
      <ScrollUp>
        <Router primary={false}>
          {/* Redirect to the editor page if the rule is partially complete. */}
          {this.state.blank ? (
            <RuleName path="/" rule={rule} updateRule={this.updateRule} />
          ) : (
            <Redirect from="/" to="/editor/editor-landing" />
          )}
          <EditorLanding path="/editor-landing" rule={rule} updateRule={this.updateRule} />
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
