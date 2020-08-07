// libraries
import React from 'react';
import { toast } from 'react-toastify';

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
  background:
    'radial-gradient(174.09% 353.7% at 121.14% 89.59%, #D3E0FA 0%, rgba(238, 224, 255, 0.28) 41.13%, rgba(225, 224, 255, 0.17) 100%)',
};

// Primary Component
export default class RuleName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };

    this.saveAndRedirect = this.saveAndRedirect.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  /**
   * Set the local state from editor state.
   */
  componentDidMount() {
    this.setNameAndDescFromProps();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rule !== this.props.rule) {
      this.setNameAndDescFromProps();
    }
  }

  setNameAndDescFromProps() {
    const { ruleName, ruleDescription } = this.props.rule.metadata;
    console.log(`
    Editing Rule Title and Description:
    Title       :  ${ruleName}
    Description :  ${ruleDescription}
    `);
    this.setState({
      name: ruleName,
      description: ruleDescription,
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  /**
   * Persist the local state up to editor state.
   */
  saveAndRedirect() {
    if (this.state.name && this.state.description) {
      console.log('Name saved, redirecting to editor landing.');
      const meta = this.props.rule.metadata;
      meta.ruleName = this.state.name;
      meta.ruleDescription = this.state.description;
      toast('Saved Name and Description');
      this.props.updateRule(meta, 'metadata');
      this.props.navigate('/editor/editor-landing');
    } else {
      toast.error('Please enter a valid name and description for the rule.');
    }
  }

  render() {
    return (
      <Grid gridTemplateColumns="50% 50%">
        <div style={inputHold}>
          <Flex alignItems="center" justifyContent="center">
            <div style={widthHold}>
              <Text variant="subtitle">Every rule begins with plain language sentences. </Text>
              <Box m={1} />
              <Text>
                Use this field to write or paste the natural language statement of the rule you are
                working on. State in a simple factual way what this rule requires, and what
                assertions it will make.
              </Text>
              <Box m={2} />
              <Text variant="formtitle">Rule Name</Text>
              <Box m={1} />
              <Input value={this.state.name} onChange={this.handleNameChange} />
              <Box m={2} />
              <Text variant="formtitle">Rule Description</Text>
              <Box m={1} />
              <InputField value={this.state.description} onChange={this.handleDescriptionChange} />
              <Box m={3} />
              <Button variant="wide" onClick={this.saveAndRedirect}>
                Start
              </Button>
            </div>
            <div style={inputHold} />
          </Flex>
        </div>
        <div style={gradBg} />
      </Grid>
    );
  }
}
