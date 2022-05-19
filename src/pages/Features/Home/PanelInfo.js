import React from "react";

export default function PanelInfo() {
  return (
    <div className="panel-info">
      <ul className="panel-info-list flex">
        <li className="panel-info-item col-3">
          <div className="panel-info-title">Opening Hours</div>
          <div className="panel-info-text">Monday-Friday: 07:00 - 22:00</div>
        </li>
        <li className="panel-info-item col-3">
          <div className="panel-info-title">Adress</div>
          <div className="panel-info-text">193 Hoai Thanh, DN</div>
        </li>
        <li className="panel-info-item col-3">
          <div className="panel-info-title">Phone</div>
          <div className="panel-info-text">Num: 0376591035 </div>
          <div className="panel-info-text">Email: trucxinhnt99@gmail.com </div>
        </li>
      </ul>
    </div>
  );
}
