import React, { useState } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
// import Dashboard from "./Dashboard";
import ManageAccounts from "./ManageAccounts";
import ManageClasses from "./ManageClasses";
import ManageTutors from "./ManageTutors";
import {
  // FaRegChartBar,
  FaUserCog,
  FaUsers,
  FaRegNewspaper,
} from "react-icons/fa";

import { Layout } from "antd";
const { Sider } = Layout;

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  const classes = JSON.parse(localStorage.getItem("classes")) || [];
  const classList = classes.map((item) => ({ key: item.id, ...item }));
  const dataClasses = classList;

  const tutors = JSON.parse(localStorage.getItem("tutors")) || [];
  const tutorList = tutors.map((item) => ({ key: item.id, ...item }));
  const dataTutors = tutorList;
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          width={300}
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <aside className="sider-nav">
            <h4>
              <Link to="/admin">Admin</Link>
            </h4>
            <ul className="sider-nav-list">
              {/* <li className="sider-nav-item">
                <NavLink activeClassName="active" to="/admin/dashboard" exact>
                  <span>
                    <FaRegChartBar />
                  </span>
                  <span className="sider-nav-item-name">Dashboard</span>
                </NavLink>
              </li> */}
              <li className="sider-nav-item">
                <NavLink activeClassName="active" to="/admin" exact>
                  <span>
                    <FaUserCog />
                  </span>
                  <span className="sider-nav-item-name">Manage Accounts</span>
                </NavLink>
              </li>
              <li className="sider-nav-item">
                <NavLink activeClassName="active" to="/admin/manage-classes">
                  <span>
                    <FaRegNewspaper />
                  </span>
                  <span className="sider-nav-item-name">Manage Classes</span>
                </NavLink>
              </li>
              <li className="sider-nav-item">
                <NavLink activeClassName="active" to="/admin/manage-tutors">
                  <span>
                    <FaUsers />
                  </span>
                  <span className="sider-nav-item-name">Manage Tutors</span>
                </NavLink>
              </li>
            </ul>
          </aside>
        </Sider>

        <Switch>
          {/* <Route path="/admin/dashboard">
            <Dashboard />
          </Route> */}
          <Route path="/admin/manage-classes">
            <ManageClasses dataClasses={dataClasses} />
          </Route>
          <Route path="/admin/manage-tutors">
            <ManageTutors dataTutors={dataTutors} />
          </Route>
          <Route path="/admin/account">
            <ManageAccounts />
          </Route>
          <Route path="/admin">
            <ManageAccounts />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}
