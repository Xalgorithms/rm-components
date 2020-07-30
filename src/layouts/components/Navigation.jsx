// libraries
import React from 'react';
import { Link } from '@reach/router';

// rm-components
import Text from '../../components/primitives/Text';
import Flex from '../../components/layout/Flex';
import Icon from '../../components/icons/Icon';

// styles
const styleHold = {
  position: 'fixed',
  background: '#fff',
  width: '100%',
  top: 0,
}

const styleNavbar = {
  display: 'flex',
};

const styleNavlink = {
  fontSize: '1.05em',
  paddingRight: '2em',
  textDecoration: 'none',
  color: '#000',
};

// Primary Component
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { authenticated } = this.props;
    return (
      <div style={styleHold}>
        <Flex justifyContent="space-between" alignItems="center" m={4}>
          <Link to="/" style={styleNavlink}>
            <Text variant="subtitle">Oughtomation</Text>
          </Link>
          <nav style={styleNavbar}>
            {authenticated ? (
              <Link to="/browse" style={styleNavlink}>
                <Flex alignItems="flex-end">
                  <Icon name="list" />
                  <Text>Browse</Text>
                </Flex>
              </Link>
            ) : null}
            {authenticated ? (
              <Link to="/query" style={styleNavlink}>
                <Flex alignItems="center">
                  <Icon name="search" />
                  <Text>Query</Text>
                </Flex>
              </Link>
            ) : null}
            {authenticated ? (
              <Link to="/editor" style={styleNavlink}>
                <Flex>
                  <Icon name="edit" />
                  <Text>Editor</Text>
                </Flex>
              </Link>
            ) : null}
            {authenticated ? (
              <Link to="/dashboard" style={styleNavlink}>
                <Icon name="dash" />
              </Link>
            ) : null}
            <Link to="/login">
              <Icon name="user" />
            </Link>
          </nav>
        </Flex>
      </div>
    );
  }
}
