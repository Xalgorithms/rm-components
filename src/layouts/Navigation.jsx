// libraries
import React from "react";
import { Link } from "@reach/router";

// rm-components
import Text from "../components/primitives/Text";

// Primary Component
export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Text>Navigation</Text>
        <Link to="/">
          <Text>Landing</Text>
        </Link>
        <Link to="/login">
          <Text>Login</Text>
        </Link>
        <Link to="/dashboard">
          <Text>Dashboard</Text>
        </Link>
        <Link to="/browse">
          <Text>Browse</Text>
        </Link>
        <Link to="/query">
          <Text>Query</Text>
        </Link>
        <Link to="/editor">
          <Text>Editor</Text>
        </Link>
      </div>
    );
  }
}
