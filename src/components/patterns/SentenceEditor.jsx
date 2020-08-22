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

// style

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

/**
 * Displays content parameters in the condensed sentence/view of the component.
 * @param {String} contentField the text content of a field.
 */
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

/**
 * Requires content and updateContent props to function correctly.
 * @param {JSON} content contains a schema-constrained blob of content for use in the component fields.
 * @param {Function} updateContent method for passing an updated version of the internal content to the parent.
 */

export default class SentenceEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, updateContent } = this.props;
    return (
      <Box>
        <Box>
          <Flex justifyContent="space-between">
            <Flex>
              <Text color="primary">A</Text>
              <Box padding={1} />
              <Text>The</Text>
              <SentenceConstructorField contentField={content.particple} />
              <SentenceConstructorField contentField={content.attribute} />
              <Text>of the</Text>
              <SentenceConstructorField contentField={content.subject} />
              <Text>is</Text>
              <SentenceConstructorField contentField={content.operation} small />
              <SentenceConstructorField contentField={content.value} />
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
                <Input value={content.a} onChange={updateContent} />
              </Box>
              <Box padding={1} />
              <Box>
                <Input value={content.b} onChange={updateContent} />
              </Box>
            </Flex>
            <Box padding={1} />
            <Flex alignItems="center">
              <Text>Of the</Text>
              <Box padding={1} />
              <Box>
                <Input value={content.c} onChange={updateContent} />
              </Box>
              <Box padding={1} />
              <Box>
                <Dropdown>
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
              value={content.e}
              onChange={updateContent}
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
