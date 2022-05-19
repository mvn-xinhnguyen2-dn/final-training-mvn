import React from 'react';
import { Switch, Route } from "react-router-dom";
import ChangePassword from './ChangePassword';
import MyAccount from './MyAccount';


export default function Account() {
  return (
    <>
      <div>Account</div>
      <Switch>
          <Route path="/account/my-account">
            <MyAccount/>
          </Route>
          <Route path="/account/change-password">
            <ChangePassword/>
          </Route>
        </Switch>
    </>
  )
}
