// libraries
import React from 'react';
import { Router } from '@reach/router';

// pages
import EditorLanding from './editor-layouts/EditorLanding';
import InputOutput from './editor-layouts/InputOutput';
import InputApplicabilityFilters from './editor-layouts/InputApplicabilityFilters';

// rm-components

// Primary Component
export default class Editor extends React.Component {
  render() {
    return (
      <Router primary={false}>
        <EditorLanding path="/" />
        <InputOutput path="/input-output" />
        <InputApplicabilityFilters path="/input-applicability-filters" />
      </Router>
    );
  }
}
