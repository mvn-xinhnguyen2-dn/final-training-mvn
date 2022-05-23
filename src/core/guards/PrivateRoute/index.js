import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  let { isLogger } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogger ? (
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
