import React from "react";
import {
  BsClockFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

export default function PanelInfo() {
  return (
    <div className="panel-info">
      <ul className="panel-info-list flex">
        <li className="panel-info-item flex col-3">
          <BsClockFill />
          <div>
            <div className="panel-info-title">Opening Hours</div>
            <div className="panel-info-text">Monday-Friday: 07:00 - 22:00</div>
          </div>
          <BsClockFill className="info-icon" />
        </li>
        <li className="panel-info-item flex col-3">
          <BsFillGeoAltFill />
          <div>
            <div className="panel-info-title">Address</div>
            <div className="panel-info-text">193 Hoai Thanh, Da Nang</div>
          </div>
          <BsFillGeoAltFill className="info-icon" />
        </li>
        <li className="panel-info-item flex col-3">
          <BsFillTelephoneFill />
          <div>
            <div className="panel-info-title">Phone</div>
            <div className="panel-info-text">Num: 0376591035 </div>
          </div>
          <BsFillTelephoneFill className="info-icon" />
        </li>
      </ul>
    </div>
  );
}
