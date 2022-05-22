import React from "react";
import { Switch, Route } from "react-router-dom";
import AddTutorPage from "./AddTutorPage";
import TutorList from "./TutorList";
// import UpdateTutorPage from "./UpdateTutorPage";

export default function ManageTutors(props) {
  const dataTutors = props.dataTutors;
  return (
    <>
      <Switch>
        <Route path="/admin/manage-tutors/add-tutor">
          <AddTutorPage dataTutors={dataTutors} />
        </Route>
        {/* <Route
          path="/admin/manage-tutors/edit-:id"
          children={<UpdateTutorPage dataTutors={dataTutors} />}
        ></Route> */}
        <Route path="/admin/manage-tutors/">
          <TutorList dataTutors={dataTutors} />
        </Route>
      </Switch>
    </>
  );
}
