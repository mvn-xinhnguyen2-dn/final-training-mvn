import React from 'react';
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

export default function ManageAccounts() {
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Manage Accounts</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
          >
            <p>Manage Accounts</p>
          </div>
        </Content>
      </Layout>
    </>
  )
}
