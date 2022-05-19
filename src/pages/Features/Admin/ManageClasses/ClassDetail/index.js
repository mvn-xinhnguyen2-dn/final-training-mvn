import React from 'react';
import { useParams } from "react-router-dom";


export default function ClassDetail(props) {
  const dataClasses = props.dataClasses
  const { id } = useParams();
  const classItem = dataClasses.find((item) => item.id ===id)
  return (
    <>
      <div>ClassDetail {id}</div>
      <p>{classItem.nameParent}</p>
    </>
  )
}
