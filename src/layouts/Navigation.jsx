// libraries
import React from "react";
import { Link } from "@reach/router";

// rm-components
import Text from "../components/primitives/Text";

// styles

const style_navbar = {
  display: "flex",
};

const style_navlink = {
  paddingRight: "0.33em",
  textDecoration: "none",
  color: "blue",
};

// Primary Component
export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Text variant="heading">Navigation</Text>
        <nav style={style_navbar}>
          <Link to="/" style={style_navlink}>
            <Text>Landing</Text>
          </Link>
          {this.props.authenticated ? (
            <Link to="/dashboard" style={style_navlink}>
              <Text>Dashboard</Text>
            </Link>
          ) : null}
          {this.props.authenticated ? (
            <Link to="/browse" style={style_navlink}>
              <Text>Browse</Text>
            </Link>
          ) : null}
          {this.props.authenticated ? (
            <Link to="/query" style={style_navlink}>
              <Text>Query</Text>
            </Link>
          ) : null}
          {this.props.authenticated ? (
            <Link to="/editor" style={style_navlink}>
              <Text>Editor</Text>
            </Link>
          ) : null}
          <Link to="/login" style={style_navlink}>
            <Text>Login</Text>
          </Link>
        </nav>
      </div>
    );
  }
}
