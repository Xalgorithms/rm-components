// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import { Link } from '@reach/router';
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

const gradBg = {
    background: 'radial-gradient(174.09% 353.7% at 121.14% 89.59%, #D3E0FA 0%, rgba(238, 224, 255, 0.28) 41.13%, rgba(225, 224, 255, 0.17) 100%)',
}

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
                  <Button variant="wide" >Log In</Button>
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
        <div style={gradBg} />
      </Grid>
      </ScrollUp>
    );
  }
}
