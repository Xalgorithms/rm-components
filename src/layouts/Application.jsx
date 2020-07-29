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
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      userInfo: {
        name: "John Doe",
      },
      solidUsername: "",
      userRules: {},
    };

    // Bind functions
    this.toggleLoggedin = this.toggleLoggedin.bind(this);
  }

  toggleLoggedin() {
    this.setState({ authenticated: !this.state.authenticated });
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Navigation authenticated={this.state.authenticated} />
            <Router>
              <Landing
                path="/"
                authenticated={this.state.authenticated}
                toggleAuth={this.toggleLoggedin}
              />
              <Browse
                path="/browse"
                authenticated={this.state.authenticated}
                toggleAuth={this.toggleLoggedin}
              />
              <Editor
                path="/editor"
                authenticated={this.state.authenticated}
                toggleAuth={this.toggleLoggedin}
              />
              <Login
                path="/login"
                authenticated={this.state.authenticated}
                toggleAuth={this.toggleLoggedin}
              />
              <Query
                path="/query"
                authenticated={this.state.authenticated}
                toggleAuth={this.toggleLoggedin}
              />
              <Dashboard
                path="/dashboard"
                authenticated={this.state.authenticated}
                toggleAuth={this.toggleLoggedin}
              />
            </Router>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
