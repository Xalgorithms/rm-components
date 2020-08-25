// libraries
import React from 'react';
import { Link } from '@reach/router';

// rm-components
import Text from '../../components/primitives/Text';
import Flex from '../../components/layout/Flex';
import Icon from '../../components/icons/Icon';
import Grid from '../../components/layout/Grid';
import Box from '../../components/layout/Box';
import Search from '../../components/patterns/Search';
import Modal from '../../components/primitives/Modal';
import Button from '../../components/primitives/Button';

// styles
const styleHold = {
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: '5',
};

const styleNavlink = {
  fontSize: '1.05em',
  paddingRight: '2em',
  textDecoration: 'none',
  color: '#000',
};

const svghold = {
  width: '22px',
  height: '22px',
  marginRight: '0px',
  paddingTop: '3px',
};

const modalhold = {
  position: 'sticky',
  height: '90vh',
  background: 'rgba(255, 255, 255, .8)',
  marginBottom: '-90vh',
};

// Primary Component
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleAccount: false,
    };
    this.handleModal = this.handleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
    this.closeAccount = this.closeAccount.bind(this);
  }

  handleModal() {
    this.setState((state) => ({
      isToggleOn: !false,
    }));
  }

  closeModal() {
    this.setState((state) => ({
      isToggleOn: false,
    }));
  }

  handleAccount() {
    this.setState((state) => ({
      isToggleAccount: !false,
    }));
  }

  closeAccount() {
    this.setState((state) => ({
      isToggleAccount: false,
    }));
  }

  render() {
    const { authenticated } = this.props;
    return (
      <div style={styleHold}>
        <Grid
          gridTemplateColumns="400px auto 400px"
          alignItems="center"
          paddingLeft={3}
          paddingRight={4}
          paddingTop={3}
          paddingBottom={3}
          bg="#fff"
        >
          <Box>
            <Flex alignItems="center">
              <img src="/icon.png" width="40px" alt="xalgorithms logo"/>
              <Link to="/" style={styleNavlink}>
                <Text variant="formtitle" marginLeft="8px">
                  XRADS
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box
            border="1px solid"
            borderColor="oline"
            borderRadius="round"
            paddingTop="0.6em"
            paddingBottom="0.6em"
            paddingLeft="1.2em"
            paddingRight="1.2em"
          >
            <Flex displayContents="space-between">
              <Search />
              <Button variant="invisible" onClick={this.handleModal}>
                Table
              </Button>
            </Flex>
          </Box>
          <Box justifySelf="end">
            <Flex>
              {authenticated ? (
                <Link to="/editor" style={styleNavlink}>
                  <Flex alignItems="center">
                    <div style={svghold}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                        <title>i-edit-black-small</title>
                        <path
                          d="M14.52,7.87,10.35,3.71,11.86,2.2a2,2,0,0,1,1.41-.58h0a2,2,0,0,1,1.42.58L16,3.53a2,2,0,0,1,0,2.83ZM11.77,3.71l2.75,2.74.8-.79a1,1,0,0,0,0-1.42L14,2.91a1,1,0,0,0-.71-.29h0a1,1,0,0,0-.7.29Z"
                          transform="translate(-0.1 -1.62)"
                        />
                        <path
                          d="M4.23,18.18H.1V14L9.73,4.38l4.15,4.15Zm-3.13-1H3.81l8.66-8.65L9.73,5.79,1.1,14.39Z"
                          transform="translate(-0.1 -1.62)"
                        />
                      </svg>
                    </div>
                    <Text>Editor</Text>
                  </Flex>
                </Link>
              ) : null}
              {authenticated ? (
                <Link to="/dashboard" style={styleNavlink}>
                  <Flex alignItems="center">
                    <div style={svghold}>
                      <Icon name="dash" fill="black" />
                    </div>
                    <Text>Dashboard</Text>
                  </Flex>
                </Link>
              ) : null}

              <Flex alignItems="center">
                <div style={svghold}>
                  <Icon name="user" fill="black" />
                </div>
                <Button variant="invisible" onClick={this.handleAccount}>
                  <Text>Account</Text>
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Grid>
        <Grid gridTemplateColumns="400px auto 400px" alignItems="start">
          <Box borderBottom="1px solid #efefef" />
          <Box borderBottom="1px solid #efefef" />
          <Box borderBottom="1px solid #efefef">
            <Modal isOpen={!!this.state.isToggleAccount}>
              <Box p={4} borderLeft="1px solid #efefef" bg="#fff">
                <Flex justifyContent="space-between">
                  <Text variant="formtitle">Account Settings</Text>
                  <Button variant="invisible" onClick={this.closeAccount}>
                    <Icon name="ex" fill="text"/>
                  </Button>
                </Flex>
                <Box p={2}></Box>
                <Text color="error">Log Out</Text>
              </Box>
            </Modal>
          </Box>
        </Grid>
        <Modal isOpen={!!this.state.isToggleOn}>
          <div style={modalhold}>
            <Flex alignItems="center" justifyContent="center">
              <Box height="70vh" />
              <Box
                p={2}
                m={0}
                width="600px"
                bg="bg"
                border="1px solid"
                borderColor="oline"
                borderRadius="base"
              >
                <Flex justifyContent="space-between">
                  <Text variant="sectiontitle">Upload Table</Text>
                  <Button variant="invisible" onClick={this.closeModal}>
                    <Icon name="ex" />
                  </Button>
                </Flex>
                <Box p={1} />
                <Flex>
                  <Box width="50%" height="20px" marginRight={1}>
                    <Text color="textb">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui
                      sollicitudin, semper tortor in, vestibulum felis.
                    </Text>
                    <Box p={1} />
                    <Button>Or Create Table</Button>
                  </Box>
                  <Box
                    width="50%"
                    marginLeft={1}
                    border="1px solid"
                    borderColor="oline"
                    borderRadius="base"
                  >
                    <Flex alignItems="center" justifyContent="center">
                      <Box height="250px" />
                      <Box>
                        <Text>Drag Table Here</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </div>
        </Modal>
      </div>
    );
  }
}
