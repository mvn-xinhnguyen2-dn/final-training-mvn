import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../../store/favSlice";
import { Tag } from "antd";

export default function ClassItem(props) {
  const dispatch = useDispatch();
  const favsList = JSON.parse(localStorage.getItem("favsList")) || [];
  const favs = useSelector((state) => state.fav.value);
  const handleFav = (e, id) => {
    e.preventDefault();
    const idx = favsList.indexOf(id);
    if (idx !== -1) {
      favsList.splice(idx, 1);
    } else {
      favsList.push(id);
    }
    localStorage.setItem("favsList", JSON.stringify(favsList));
    dispatch(toggle(id));
  };
  return (
    <>
      <Link to={`/admin/manage-classes/${props.item.id}`}>
        <p>
          <b>Class: </b>
          {props.item.classname}
        </p>
        <p>
          <b>Address: </b>
          {props.item.street}, {props.item.district}{" "}
        </p>
        <p>
          <b>Salary: </b>
          {props.item.salary * 1000} VND
        </p>
        <p>
          <b>Time: </b>
          {props.item.time}
        </p>
        <p>
          <b>Number of sessions / week: </b>
          {props.item.numberOfSessions}
        </p>
        <p>
          <b>Status: </b>
          {props.item.status ? (
            <Tag color="green">Available</Tag>
          ) : (
            <Tag color="volcano">Disvailable</Tag>
          )}
        </p>
      </Link>
      <span
        className="product-fav"
        onClick={(event) => handleFav(event, props.item.id)}
      >
        <FaHeart
          className={`icon-fav ${
            favsList.includes(props.item.id) ? "active" : ""
          }`}
        />
      </span>
    </>
  );
}
