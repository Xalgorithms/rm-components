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

// other components
import ScrollUp from './components/ScrollUp';

// layouts
import Navigation from './components/Navigation';
import Query from './Query';

// Styling

const baseBoxStyle = {
  height: '100%',
};

// Primary Component
export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
      userInfo: {
        name: 'Aaron Anon',
        solidUsername: 'https://anon.solid.community/profile/card#me',
      },
      userRules: [
        {
          name: 'Quebec Gas Station Tax',
          path: 'anon.gas-tax',
        },
        {
          name: 'Singapore Property Tax',
          path: 'anon.property-tax-sg',
        },
      ],
    };

    // Bind functions
    this.toggleLoggedin = this.toggleLoggedin.bind(this);
  }

  toggleLoggedin() {
    const { authenticated } = this.state;
    this.setState({ authenticated: !authenticated });
  }

  render() {
    const { authenticated, userRules, userInfo } = this.state;
    return (
      <ScrollUp>
        <ThemeProvider theme={theme}>
          <Navigation authenticated={authenticated} />

          <Box bg="#F9FBFE" style={baseBoxStyle}>
            <Router>
              <Landing
                path="/"
                authenticated={authenticated}
                userRules={userRules}
                userInfo={userInfo}
                toggleAuth={this.toggleLoggedin}
              />
              <Browse
                path="/browse"
                authenticated={authenticated}
                userRules={userRules}
                userInfo={userInfo}
                toggleAuth={this.toggleLoggedin}
              />
              <Editor
                path="/editor/*"
                authenticated={authenticated}
                userRules={userRules}
                userInfo={userInfo}
                toggleAuth={this.toggleLoggedin}
              />
              <Login
                path="/login"
                authenticated={authenticated}
                userRules={userRules}
                userInfo={userInfo}
                toggleAuth={this.toggleLoggedin}
              />
              <Query
                path="/query"
                authenticated={authenticated}
                userRules={userRules}
                userInfo={userInfo}
                toggleAuth={this.toggleLoggedin}
              />
              <Dashboard
                path="/dashboard"
                authenticated={authenticated}
                userRules={userRules}
                userInfo={userInfo}
                toggleAuth={this.toggleLoggedin}
              />
            </Router>
          </Box>
        </ThemeProvider>
      </ScrollUp>
    );
  }
}
