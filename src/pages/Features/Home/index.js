import React, { useState } from "react";
import { Button } from "antd";
import { ClassItem } from "../../../components/modules/Classes";
import Banner from "./Banner";
import PanelInfo from "./PanelInfo";

export default function Home() {
  const data = JSON.parse(localStorage.getItem("classes")) || [];
  const [numberClass, setNumberClass] = useState(6);
  const [dataClasses, setDataClasses] = useState([...data.slice(0, 6)]);
  console.log(numberClass);
  return (
    <>
      <Banner />
      <div className="container">
        <PanelInfo />
        <ul className="class-list row flex mt-30">
          {dataClasses.map((item) => {
            let classItem = "";
            classItem = (
              <ClassItem key={item.id} item={item} dataClasses={dataClasses} />
            );
            return classItem;
          })}
        </ul>
        <div className="num-class my-20 mx-auto flex">
          <Button
            // type="primary"
            onClick={(num) => {
              setNumberClass(numberClass + 3);
              setDataClasses([...data.slice(0, numberClass + 6)]);
            }}
          >
            Read more
          </Button>
        </div>
      </div>
    </>
  );
}
