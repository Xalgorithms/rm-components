// libraries
import React from 'react';
import { Link } from '@reach/router';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import Button from '../components/primitives/Button';
// rm-components
import Text from '../components/primitives/Text';
import ScrollUp from './components/ScrollUp';
import Flex from '../components/layout/Flex';
import Input from '../components/primitives/Input';

// style
const inputHold = {
  height: '90vh',
};

const widthHold = {
  width: '80%',
};

// Primary Component
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDescription: 'Login to the Oughtomation Engine',
    };

    // Bind functions
    this.loginButtonOnClick = this.loginButtonOnClick.bind(this);
  }

  loginButtonOnClick() {
    const loggedIn = this.props.authenticated;
    this.props.toggleAuth();
    if (loggedIn) {
      // User is logging out
      this.props.navigate('/');
    } else {
      // User is logging in
      this.props.navigate('/dashboard');
    }
  }

  render() {
    return (
      <ScrollUp>
        <Grid gridTemplateColumns="50% 50%">
          <div style={inputHold}>
            <Flex alignItems="center" justifyContent="center">
              <div style={widthHold}>
                <Text variant="subtitle">Log In</Text>
                <Box m={2} />
                <Text>Email</Text>
                <Box m={1} />
                <Input />
                <Box m={2} />
                <Text>Password</Text>
                <Box m={1} />
                <Input />
                <Box m={3} />
                <Link to="/dashboard">
                  <Button variant="wide">Log In</Button>
                </Link>
                <Box m={3} />
                <Flex justifyContent="space-between">
                  <Text color="primary">Create Account</Text>
                  <Text color="primary">Forgot Password</Text>
                </Flex>
              </div>
              <div style={inputHold} />
            </Flex>
          </div>
          <Box borderLeft="1px solid #efefef" />
        </Grid>
      </ScrollUp>
    );
  }
}
