import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserLoggedIn } from "../utils/auth";

class ProtectedRoute extends Component {

  render() {
    console.log(isUserLoggedIn())
    return (
      <>
        {isUserLoggedIn() ? (
            <Route
              path={this.props.path}
              component={this.props.component}
              exact={this.props.exact}
            />
          ) : (
          <Redirect to="/" />
        )}
      </>
    );
  }
}

export default ProtectedRoute;