import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ currentUser, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser?.status ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
