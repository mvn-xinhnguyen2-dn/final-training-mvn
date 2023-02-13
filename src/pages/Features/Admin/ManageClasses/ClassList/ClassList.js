import React from "react";
import { ClassTable } from "../../../../../components/modules/Classes";
import { Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

export default function ClassList({ dataClasses }) {
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="px-30 pt-20">
            <Breadcrumb.Item>
              <Link to="/admin">Admin</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <ClassTable dataClasses1={dataClasses} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
