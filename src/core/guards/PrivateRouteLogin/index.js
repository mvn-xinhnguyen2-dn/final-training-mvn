import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRouteLogin({ currentUser, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !currentUser?.status ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
