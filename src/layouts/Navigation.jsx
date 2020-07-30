// libraries
import React from 'react';
import { Link } from '@reach/router';

// rm-components
import Text from '../components/primitives/Text';
import Flex from '../components/layout/Flex';
import Icon from '../components/icons/Icon';

// styles

const style_navbar = {
  display: 'flex',
};

const style_navlink = {
  fontSize: '1.05em',
  paddingRight: '2em',
  textDecoration: 'none',
  color: '#000',
};
// Primary Component
export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Flex justifyContent="space-between" alignItems="center" m={4}>
          <Link to="/" style={style_navlink}>
            <Text variant="subtitle">Oughtomation</Text>
          </Link>
          <nav style={style_navbar}>
            {this.props.authenticated ? (
              <Link to="/browse" style={style_navlink}>
                <Flex alignItems="flex-end">
                  <Icon name="list" />
                  <Text>Browse</Text>
                </Flex>
              </Link>
            ) : null}
            {this.props.authenticated ? (
              <Link to="/query" style={style_navlink}>
                <Flex alignItems="center">
                  <Icon name="search" />
                  <Text>Query</Text>
                </Flex>
              </Link>
            ) : null}
            {this.props.authenticated ? (
              <Link to="/editor" style={style_navlink}>
                <Flex>
                  <Icon name="edit" />
                  <Text>Editor</Text>
                </Flex>
              </Link>
            ) : null}
            {this.props.authenticated ? (
              <Link to="/dashboard" style={style_navlink}>
                <Icon name="dash" />
              </Link>
            ) : null}
            <Link to="/login" style={style_navlink}>
              <Icon name="user" />
            </Link>
          </nav>
        </Flex>
      </div>
    );
  }
}
