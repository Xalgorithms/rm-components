// libraries
import React from 'react';
import { Router } from '@reach/router';

// pages
import EditorLanding from './editor-layouts/EditorLanding';
import InputOutput from './editor-layouts/InputOutput';
import InputApplicabilityFilters from './editor-layouts/InputApplicabilityFilters';
import RuleMakerEntity from './editor-layouts/RuleMakerEntity';
import RuleManager from './editor-layouts/RuleManager';
import ScrollUp from './components/ScrollUp';

// rm-components

// Primary Component
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRule: {},
    };
  }

  render() {
    const { currentRule } = this.state;
    return (
      <ScrollUp>
        <Router primary={false}>
          <EditorLanding path="/" rule={currentRule} />
          <InputOutput path="/input-output" rule={currentRule} />
          <InputApplicabilityFilters path="/input-applicability-filters" rule={currentRule} />
          <RuleMakerEntity path="/rule-maker-entity" rule={currentRule} />
          <RuleManager path="rule-manager" rule={currentRule} />
        </Router>
      </ScrollUp>
    );
  }
}
