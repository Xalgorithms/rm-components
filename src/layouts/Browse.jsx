// libraries
import React from 'react';
import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import Card from '../components/patterns/Card';
import Rule from '../components/primitives/Rule';
import Flex from '../components/layout/Flex';
import Icon from '../components/icons/Icon';
import Button from '../components/primitives/Button';
import Modal from '../components/primitives/Modal';

// rm-components
import Text from '../components/primitives/Text';
import ScrollUp from './components/ScrollUp';

const fixpos = {
  position: 'sticky',
  top: '98px',
  width: '100%',
};

const modalhold = {
  position: 'sticky',
  height: '90vh',
  background: 'rgba(255, 255, 255, .8)',
  marginBottom: '-90vh',
};

// Primary Component
export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDescription: 'Browse Rules',
      isToggleOn: false,
    };
    this.handleModal = this.handleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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



  render() {
    return (
      <ScrollUp>
        <div style={fixpos}>
          <Box p={4} bg="#fff">
            <Flex>
              <Button variant="invisible" onClick={this.handleModal}>Upload Table</Button>
            </Flex>
          </Box>
          <Rule />
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
                      <Icon name="ex"/>
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
        <Grid height="80vh" gridTemplateColumns="400px auto">
          <Box borderRight="1px solid #efefef">
            <Box p={4}>
              <Card />
              <Card />
              <Card />
            </Box>
          </Box>
        </Grid>
      </ScrollUp>
    );
  }
}
