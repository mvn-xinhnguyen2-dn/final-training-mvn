import React from 'react';
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

export default function Dashboard() {
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
          >
            <p>Dashboard</p>
          </div>
        </Content>
      </Layout>
    </>
  )
}
