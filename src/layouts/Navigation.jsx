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
  paddingLeft: "0.3em",
};

// Primary Component
export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Text variant="heading">Navigation</Text>
        <nav style={style_navbar}>
          <Link to="/">
            <Text style={style_navlink}>Landing</Text>
          </Link>
          <Link to="/dashboard">
            <Text style={style_navlink}>Dashboard</Text>
          </Link>
          <Link to="/browse">
            <Text style={style_navlink}>Browse</Text>
          </Link>
          <Link to="/query">
            <Text style={style_navlink}>Query</Text>
          </Link>
          <Link to="/editor">
            <Text style={style_navlink}>Editor</Text>
          </Link>
          <Link to="/login">
            <Text style={style_navlink}>Login</Text>
          </Link>
        </nav>
      </div>
    );
  }
}
