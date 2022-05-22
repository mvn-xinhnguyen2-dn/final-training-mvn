import React from "react";
import { ClassTable } from "../../../../../components/modules/Classes";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function ClassList() {
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <ClassTable />
          </div>
        </Content>
      </Layout>
    </>
  );
}
