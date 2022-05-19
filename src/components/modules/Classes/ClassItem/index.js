import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../../store/favSlice";

export default function ClassItem(props) {
  // console.log(props);
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.value);

  const handleFav = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
    console.log(id);
  };
  return (
    <>
      <Link to={`/classes/${props.item.id}`}>
        <p>Class: {props.item.classname}</p>
        <p>Subjects: {props.item.subjects}</p>
        <p>Address: {props.item.street}, {props.item.district} </p>
        <p>Salary: {props.item.salary}</p>
        <p>Time: {props.item.time}</p>
        <p>Number of sessions / week: {props.item.numberOfSessions}</p>
      </Link>
      <span
        className="product-fav"
        onClick={(event) => handleFav(event, props.item.id)}
      >
        <FaHeart
          className={`icon-fav ${
            favs.includes(props.item.id) ? "active" : ""
          }`}
        />
      </span>
    </>
  );
}
