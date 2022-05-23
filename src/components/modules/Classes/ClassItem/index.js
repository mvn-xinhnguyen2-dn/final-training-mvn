import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../../store/favSlice";
import { Tag } from "antd";

export default function ClassItem(props) {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.value);

  const handleFav = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
    console.log(id);
  };
  return (
    <>
      <li className="class-item col-4 pl-30">
        <Link to={`/admin/manage-classes/detail-${props.item.id}`}>
          <p>Class: {props.item.classname}</p>
          <p>
            Address: {props.item.street}, {props.item.district}{" "}
          </p>
          <p>Salary: {props.item.salary}.000 VND</p>
          <p>Time: {props.item.time}</p>
          <p>Number of sessions / week: {props.item.numberOfSessions}</p>
          <p>
            Status:{" "}
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
              favs.includes(props.item.id) ? "active" : ""
            }`}
          />
        </span>
      </li>
    </>
  );
}
