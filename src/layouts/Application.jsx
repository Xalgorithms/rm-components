// libraries
import { Router } from '@reach/router';
import React from 'react';

// rm-components
import Box from '../components/layout/Box';

// Pages
import Browse from './Browse';
import Dashboard from './Dashboard';
import Editor from './Editor';
import Landing from './Landing';
import Login from './Login';
import Theme from '../components/patterns/Theme'

// other components
import ScrollUp from './components/ScrollUp';

// layouts
import Navigation from './components/Navigation';
import Query from './Query';
import Footer from './components/Footer'

// Styling

const baseBoxStyle = {
  minHeight: '100%',
  margin: 0,
  paddingTop: 92,
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
        <Theme>
          <Navigation authenticated={authenticated} />

          <Box bg="#F9FBFE" style={baseBoxStyle}>
            <Router primary={false}>
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
          <Footer />
        </Theme>
      </ScrollUp>
    );
  }
}
