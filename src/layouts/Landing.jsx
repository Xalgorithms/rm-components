// libraries
import React from "react";

// rm-components
import Text from "../components/primitives/Text";

// Primary Component
export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Text variant="heading">Landing</Text>
        <Text>{this.props.authenticated ? "Welcome." : "Please log in."}</Text>
      </div>
    );
  }
}
