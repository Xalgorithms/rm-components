import React from 'react';
import { Box, Text, Flex, Button, Dropdown, Option, Input, Infobox, Modal } from '..';
import ITrash from '../icons/ITrash';
import IEdit from '../icons/IEdit';
import IEx from '../icons/IEx';
import InputField from './InputField';

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
 * Ensures the incoming content has all the correct parameters.
 * @deprecated will be replaced by a method from the xrp libary.
 * @param {JSON} content the json object containing the content for the object.
 * @param {Function} updateContent the function called to update the object.
 */
function enforceContentSchema(content, updateContent) {
  if (
    !content.participle ||
    !content.attribute ||
    !content.subject ||
    !content.operation ||
    !content.value
  )
    console.error('SentenceConstructor is missing parameters.');

  if (!content) {
    updateContent({
      participle: '',
      attribute: '',
      subject: '',
      operation: '',
      value: '',
    });
  }
}

/**
 * Requires content and updateContent props to function correctly.
 * @param {JSON} content contains a schema-constrained blob of content for use in the component fields.
 * @param {Function} updateContent method for passing an updated version of the internal content to the parent.
 */
function SentenceConstructor({ content, updateContent }) {
  const [isOpen, setIsOpen] = React.useState(true);

  enforceContentSchema(content, updateContent);

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
            <Modal isOpen={isOpen}>
              <Button variant="invisible" onClick={() => setIsOpen(false)}>
                <IEx />
              </Button>
            </Modal>
            <Modal isOpen={!isOpen}>
              <Button variant="invisible" onClick={() => setIsOpen(true)}>
                <IEdit />
              </Button>
            </Modal>
            <Box p={1} />
            <Button variant="invisible">
              <ITrash />
            </Button>
          </Flex>
        </Flex>
        <Modal isOpen={isOpen}>
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

export default SentenceConstructor;
