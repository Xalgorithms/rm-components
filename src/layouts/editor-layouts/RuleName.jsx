// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import InputField from '../../components/patterns/InputField';
import Input from '../../components/primitives/Input';

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
export default class RuleName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentRule } = this.state;
    return (
      <Grid gridTemplateColumns="50% 50%">
        <div style={inputHold}>
          <Flex alignItems="center" justifyContent="center">
            <div style={widthHold}>
              <Text variant="subtitle">Every rule begins with plain language sentences. </Text>
              <Box m={1} />
              <Text>Lorem ipsum</Text>
              <Box m={2} />
              <Text>Rule Name</Text>
              <Box m={1} />
              <Input />
              <Box m={2} />
              <Text>Rule Text</Text>
              <Box m={1} />
              <InputField />
              <Box m={3} />
              <Link to="/editor/editor-landing">
                  <Button variant="wide" >Start</Button>
              </Link>
            </div>
            <div style={inputHold} />
          </Flex>
        </div>
        <div style={gradBg} />
      </Grid>
    );
  }
}
