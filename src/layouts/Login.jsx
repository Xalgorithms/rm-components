// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import SectionDescription from '../components/patterns/SectionDescription';
import Button from '../components/primitives/Button';
// rm-components
import Text from '../components/primitives/Text';
import ScrollUp from './components/ScrollUp';

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
        <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
          <Box>
            <SectionDescription>
              <Text variant="subtitle" color="purplea">
                {this.state.pageDescription}
              </Text>
              <Text>
                Any rule can be expressed in terms of its input conditions, and its output
                assertions. Please state each condition of this rule, and each assertion of this
                rule, as a simple factual sentence. Each sentence should be phrased in a manner
                that, in some particular circumstance, the sentence would logically be ‘true’ or
                ‘false’.
              </Text>
            </SectionDescription>
            <Button onClick={this.loginButtonOnClick}>
              {this.props.authenticated ? 'Log Out' : 'Log In'}
            </Button>
          </Box>
        </Grid>
      </ScrollUp>
    );
  }
}
