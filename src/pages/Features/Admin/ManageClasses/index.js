import React from "react";
import { Switch, Route } from "react-router-dom";
import ClassDetail from "./ClassDetail";
import AddClassPage from "./AddClassPage";
import UpdateClassPage from "./UpdateClassPage";
import ClassesList from "./ClassList/ClassList";

export default function ManageClasses(props) {
  const dataClasses = props.dataClasses;
  return (
    <>
      <Switch>
        <Route
          path="/admin/manage-classes/detail-:id"
          children={<ClassDetail dataClasses={dataClasses} />}
        ></Route>
        <Route
          path="/admin/manage-classes/edit-:id"
          children={<UpdateClassPage dataClasses={dataClasses} />}
        ></Route>
        <Route path="/admin/manage-classes/add-class">
          <AddClassPage dataClasses={dataClasses} />
        </Route>
        <Route path="/admin/manage-classes/">
          <ClassesList />
        </Route>
      </Switch>
    </>
  );
}
