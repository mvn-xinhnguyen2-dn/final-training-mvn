import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import PrivateRouteLogin from "../../core/guards/PrivateRouteLogin";

import Login from "./Login";

export default function Auth({ currentUser }) {
  return (
    <>
      <Switch>
        <PrivateRouteLogin currentUser={currentUser}>
          <Route path="/auth/login">
            <Login />
          </Route>
        </PrivateRouteLogin>
        <Route path="/auth/forgot-password">
          <ForgotPassword />
        </Route>
      </Switch>
    </>
  );
}
