import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import SectionDescription from '../../components/patterns/SectionDescription';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import Modal from '../../components/primitives/Modal';

const littlePadding = {
  padding: '2px',
};

const helpAlign = {
  marginTop: '6px',
  marginBottom: '6px',
};

// Primary Component
function EditorLeft({ title }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Text variant="sectiontitle">{title}</Text>
          <Box p={1} />
          <Modal isOpen={!isOpen}>
            <Button variant="invisible" onClick={() => setIsOpen(true)}>
              <Flex alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.56 14.42">
                  <title>settings</title>
                  <path
                    d="M7.69,10A2.75,2.75,0,1,1,10.44,7.2,2.75,2.75,0,0,1,7.69,10Zm0-4.5A1.75,1.75,0,1,0,9.44,7.2,1.75,1.75,0,0,0,7.69,5.45Z"
                    transform="translate(-0.41 0.01)"
                    fill="#204ef0"
                  />
                  <path
                    d="M14.84,9.22a3.59,3.59,0,0,1,0-4L15,5l-.51-1.47,0,0h0a3.58,3.58,0,0,1-3-2.64L11.36.65,9.93.05,9.81.12h0a3.59,3.59,0,0,1-4,0L5.61,0,4.14.5h0l-.2.07a3.56,3.56,0,0,1-2.63,3l-.25.06L.46,5.06l.08.12h0a3.56,3.56,0,0,1,0,4l-.14.21.5,1.47h0l0,0a3.56,3.56,0,0,1,3,2.64l.06.24,1.44.6h0l.11-.07a3.58,3.58,0,0,1,4,0l.21.15,1.47-.51h0l.2-.07a3.58,3.58,0,0,1,2.64-3l.24-.06.6-1.43-.07-.12Zm-4.27,3.86-.66.22a4.6,4.6,0,0,0-4.54-.06L4.85,13a4.58,4.58,0,0,0-3.17-3l-.17-.48A4.58,4.58,0,0,0,1.58,5l.21-.52a4.59,4.59,0,0,0,3-3.14l.66-.23a4.93,4.93,0,0,0,2.41.65A4.28,4.28,0,0,0,10,1.17l.51.21a4.62,4.62,0,0,0,3.18,3l.16.48a4.58,4.58,0,0,0-.06,4.53l-.22.52A4.6,4.6,0,0,0,10.57,13.08Z"
                    transform="translate(-0.41 0.01)"
                    fill="#204ef0"
                  />
                </svg>
                <Box padding={1} />
                <Text color="primary">Settings</Text>
              </Flex>
            </Button>
          </Modal>
          <Modal isOpen={isOpen}>
            <Button variant="invisible" onClick={() => setIsOpen(false)}>
              <Flex alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.56 14.42">
                  <title>settings</title>
                  <path
                    d="M7.69,10A2.75,2.75,0,1,1,10.44,7.2,2.75,2.75,0,0,1,7.69,10Zm0-4.5A1.75,1.75,0,1,0,9.44,7.2,1.75,1.75,0,0,0,7.69,5.45Z"
                    transform="translate(-0.41 0.01)"
                    fill="#204ef0"
                  />
                  <path
                    d="M14.84,9.22a3.59,3.59,0,0,1,0-4L15,5l-.51-1.47,0,0h0a3.58,3.58,0,0,1-3-2.64L11.36.65,9.93.05,9.81.12h0a3.59,3.59,0,0,1-4,0L5.61,0,4.14.5h0l-.2.07a3.56,3.56,0,0,1-2.63,3l-.25.06L.46,5.06l.08.12h0a3.56,3.56,0,0,1,0,4l-.14.21.5,1.47h0l0,0a3.56,3.56,0,0,1,3,2.64l.06.24,1.44.6h0l.11-.07a3.58,3.58,0,0,1,4,0l.21.15,1.47-.51h0l.2-.07a3.58,3.58,0,0,1,2.64-3l.24-.06.6-1.43-.07-.12Zm-4.27,3.86-.66.22a4.6,4.6,0,0,0-4.54-.06L4.85,13a4.58,4.58,0,0,0-3.17-3l-.17-.48A4.58,4.58,0,0,0,1.58,5l.21-.52a4.59,4.59,0,0,0,3-3.14l.66-.23a4.93,4.93,0,0,0,2.41.65A4.28,4.28,0,0,0,10,1.17l.51.21a4.62,4.62,0,0,0,3.18,3l.16.48a4.58,4.58,0,0,0-.06,4.53l-.22.52A4.6,4.6,0,0,0,10.57,13.08Z"
                    transform="translate(-0.41 0.01)"
                    fill="#204ef0"
                  />
                </svg>
                <Box padding={1} />
                <Text color="primary">Guide</Text>
              </Flex>
            </Button>
          </Modal>
        </Flex>
        <Box />
        <Button>Publish Rule</Button>
      </Flex>
      <Box p={2} />
      <Modal isOpen={isOpen}>
        <Box
          m={0}
          width={1}
          bg="bg"
          border="1px solid"
          borderColor="oline"
          borderRadius="base"
          p={2}
        >
          <Button variant="invisiblewide">
            <div style={helpAlign}>
              <div style={littlePadding} />
              <Flex justifyContent="space-between">
                <Flex alignItems="center">
                  <Text color="textb">Download Rule as SVG</Text>
                </Flex>
                <Box />
                <Flex alignItems="center" />
              </Flex>
              <div style={littlePadding} />
            </div>
          </Button>
        </Box>
        <Box p={2} />
        <Box
          m={0}
          width={1}
          bg="bg"
          border="1px solid"
          borderColor="oline"
          borderRadius="base"
          p={2}
        >
          <Button variant="invisiblewide">
            <div style={helpAlign}>
              <div style={littlePadding} />
              <Flex justifyContent="space-between">
                <Flex alignItems="center">
                  <Text color="error">Reset Rule</Text>
                </Flex>
                <Box />
                <Flex alignItems="center" />
              </Flex>
              <div style={littlePadding} />
            </div>
          </Button>
          <Button variant="invisiblewide">
            <div style={helpAlign}>
              <div style={littlePadding} />
              <Flex justifyContent="space-between">
                <Flex alignItems="center">
                  <Text color="error">Delete Rule</Text>
                </Flex>
                <Box />
                <Flex alignItems="center" />
              </Flex>
              <div style={littlePadding} />
            </div>
          </Button>
        </Box>
      </Modal>
      <Modal isOpen={!isOpen}>
        <SectionDescription>
          <Text variant="subtitledesc" color="purplea">
            Rule Maker Dashboard
          </Text>
          <Text>
            Any rule can be expressed in terms of its input conditions, and its output assertions.
            Please state each condition of this rule, and each assertion of this rule, as a simple
            factual sentence. Each sentence should be phrased in a manner that, in some particular
            circumstance, the sentence would logically be ‘true’ or ‘false’.
          </Text>
        </SectionDescription>
      </Modal>
      <Box p={1} />
    </Box>
  );
}

export default EditorLeft;
