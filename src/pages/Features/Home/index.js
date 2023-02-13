import React, { useState } from "react";
import { Button } from "antd";
import { ClassItem } from "../../../components/modules/Classes";
import Banner from "./Banner";
import PanelInfo from "./PanelInfo";

export default function Home({ data }) {
  const [numberClass, setNumberClass] = useState(6);
  const [dataClasses, setDataClasses] = useState([...data.slice(0, 6)]);
  return (
    <>
      <Banner />
      <div className="container">
        <PanelInfo />
        <ul className="class-list row flex mt-30">
          {dataClasses.map((item, index) => {
            let classItem = "";
            classItem = (
              <li className="class-item col-4 pl-30" key={item.id}>
                <ClassItem item={item} />
              </li>
            );
            return classItem;
          })}
        </ul>
        <div className="num-class my-20 mx-auto flex">
          {data.length > 6 && (
            <Button
              type="primary"
              onClick={(num) => {
                setNumberClass(numberClass + 3);
                setDataClasses([...data.slice(0, numberClass + 6)]);
              }}
            >
              Read more
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
