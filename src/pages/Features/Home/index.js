import React from "react";
// import ClassList from "../ClassList";
import Banner from "./Banner";
import PanelInfo from "./PanelInfo";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <PanelInfo />
        {/* <ClassList /> */}
      </div>
    </>
  );
}
