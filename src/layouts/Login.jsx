// libraries
import React from "react";

// rm-components
import Text from "../components/primitives/Text";
import Button from "../components/primitives/Button";

// Primary Component
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.loginButtonOnClick = this.loginButtonOnClick.bind(this);
  }

  loginButtonOnClick() {
    const loggedIn = this.props.authenticated;
    this.props.toggleAuth();
    if (loggedIn) {
      // User is logging out
      this.props.navigate("/");
    } else {
      // User is logging in
      this.props.navigate("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.loginButtonOnClick}>
          {this.props.authenticated ? "Log Out" : "Log In"}
        </Button>
      </div>
    );
  }
}
