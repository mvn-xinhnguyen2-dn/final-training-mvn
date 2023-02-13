import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import React from "react";

export default function Features({ dataClasses, dataTutors, currentUser }) {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home data={dataClasses} />
        </Route>
        <Route path="/admin">
          <Admin
            dataClasses={dataClasses}
            currentUser={currentUser}
            dataTutors={dataTutors}
          />
        </Route>
      </Switch>
    </>
  );
}
