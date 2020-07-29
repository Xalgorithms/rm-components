// libraries
import React from "react";

// rm-components
import Text from "../components/primitives/Text";
import Button from "../components/primitives/Button";

// Primary Component
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Text variant="heading">Login</Text>
        <Button onClick={this.props.toggleAuth}>
          {this.props.authenticated ? "Log Out" : "Log In"}
        </Button>
      </div>
    );
  }
}
