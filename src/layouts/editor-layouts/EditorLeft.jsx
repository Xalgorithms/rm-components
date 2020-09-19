import React from 'react';

// rm-components
import Box from '../../components/layout/Box';
import Text from '../../components/primitives/Text';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import Modal from '../../components/primitives/Modal';
import Icon from '../../components/icons/Icon';

const littlePadding = {
  padding: '2px',
};

const helpAlign = {
  marginTop: '6px',
  marginBottom: '6px',
};

const holdTop = {
  position: 'sticky',
  top: '90px',
};

const holdwide = {
  width: '100%',
};

const horizontalRule = {
  position: 'sticky',
  borderLeft: '1px solid #E7E7E7',
  height: '100vh',
  zIndex: '-1',
  top: '90px',
};

// Primary Component
function EditorLeft({ title, description, children, deleteFunction, resetFunction }) {
  const [isOpen, setIsOpen] = React.useState(false); // Settings
  const [isOpenb, setIsOpenb] = React.useState(true); // Guide
  const [isOpenc, setIsOpenc] = React.useState(false); // Description

  return (
    <div width="100vw" overflow="none">
      <Flex>
        <div>
          <div style={holdTop}>
            <Box>
              <Box paddingRight={4} paddingLeft={4} paddingTop={4}>
                <Button variant="invisible" onClick={() => setIsOpen(!isOpen)}>
                  <Box width="18px" height="16px">
                    <svg viewBox="0 0 16 14">
                      <path d="M7.69,10A2.75,2.75,0,1,1,10.44,7.2,2.75,2.75,0,0,1,7.69,10Zm0-4.5A1.75,1.75,0,1,0,9.44,7.2,1.75,1.75,0,0,0,7.69,5.45Z" />
                      <path d="M14.84,9.22a3.59,3.59,0,0,1,0-4L15,5l-.51-1.47,0,0h0a3.58,3.58,0,0,1-3-2.64L11.36.65,9.93.05,9.81.12h0a3.59,3.59,0,0,1-4,0L5.61,0,4.14.5h0l-.2.07a3.56,3.56,0,0,1-2.63,3l-.25.06L.46,5.06l.08.12h0a3.56,3.56,0,0,1,0,4l-.14.21.5,1.47h0l0,0a3.56,3.56,0,0,1,3,2.64l.06.24,1.44.6h0l.11-.07a3.58,3.58,0,0,1,4,0l.21.15,1.47-.51h0l.2-.07a3.58,3.58,0,0,1,2.64-3l.24-.06.6-1.43-.07-.12Zm-4.27,3.86-.66.22a4.6,4.6,0,0,0-4.54-.06L4.85,13a4.58,4.58,0,0,0-3.17-3l-.17-.48A4.58,4.58,0,0,0,1.58,5l.21-.52a4.59,4.59,0,0,0,3-3.14l.66-.23a4.93,4.93,0,0,0,2.41.65A4.28,4.28,0,0,0,10,1.17l.51.21a4.62,4.62,0,0,0,3.18,3l.16.48a4.58,4.58,0,0,0-.06,4.53l-.22.52A4.6,4.6,0,0,0,10.57,13.08Z" />
                    </svg>
                  </Box>
                </Button>
              </Box>
              <Box paddingRight={4} paddingLeft={4} paddingTop={4}>
                <Button variant="invisible" onClick={() => setIsOpenb(!isOpenb)}>
                  <Box width="18px" height="16px">
                    <svg viewBox="0 0 9.86 9.86">
                      <title>i-info-small</title>
                      <path
                        d="M9,13.93H9A4.93,4.93,0,0,1,9,4.07H9a4.93,4.93,0,0,1,0,9.86ZM9,4.57A4.42,4.42,0,0,0,4.56,9,4.44,4.44,0,0,0,9,13.43H9A4.43,4.43,0,0,0,9,4.57H9Z"
                        transform="translate(-4.06 -4.07)"
                      />
                      <path
                        d="M9.84,11.33l-.06.25-.58.2a2.25,2.25,0,0,1-.36.06.67.67,0,0,1-.47-.16.57.57,0,0,1-.16-.4v-.19a.5.5,0,0,1,0-.25l.41-1.66.06-.29a1.22,1.22,0,0,0,0-.27c0-.14,0-.24-.07-.28a.34.34,0,0,0-.29-.08H8.13l-.21.05.14-.22a2.83,2.83,0,0,1,.55-.21A1.21,1.21,0,0,1,9,7.82.56.56,0,0,1,9.45,8a.55.55,0,0,1,.15.41V8.8l-.54,1.66a.46.46,0,0,1-.07.3A1,1,0,0,0,9,11a.41.41,0,0,0,.1.32.6.6,0,0,0,.32.07h.21A.79.79,0,0,0,9.84,11.33Zm.27-5a.52.52,0,0,1-.14.39.48.48,0,0,1-.36.16.46.46,0,0,1-.34-.16.52.52,0,0,1,0-.73.39.39,0,0,1,.34-.16A.45.45,0,0,1,10,6a.5.5,0,0,1,.14.31Z"
                        transform="translate(-4.06 -4.07)"
                      />
                    </svg>
                  </Box>
                </Button>
              </Box>
              <Box paddingRight={4} paddingLeft={4} paddingTop={4}>
                <Button variant="invisible" onClick={() => setIsOpenc(!isOpenc)}>
                  <Box width="18px" height="16px">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.19 8.12">
                      <title>name and description</title>
                      <path
                        d="M11.19,1.49H5.69a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h5.5a.5.5,0,0,1,.5.5A.51.51,0,0,1,11.19,1.49Z"
                        transform="translate(-0.5 -0.49)"
                      />
                      <path
                        d="M11.19,5.05H1a.5.5,0,0,1,0-1H11.19a.5.5,0,0,1,0,1Z"
                        transform="translate(-0.5 -0.49)"
                      />
                      <path
                        d="M11.19,8.61H1a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H11.19a.51.51,0,0,1,.5.5A.5.5,0,0,1,11.19,8.61Z"
                        transform="translate(-0.5 -0.49)"
                      />
                    </svg>
                  </Box>
                </Button>
              </Box>
            </Box>
          </div>
        </div>
        <div>
          <div style={horizontalRule} />
        </div>
        <div>
          <div style={holdTop}>
            <Modal isOpen={isOpen}>
              <Box width="450px">
                <Box p={4}>
                  <Flex justifyContent="space-between">
                    <Text variant="formtitle">Settings</Text>
                    <Button variant="invisible" onClick={() => setIsOpen(!isOpen)}>
                      <Icon name="close" />
                    </Button>
                  </Flex>
                  <Box p={2} />
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
                  <Box p={2} />
                  <Button variant="invisiblewide" onClick={resetFunction}>
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
                  <Button variant="invisiblewide" onClick={deleteFunction}>
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
              </Box>
            </Modal>
          </div>
        </div>
        <div />
        <div>
          <div style={holdTop}>
            <Modal isOpen={isOpen}>
              <div>
                <div style={horizontalRule} />
              </div>
            </Modal>
          </div>
        </div>
        <div>
          <div style={holdTop}>
            <Modal isOpen={isOpenb}>
              <Box width="450px">
                <Box p={4}>
                  <Flex justifyContent="space-between">
                    <Text variant="formtitle">Guide</Text>
                    <Button variant="invisible" onClick={() => setIsOpenb(!isOpenb)}>
                      <Icon name="close" />
                    </Button>
                  </Flex>
                  <Box p={2} />
                  <Text>
                    Any rule can be expressed in terms of its input conditions, and its output
                    assertions. Please state each condition of this rule, and each assertion of this
                    rule, as a simple factual sentence. Each sentence should be phrased in a manner
                    that, in some particular circumstance, the sentence would logically be ‘true’ or
                    ‘false’.
                  </Text>
                </Box>
              </Box>
            </Modal>
          </div>
        </div>
        <div>
          <div style={holdTop}>
            <Modal isOpen={!isOpenb}>
              <div>
                <div style={horizontalRule} />
              </div>
            </Modal>
          </div>
        </div>
        <div>
          <div style={holdTop}>
            <Modal isOpen={isOpenc}>
              <Box width="450px">
                <Box p={4}>
                  <Flex justifyContent="space-between">
                    <Text variant="formtitle">Description</Text>
                    <Button variant="invisible" onClick={() => setIsOpenc(!isOpenc)}>
                      <Icon name="close" />
                    </Button>
                  </Flex>
                  <Box p={2} />
                  <Text>{description}</Text>
                </Box>
              </Box>
            </Modal>
          </div>
        </div>
        <div>
          <div style={holdTop}>
            <Modal isOpen={isOpenc}>
              <div>
                <div style={horizontalRule} />
              </div>
            </Modal>
          </div>
        </div>
        <div style={holdwide}>{children}</div>
      </Flex>
    </div>
  );
}

export default EditorLeft;
