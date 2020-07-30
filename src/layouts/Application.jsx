// libraries
import { Router } from '@reach/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
// rm-components
import Box from '../components/layout/Box';
import theme from '../theme';
import Browse from './Browse';
import Dashboard from './Dashboard';
import Editor from './Editor';
import Landing from './Landing';
import Login from './Login';
// layouts
import Navigation from './Navigation';
import Query from './Query';

// Styling

const base_box_style = {
  height: '100%',
};

// Primary Component
export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
      userInfo: {
        name: 'John Doe',
      },
      solidUsername: '',
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
      <ThemeProvider theme={theme}>
        <Navigation authenticated={this.state.authenticated} />

        <Box bg="#F9FBFE" style={base_box_style}>
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
              path="/editor/*"
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
        </Box>
      </ThemeProvider>
    );
  }
}
