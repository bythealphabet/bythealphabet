import React from "react";
import { Route, Redirect } from "react-router-dom";
// import auth from "./auth/auth-helper.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
