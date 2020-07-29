// libraries
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { Router } from "@reach/router";

// layouts
import Navigation from "./Navigation";
import Landing from "./Landing";
import Browse from "./Browse";
import Editor from "./Editor";
import Login from "./Login";
import Query from "./Query";
import Dashboard from "./Dashboard";

// Primary Component
export default class Application extends React.Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Navigation />
            <Router>
              <Landing path="/" />
              <Browse path="/browse" />
              <Editor path="/editor" />
              <Login path="/login" />
              <Query path="/query" />
              <Dashboard path="/dashboard" />
            </Router>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
