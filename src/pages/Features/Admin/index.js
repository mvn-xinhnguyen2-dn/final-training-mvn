import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import ManageAccounts from "./ManageAccounts";
import ManageClasses from "./ManageClasses";
import ManageTutors from "./ManageTutors";
import Dashboard from "./Dashboard";
import {
  FaUserCog,
  FaUsers,
  FaRegNewspaper,
  FaRegChartBar,
} from "react-icons/fa";
import { Layout } from "antd";

export default function Admin({ dataClasses, dataTutors, currentUser }) {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: "84.2vh" }}>
        <Sider
          width={300}
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <aside className="sider-nav">
            <h4>ADMIN</h4>
            <ul className="sider-nav-list">
              <li className="sider-nav-item">
                <NavLink activeClassName="active" to="/admin" exact>
                  <span>
                    <FaUserCog />
                  </span>
                  <span className="sider-nav-item-name">Accounts</span>
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
              <li className="sider-nav-item">
                <NavLink activeClassName="active" to="/admin/dashboard" exact>
                  <span>
                    <FaRegChartBar />
                  </span>
                  <span className="sider-nav-item-name">Dashboard</span>
                </NavLink>
              </li>
            </ul>
          </aside>
        </Sider>

        <Switch>
          <Route path="/admin/manage-classes">
            <ManageClasses dataClasses={dataClasses} />
          </Route>
          <Route path="/admin/dashboard">
            <Dashboard dataClasses={dataClasses} dataTutors={dataTutors} />
          </Route>
          <Route path="/admin/manage-tutors">
            <ManageTutors dataTutors={dataTutors} />
          </Route>
          <Route path="/admin/account">
            <ManageAccounts currentUser={currentUser} />
          </Route>
          <Route path="/admin">
            <ManageAccounts currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}
