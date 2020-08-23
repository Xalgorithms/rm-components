import React from 'react';
import {
  Box,
  Text,
  Flex,
  Button,
  Dropdown,
  Option,
  Input,
  Infobox,
  Modal,
  InputField,
  Icon,
} from '..';
import { IEdit, ITrash } from '../icons';

const fillBox = {
  borderBottom: '1px solid #696969',
  minWidth: 80,
  marginLeft: 4,
  marginRight: 4,
};

const smallFillBox = {
  borderBottom: '1px solid #696969',
  minWidth: 20,
  marginLeft: 4,
  marginRight: 4,
};

function SentenceConstructorField({ contentField, small }) {
  if (!contentField) {
    return <div style={small ? smallFillBox : fillBox} />;
  }
  return (
    <div style={small ? smallFillBox : fillBox}>
      <Text>{contentField}</Text>
    </div>
  );
}

export default class SentenceEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participle: '',
      attribute: '',
      subject: '',
      operation: '==',
      value: '',
    };

    this.updateParticiple = this.updateParticiple.bind(this);
    this.updateAttribute = this.updateAttribute.bind(this);
    this.updateSubject = this.updateSubject.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateParticiple(event) {
    this.setState({ participle: event.target.value });
  }

  updateAttribute(event) {
    this.setState({ attribute: event.target.value });
  }

  updateSubject(event) {
    this.setState({ subject: event.target.value });
  }

  updateOperation(event) {
    this.setState({ operation: event.target.value });
  }

  updateValue(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { participle, attribute, subject, operation, value } = this.state;
    return (
      <Box>
        <Box>
          <Flex justifyContent="space-between">
            <Flex>
              <Text color="primary">A</Text>
              <Box padding={1} />
              <Text>The</Text>
              <SentenceConstructorField contentField={participle} />
              <SentenceConstructorField contentField={attribute} />
              <Text>of the</Text>
              <SentenceConstructorField contentField={subject} />
              <Text>is</Text>
              <SentenceConstructorField contentField={operation} small />
              <SentenceConstructorField contentField={value} />
            </Flex>

            <Flex>
              <Button
                variant="invisible"
                onClick={() => {
                  console.error('IMPLEMENT ME');
                }}
              >
                <Icon name="download" fill="red" />
              </Button>
              <Box p={1} />
              <Button
                variant="invisible"
                onClick={() => {
                  console.error('IMPLEMENT ME');
                }}
              >
                <IEdit />
              </Button>
              <Box p={1} />
              <Button variant="invisible">
                <ITrash />
              </Button>
            </Flex>
          </Flex>
          <Modal isOpen>
            <Box padding={1} />
            <Infobox content="lorem ipsum" />
            <Box padding={1} />
            <Flex alignItems="center">
              <Text>The</Text>
              <Box padding={1} />
              <Box>
                <Input
                  value={participle}
                  placeholder="participle"
                  onChange={this.updateParticiple}
                />
              </Box>
              <Box padding={1} />
              <Box>
                <Input value={attribute} placeholder="attribute" onChange={this.updateAttribute} />
              </Box>
            </Flex>
            <Box padding={1} />
            <Flex alignItems="center">
              <Text>Of the</Text>
              <Box padding={1} />
              <Box>
                <Input value={subject} placeholder="subject" onChange={this.updateSubject} />
              </Box>
              <Box padding={1} />
              <Box>
                <Dropdown value={operation} onChange={this.updateOperation}>
                  <Option value="==">==</Option>
                  <Option value="!=">!=</Option>
                  <Option value=">">&gt;</Option>
                  <Option value="<">&lt;</Option>
                  <Option value=">=">&gt;=</Option>
                  <Option value="<=">&lt;=</Option>
                </Dropdown>
              </Box>
            </Flex>
            <Box padding={1} />
            <InputField
              value={value}
              onChange={this.updateValue}
              message="Adjective, Arithmetic expression, or Boolean Number"
            />
            {/*
            <Rule />
            <Flex alignItems="center">
              <Text color="primary">Sum</Text>
              <Box padding={1} />
              <Text color="primary">Filter</Text>
              <Box padding={1} />
              <Text color="primary">Source</Text>
            </Flex>
            */}
          </Modal>
        </Box>
      </Box>
    );
  }
}
