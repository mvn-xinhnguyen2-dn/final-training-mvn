import React from "react";
import { AddClassForm } from "../../../../../components/modules/Forms";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function AddClassPage(props) {
  const dataClasses = props.dataClasses;
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
            <Breadcrumb.Item>Add new class</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3>ADD NEW CLASS</h3>
              <Link to="/admin/manage-classes" className="btn">
                Back
              </Link>
            </div>
            <AddClassForm dataClasses={dataClasses} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
