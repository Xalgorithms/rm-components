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
  outline: '1px solid #E7E7E7',
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

const svghold = {
  width: '22px',
  height: '22px',
  marginRight: '0px',
  paddingTop: '3px',
};

const svgholdb = {
  width: '14px',
  height: '14px',
  marginRight: '4px',
  paddingBottom: '4px',
};

const svgholdc = {
  width: '13px',
  height: '16px',
  marginRight: '4px',
  paddingBottom: '3px',
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
            <Text variant="subtitle">XRADS</Text>
          </Link>
          <nav style={styleNavbar}>
            {authenticated ? (
              <Link to="/browse" style={styleNavlink}>
                <Flex alignItems="center">
                  <div style={svgholdc}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.69 10.01"><title>i-list-small</title><path d="M10.34,1.73H4.84a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5h5.5a.5.5,0,0,1,.5.5A.5.5,0,0,1,10.34,1.73Z" transform="translate(-0.15 -0.23)"/><path d="M10.34,5.73H4.84a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5h5.5a.5.5,0,0,1,.5.5A.5.5,0,0,1,10.34,5.73Z" transform="translate(-0.15 -0.23)"/><path d="M10.34,9.29H4.84a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5h5.5a.5.5,0,0,1,.5.5A.5.5,0,0,1,10.34,9.29Z" transform="translate(-0.15 -0.23)"/><circle cx="1.44" cy="1.44" r="0.94" fill="#fff"/><path d="M1.6,3.11A1.44,1.44,0,1,1,3,1.67,1.44,1.44,0,0,1,1.6,3.11Zm0-1.88A.44.44,0,1,0,2,1.67.45.45,0,0,0,1.6,1.23Z" transform="translate(-0.15 -0.23)"/><circle cx="1.44" cy="5.01" r="0.94" fill="#fff"/><path d="M1.6,6.68A1.45,1.45,0,1,1,3,5.23,1.45,1.45,0,0,1,1.6,6.68Zm0-1.89A.45.45,0,1,0,2,5.23.45.45,0,0,0,1.6,4.79Z" transform="translate(-0.15 -0.23)"/><circle cx="1.44" cy="8.57" r="0.94" fill="#fff"/><path d="M1.6,10.24A1.45,1.45,0,1,1,3,8.79,1.45,1.45,0,0,1,1.6,10.24Zm0-1.89A.45.45,0,1,0,2,8.79.45.45,0,0,0,1.6,8.35Z" transform="translate(-0.15 -0.23)"/></svg>
                  </div>
                  <Text>Browse</Text>
                </Flex>
              </Link>
            ) : null}
            {authenticated ? (
              <Link to="/query" style={styleNavlink}>
                <Flex alignItems="center">
                  <div style={svgholdb}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.64 11.95"><title>i-search-black-small</title><path d="M12.25,11.74l-3.5-3.5a1,1,0,0,0-.19-.12A4.36,4.36,0,1,0,5.19,9.74,4.26,4.26,0,0,0,7.6,9a.76.76,0,0,0,.15.23l3.5,3.5a.7.7,0,0,0,1-1ZM1.81,5.36A3.38,3.38,0,1,1,5.19,8.74,3.38,3.38,0,0,1,1.81,5.36Z" transform="translate(-0.81 -0.99)"/></svg>
                  </div>
                  <Text>Query</Text>
                </Flex>
              </Link>
            ) : null}
            {authenticated ? (
              <Link to="/editor" style={styleNavlink}>
                <Flex alignItems="center">
                  <div style={svghold}>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>i-edit-black-small</title><path d="M14.52,7.87,10.35,3.71,11.86,2.2a2,2,0,0,1,1.41-.58h0a2,2,0,0,1,1.42.58L16,3.53a2,2,0,0,1,0,2.83ZM11.77,3.71l2.75,2.74.8-.79a1,1,0,0,0,0-1.42L14,2.91a1,1,0,0,0-.71-.29h0a1,1,0,0,0-.7.29Z" transform="translate(-0.1 -1.62)"/><path d="M4.23,18.18H.1V14L9.73,4.38l4.15,4.15Zm-3.13-1H3.81l8.66-8.65L9.73,5.79,1.1,14.39Z" transform="translate(-0.1 -1.62)"/></svg>
                  </div>
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
