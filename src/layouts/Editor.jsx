// libraries
import React from "react";
import { Router } from "@reach/router";

// pages
import EditorLanding from "./editor-layouts/EditorLanding";
import InputOutput from "./editor-layouts/InputOutput";

// rm-components

// Primary Component
export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <EditorLanding path="/" />
          <InputOutput path="/input-output" />
        </Router>
      </div>
    );
  }
}
