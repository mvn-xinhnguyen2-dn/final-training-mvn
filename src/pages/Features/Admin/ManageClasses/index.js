import React from "react";
import { Switch, Route } from "react-router-dom";
import ClassDetail from "./ClassDetail";
import AddClassPage from "./AddClassPage";
import ClassesList from "./ClassList/ClassList";

export default function ManageClasses({ dataClasses }) {
  return (
    <>
      <Switch>
        <Route path="/admin/manage-classes/add-class">
          <AddClassPage dataClasses={dataClasses} />
        </Route>
        <Route
          path="/admin/manage-classes/:id"
          children={<ClassDetail dataClasses={dataClasses} />}
        ></Route>
        <Route path="/admin/manage-classes/">
          <ClassesList dataClasses={dataClasses} />
        </Route>
      </Switch>
    </>
  );
}
