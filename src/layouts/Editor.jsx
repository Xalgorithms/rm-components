// libraries
import React from "react";
import { Router } from "@reach/router";

// pages
import EditorLanding from "./editor-layouts/EditorLanding"

// rm-components

// Primary Component
export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <EditorLanding path="/" />
        </Router>
      </div>
    );
  }
}
