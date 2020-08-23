import React from 'react';
import { Box, Text, Flex, Button } from '..';
import { IEdit, ITrash } from '../icons';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

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
/**
 * Display an input/output sentence.
 * @param {string} participle
 * @param {string} attribute
 * @param {string} subject
 * @param {string} operation
 * @param {string} value
 * @param {string} index
 * @param {Function} openSentenceEditor
 * @param {Function} removeSentence
 */
export default function SentenceDisplay({
  participle,
  attribute,
  subject,
  operation,
  value,
  index,
  openSentenceEditor,
  removeSentence,
}) {
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
            <Box p={1} />
            <Button
              variant="invisible"
              onClick={() => {
                openSentenceEditor(index);
              }}
            >
              <IEdit />
            </Button>
            <Box p={1} />
            <Button
              variant="invisible"
              onClick={() => {
                removeSentence(index);
              }}
            >
              <ITrash />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
